"use client";

import { useState } from "react";
import { SitesMap, type Site } from "@/components/ui/sites-map";
import { EnergyFlow } from "@/components/ui/energy-flow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MapPin, Zap, Battery, ArrowUpRight, ArrowDownRight } from "lucide-react";

const demoSites: Site[] = [
  {
    id: "1",
    name: "Stockholm HQ",
    status: "live",
    coordinates: { lat: 59.3293, lng: 18.0686 },
    currentProduction: 4500,
    address: "Kungsgatan 1, Stockholm",
  },
  {
    id: "2",
    name: "Gothenburg Office",
    status: "live",
    coordinates: { lat: 57.7089, lng: 11.9746 },
    currentProduction: 3200,
    address: "Avenyn 10, Gothenburg",
  },
  {
    id: "3",
    name: "Malmö Site",
    status: "offline",
    coordinates: { lat: 55.6050, lng: 13.0038 },
    currentProduction: 0,
    address: "Stortorget 5, Malmö",
  },
  {
    id: "4",
    name: "Uppsala Campus",
    status: "commissioning",
    coordinates: { lat: 59.8586, lng: 17.6389 },
    currentProduction: 1200,
    address: "Universitetsvägen 1, Uppsala",
  },
];

const siteDetails: Record<string, { solarPower: number; batteryPower: number; gridImport: number; homeConsumption: number; batterySoC: number }> = {
  "1": { solarPower: 4500, batteryPower: -1200, gridImport: 0, homeConsumption: 3300, batterySoC: 82 },
  "2": { solarPower: 3200, batteryPower: 800, gridImport: 0, homeConsumption: 2400, batterySoC: 45 },
  "3": { solarPower: 0, batteryPower: 0, gridImport: 1500, homeConsumption: 1500, batterySoC: 20 },
  "4": { solarPower: 1200, batteryPower: 500, gridImport: 300, homeConsumption: 1000, batterySoC: 60 },
};

export function SitesOverviewExample() {
  const [selectedSiteId, setSelectedSiteId] = useState<string | null>(null);
  const [hoveredSiteId, setHoveredSiteId] = useState<string | null>(null);

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";
  const selectedSite = selectedSiteId ? demoSites.find(s => s.id === selectedSiteId) : null;
  const selectedDetails = selectedSiteId ? siteDetails[selectedSiteId] : null;

  const totalProduction = demoSites.reduce((sum, site) => sum + (site.currentProduction || 0), 0);
  const onlineSites = demoSites.filter(s => s.status === "live").length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4 min-h-[500px] lg:h-[700px]">
      {/* Map */}
      <div className="relative rounded-lg overflow-hidden border bg-card min-h-[300px] lg:min-h-0">
        {mapboxToken ? (
          <SitesMap
            sites={demoSites}
            mapboxToken={mapboxToken}
            onSiteSelect={setSelectedSiteId}
            hoveredSiteId={hoveredSiteId}
            className="h-full min-h-[300px]"
          />
        ) : (
          <div className="h-full min-h-[300px] flex items-center justify-center bg-muted/50">
            <div className="text-center p-8">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Map requires Mapbox token</p>
            </div>
          </div>
        )}
      </div>

      {/* Side Panel */}
      <div className="flex flex-col gap-4 overflow-auto">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                <Zap className="h-4 w-4" />
                Total Production
              </div>
              <div className="text-2xl font-bold">{(totalProduction / 1000).toFixed(1)} kW</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                <MapPin className="h-4 w-4" />
                Sites Online
              </div>
              <div className="text-2xl font-bold">{onlineSites}/{demoSites.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Site List or Energy Flow */}
        {selectedSite && selectedDetails ? (
          <Card className="flex-1">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{selectedSite.name}</CardTitle>
                <Badge variant={selectedSite.status === "live" ? "default" : "secondary"}>
                  {selectedSite.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{selectedSite.address}</p>
            </CardHeader>
            <CardContent className="p-2">
              <EnergyFlow
                solarPower={selectedDetails.solarPower}
                batteryPower={selectedDetails.batteryPower}
                gridImport={selectedDetails.gridImport}
                homeConsumption={selectedDetails.homeConsumption}
                batterySoC={selectedDetails.batterySoC}
                className="h-[350px] border-0"
              />
            </CardContent>
          </Card>
        ) : (
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-lg">Sites</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {demoSites.map((site) => (
                  <div
                    key={site.id}
                    onMouseEnter={() => setHoveredSiteId(site.id)}
                    onMouseLeave={() => setHoveredSiteId(null)}
                    onClick={() => setSelectedSiteId(site.id)}
                    className={cn(
                      "flex items-center justify-between p-4 cursor-pointer transition-colors",
                      hoveredSiteId === site.id ? "bg-primary/5" : "hover:bg-muted/50"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            site.status === "live" ? "#10b981" :
                            site.status === "offline" ? "#ef4444" : "#f59e0b",
                        }}
                      />
                      <div>
                        <p className="font-medium text-sm">{site.name}</p>
                        <p className="text-xs text-muted-foreground">{site.address}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">
                        {((site.currentProduction || 0) / 1000).toFixed(1)} kW
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        {site.status === "live" ? (
                          <>
                            <ArrowUpRight className="h-3 w-3 text-green-500" />
                            Active
                          </>
                        ) : (
                          <>
                            <ArrowDownRight className="h-3 w-3 text-red-500" />
                            {site.status}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
