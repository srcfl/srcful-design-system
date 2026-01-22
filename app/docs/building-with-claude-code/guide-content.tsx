"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GuideContentProps {
  content: string;
}

export function GuideContent({ content }: GuideContentProps) {
  return (
    <div className="space-y-6">
      {/* Header with download button */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Building with Claude Code
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            How we built this design system in 2 days — a guide for designers and developers.
          </p>
        </div>
        <Button variant="outline" size="sm" className="shrink-0" asChild>
          <a href="/BUILDING-WITH-CLAUDE-CODE.md" download>
            <Download className="mr-2 h-4 w-4" />
            Download MD
          </a>
        </Button>
      </div>

      {/* Markdown content */}
      <article className="prose prose-gray dark:prose-invert max-w-none prose-headings:scroll-m-20 prose-h1:hidden prose-h2:border-b prose-h2:pb-2 prose-h2:text-2xl prose-h2:font-semibold prose-h2:tracking-tight prose-h3:text-xl prose-h3:font-semibold prose-h4:text-lg prose-h4:font-semibold prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-sourceful-gray-100 prose-pre:dark:bg-sourceful-gray-800 prose-pre:border prose-pre:border-sourceful-gray-200 prose-pre:dark:border-transparent prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-th:text-left prose-th:font-semibold prose-td:py-2 prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:py-1 prose-blockquote:not-italic">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // Custom table styling
            table: ({ children }) => (
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">{children}</table>
              </div>
            ),
            th: ({ children }) => (
              <th className="border-b border-border px-4 py-2 text-left font-semibold">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="border-b border-border px-4 py-2">{children}</td>
            ),
            // Code blocks
            pre: ({ children }) => (
              <pre className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 overflow-x-auto">
                {children}
              </pre>
            ),
            // Blockquotes (used for example prompts)
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-primary bg-muted/50 pl-4 py-2 my-4 not-italic text-muted-foreground">
                {children}
              </blockquote>
            ),
            // Horizontal rules
            hr: () => <hr className="my-8 border-border" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
