"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ComponentPreview } from "@/components/component-preview";
import {
  MoreHorizontal,
  Search,
  ArrowUpDown,
  ChevronDown,
  Download,
  Filter,
} from "lucide-react";

const devices = [
  { id: "1", name: "Solar Inverter", type: "Inverter", status: "online", power: "4.2 kW", location: "Rooftop" },
  { id: "2", name: "Home Battery", type: "Battery", status: "charging", power: "2.1 kW", location: "Garage" },
  { id: "3", name: "EV Charger", type: "Charger", status: "idle", power: "0 kW", location: "Driveway" },
  { id: "4", name: "Heat Pump", type: "HVAC", status: "online", power: "1.8 kW", location: "Basement" },
  { id: "5", name: "Smart Meter", type: "Meter", status: "online", power: "—", location: "Utility Room" },
];

const transactions = [
  { id: "TXN001", date: "2024-01-15", type: "Export", amount: "12.4 kWh", value: "€3.72", status: "completed" },
  { id: "TXN002", date: "2024-01-15", type: "Import", amount: "2.1 kWh", value: "-€0.84", status: "completed" },
  { id: "TXN003", date: "2024-01-14", type: "Export", amount: "18.2 kWh", value: "€5.46", status: "completed" },
  { id: "TXN004", date: "2024-01-14", type: "FCR", amount: "0.5 kW", value: "€2.10", status: "pending" },
];

export default function TablesPatternPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Data Table Patterns</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Patterns for displaying tabular data with sorting, filtering, and actions.
        </p>
      </div>

      {/* Basic Table */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Basic Table
        </h2>
        <p className="text-muted-foreground">
          Simple table for displaying data without complex interactions.
        </p>
        <ComponentPreview
          code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Device</TableHead>
      <TableHead>Type</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Power</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Solar Inverter</TableCell>
      <TableCell>Inverter</TableCell>
      <TableCell><Badge variant="success">Online</Badge></TableCell>
      <TableCell className="text-right">4.2 kW</TableCell>
    </TableRow>
    {/* More rows... */}
  </TableBody>
</Table>`}
        >
          <div className="w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Power</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devices.slice(0, 3).map((device) => (
                  <TableRow key={device.id}>
                    <TableCell className="font-medium">{device.name}</TableCell>
                    <TableCell>{device.type}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          device.status === "online"
                            ? "success"
                            : device.status === "charging"
                            ? "energy"
                            : "secondary"
                        }
                      >
                        {device.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{device.power}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ComponentPreview>
      </div>

      {/* Table with Actions */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Table with Row Actions
        </h2>
        <p className="text-muted-foreground">
          Add dropdown menus for row-level actions like edit, delete, or view details.
        </p>
        <ComponentPreview
          code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Device</TableHead>
      <TableHead>Location</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Power</TableHead>
      <TableHead className="w-[50px]"></TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Solar Inverter</TableCell>
      <TableCell>Rooftop</TableCell>
      <TableCell><Badge variant="success">Online</Badge></TableCell>
      <TableCell className="text-right">4.2 kW</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              Remove
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        >
          <div className="w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Power</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devices.map((device) => (
                  <TableRow key={device.id}>
                    <TableCell className="font-medium">{device.name}</TableCell>
                    <TableCell>{device.location}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          device.status === "online"
                            ? "success"
                            : device.status === "charging"
                            ? "energy"
                            : "secondary"
                        }
                      >
                        {device.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{device.power}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Edit settings</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            Remove device
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ComponentPreview>
      </div>

      {/* Table with Search and Filters */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Table with Toolbar
        </h2>
        <p className="text-muted-foreground">
          Add search, filters, and bulk actions above the table.
        </p>
        <ComponentPreview
          code={`<Card>
  <CardHeader>
    <CardTitle>Devices</CardTitle>
    <CardDescription>Manage your connected devices</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Toolbar */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search devices..." className="pl-8 w-[250px]" />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>
      <Button size="sm">
        <Download className="h-4 w-4 mr-2" />
        Export
      </Button>
    </div>

    {/* Table */}
    <Table>...</Table>
  </CardContent>
</Card>`}
        >
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Devices</CardTitle>
              <CardDescription>Manage your connected devices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search devices..." className="pl-8 w-[250px]" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
                <Button size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Device</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Power</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {devices.slice(0, 3).map((device) => (
                    <TableRow key={device.id}>
                      <TableCell className="font-medium">{device.name}</TableCell>
                      <TableCell>{device.type}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            device.status === "online"
                              ? "success"
                              : device.status === "charging"
                              ? "energy"
                              : "secondary"
                          }
                        >
                          {device.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{device.power}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </ComponentPreview>
      </div>

      {/* Selectable Rows */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Selectable Rows
        </h2>
        <p className="text-muted-foreground">
          Add checkboxes for selecting multiple rows for bulk actions.
        </p>
        <ComponentPreview
          code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[50px]">
        <Checkbox />
      </TableHead>
      <TableHead>Device</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Power</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>
        <Checkbox />
      </TableCell>
      <TableCell className="font-medium">Solar Inverter</TableCell>
      <TableCell><Badge variant="success">Online</Badge></TableCell>
      <TableCell className="text-right">4.2 kW</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        >
          <div className="w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox />
                  </TableHead>
                  <TableHead>Device</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Power</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devices.slice(0, 3).map((device) => (
                  <TableRow key={device.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium">{device.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          device.status === "online"
                            ? "success"
                            : device.status === "charging"
                            ? "energy"
                            : "secondary"
                        }
                      >
                        {device.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{device.power}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ComponentPreview>
      </div>

      {/* Transaction Table */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Transaction History
        </h2>
        <p className="text-muted-foreground">
          Tables for financial or energy transaction data with positive/negative values.
        </p>
        <ComponentPreview
          code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Transaction</TableHead>
      <TableHead>Date</TableHead>
      <TableHead>Type</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead className="text-right">Value</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-mono text-sm">TXN001</TableCell>
      <TableCell>Jan 15, 2024</TableCell>
      <TableCell><Badge variant="outline">Export</Badge></TableCell>
      <TableCell>12.4 kWh</TableCell>
      <TableCell className="text-right text-green-500">€3.72</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-mono text-sm">TXN002</TableCell>
      <TableCell>Jan 15, 2024</TableCell>
      <TableCell><Badge variant="outline">Import</Badge></TableCell>
      <TableCell>2.1 kWh</TableCell>
      <TableCell className="text-right text-red-500">-€0.84</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        >
          <div className="w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="text-right">Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((txn) => (
                  <TableRow key={txn.id}>
                    <TableCell className="font-mono text-sm">{txn.id}</TableCell>
                    <TableCell>{txn.date}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{txn.type}</Badge>
                    </TableCell>
                    <TableCell>{txn.amount}</TableCell>
                    <TableCell
                      className={`text-right ${
                        txn.value.startsWith("-") ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {txn.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ComponentPreview>
      </div>

      {/* Best Practices */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Best Practices
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Right-align numeric columns (power, currency, quantities)</li>
          <li>Use monospace font for IDs, codes, and transaction numbers</li>
          <li>Keep row actions in a dropdown to save space</li>
          <li>Add hover states to rows for better scanability</li>
          <li>Use badges for status columns instead of plain text</li>
          <li>Color-code positive/negative values (green/red)</li>
          <li>Add sorting indicators to sortable columns</li>
          <li>Show loading skeletons while data is fetching</li>
          <li>Include empty states when no data matches filters</li>
          <li>Paginate large datasets (10-25 rows per page)</li>
        </ul>
      </div>
    </div>
  );
}
