"use client";

import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { ThumbsUp, ExternalLink, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { RoadmapItem, FeedbackCategory, CATEGORY_LABELS } from "@/types/feedback";
import { FeedbackButton } from "@/components/feedback-button";

interface RoadmapContentProps {
  initialItems: RoadmapItem[];
}

const STATUS_CONFIG = {
  "in-progress": {
    label: "In Progress",
    color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  },
  approved: {
    label: "Approved",
    color: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  },
  shipped: {
    label: "Shipped",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
};

export function RoadmapContent({ initialItems }: RoadmapContentProps) {
  const { data: session } = useSession();
  const [items, setItems] = useState(initialItems);
  const [filter, setFilter] = useState<FeedbackCategory | "all">("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [votingItem, setVotingItem] = useState<number | null>(null);

  const filteredItems = items.filter((item) => {
    if (filter !== "all" && item.category !== filter) return false;
    if (statusFilter !== "all" && item.status !== statusFilter) return false;
    return true;
  });

  const handleVote = async (itemNumber: number) => {
    if (!session) {
      signIn("github");
      return;
    }

    setVotingItem(itemNumber);

    try {
      const response = await fetch("/api/roadmap/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ issueNumber: itemNumber }),
      });

      if (!response.ok) {
        throw new Error("Failed to vote");
      }

      const data = await response.json();

      setItems((prev) =>
        prev.map((item) =>
          item.number === itemNumber
            ? { ...item, votes: data.votes }
            : item
        )
      );

      toast.success(data.action === "added" ? "Vote added!" : "Vote removed");
    } catch {
      toast.error("Failed to vote. Please try again.");
    } finally {
      setVotingItem(null);
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">
          No roadmap items yet. Be the first to suggest a feature!
        </p>
        <FeedbackButton variant="inline" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <Select value={filter} onValueChange={(v) => setFilter(v as FeedbackCategory | "all")}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
          </SelectContent>
        </Select>

        <div className="sm:ml-auto">
          <FeedbackButton variant="inline" />
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-center text-muted-foreground py-8">
          No items match your filters.
        </p>
      ) : (
        <div className="space-y-4">
          {filteredItems.map((item) => (
            <Card key={item.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge
                        variant="outline"
                        className={cn(STATUS_CONFIG[item.status].color)}
                      >
                        {STATUS_CONFIG[item.status].label}
                      </Badge>
                      <Badge variant="secondary">
                        {CATEGORY_LABELS[item.category]}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="shrink-0"
                    onClick={() => handleVote(item.number)}
                    disabled={votingItem === item.number}
                  >
                    {votingItem === item.number ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {item.votes}
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    by @{item.author} on{" "}
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-foreground transition-colors"
                  >
                    View on GitHub
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
