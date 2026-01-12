"use client";

import * as React from "react";
import {
  SimpleTabsRoot,
  SimpleTabsList,
  SimpleTabsTrigger,
  SimpleTabsContent,
} from "@/components/ui/simple-tabs";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
  className?: string;
}

export function ComponentPreview({
  children,
  code,
  className,
}: ComponentPreviewProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("relative my-4 rounded-lg border", className)}>
      <SimpleTabsRoot defaultTab="preview" className="space-y-0">
        <div className="flex items-center justify-between px-4">
          <SimpleTabsList className="gap-0">
            <SimpleTabsTrigger value="preview">Preview</SimpleTabsTrigger>
            <SimpleTabsTrigger value="code">Code</SimpleTabsTrigger>
          </SimpleTabsList>
          <button
            onClick={copyToClipboard}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <SimpleTabsContent value="preview" className="p-6">
          <div className="flex items-center justify-center min-h-[100px]">
            {children}
          </div>
        </SimpleTabsContent>
        <SimpleTabsContent value="code" className="p-0">
          <div className="rounded-b-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 p-4 overflow-x-auto">
            <pre className="text-sm text-sourceful-gray-900 dark:text-white">
              <code>{code}</code>
            </pre>
          </div>
        </SimpleTabsContent>
      </SimpleTabsRoot>
    </div>
  );
}
