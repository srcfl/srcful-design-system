"use client";

import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { Loader2, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FeedbackCategory,
  FeedbackPriority,
  CATEGORY_LABELS,
  PRIORITY_LABELS,
} from "@/types/feedback";

interface FeedbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FeedbackDialog({ open, onOpenChange }: FeedbackDialogProps) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [category, setCategory] = useState<FeedbackCategory>("component");
  const [priority, setPriority] = useState<FeedbackPriority>("would-help");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const resetForm = () => {
    setCategory("component");
    setPriority("would-help");
    setTitle("");
    setDescription("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          priority,
          title: title.trim(),
          description: description.trim(),
          currentPage: pathname,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to submit feedback");
      }

      const data = await response.json();

      toast.success("Feedback submitted!", {
        description: "Thank you for helping improve the design system.",
        action: {
          label: "View Issue",
          onClick: () => window.open(data.url, "_blank"),
        },
      });

      resetForm();
      onOpenChange(false);
    } catch (error) {
      toast.error("Failed to submit feedback", {
        description: error instanceof Error ? error.message : "Please try again",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "loading") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!session) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sign in to give feedback</DialogTitle>
            <DialogDescription>
              Connect your GitHub account to submit feedback and feature requests.
              Your feedback will be created as a GitHub issue.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <Button
              onClick={() => signIn("github")}
              className="w-full"
              size="lg"
            >
              <Github className="mr-2 h-5 w-5" />
              Sign in with GitHub
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              We only request permission to create issues on your behalf.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Submit Feedback</DialogTitle>
            <DialogDescription>
              Help us improve the design system. Your feedback will be created as a
              GitHub issue for tracking.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={category}
                onValueChange={(value) => setCategory(value as FeedbackCategory)}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label>Priority</Label>
              <RadioGroup
                value={priority}
                onValueChange={(value) => setPriority(value as FeedbackPriority)}
                className="flex flex-col gap-2"
              >
                {Object.entries(PRIORITY_LABELS).map(([value, label]) => (
                  <div key={value} className="flex items-center space-x-2">
                    <RadioGroupItem value={value} id={value} />
                    <Label htmlFor={value} className="font-normal cursor-pointer">
                      {label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Brief summary of your feedback"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your feedback, feature request, or issue in detail..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                required
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Feedback"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
