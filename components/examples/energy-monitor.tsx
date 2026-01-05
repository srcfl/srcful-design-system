"use client";

import { useState } from "react";
import { EnergyFlow } from "@/components/ui/energy-flow";
import { AIChat, type ChatMessage } from "@/components/ui/ai-chat";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis } from "recharts";
import { Sun, Battery, Zap, Home, TrendingUp, Clock } from "lucide-react";

const realtimeData = [
  { time: "11:00", power: 3.2 },
  { time: "11:05", power: 3.5 },
  { time: "11:10", power: 3.8 },
  { time: "11:15", power: 4.1 },
  { time: "11:20", power: 4.5 },
  { time: "11:25", power: 4.2 },
  { time: "11:30", power: 4.8 },
  { time: "11:35", power: 5.1 },
  { time: "11:40", power: 4.9 },
  { time: "11:45", power: 5.2 },
  { time: "11:50", power: 5.0 },
  { time: "11:55", power: 4.8 },
];

const chartConfig = {
  power: { label: "Power", color: "hsl(var(--primary))" },
} satisfies ChartConfig;

const sampleMessages: ChatMessage[] = [
  {
    id: "1",
    role: "assistant",
    content: "Good morning! Your solar system is performing well. Current production is **4.8 kW**, which is 92% of expected output for this time of day.",
    timestamp: new Date(Date.now() - 300000),
  },
];

interface QuickStatProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  subtext?: string;
  color?: string;
}

function QuickStat({ icon, label, value, subtext, color = "text-primary" }: QuickStatProps) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
      <div className={`${color}`}>{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground truncate">{label}</p>
        <p className="font-semibold">{value}</p>
        {subtext && <p className="text-xs text-muted-foreground">{subtext}</p>}
      </div>
    </div>
  );
}

export function EnergyMonitorExample() {
  const [messages, setMessages] = useState<ChatMessage[]>(sampleMessages);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: message,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const aiMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: getAIResponse(message),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, aiMessage]);
    setIsLoading(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4 overflow-hidden">
      {/* Main Content */}
      <div className="space-y-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <QuickStat
            icon={<Sun className="h-5 w-5" />}
            label="Solar Production"
            value="4.8 kW"
            subtext="92% of capacity"
            color="text-primary"
          />
          <QuickStat
            icon={<Battery className="h-5 w-5" />}
            label="Battery"
            value="78%"
            subtext="Discharging 1.2 kW"
            color="text-yellow-500"
          />
          <QuickStat
            icon={<Home className="h-5 w-5" />}
            label="Home Usage"
            value="3.2 kW"
            subtext="Below average"
            color="text-muted-foreground"
          />
          <QuickStat
            icon={<Zap className="h-5 w-5" />}
            label="Grid Export"
            value="2.8 kW"
            subtext="€0.28/kWh"
            color="text-green-500"
          />
        </div>

        {/* Energy Flow */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Live Energy Flow</CardTitle>
                <CardDescription>Real-time energy distribution</CardDescription>
              </div>
              <Badge variant="outline" className="gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Live
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-2">
            <EnergyFlow
              solarPower={4800}
              batteryPower={-1200}
              gridImport={0}
              gridExport={2800}
              homeConsumption={3200}
              evCharging={0}
              batterySoC={78}
              className="h-[380px] border-0"
            />
          </CardContent>
        </Card>

        {/* Production Chart */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Production Today</CardTitle>
                <CardDescription>Last hour trend</CardDescription>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-green-500 font-medium">+12%</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[120px] w-full">
              <AreaChart data={realtimeData}>
                <XAxis dataKey="time" className="text-xs" tick={{ fontSize: 10 }} />
                <YAxis className="text-xs" tick={{ fontSize: 10 }} tickFormatter={(v) => `${v}kW`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="power"
                  stroke="var(--color-power)"
                  fill="var(--color-power)"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* AI Chat Sidebar */}
      <div className="flex flex-col gap-4">
        {/* Schedule Card */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <CardTitle className="text-base">EMS Schedule</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Next action</span>
              <Badge>Charge battery</Badge>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Scheduled</span>
              <span className="font-medium">14:00 - 16:00</span>
            </div>
            <Progress value={65} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Optimizing for low grid prices (€0.08/kWh)
            </p>
          </CardContent>
        </Card>

        {/* AI Chat */}
        <AIChat
          messages={messages}
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
          placeholder="Ask about your energy..."
          className="flex-1 min-h-[400px]"
        />
      </div>
    </div>
  );
}

function getAIResponse(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("solar") || lower.includes("production")) {
    return "Your solar panels are currently producing **4.8 kW**. Today's total production is **18.2 kWh**, which is 15% above yesterday. The forecast for the rest of the day looks good with clear skies expected.";
  }

  if (lower.includes("battery") || lower.includes("charge")) {
    return "Your battery is at **78% charge** (7.8 kWh stored). It's currently discharging at 1.2 kW to power your home. Based on tonight's low grid prices, I recommend charging between 02:00-05:00.";
  }

  if (lower.includes("grid") || lower.includes("export")) {
    return "You're currently exporting **2.8 kW** to the grid at €0.28/kWh. Today you've earned **€4.20** from exports. Grid prices will drop to €0.08/kWh at 14:00 - good time to charge the battery!";
  }

  if (lower.includes("save") || lower.includes("optimi")) {
    return "Here are my top recommendations:\n\n1. **Shift dishwasher** to run at 12:00-14:00 (peak solar)\n2. **Pre-cool home** before 17:00 (before peak rates)\n3. **Charge EV tonight** between 02:00-05:00 (lowest rates)\n\nEstimated additional savings: **€2.40/day**";
  }

  return "I can help you with:\n- Solar production monitoring\n- Battery management\n- Grid export optimization\n- Energy saving recommendations\n\nWhat would you like to know?";
}
