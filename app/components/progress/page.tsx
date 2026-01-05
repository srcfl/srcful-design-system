"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const progressProps = [
  {
    name: "value",
    type: "number",
    default: "0",
    description: "The current progress value (0-100).",
  },
  {
    name: "max",
    type: "number",
    default: "100",
    description: "The maximum value.",
  },
  {
    name: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes.",
  },
];

export default function ProgressPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 10;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Progress</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Displays an indicator showing the completion progress of a task.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import { Progress } from "@srcful/ui"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview code={`<Progress value={33} />`}>
          <Progress value={33} className="w-full max-w-sm" />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        <h3 className="text-lg font-medium">Animated</h3>
        <ComponentPreview
          code={`const [progress, setProgress] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
  }, 1000);
  return () => clearInterval(timer);
}, []);

<Progress value={progress} />`}
        >
          <div className="w-full max-w-sm space-y-2">
            <Progress value={progress} />
            <p className="text-sm text-muted-foreground text-center">{progress}%</p>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">With Label</h3>
        <ComponentPreview
          code={`<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <Label>Charging</Label>
    <span className="text-muted-foreground">67%</span>
  </div>
  <Progress value={67} />
</div>`}
        >
          <div className="space-y-2 w-full max-w-sm">
            <div className="flex justify-between text-sm">
              <Label>Charging</Label>
              <span className="text-muted-foreground">67%</span>
            </div>
            <Progress value={67} />
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Battery Level</h3>
        <ComponentPreview
          code={`<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <Label>Battery</Label>
    <span className="text-muted-foreground">85%</span>
  </div>
  <Progress value={85} className="h-2" />
</div>`}
        >
          <div className="space-y-2 w-full max-w-sm">
            <div className="flex justify-between text-sm">
              <Label>Battery</Label>
              <span className="text-muted-foreground">85%</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Multiple Progress Bars</h3>
        <ComponentPreview
          code={`<div className="space-y-4">
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <Label>Solar</Label>
      <span className="text-muted-foreground">92%</span>
    </div>
    <Progress value={92} />
  </div>
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <Label>Grid</Label>
      <span className="text-muted-foreground">45%</span>
    </div>
    <Progress value={45} />
  </div>
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <Label>Battery</Label>
      <span className="text-muted-foreground">78%</span>
    </div>
    <Progress value={78} />
  </div>
</div>`}
        >
          <div className="space-y-4 w-full max-w-sm">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <Label>Solar</Label>
                <span className="text-muted-foreground">92%</span>
              </div>
              <Progress value={92} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <Label>Grid</Label>
                <span className="text-muted-foreground">45%</span>
              </div>
              <Progress value={45} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <Label>Battery</Label>
                <span className="text-muted-foreground">78%</span>
              </div>
              <Progress value={78} />
            </div>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Upload Progress</h3>
        <ComponentPreview
          code={`<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <Label>Uploading firmware...</Label>
    <span className="text-muted-foreground">2.4 MB / 8 MB</span>
  </div>
  <Progress value={30} />
</div>`}
        >
          <div className="space-y-2 w-full max-w-sm">
            <div className="flex justify-between text-sm">
              <Label>Uploading firmware...</Label>
              <span className="text-muted-foreground">2.4 MB / 8 MB</span>
            </div>
            <Progress value={30} />
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <PropsTable props={progressProps} />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Built on Radix UI Progress for accessibility</li>
          <li>ARIA progressbar role with proper attributes</li>
          <li>Announce progress changes to screen readers</li>
          <li>Pair with visible text labels for context</li>
        </ul>
      </div>
    </div>
  );
}
