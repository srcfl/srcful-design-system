import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { addReaction, removeReaction, getUserReaction } from "@/lib/github";
import { Octokit } from "octokit";

const REPO_OWNER = "srcfl";
const REPO_NAME = "srcful-design-system";

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.name || !session.accessToken) {
      return NextResponse.json(
        { message: "You must be signed in to vote" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { issueNumber } = body;

    if (!issueNumber || typeof issueNumber !== "number") {
      return NextResponse.json(
        { message: "Invalid issue number" },
        { status: 400 }
      );
    }

    const existingReaction = await getUserReaction(
      session.accessToken,
      issueNumber,
      session.user.name
    );

    let action: "added" | "removed";

    if (existingReaction) {
      await removeReaction(session.accessToken, issueNumber, existingReaction.id);
      action = "removed";
    } else {
      await addReaction(session.accessToken, issueNumber);
      action = "added";
    }

    const octokit = new Octokit({ auth: session.accessToken });
    const { data: issue } = await octokit.rest.issues.get({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      issue_number: issueNumber,
    });

    return NextResponse.json({
      success: true,
      action,
      votes: issue.reactions?.["+1"] || 0,
    });
  } catch (error) {
    console.error("Failed to toggle vote:", error);

    return NextResponse.json(
      { message: "Failed to vote. Please try again." },
      { status: 500 }
    );
  }
}
