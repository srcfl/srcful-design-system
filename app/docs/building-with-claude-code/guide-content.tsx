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
    <div className="space-y-8">
      {/* Header with download button */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b">
        <div>
          <h1 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight">
            Building with Claude Code
          </h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl">
            How we built this design system in 2 days. A guide for designers and developers.
          </p>
        </div>
        <Button variant="outline" size="sm" className="shrink-0 mt-2 sm:mt-0" asChild>
          <a href="/BUILDING-WITH-CLAUDE-CODE.md" download>
            <Download className="mr-2 h-4 w-4" />
            Download MD
          </a>
        </Button>
      </div>

      {/* Markdown content */}
      <article className="guide-article">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // Hide the h1 (we have our own header)
            h1: () => null,
            // H2 - Major sections
            h2: ({ children }) => (
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-12 mb-6 pb-2 border-b first:mt-0">
                {children}
              </h2>
            ),
            // H3 - Subsections
            h3: ({ children }) => (
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-10 mb-4">
                {children}
              </h3>
            ),
            // H4 - Minor headings
            h4: ({ children }) => (
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mt-8 mb-3">
                {children}
              </h4>
            ),
            // Paragraphs
            p: ({ children }) => (
              <p className="leading-7 text-foreground/90 mb-4 [&:not(:first-child)]:mt-4">
                {children}
              </p>
            ),
            // Links
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-primary font-medium hover:underline underline-offset-4"
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {children}
              </a>
            ),
            // Inline code
            code: ({ children, className }) => {
              // Check if this is inside a pre (code block) vs inline
              const isInline = !className;
              if (isInline) {
                return (
                  <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground/90">
                    {children}
                  </code>
                );
              }
              return <code className={className}>{children}</code>;
            },
            // Code blocks
            pre: ({ children }) => (
              <pre className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-sourceful-gray-700 p-4 overflow-x-auto my-6 text-sm font-mono">
                {children}
              </pre>
            ),
            // Unordered lists
            ul: ({ children }) => (
              <ul className="my-4 ml-6 list-disc space-y-2 text-foreground/90 [&>li]:pl-2">
                {children}
              </ul>
            ),
            // Ordered lists
            ol: ({ children }) => (
              <ol className="my-4 ml-6 list-decimal space-y-2 text-foreground/90 [&>li]:pl-2">
                {children}
              </ol>
            ),
            // List items
            li: ({ children }) => (
              <li className="leading-7">{children}</li>
            ),
            // Blockquotes (used for example prompts)
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-primary/60 bg-primary/5 dark:bg-primary/10 pl-5 pr-4 py-3 my-6 rounded-r-lg text-foreground/80 italic [&>p]:mb-0 [&>p]:mt-0">
                {children}
              </blockquote>
            ),
            // Tables
            table: ({ children }) => (
              <div className="overflow-x-auto my-8 rounded-lg border border-border">
                <table className="w-full text-sm">{children}</table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-muted/50">{children}</thead>
            ),
            th: ({ children }) => (
              <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-3 border-b border-border last:border-b-0 text-foreground/90">
                {children}
              </td>
            ),
            tr: ({ children }) => (
              <tr className="hover:bg-muted/30 transition-colors">{children}</tr>
            ),
            // Horizontal rules
            hr: () => <hr className="my-10 border-border" />,
            // Strong/bold
            strong: ({ children }) => (
              <strong className="font-semibold text-foreground">{children}</strong>
            ),
            // Emphasis/italic
            em: ({ children }) => (
              <em className="italic">{children}</em>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
