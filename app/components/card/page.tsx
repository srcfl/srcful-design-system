import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const cardProps = [
  {
    name: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the card container.",
  },
];

export default function CardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Card</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Displays content in a contained box with optional header, content, and footer sections.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@srcful/ui"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview
          code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`}
        >
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        <h3 className="text-lg font-medium">Device Card</h3>
        <ComponentPreview
          code={`<Card>
  <CardHeader>
    <div className="flex items-center justify-between">
      <CardTitle>Solar Inverter</CardTitle>
      <Badge variant="success">Online</Badge>
    </div>
    <CardDescription>SolarEdge SE7600H</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold">5.2 kW</div>
    <p className="text-sm text-muted-foreground">Current output</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">View Details</Button>
  </CardFooter>
</Card>`}
        >
          <Card className="w-full max-w-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Solar Inverter</CardTitle>
                <Badge variant="success">Online</Badge>
              </div>
              <CardDescription>SolarEdge SE7600H</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5.2 kW</div>
              <p className="text-sm text-muted-foreground">Current output</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">View Details</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Simple Card</h3>
        <ComponentPreview
          code={`<Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      You have 3 unread messages.
    </p>
  </CardContent>
</Card>`}
        >
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You have 3 unread messages.
              </p>
            </CardContent>
          </Card>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Stats Card</h3>
        <ComponentPreview
          code={`<Card>
  <CardHeader className="pb-2">
    <CardDescription>Today's Production</CardDescription>
    <CardTitle className="text-3xl">24.5 kWh</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-xs text-muted-foreground">
      +12% from yesterday
    </p>
  </CardContent>
</Card>`}
        >
          <Card className="w-full max-w-sm">
            <CardHeader className="pb-2">
              <CardDescription>Today's Production</CardDescription>
              <CardTitle className="text-3xl">24.5 kWh</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                +12% from yesterday
              </p>
            </CardContent>
          </Card>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Card with Actions</h3>
        <ComponentPreview
          code={`<Card>
  <CardHeader>
    <CardTitle>Settings</CardTitle>
    <CardDescription>Manage your device preferences.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Configure how your device operates and connects to the grid.
    </p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>`}
        >
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Manage your device preferences.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Configure how your device operates and connects to the grid.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <PropsTable props={cardProps} />
        <p className="text-sm text-muted-foreground">
          All Card sub-components (CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
          accept the same className prop for customization.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Cards are semantic containers using div elements</li>
          <li>Use appropriate heading levels in CardTitle</li>
          <li>Ensure sufficient color contrast for text</li>
          <li>Interactive elements within cards should be focusable</li>
        </ul>
      </div>
    </div>
  );
}
