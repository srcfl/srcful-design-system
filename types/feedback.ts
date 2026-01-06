export type FeedbackCategory =
  | "component"
  | "token"
  | "brand"
  | "docs"
  | "new-feature";

export type FeedbackPriority =
  | "nice-to-have"
  | "would-help"
  | "blocking-me";

export interface FeedbackFormData {
  category: FeedbackCategory;
  priority: FeedbackPriority;
  title: string;
  description: string;
  currentPage?: string;
}

export interface FeedbackSubmission extends FeedbackFormData {
  submittedBy: string;
  submittedAt: string;
}

export const CATEGORY_LABELS: Record<FeedbackCategory, string> = {
  component: "Component",
  token: "Design Token",
  brand: "Brand",
  docs: "Documentation",
  "new-feature": "New Feature",
};

export const PRIORITY_LABELS: Record<FeedbackPriority, string> = {
  "nice-to-have": "Nice to have",
  "would-help": "Would help my work",
  "blocking-me": "Blocking me",
};

export const CATEGORY_COLORS: Record<FeedbackCategory, string> = {
  component: "1d76db",
  token: "0e8a16",
  brand: "fbca04",
  docs: "d93f0b",
  "new-feature": "c5def5",
};

export const PRIORITY_COLORS: Record<FeedbackPriority, string> = {
  "nice-to-have": "bfd4f2",
  "would-help": "fef2c0",
  "blocking-me": "e99695",
};

export interface RoadmapItem {
  id: number;
  number: number;
  title: string;
  description: string;
  category: FeedbackCategory;
  status: "approved" | "in-progress" | "shipped";
  votes: number;
  createdAt: string;
  updatedAt: string;
  author: string;
  url: string;
}
