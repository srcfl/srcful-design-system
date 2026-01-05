import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const textareaProps = [
  {
    name: "placeholder",
    type: "string",
    default: "-",
    description: "Placeholder text displayed when empty.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the textarea is disabled.",
  },
  {
    name: "rows",
    type: "number",
    default: "-",
    description: "Number of visible text lines.",
  },
  {
    name: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes.",
  },
];

export default function TextareaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Textarea</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Displays a form textarea for multi-line text input.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import { Textarea } from "@srcful/ui"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview code={`<Textarea placeholder="Type your message here..." />`}>
          <Textarea placeholder="Type your message here..." className="max-w-sm" />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        <h3 className="text-lg font-medium">With Label</h3>
        <ComponentPreview
          code={`<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Enter your message..." />
</div>`}
        >
          <div className="space-y-2 w-full max-w-sm">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Enter your message..." />
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">With Default Value</h3>
        <ComponentPreview
          code={`<Textarea defaultValue="This is some pre-filled content that the user can edit." />`}
        >
          <Textarea
            defaultValue="This is some pre-filled content that the user can edit."
            className="max-w-sm"
          />
        </ComponentPreview>

        <h3 className="text-lg font-medium">Disabled</h3>
        <ComponentPreview code={`<Textarea disabled placeholder="Disabled textarea" />`}>
          <Textarea disabled placeholder="Disabled textarea" className="max-w-sm" />
        </ComponentPreview>

        <h3 className="text-lg font-medium">With Character Limit</h3>
        <ComponentPreview
          code={`<div className="space-y-2">
  <Label htmlFor="bio">Bio</Label>
  <Textarea
    id="bio"
    placeholder="Tell us about yourself..."
    maxLength={200}
  />
  <p className="text-sm text-muted-foreground">Max 200 characters</p>
</div>`}
        >
          <div className="space-y-2 w-full max-w-sm">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself..."
              maxLength={200}
            />
            <p className="text-sm text-muted-foreground">Max 200 characters</p>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">With Helper Text</h3>
        <ComponentPreview
          code={`<div className="space-y-2">
  <Label htmlFor="notes">Device Notes</Label>
  <Textarea
    id="notes"
    placeholder="Add notes about this device..."
    rows={4}
  />
  <p className="text-sm text-muted-foreground">
    Notes are only visible to you.
  </p>
</div>`}
        >
          <div className="space-y-2 w-full max-w-sm">
            <Label htmlFor="notes">Device Notes</Label>
            <Textarea
              id="notes"
              placeholder="Add notes about this device..."
              rows={4}
            />
            <p className="text-sm text-muted-foreground">
              Notes are only visible to you.
            </p>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <PropsTable props={textareaProps} />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Uses native <code className="bg-muted px-1 py-0.5 rounded text-sm">&lt;textarea&gt;</code> element</li>
          <li>Always pair with a Label component for accessibility</li>
          <li>Supports all standard textarea attributes</li>
          <li>Focus ring visible for keyboard users</li>
        </ul>
      </div>
    </div>
  );
}
