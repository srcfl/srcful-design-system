"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ComponentPreview } from "@/components/component-preview";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function FormsPatternPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (value: string) => {
    setEmail(value);
    if (!value) {
      setEmailError("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Form Patterns</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Best practices and patterns for building forms with the Sourceful design system.
        </p>
      </div>

      {/* Basic Form Layout */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Basic Form Layout
        </h2>
        <p className="text-muted-foreground">
          Forms should use consistent spacing and clear labels. Use <code className="bg-muted px-1 py-0.5 rounded text-sm">space-y-4</code> or <code className="bg-muted px-1 py-0.5 rounded text-sm">space-y-6</code> between form groups.
        </p>
        <ComponentPreview
          code={`<form className="space-y-4 max-w-md">
  <div className="space-y-2">
    <Label htmlFor="name">Name</Label>
    <Input id="name" placeholder="Enter your name" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="name@example.com" />
  </div>
  <Button type="submit">Submit</Button>
</form>`}
        >
          <form className="space-y-4 max-w-md w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-basic">Email</Label>
              <Input id="email-basic" type="email" placeholder="name@example.com" />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </ComponentPreview>
      </div>

      {/* Form with Validation */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Validation States
        </h2>
        <p className="text-muted-foreground">
          Show validation errors inline below the input. Use red borders and error text for invalid fields.
        </p>
        <ComponentPreview
          code={`<div className="space-y-2">
  <Label htmlFor="email" className={emailError ? "text-destructive" : ""}>
    Email
  </Label>
  <Input
    id="email"
    type="email"
    value={email}
    onChange={(e) => validateEmail(e.target.value)}
    className={emailError ? "border-destructive" : ""}
    placeholder="name@example.com"
  />
  {emailError && (
    <p className="text-sm text-destructive">{emailError}</p>
  )}
</div>`}
        >
          <div className="space-y-2 max-w-md w-full">
            <Label htmlFor="email-validation" className={emailError ? "text-destructive" : ""}>
              Email
            </Label>
            <Input
              id="email-validation"
              type="email"
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
              className={emailError ? "border-destructive focus-visible:ring-destructive" : ""}
              placeholder="name@example.com"
            />
            {emailError && (
              <p className="text-sm text-destructive">{emailError}</p>
            )}
          </div>
        </ComponentPreview>
      </div>

      {/* Form in Card */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Form in Card
        </h2>
        <p className="text-muted-foreground">
          Wrap forms in Cards for visual separation. Use CardFooter for action buttons.
        </p>
        <ComponentPreview
          code={`<Card className="max-w-md">
  <CardHeader>
    <CardTitle>Device Settings</CardTitle>
    <CardDescription>Configure your device preferences.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="device-name">Device Name</Label>
      <Input id="device-name" defaultValue="Solar Inverter" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="location">Location</Label>
      <Input id="location" placeholder="e.g. Rooftop" />
    </div>
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label htmlFor="notifications">Notifications</Label>
        <p className="text-sm text-muted-foreground">Receive alerts</p>
      </div>
      <Switch id="notifications" />
    </div>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>`}
        >
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle>Device Settings</CardTitle>
              <CardDescription>Configure your device preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="device-name">Device Name</Label>
                <Input id="device-name" defaultValue="Solar Inverter" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g. Rooftop" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive alerts</p>
                </div>
                <Switch id="notifications" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </div>

      {/* Multi-step Forms */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Form with Multiple Input Types
        </h2>
        <p className="text-muted-foreground">
          Complex forms may combine various input types. Group related fields together.
        </p>
        <ComponentPreview
          code={`<form className="space-y-6 max-w-md">
  {/* Text inputs */}
  <div className="space-y-4">
    <h3 className="font-medium">Device Information</h3>
    <div className="space-y-2">
      <Label htmlFor="serial">Serial Number</Label>
      <Input id="serial" placeholder="Enter serial number" />
    </div>
    <div className="space-y-2">
      <Label>Device Type</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="inverter">Inverter</SelectItem>
          <SelectItem value="battery">Battery</SelectItem>
          <SelectItem value="charger">EV Charger</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>

  {/* Radio group */}
  <div className="space-y-4">
    <h3 className="font-medium">Connection Mode</h3>
    <RadioGroup defaultValue="wifi">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="wifi" id="wifi" />
        <Label htmlFor="wifi">WiFi</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="ethernet" id="ethernet" />
        <Label htmlFor="ethernet">Ethernet</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="cellular" id="cellular" />
        <Label htmlFor="cellular">Cellular</Label>
      </div>
    </RadioGroup>
  </div>

  {/* Checkbox and switch */}
  <div className="space-y-4">
    <h3 className="font-medium">Preferences</h3>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">I agree to the terms</Label>
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="auto-update">Auto-update firmware</Label>
      <Switch id="auto-update" defaultChecked />
    </div>
  </div>

  <Button type="submit" className="w-full">Complete Setup</Button>
</form>`}
        >
          <form className="space-y-6 max-w-md w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <h3 className="font-medium">Device Information</h3>
              <div className="space-y-2">
                <Label htmlFor="serial">Serial Number</Label>
                <Input id="serial" placeholder="Enter serial number" />
              </div>
              <div className="space-y-2">
                <Label>Device Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inverter">Inverter</SelectItem>
                    <SelectItem value="battery">Battery</SelectItem>
                    <SelectItem value="charger">EV Charger</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Connection Mode</h3>
              <RadioGroup defaultValue="wifi">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="wifi" id="wifi" />
                  <Label htmlFor="wifi">WiFi</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ethernet" id="ethernet" />
                  <Label htmlFor="ethernet">Ethernet</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cellular" id="cellular" />
                  <Label htmlFor="cellular">Cellular</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Preferences</h3>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms-example" />
                <Label htmlFor="terms-example">I agree to the terms</Label>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-update">Auto-update firmware</Label>
                <Switch id="auto-update" defaultChecked />
              </div>
            </div>

            <Button type="submit" className="w-full">Complete Setup</Button>
          </form>
        </ComponentPreview>
      </div>

      {/* Form Feedback */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Form Feedback
        </h2>
        <p className="text-muted-foreground">
          Provide clear feedback after form submission using Alert components.
        </p>
        <ComponentPreview
          code={`{/* Success state */}
<Alert variant="success">
  <CheckCircle2 className="h-4 w-4" />
  <AlertDescription>
    Your settings have been saved successfully.
  </AlertDescription>
</Alert>

{/* Error state */}
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertDescription>
    There was an error saving your settings. Please try again.
  </AlertDescription>
</Alert>`}
        >
          <div className="space-y-4 max-w-md w-full">
            <Alert variant="success">
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>
                Your settings have been saved successfully.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                There was an error saving your settings. Please try again.
              </AlertDescription>
            </Alert>
          </div>
        </ComponentPreview>
      </div>

      {/* Slider in Forms */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Slider Controls
        </h2>
        <p className="text-muted-foreground">
          Use sliders for numeric ranges. Always show the current value.
        </p>
        <ComponentPreview
          code={`<div className="space-y-6 max-w-md">
  <div className="space-y-4">
    <div className="flex justify-between">
      <Label>Charge Limit</Label>
      <span className="text-sm text-muted-foreground">80%</span>
    </div>
    <Slider defaultValue={[80]} min={50} max={100} step={5} />
    <p className="text-sm text-muted-foreground">
      Limiting to 80% can extend battery life.
    </p>
  </div>
  <div className="space-y-4">
    <div className="flex justify-between">
      <Label>Max Power Output</Label>
      <span className="text-sm text-muted-foreground">7.5 kW</span>
    </div>
    <Slider defaultValue={[75]} min={0} max={100} step={5} />
  </div>
</div>`}
        >
          <div className="space-y-6 max-w-md w-full">
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label>Charge Limit</Label>
                <span className="text-sm text-muted-foreground">80%</span>
              </div>
              <Slider defaultValue={[80]} min={50} max={100} step={5} />
              <p className="text-sm text-muted-foreground">
                Limiting to 80% can extend battery life.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label>Max Power Output</Label>
                <span className="text-sm text-muted-foreground">7.5 kW</span>
              </div>
              <Slider defaultValue={[75]} min={0} max={100} step={5} />
            </div>
          </div>
        </ComponentPreview>
      </div>

      {/* Best Practices */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Best Practices
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Always use Labels with form controls for accessibility</li>
          <li>Show validation errors inline, below the relevant input</li>
          <li>Use helper text to provide context (max characters, format hints)</li>
          <li>Group related fields together with headings</li>
          <li>Place primary action buttons on the right, cancel on the left</li>
          <li>Disable submit buttons during form submission</li>
          <li>Provide clear success/error feedback after submission</li>
          <li>Use appropriate input types (email, tel, number) for better mobile UX</li>
          <li>Consider form field order and tab navigation</li>
          <li>Keep forms as short as possible - only ask for required information</li>
        </ul>
      </div>
    </div>
  );
}
