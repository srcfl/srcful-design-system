import { Octokit } from "octokit";
import { RoadmapItem, FeedbackCategory } from "@/types/feedback";

const REPO_OWNER = "srcfl";
const REPO_NAME = "srcful-design-system";

const STATUS_LABELS = {
  "status:approved": "approved",
  "status:in-progress": "in-progress",
  "status:shipped": "shipped",
} as const;

const CATEGORY_LABELS = {
  "category:component": "component",
  "category:token": "token",
  "category:brand": "brand",
  "category:docs": "docs",
  "category:new-feature": "new-feature",
} as const;

export async function getRoadmapItems(): Promise<RoadmapItem[]> {
  const octokit = new Octokit();

  const statusLabels = Object.keys(STATUS_LABELS).join(",");

  const { data: issues } = await octokit.rest.issues.listForRepo({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    labels: "feedback",
    state: "open",
    per_page: 100,
    sort: "created",
    direction: "desc",
  });

  const roadmapItems: RoadmapItem[] = [];

  for (const issue of issues) {
    const labels = issue.labels.map((l) =>
      typeof l === "string" ? l : l.name || ""
    );

    const statusLabel = labels.find((l) => l.startsWith("status:"));
    if (!statusLabel || !Object.keys(STATUS_LABELS).includes(statusLabel)) {
      continue;
    }

    const status = STATUS_LABELS[statusLabel as keyof typeof STATUS_LABELS];

    const categoryLabel = labels.find((l) => l.startsWith("category:"));
    const category = categoryLabel
      ? CATEGORY_LABELS[categoryLabel as keyof typeof CATEGORY_LABELS] || "new-feature"
      : "new-feature";

    const votes =
      issue.reactions?.["+1"] || 0;

    roadmapItems.push({
      id: issue.id,
      number: issue.number,
      title: issue.title,
      description: extractDescription(issue.body || ""),
      category: category as FeedbackCategory,
      status,
      votes,
      createdAt: issue.created_at,
      updatedAt: issue.updated_at,
      author: issue.user?.login || "unknown",
      url: issue.html_url,
    });
  }

  return roadmapItems.sort((a, b) => {
    const statusOrder = { "in-progress": 0, approved: 1, shipped: 2 };
    const statusDiff = statusOrder[a.status] - statusOrder[b.status];
    if (statusDiff !== 0) return statusDiff;
    return b.votes - a.votes;
  });
}

function extractDescription(body: string): string {
  const lines = body.split("\n");
  const descriptionStart = lines.findIndex((l) => l.startsWith("---"));
  const descriptionEnd = lines.findIndex(
    (l, i) => i > descriptionStart && l.startsWith("---")
  );

  if (descriptionStart !== -1 && descriptionEnd !== -1) {
    return lines
      .slice(descriptionStart + 1, descriptionEnd)
      .join("\n")
      .trim();
  }

  const maxLength = 200;
  const cleaned = body
    .replace(/## Feedback Submission[\s\S]*?---/g, "")
    .replace(/\*Submitted by.*\*/g, "")
    .trim();

  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.slice(0, maxLength).trim() + "...";
}

export async function getItemVoteCount(issueNumber: number): Promise<number> {
  const octokit = new Octokit();

  const { data: reactions } = await octokit.rest.reactions.listForIssue({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    issue_number: issueNumber,
    content: "+1",
    per_page: 1,
  });

  return reactions.length;
}
