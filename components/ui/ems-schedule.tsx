"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export type ScheduleMode = "idle" | "self-consumption" | "charging" | "exporting" | "discharging";

export interface ScheduleSlot {
  hour: number;
  mode: ScheduleMode;
}

export interface EMSScheduleProps {
  slots: ScheduleSlot[];
  currentHour?: number;
  className?: string;
  showLegend?: boolean;
  title?: string;
}

const modeConfig: Record<ScheduleMode, { label: string; color: string; bgColor: string }> = {
  idle: {
    label: "Idle",
    color: "bg-sourceful-gray-200 dark:bg-sourceful-gray-700",
    bgColor: "bg-sourceful-gray-200 dark:bg-sourceful-gray-700",
  },
  "self-consumption": {
    label: "Self-Consumption",
    color: "bg-sourceful-green-200 dark:bg-sourceful-green-800",
    bgColor: "bg-sourceful-green-200 dark:bg-sourceful-green-800",
  },
  charging: {
    label: "Charging",
    color: "bg-pink-200 dark:bg-pink-800",
    bgColor: "bg-pink-200 dark:bg-pink-800",
  },
  exporting: {
    label: "Exporting",
    color: "bg-blue-200 dark:bg-blue-800",
    bgColor: "bg-blue-200 dark:bg-blue-800",
  },
  discharging: {
    label: "Discharging",
    color: "bg-orange-200 dark:bg-orange-800",
    bgColor: "bg-orange-200 dark:bg-orange-800",
  },
};

export function EMSSchedule({
  slots,
  currentHour,
  className,
  showLegend = true,
  title = "Schedule",
}: EMSScheduleProps) {
  // Generate 24 hours if not provided
  const schedule = React.useMemo(() => {
    const slotMap = new Map(slots.map((s) => [s.hour, s.mode]));
    return Array.from({ length: 24 }, (_, i) => ({
      hour: i,
      mode: slotMap.get(i) || "idle",
    }));
  }, [slots]);

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base font-medium">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Timeline */}
        <div className="space-y-2 min-w-0">
          <div className="flex gap-0.5">
            {schedule.map((slot, i) => (
              <div
                key={i}
                className={cn(
                  "h-6 flex-1 min-w-0 first:rounded-l last:rounded-r transition-all",
                  modeConfig[slot.mode].bgColor,
                  currentHour === slot.hour &&
                    "ring-2 ring-primary ring-offset-1 ring-offset-background rounded"
                )}
                title={`${slot.hour.toString().padStart(2, "0")}:00 - ${modeConfig[slot.mode].label}`}
              />
            ))}
          </div>

          {/* Time labels */}
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>00:00</span>
            <span className="hidden sm:inline">06:00</span>
            <span>12:00</span>
            <span className="hidden sm:inline">18:00</span>
            <span>24:00</span>
          </div>
        </div>

        {/* Legend */}
        {showLegend && (
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs">
            {Object.entries(modeConfig).map(([key, config]) => (
              <div key={key} className="flex items-center gap-1.5">
                <div className={cn("h-2.5 w-2.5 rounded flex-shrink-0", config.bgColor)} />
                <span className="text-muted-foreground whitespace-nowrap">{config.label}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Helper to generate demo schedule data
export function generateDemoSchedule(): ScheduleSlot[] {
  return [
    // Night: charging (cheap rates)
    ...Array.from({ length: 6 }, (_, i) => ({ hour: i, mode: "charging" as ScheduleMode })),
    // Morning: self-consumption
    ...Array.from({ length: 3 }, (_, i) => ({ hour: i + 6, mode: "self-consumption" as ScheduleMode })),
    // Midday: exporting (solar peak)
    ...Array.from({ length: 5 }, (_, i) => ({ hour: i + 9, mode: "exporting" as ScheduleMode })),
    // Afternoon: self-consumption
    ...Array.from({ length: 3 }, (_, i) => ({ hour: i + 14, mode: "self-consumption" as ScheduleMode })),
    // Evening: discharging (peak rates)
    ...Array.from({ length: 4 }, (_, i) => ({ hour: i + 17, mode: "discharging" as ScheduleMode })),
    // Late night: idle
    ...Array.from({ length: 3 }, (_, i) => ({ hour: i + 21, mode: "idle" as ScheduleMode })),
  ];
}
