"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { ComponentPreview } from "@/components/component-preview";
import {
  Inbox,
  Plus,
  Search,
  AlertCircle,
  WifiOff,
  RefreshCw,
  Zap,
  Sun,
  FileQuestion,
} from "lucide-react";
import { PixelGrid } from "@/components/ui/pixel-grid";

export default function StatesPatternPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Empty & Loading States</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Patterns for handling empty data, loading, and error states gracefully.
        </p>
      </div>

      {/* Empty States */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Empty States
        </h2>
        <p className="text-muted-foreground">
          Show helpful messaging when there&apos;s no data to display. Include a clear action.
        </p>
        <ComponentPreview
          code={`<div className="flex flex-col items-center justify-center py-12 text-center">
  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
    <Inbox className="h-6 w-6 text-muted-foreground" />
  </div>
  <h3 className="text-lg font-semibold">No devices yet</h3>
  <p className="text-sm text-muted-foreground mt-1 mb-4 max-w-sm">
    Get started by adding your first device to monitor energy production.
  </p>
  <Button>
    <Plus className="h-4 w-4 mr-2" />
    Add Device
  </Button>
</div>`}
        >
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Inbox className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold">No devices yet</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4 max-w-sm">
                  Get started by adding your first device to monitor energy production.
                </p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Device
                </Button>
              </div>
            </CardContent>
          </Card>
        </ComponentPreview>
      </div>

      {/* Search Empty State */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          No Search Results
        </h2>
        <p className="text-muted-foreground">
          When a search or filter returns no results, provide suggestions.
        </p>
        <ComponentPreview
          code={`<div className="flex flex-col items-center justify-center py-12 text-center">
  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
    <Search className="h-6 w-6 text-muted-foreground" />
  </div>
  <h3 className="text-lg font-semibold">No results found</h3>
  <p className="text-sm text-muted-foreground mt-1 max-w-sm">
    We couldn't find any devices matching "solar panel xyz".
    Try adjusting your search or filters.
  </p>
  <Button variant="outline" className="mt-4">
    Clear filters
  </Button>
</div>`}
        >
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold">No results found</h3>
                <p className="text-sm text-muted-foreground mt-1 max-w-sm">
                  We couldn&apos;t find any devices matching &quot;solar panel xyz&quot;.
                  Try adjusting your search or filters.
                </p>
                <Button variant="outline" className="mt-4">
                  Clear filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </ComponentPreview>
      </div>

      {/* Loading Skeletons */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Loading Skeletons
        </h2>
        <p className="text-muted-foreground">
          Use skeletons that match the shape of the content being loaded.
        </p>
        <ComponentPreview
          code={`{/* Card skeleton */}
<Card>
  <CardHeader className="flex flex-row items-center justify-between pb-2">
    <Skeleton className="h-4 w-[120px]" />
    <Skeleton className="h-4 w-4 rounded-full" />
  </CardHeader>
  <CardContent>
    <Skeleton className="h-8 w-[100px] mb-2" />
    <Skeleton className="h-3 w-[80px]" />
  </CardContent>
</Card>

{/* Table row skeleton */}
<div className="flex items-center space-x-4 p-4">
  <Skeleton className="h-10 w-10 rounded-full" />
  <div className="space-y-2 flex-1">
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-3 w-[150px]" />
  </div>
  <Skeleton className="h-6 w-[60px]" />
</div>`}
        >
          <div className="space-y-4 w-full max-w-md">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <Skeleton className="h-4 w-[120px]" />
                <Skeleton className="h-4 w-4 rounded-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-[100px] mb-2" />
                <Skeleton className="h-3 w-[80px]" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-3 w-[150px]" />
                  </div>
                  <Skeleton className="h-6 w-[60px] rounded-full" />
                </div>
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-[180px]" />
                    <Skeleton className="h-3 w-[120px]" />
                  </div>
                  <Skeleton className="h-6 w-[60px] rounded-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </ComponentPreview>
      </div>

      {/* Loading Animation */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Loading Animation
        </h2>
        <p className="text-muted-foreground">
          Use the branded PixelGrid animation for loading states. Available in multiple sizes and patterns.
        </p>
        <ComponentPreview
          code={`import { PixelGrid } from "@sourceful-energy/ui"

{/* Centered loading */}
<div className="flex flex-col items-center justify-center py-12">
  <PixelGrid pattern="frame" size="md" />
  <p className="text-sm text-muted-foreground mt-4">Loading devices...</p>
</div>

{/* Compact loading */}
<div className="flex items-center gap-3">
  <PixelGrid pattern="corners-sync" size="sm" />
  <span className="text-sm text-muted-foreground">Saving...</span>
</div>

{/* Minimal inline loading */}
<div className="flex items-center gap-2">
  <PixelGrid dimension={4} pattern="cross-spin" size="sm" />
  <span className="text-sm">Processing</span>
</div>`}
        >
          <div className="space-y-6 w-full max-w-md">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center justify-center py-8">
                  <PixelGrid pattern="frame" size="md" />
                  <p className="text-sm text-muted-foreground mt-4">Loading devices...</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <PixelGrid pattern="corners-sync" size="sm" />
                    <span className="text-sm text-muted-foreground">Saving changes...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <PixelGrid dimension={4} pattern="cross-spin" size="sm" />
                    <span className="text-sm text-muted-foreground">Processing data...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <PixelGrid dimension={4} pattern="ripple" size="sm" />
                    <span className="text-sm text-muted-foreground">Syncing...</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ComponentPreview>
      </div>

      {/* Progress Loading */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Progress Indicator
        </h2>
        <p className="text-muted-foreground">
          Use progress bars for operations with known duration.
        </p>
        <ComponentPreview
          code={`<Card>
  <CardContent className="pt-6">
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span>Syncing device data...</span>
        <span className="text-muted-foreground">67%</span>
      </div>
      <Progress value={67} />
      <p className="text-xs text-muted-foreground">
        Estimated time remaining: 2 minutes
      </p>
    </div>
  </CardContent>
</Card>`}
        >
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Syncing device data...</span>
                  <span className="text-muted-foreground">67%</span>
                </div>
                <Progress value={67} />
                <p className="text-xs text-muted-foreground">
                  Estimated time remaining: 2 minutes
                </p>
              </div>
            </CardContent>
          </Card>
        </ComponentPreview>
      </div>

      {/* Error States */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Error States
        </h2>
        <p className="text-muted-foreground">
          Provide clear error messages with recovery actions.
        </p>
        <ComponentPreview
          code={`{/* Inline error */}
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Connection failed</AlertTitle>
  <AlertDescription>
    Unable to connect to the device. Check your network connection and try again.
  </AlertDescription>
</Alert>

{/* Full page error */}
<div className="flex flex-col items-center justify-center py-12 text-center">
  <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
    <WifiOff className="h-6 w-6 text-destructive" />
  </div>
  <h3 className="text-lg font-semibold">Connection lost</h3>
  <p className="text-sm text-muted-foreground mt-1 mb-4 max-w-sm">
    We're having trouble connecting to the server. Please check your internet connection.
  </p>
  <Button>
    <RefreshCw className="h-4 w-4 mr-2" />
    Try again
  </Button>
</div>`}
        >
          <div className="space-y-6 w-full max-w-md">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Connection failed</AlertTitle>
              <AlertDescription>
                Unable to connect to the device. Check your network connection and try again.
              </AlertDescription>
            </Alert>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                    <WifiOff className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-lg font-semibold">Connection lost</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-4 max-w-sm">
                    We&apos;re having trouble connecting to the server.
                  </p>
                  <Button>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Try again
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </ComponentPreview>
      </div>

      {/* Offline State */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Offline / Device Unavailable
        </h2>
        <p className="text-muted-foreground">
          Handle cases where devices or data are temporarily unavailable.
        </p>
        <ComponentPreview
          code={`<Card className="border-dashed">
  <CardContent className="pt-6">
    <div className="flex items-center gap-4 opacity-60">
      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
        <Sun className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="flex-1">
        <p className="font-medium">Solar Inverter</p>
        <p className="text-sm text-muted-foreground">Last seen 2 hours ago</p>
      </div>
      <Badge variant="outline" className="text-muted-foreground">
        Offline
      </Badge>
    </div>
  </CardContent>
</Card>`}
        >
          <Card className="border-dashed w-full max-w-md">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 opacity-60">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <Sun className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Solar Inverter</p>
                  <p className="text-sm text-muted-foreground">Last seen 2 hours ago</p>
                </div>
                <span className="text-sm text-muted-foreground border rounded-full px-2 py-0.5">
                  Offline
                </span>
              </div>
            </CardContent>
          </Card>
        </ComponentPreview>
      </div>

      {/* 404 State */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Not Found (404)
        </h2>
        <p className="text-muted-foreground">
          Friendly message when a resource doesn&apos;t exist.
        </p>
        <ComponentPreview
          code={`<div className="flex flex-col items-center justify-center py-12 text-center">
  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
    <FileQuestion className="h-8 w-8 text-muted-foreground" />
  </div>
  <h3 className="text-2xl font-semibold">Page not found</h3>
  <p className="text-muted-foreground mt-2 mb-6 max-w-md">
    The page you're looking for doesn't exist or has been moved.
  </p>
  <div className="flex gap-2">
    <Button variant="outline">Go back</Button>
    <Button>Go to Dashboard</Button>
  </div>
</div>`}
        >
          <div className="flex flex-col items-center justify-center py-8 text-center w-full">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <FileQuestion className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold">Page not found</h3>
            <p className="text-muted-foreground mt-2 mb-6 max-w-md">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="flex gap-2">
              <Button variant="outline">Go back</Button>
              <Button>Go to Dashboard</Button>
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
          <li>Always provide a clear action in empty states (&quot;Add device&quot;, &quot;Clear filters&quot;)</li>
          <li>Use skeletons that match the shape of real content</li>
          <li>Keep loading messages short and informative</li>
          <li>Show progress indicators for operations over 2 seconds</li>
          <li>Error messages should explain what went wrong AND how to fix it</li>
          <li>Provide &quot;Try again&quot; buttons for recoverable errors</li>
          <li>Use muted/dashed styles for offline or unavailable items</li>
          <li>Don&apos;t show spinners for less than 300ms (use skeleton instead)</li>
          <li>Consider optimistic updates to avoid loading states</li>
          <li>Test your empty states - they&apos;re often the first thing users see</li>
        </ul>
      </div>
    </div>
  );
}
