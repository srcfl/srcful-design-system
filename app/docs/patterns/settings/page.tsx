"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComponentPreview } from "@/components/component-preview";
import { Bell, Shield, Zap, User, CreditCard, Globe } from "lucide-react";

export default function SettingsPatternPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Settings Patterns</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Patterns for building settings pages and preference panels.
        </p>
      </div>

      {/* Settings Section */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Settings Section
        </h2>
        <p className="text-muted-foreground">
          Group related settings together with a heading and description.
        </p>
        <ComponentPreview
          code={`<div className="space-y-6">
  <div>
    <h3 className="text-lg font-medium">Notifications</h3>
    <p className="text-sm text-muted-foreground">
      Configure how you receive notifications.
    </p>
  </div>
  <Separator />
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label>Email notifications</Label>
        <p className="text-sm text-muted-foreground">
          Receive email alerts for important events
        </p>
      </div>
      <Switch defaultChecked />
    </div>
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label>Push notifications</Label>
        <p className="text-sm text-muted-foreground">
          Receive push notifications on your devices
        </p>
      </div>
      <Switch />
    </div>
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label>SMS alerts</Label>
        <p className="text-sm text-muted-foreground">
          Receive critical alerts via SMS
        </p>
      </div>
      <Switch />
    </div>
  </div>
</div>`}
        >
          <div className="space-y-6 max-w-lg w-full">
            <div>
              <h3 className="text-lg font-medium">Notifications</h3>
              <p className="text-sm text-muted-foreground">
                Configure how you receive notifications.
              </p>
            </div>
            <Separator />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email alerts for important events
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications on your devices
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SMS alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive critical alerts via SMS
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </ComponentPreview>
      </div>

      {/* Settings Card */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Settings Card
        </h2>
        <p className="text-muted-foreground">
          Use cards for self-contained settings groups with save actions.
        </p>
        <ComponentPreview
          code={`<Card>
  <CardHeader>
    <CardTitle>Profile</CardTitle>
    <CardDescription>
      Update your personal information.
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" defaultValue="John Doe" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" defaultValue="john@example.com" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="timezone">Timezone</Label>
      <Select defaultValue="europe-stockholm">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="europe-stockholm">Europe/Stockholm</SelectItem>
          <SelectItem value="europe-london">Europe/London</SelectItem>
          <SelectItem value="america-newyork">America/New_York</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </CardContent>
  <CardFooter className="border-t pt-6">
    <Button>Save changes</Button>
  </CardFooter>
</Card>`}
        >
          <Card className="max-w-lg w-full">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>
                Update your personal information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="europe-stockholm">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="europe-stockholm">Europe/Stockholm</SelectItem>
                    <SelectItem value="europe-london">Europe/London</SelectItem>
                    <SelectItem value="america-newyork">America/New_York</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6">
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </div>

      {/* Tabbed Settings */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Tabbed Settings
        </h2>
        <p className="text-muted-foreground">
          Use tabs to organize multiple settings categories.
        </p>
        <ComponentPreview
          code={`<Tabs defaultValue="general" className="w-full">
  <TabsList>
    <TabsTrigger value="general">General</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
    <TabsTrigger value="security">Security</TabsTrigger>
  </TabsList>
  <TabsContent value="general" className="space-y-4 mt-4">
    <Card>
      <CardHeader>
        <CardTitle>General Settings</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Settings content */}
      </CardContent>
    </Card>
  </TabsContent>
  {/* More tab contents... */}
</Tabs>`}
        >
          <Tabs defaultValue="general" className="w-full max-w-2xl">
            <TabsList>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Manage your account settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Display name</Label>
                    <Input defaultValue="John's Home" />
                  </div>
                  <div className="space-y-2">
                    <Label>Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="sv">Svenska</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose what you want to be notified about</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Production alerts</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Low battery warnings</Label>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="security" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your security preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Two-factor authentication</Label>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </div>

      {/* Sidebar Navigation Settings */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Settings with Sidebar
        </h2>
        <p className="text-muted-foreground">
          For complex settings pages, use a sidebar navigation pattern.
        </p>
        <ComponentPreview
          code={`<div className="flex gap-6">
  {/* Sidebar */}
  <nav className="w-48 space-y-1">
    <Button variant="ghost" className="w-full justify-start">
      <User className="mr-2 h-4 w-4" /> Profile
    </Button>
    <Button variant="secondary" className="w-full justify-start">
      <Bell className="mr-2 h-4 w-4" /> Notifications
    </Button>
    <Button variant="ghost" className="w-full justify-start">
      <Shield className="mr-2 h-4 w-4" /> Security
    </Button>
    <Button variant="ghost" className="w-full justify-start">
      <CreditCard className="mr-2 h-4 w-4" /> Billing
    </Button>
  </nav>

  {/* Content */}
  <div className="flex-1">
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Settings content */}
      </CardContent>
    </Card>
  </div>
</div>`}
        >
          <div className="flex gap-6 w-full">
            <nav className="w-48 space-y-1 shrink-0">
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" /> Profile
              </Button>
              <Button variant="secondary" className="w-full justify-start">
                <Bell className="mr-2 h-4 w-4" /> Notifications
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Shield className="mr-2 h-4 w-4" /> Security
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <CreditCard className="mr-2 h-4 w-4" /> Billing
              </Button>
            </nav>
            <div className="flex-1">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Configure your notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email digest</Label>
                      <p className="text-sm text-muted-foreground">Daily summary of activity</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Push notifications</Label>
                      <p className="text-sm text-muted-foreground">Real-time alerts</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ComponentPreview>
      </div>

      {/* Danger Zone */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Danger Zone
        </h2>
        <p className="text-muted-foreground">
          Destructive actions should be visually distinct and require confirmation.
        </p>
        <ComponentPreview
          code={`<Card className="border-destructive/50">
  <CardHeader>
    <CardTitle className="text-destructive">Danger Zone</CardTitle>
    <CardDescription>
      Irreversible and destructive actions
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="flex items-center justify-between p-4 rounded-lg border border-destructive/20 bg-destructive/5">
      <div>
        <p className="font-medium">Delete this device</p>
        <p className="text-sm text-muted-foreground">
          Permanently remove this device and all its data
        </p>
      </div>
      <Button variant="destructive">Delete</Button>
    </div>
    <div className="flex items-center justify-between p-4 rounded-lg border border-destructive/20 bg-destructive/5">
      <div>
        <p className="font-medium">Delete account</p>
        <p className="text-sm text-muted-foreground">
          Permanently delete your account and all data
        </p>
      </div>
      <Button variant="destructive">Delete account</Button>
    </div>
  </CardContent>
</Card>`}
        >
          <Card className="border-destructive/50 max-w-lg w-full">
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
              <CardDescription>
                Irreversible and destructive actions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-destructive/20 bg-destructive/5">
                <div>
                  <p className="font-medium">Delete this device</p>
                  <p className="text-sm text-muted-foreground">
                    Permanently remove this device and all its data
                  </p>
                </div>
                <Button variant="destructive" size="sm">Delete</Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-destructive/20 bg-destructive/5">
                <div>
                  <p className="font-medium">Delete account</p>
                  <p className="text-sm text-muted-foreground">
                    Permanently delete your account and all data
                  </p>
                </div>
                <Button variant="destructive" size="sm">Delete account</Button>
              </div>
            </CardContent>
          </Card>
        </ComponentPreview>
      </div>

      {/* Best Practices */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Best Practices
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Group related settings together with clear headings</li>
          <li>Use switches for on/off toggles, selects for multiple options</li>
          <li>Provide helper text to explain what each setting does</li>
          <li>Auto-save when possible, or show clear save buttons</li>
          <li>Place destructive actions at the bottom in a &quot;Danger Zone&quot;</li>
          <li>Require confirmation for irreversible actions</li>
          <li>Show success feedback when settings are saved</li>
          <li>Use tabs or sidebar nav for pages with many settings categories</li>
          <li>Disable form elements while saving to prevent double-submission</li>
          <li>Pre-populate fields with current values</li>
        </ul>
      </div>
    </div>
  );
}
