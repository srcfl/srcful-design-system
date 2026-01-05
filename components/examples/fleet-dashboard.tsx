"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, MoreHorizontal, Filter, Download, Plus, CheckCircle, XCircle, AlertCircle, Clock } from "lucide-react";

interface Device {
  id: string;
  name: string;
  type: "inverter" | "battery" | "meter" | "ev_charger";
  site: string;
  status: "online" | "offline" | "warning" | "commissioning";
  lastSeen: string;
  firmware: string;
  power: number;
}

const devices: Device[] = [
  { id: "INV-001", name: "Solar Inverter 1", type: "inverter", site: "Stockholm HQ", status: "online", lastSeen: "Just now", firmware: "v2.4.1", power: 4500 },
  { id: "INV-002", name: "Solar Inverter 2", type: "inverter", site: "Stockholm HQ", status: "online", lastSeen: "Just now", firmware: "v2.4.1", power: 3800 },
  { id: "BAT-001", name: "Home Battery", type: "battery", site: "Stockholm HQ", status: "online", lastSeen: "Just now", firmware: "v1.8.3", power: -1200 },
  { id: "MTR-001", name: "Grid Meter", type: "meter", site: "Stockholm HQ", status: "online", lastSeen: "Just now", firmware: "v3.1.0", power: 2100 },
  { id: "INV-003", name: "Solar Inverter 1", type: "inverter", site: "Gothenburg Office", status: "online", lastSeen: "2 min ago", firmware: "v2.4.0", power: 3200 },
  { id: "BAT-002", name: "Storage Unit", type: "battery", site: "Gothenburg Office", status: "warning", lastSeen: "5 min ago", firmware: "v1.8.2", power: 0 },
  { id: "EVC-001", name: "EV Charger A", type: "ev_charger", site: "Gothenburg Office", status: "online", lastSeen: "Just now", firmware: "v4.0.2", power: 7400 },
  { id: "INV-004", name: "Rooftop Inverter", type: "inverter", site: "Malmö Site", status: "offline", lastSeen: "2 hours ago", firmware: "v2.3.8", power: 0 },
  { id: "MTR-002", name: "Smart Meter", type: "meter", site: "Malmö Site", status: "offline", lastSeen: "2 hours ago", firmware: "v3.0.5", power: 0 },
  { id: "INV-005", name: "Test Inverter", type: "inverter", site: "Uppsala Campus", status: "commissioning", lastSeen: "10 min ago", firmware: "v2.4.1", power: 1200 },
];

const statusConfig = {
  online: { label: "Online", icon: CheckCircle, color: "text-green-500", bg: "bg-green-500/10" },
  offline: { label: "Offline", icon: XCircle, color: "text-red-500", bg: "bg-red-500/10" },
  warning: { label: "Warning", icon: AlertCircle, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  commissioning: { label: "Setup", icon: Clock, color: "text-blue-500", bg: "bg-blue-500/10" },
};

const typeLabels = {
  inverter: "Inverter",
  battery: "Battery",
  meter: "Meter",
  ev_charger: "EV Charger",
};

export function FleetDashboardExample() {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const filteredDevices = devices.filter(
    (device) =>
      device.name.toLowerCase().includes(search.toLowerCase()) ||
      device.site.toLowerCase().includes(search.toLowerCase()) ||
      device.id.toLowerCase().includes(search.toLowerCase())
  );

  const stats = {
    total: devices.length,
    online: devices.filter((d) => d.status === "online").length,
    offline: devices.filter((d) => d.status === "offline").length,
    warning: devices.filter((d) => d.status === "warning").length,
  };

  const toggleRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-sm text-muted-foreground">Total Devices</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-500">{stats.online}</div>
            <p className="text-sm text-muted-foreground">Online</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-500">{stats.offline}</div>
            <p className="text-sm text-muted-foreground">Offline</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-500">{stats.warning}</div>
            <p className="text-sm text-muted-foreground">Warnings</p>
          </CardContent>
        </Card>
      </div>

      {/* Table Card */}
      <Card className="overflow-hidden">
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle>Device Fleet</CardTitle>
              <CardDescription>Manage and monitor all connected devices</CardDescription>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative flex-1 min-w-[150px] sm:flex-none">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-8 w-full sm:w-[200px]"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              <Button size="sm" className="sm:size-default">
                <Plus className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Add Device</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 sm:p-6 sm:pt-0">
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedRows.length === filteredDevices.length}
                      onChange={() =>
                        setSelectedRows(
                          selectedRows.length === filteredDevices.length
                            ? []
                            : filteredDevices.map((d) => d.id)
                        )
                      }
                    />
                  </TableHead>
                  <TableHead>Device</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Site</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Power</TableHead>
                  <TableHead>Last Seen</TableHead>
                  <TableHead>Firmware</TableHead>
                  <TableHead className="w-[40px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDevices.map((device) => {
                  const status = statusConfig[device.status];
                  const StatusIcon = status.icon;

                  return (
                    <TableRow key={device.id}>
                      <TableCell>
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                          checked={selectedRows.includes(device.id)}
                          onChange={() => toggleRow(device.id)}
                        />
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{device.name}</div>
                          <div className="text-xs text-muted-foreground">{device.id}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{typeLabels[device.type]}</Badge>
                      </TableCell>
                      <TableCell>{device.site}</TableCell>
                      <TableCell>
                        <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}>
                          <StatusIcon className="h-3 w-3" />
                          {status.label}
                        </div>
                      </TableCell>
                      <TableCell>
                        {device.power !== 0 ? (
                          <span className={device.power > 0 ? "text-green-500" : "text-yellow-500"}>
                            {device.power > 0 ? "+" : ""}{(device.power / 1000).toFixed(1)} kW
                          </span>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell className="text-muted-foreground">{device.lastSeen}</TableCell>
                      <TableCell>
                        <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{device.firmware}</code>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Edit settings</DropdownMenuItem>
                            <DropdownMenuItem>Update firmware</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500">Remove device</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          {selectedRows.length > 0 && (
            <div className="flex items-center justify-between mt-4 p-3 bg-muted rounded-lg">
              <span className="text-sm">{selectedRows.length} device(s) selected</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Update Firmware</Button>
                <Button variant="outline" size="sm">Export</Button>
                <Button variant="destructive" size="sm">Remove</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
