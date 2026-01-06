import { Octokit } from "octokit";
import {
  FeedbackFormData,
  CATEGORY_COLORS,
  PRIORITY_COLORS,
} from "@/types/feedback";

const REPO_OWNER = "srcfl";
const REPO_NAME = "srcful-design-system";

export function createOctokit(accessToken: string) {
  return new Octokit({ auth: accessToken });
}

export async function createFeedbackIssue(
  accessToken: string,
  feedback: FeedbackFormData,
  username: string
) {
  const octokit = createOctokit(accessToken);

  const labels = [
    "feedback",
    `category:${feedback.category}`,
    `priority:${feedback.priority}`,
  ];

  const body = buildIssueBody(feedback, username);

  const response = await octokit.rest.issues.create({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    title: feedback.title,
    body,
    labels,
  });

  return response.data;
}

function buildIssueBody(feedback: FeedbackFormData, username: string): string {
  const categoryLabel = getCategoryLabel(feedback.category);
  const priorityLabel = getPriorityLabel(feedback.priority);

  return `## Feedback Submission

**Category:** ${categoryLabel}
**Priority:** ${priorityLabel}
${feedback.currentPage ? `**Page:** ${feedback.currentPage}` : ""}

---

${feedback.description}

---

*Submitted by @${username} via the design system feedback form*
`;
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    component: "Component",
    token: "Design Token",
    brand: "Brand",
    docs: "Documentation",
    "new-feature": "New Feature",
  };
  return labels[category] || category;
}

function getPriorityLabel(priority: string): string {
  const labels: Record<string, string> = {
    "nice-to-have": "Nice to have",
    "would-help": "Would help my work",
    "blocking-me": "Blocking me",
  };
  return labels[priority] || priority;
}

export async function addReaction(
  accessToken: string,
  issueNumber: number,
  reaction: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes" = "+1"
) {
  const octokit = createOctokit(accessToken);

  const response = await octokit.rest.reactions.createForIssue({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    issue_number: issueNumber,
    content: reaction,
  });

  return response.data;
}

export async function removeReaction(
  accessToken: string,
  issueNumber: number,
  reactionId: number
) {
  const octokit = createOctokit(accessToken);

  await octokit.rest.reactions.deleteForIssue({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    issue_number: issueNumber,
    reaction_id: reactionId,
  });
}

export async function getUserReaction(
  accessToken: string,
  issueNumber: number,
  username: string
) {
  const octokit = createOctokit(accessToken);

  const reactions = await octokit.rest.reactions.listForIssue({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    issue_number: issueNumber,
    content: "+1",
  });

  return reactions.data.find((r) => r.user?.login === username);
}

export { REPO_OWNER, REPO_NAME };
