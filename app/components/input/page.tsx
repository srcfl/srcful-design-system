import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Search, Mail } from "lucide-react";

const inputProps = [
  {
    name: "type",
    type: "string",
    default: '"text"',
    description: "The type of input (text, email, password, etc.).",
  },
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
    description: "Whether the input is disabled.",
  },
  {
    name: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes.",
  },
];

export default function InputPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Input</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Displays a form input field for user text entry.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import { Input } from "@srcful/ui"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview code={`<Input placeholder="Enter text..." />`}>
          <Input placeholder="Enter text..." className="max-w-sm" />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        <h3 className="text-lg font-medium">With Label</h3>
        <ComponentPreview
          code={`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="name@example.com" />
</div>`}
        >
          <div className="space-y-2 w-full max-w-sm">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Password</h3>
        <ComponentPreview
          code={`<Input type="password" placeholder="Enter password" />`}
        >
          <Input type="password" placeholder="Enter password" className="max-w-sm" />
        </ComponentPreview>

        <h3 className="text-lg font-medium">With Icon</h3>
        <ComponentPreview
          code={`<div className="relative">
  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  <Input placeholder="Search..." className="pl-9" />
</div>`}
        >
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-9" />
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Disabled</h3>
        <ComponentPreview code={`<Input disabled placeholder="Disabled input" />`}>
          <Input disabled placeholder="Disabled input" className="max-w-sm" />
        </ComponentPreview>

        <h3 className="text-lg font-medium">File Input</h3>
        <ComponentPreview code={`<Input type="file" />`}>
          <Input type="file" className="max-w-sm" />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <PropsTable props={inputProps} />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Uses native <code className="bg-muted px-1 py-0.5 rounded text-sm">&lt;input&gt;</code> element</li>
          <li>Always pair with a Label component for accessibility</li>
          <li>Supports all standard input attributes</li>
          <li>Focus ring visible for keyboard users</li>
        </ul>
      </div>
    </div>
  );
}
