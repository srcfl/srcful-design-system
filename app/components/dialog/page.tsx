"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const dialogProps = [
  {
    name: "open",
    type: "boolean",
    default: "-",
    description: "The controlled open state of the dialog.",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "The default open state when uncontrolled.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    default: "-",
    description: "Callback when the open state changes.",
  },
];

export default function DialogPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Dialog</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A modal dialog that interrupts the user with important content and expects a response.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@srcful/ui"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is the dialog description.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is the dialog description.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        <h3 className="text-lg font-medium">Add Device</h3>
        <ComponentPreview
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Add Device</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Add New Device</DialogTitle>
      <DialogDescription>
        Enter the details of your energy device.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="name">Device Name</Label>
        <Input id="name" placeholder="e.g. Solar Inverter" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="serial">Serial Number</Label>
        <Input id="serial" placeholder="Enter serial number" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Add Device</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Device</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Device</DialogTitle>
                <DialogDescription>
                  Enter the details of your energy device.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Device Name</Label>
                  <Input id="name" placeholder="e.g. Solar Inverter" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="serial">Serial Number</Label>
                  <Input id="serial" placeholder="Enter serial number" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Add Device</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Confirmation Dialog</h3>
        <ComponentPreview
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete Device</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your
        device and remove all associated data.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete Device</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your
                  device and remove all associated data.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Settings Dialog</h3>
        <ComponentPreview
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Settings</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Device Settings</DialogTitle>
      <DialogDescription>
        Configure your device preferences.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="max-power">Max Power Output (kW)</Label>
        <Input id="max-power" type="number" defaultValue="10" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="timezone">Timezone</Label>
        <Input id="timezone" defaultValue="Europe/Stockholm" />
      </div>
    </div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Save Changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Settings</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Device Settings</DialogTitle>
                <DialogDescription>
                  Configure your device preferences.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="max-power">Max Power Output (kW)</Label>
                  <Input id="max-power" type="number" defaultValue="10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Input id="timezone" defaultValue="Europe/Stockholm" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <PropsTable props={dialogProps} />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Built on Radix UI Dialog for full accessibility</li>
          <li>Focus is trapped within the dialog</li>
          <li>Escape key closes the dialog</li>
          <li>Background scroll is locked when open</li>
          <li>Announces content to screen readers</li>
        </ul>
      </div>
    </div>
  );
}
