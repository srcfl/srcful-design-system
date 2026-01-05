"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Cloud,
  Sun,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Sunrise,
  Sunset,
  CloudSun,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type WeatherCondition =
  | "sunny"
  | "cloudy"
  | "partly-cloudy"
  | "rain"
  | "snow"
  | "storm"
  | "overcast";

export interface HourlyForecast {
  time: string;
  temp: number;
  condition: WeatherCondition;
}

export interface WeatherCardProps {
  temperature: number;
  condition: WeatherCondition;
  conditionText?: string;
  tempLow?: number;
  tempHigh?: number;
  windSpeed?: number;
  windUnit?: string;
  rainChance?: number;
  uvIndex?: number;
  sunrise?: string;
  sunset?: string;
  solarForecast?: number;
  solarPeak?: string;
  solarPeakPower?: number;
  cloudCover?: number;
  hourlyForecast?: HourlyForecast[];
  className?: string;
}

const weatherIcons: Record<WeatherCondition, React.ElementType> = {
  sunny: Sun,
  cloudy: Cloud,
  "partly-cloudy": CloudSun,
  rain: CloudRain,
  snow: CloudSnow,
  storm: CloudLightning,
  overcast: Cloud,
};

const conditionLabels: Record<WeatherCondition, string> = {
  sunny: "Sunny",
  cloudy: "Cloudy",
  "partly-cloudy": "Partly Cloudy",
  rain: "Rain",
  snow: "Snow",
  storm: "Thunderstorm",
  overcast: "Overcast",
};

export function WeatherCard({
  temperature,
  condition,
  conditionText,
  tempLow,
  tempHigh,
  windSpeed,
  windUnit = "km/h",
  rainChance,
  uvIndex,
  sunrise,
  sunset,
  solarForecast,
  solarPeak,
  solarPeakPower,
  cloudCover,
  hourlyForecast = [],
  className,
}: WeatherCardProps) {
  const WeatherIcon = weatherIcons[condition];

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Weather</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Conditions */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
            <WeatherIcon className="h-8 w-8 text-muted-foreground" />
          </div>
          <div>
            <div className="text-3xl font-bold">{temperature}°C</div>
            <div className="text-muted-foreground">
              {conditionText || conditionLabels[condition]}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          {tempLow !== undefined && tempHigh !== undefined && (
            <div className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-muted-foreground" />
              <span>
                {tempLow}° / {tempHigh}°
              </span>
            </div>
          )}
          {windSpeed !== undefined && (
            <div className="flex items-center gap-2">
              <Wind className="h-4 w-4 text-muted-foreground" />
              <span>
                {windSpeed} {windUnit}
              </span>
            </div>
          )}
          {rainChance !== undefined && (
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-muted-foreground" />
              <span>{rainChance}% rain</span>
            </div>
          )}
          {uvIndex !== undefined && (
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-muted-foreground" />
              <span>UV {uvIndex}</span>
            </div>
          )}
        </div>

        {/* Sunrise/Sunset */}
        {(sunrise || sunset) && (
          <div className="flex justify-between text-sm">
            {sunrise && (
              <div className="flex items-center gap-2">
                <Sunrise className="h-4 w-4 text-orange-500" />
                <span>{sunrise}</span>
              </div>
            )}
            {sunset && (
              <div className="flex items-center gap-2">
                <Sunset className="h-4 w-4 text-orange-500" />
                <span>{sunset}</span>
              </div>
            )}
          </div>
        )}

        {/* Solar Forecast */}
        {solarForecast !== undefined && (
          <div className="space-y-1 pt-2 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Solar Forecast</span>
              <span className="font-semibold text-primary">
                {solarForecast.toFixed(1)} kWh
              </span>
            </div>
            {solarPeak && solarPeakPower !== undefined && (
              <p className="text-xs text-muted-foreground">
                Peak at {solarPeak} ({solarPeakPower.toFixed(1)} kW)
              </p>
            )}
            {cloudCover !== undefined && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Cloud className="h-3 w-3" />
                <span>{cloudCover}% cloud cover expected</span>
              </div>
            )}
          </div>
        )}

        {/* Hourly Forecast */}
        {hourlyForecast.length > 0 && (
          <div className="space-y-2 pt-2 border-t">
            <p className="text-sm text-muted-foreground">Next 12 Hours</p>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
              {hourlyForecast.map((hour, i) => {
                const HourIcon = weatherIcons[hour.condition];
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1 min-w-[48px]"
                  >
                    <span className="text-xs text-muted-foreground">
                      {hour.time}
                    </span>
                    <HourIcon className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium">{hour.temp}°</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Helper to generate demo hourly forecast
export function generateDemoForecast(): HourlyForecast[] {
  const conditions: WeatherCondition[] = [
    "cloudy",
    "cloudy",
    "partly-cloudy",
    "partly-cloudy",
    "rain",
    "rain",
    "cloudy",
    "cloudy",
    "cloudy",
    "cloudy",
    "cloudy",
    "cloudy",
  ];
  return Array.from({ length: 12 }, (_, i) => ({
    time: `${(18 + i) % 24}:00`,
    temp: Math.round(-3 + i * 0.2 + Math.random() * 2),
    condition: conditions[i],
  }));
}
