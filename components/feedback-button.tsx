"use client";

import { useState } from "react";
import { MessageSquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeedbackDialog } from "@/components/feedback-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FeedbackButtonProps {
  variant?: "floating" | "inline" | "ghost";
}

export function FeedbackButton({ variant = "ghost" }: FeedbackButtonProps) {
  const [open, setOpen] = useState(false);

  if (variant === "floating") {
    return (
      <>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => setOpen(true)}
                size="icon"
                className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full shadow-lg hidden md:flex"
              >
                <MessageSquarePlus className="h-5 w-5" />
                <span className="sr-only">Give Feedback</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Give Feedback</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <FeedbackDialog open={open} onOpenChange={setOpen} />
      </>
    );
  }

  if (variant === "inline") {
    return (
      <>
        <Button onClick={() => setOpen(true)} variant="outline" size="sm">
          <MessageSquarePlus className="mr-2 h-4 w-4" />
          Feedback
        </Button>
        <FeedbackDialog open={open} onOpenChange={setOpen} />
      </>
    );
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        size="icon"
        className="h-9 w-9"
      >
        <MessageSquarePlus className="h-4 w-4" />
        <span className="sr-only">Give Feedback</span>
      </Button>
      <FeedbackDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
