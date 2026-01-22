import fs from "fs";
import path from "path";
import { GuideContent } from "./guide-content";

export const metadata = {
  title: "Building with Claude Code | Sourceful Design System",
  description:
    "How we built the Sourceful Design System in 2 days using Claude Code, and how you can replicate this workflow.",
};

function getGuideContent(): string {
  const guidePath = path.join(process.cwd(), "docs/BUILDING-WITH-CLAUDE-CODE.md");
  return fs.readFileSync(guidePath, "utf8");
}

export default function BuildingWithClaudeCodePage() {
  const content = getGuideContent();

  return <GuideContent content={content} />;
}
