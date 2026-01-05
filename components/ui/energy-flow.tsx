"use client";

import React, { useCallback, useMemo, useEffect, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MarkerType,
  ConnectionMode,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  type Node,
  type Edge,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Zap, Battery, Home, ArrowRight, Car } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EnergyFlowProps {
  solarPower?: number; // W
  batteryPower?: number; // W (positive = charging, negative = discharging)
  gridImport?: number; // W
  gridExport?: number; // W
  homeConsumption?: number; // W
  evCharging?: number; // W
  batterySoC?: number; // percentage
  className?: string;
}

type NodeData = {
  label: string;
  type: "solar" | "battery" | "grid" | "home" | "ev";
  power?: number;
  status: "online" | "offline";
  icon: React.ReactNode;
  bgColor: string;
  batterySoC?: number;
};

const formatPower = (power: number) => {
  return `${(power / 1000).toFixed(1)} kW`;
};

// Custom node component
function CustomNode({ data, id }: { data: NodeData; id: string }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    return () => observer.disconnect();
  }, []);

  const isOnline = data.status === "online";

  const borderColor = isDarkMode ? "#262626" : "white";

  const getHandles = () => {
    switch (data.type) {
      case "solar":
        return (
          <Handle
            type="source"
            position={Position.Right}
            id="output"
            style={{
              background: "#22c55e",
              width: "12px",
              height: "12px",
              border: `2px solid ${borderColor}`,
            }}
          />
        );
      case "battery":
        return (
          <>
            <Handle
              type="target"
              position={Position.Left}
              id="input"
              style={{
                background: "#facc15",
                width: "12px",
                height: "12px",
                border: `2px solid ${borderColor}`,
              }}
            />
            <Handle
              type="source"
              position={Position.Right}
              id="output"
              style={{
                background: "#facc15",
                width: "12px",
                height: "12px",
                border: `2px solid ${borderColor}`,
              }}
            />
          </>
        );
      case "grid":
        return (
          <>
            <Handle
              type="target"
              position={Position.Left}
              id="input"
              style={{
                background: isDarkMode ? "#404040" : "#3b82f6",
                width: "12px",
                height: "12px",
                border: `2px solid ${borderColor}`,
              }}
            />
            <Handle
              type="source"
              position={Position.Right}
              id="output"
              style={{
                background: isDarkMode ? "#404040" : "#3b82f6",
                width: "12px",
                height: "12px",
                border: `2px solid ${borderColor}`,
              }}
            />
          </>
        );
      case "home":
      case "ev":
        return (
          <>
            <Handle
              type="target"
              position={Position.Left}
              id="solar-input"
              style={{
                background: "#22c55e",
                width: "12px",
                height: "12px",
                border: `2px solid ${borderColor}`,
                top: "30%",
              }}
            />
            <Handle
              type="target"
              position={Position.Left}
              id="battery-input"
              style={{
                background: "#facc15",
                width: "12px",
                height: "12px",
                border: `2px solid ${borderColor}`,
                top: "50%",
              }}
            />
            <Handle
              type="target"
              position={Position.Left}
              id="grid-input"
              style={{
                background: isDarkMode ? "#404040" : "#3b82f6",
                width: "12px",
                height: "12px",
                border: `2px solid ${borderColor}`,
                top: "70%",
              }}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "rounded-xl shadow-sm transition-all relative bg-white dark:bg-[#141414] min-w-[180px]",
        isOnline ? "border-travel-animation" : "border-2 border-sourceful-gray-300 dark:border-[#1a1a1a]"
      )}
    >
      {getHandles()}

      <div className="flex items-center gap-3 px-3 py-2.5">
        <div className={cn("flex h-7 w-7 items-center justify-center rounded-full flex-shrink-0", data.bgColor)}>
          {data.icon}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-sourceful-gray-900 dark:text-white truncate">{data.label}</h3>
          {data.power !== undefined && (
            <p className="text-xs text-sourceful-gray-600 dark:text-sourceful-gray-400 mt-0.5">
              {data.power > 0 ? "+" : ""}{formatPower(Math.abs(data.power))}
            </p>
          )}
          {data.type === "battery" && data.batterySoC !== undefined && (
            <p className="text-xs text-sourceful-gray-600 dark:text-sourceful-gray-400 mt-0.5">
              SoC: {Math.round(data.batterySoC)}%
            </p>
          )}
        </div>

        <div className={cn(
          "px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0",
          isOnline
            ? "bg-sourceful-green-100 dark:bg-sourceful-green-950 text-sourceful-green-700 dark:text-sourceful-green-400"
            : "bg-sourceful-gray-100 dark:bg-sourceful-gray-800 text-sourceful-gray-600 dark:text-sourceful-gray-400"
        )}>
          {isOnline ? "●" : "○"}
        </div>
      </div>
    </div>
  );
}

export function EnergyFlow({
  solarPower = 3500,
  batteryPower = -1200,
  gridImport = 500,
  gridExport = 0,
  homeConsumption = 2800,
  evCharging = 0,
  batterySoC = 75,
  className,
}: EnergyFlowProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    return () => observer.disconnect();
  }, []);

  const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);

  const initialNodes: Node<NodeData>[] = useMemo(() => [
    {
      id: "solar",
      type: "custom",
      position: { x: 0, y: 0 },
      data: {
        label: "Solar",
        type: "solar",
        power: solarPower,
        status: solarPower > 0 ? "online" : "offline",
        icon: <Zap className="h-3 w-3 text-sourceful-green-600" />,
        bgColor: "bg-sourceful-green-100 dark:bg-sourceful-green-950",
      },
    },
    {
      id: "battery",
      type: "custom",
      position: { x: 0, y: 150 },
      data: {
        label: "Battery",
        type: "battery",
        power: batteryPower,
        status: "online",
        icon: <Battery className="h-3 w-3 text-sourceful-yellow-600 dark:text-yellow-400" />,
        bgColor: "bg-sourceful-yellow-100 dark:bg-yellow-500/20",
        batterySoC,
      },
    },
    {
      id: "grid",
      type: "custom",
      position: { x: 0, y: 300 },
      data: {
        label: "Grid",
        type: "grid",
        power: gridImport > 0 ? gridImport : -gridExport,
        status: "online",
        icon: <ArrowRight className="h-3 w-3 text-sourceful-gray-600 dark:text-sourceful-gray-400" />,
        bgColor: "bg-sourceful-gray-100 dark:bg-sourceful-gray-800",
      },
    },
    {
      id: "home",
      type: "custom",
      position: { x: 300, y: 150 },
      data: {
        label: "Home",
        type: "home",
        power: homeConsumption,
        status: "online",
        icon: <Home className="h-3 w-3 text-sourceful-gray-700 dark:text-sourceful-gray-300" />,
        bgColor: "bg-sourceful-gray-100 dark:bg-sourceful-gray-800",
      },
    },
    {
      id: "ev",
      type: "custom",
      position: { x: 300, y: 300 },
      data: {
        label: "EV Charger",
        type: "ev",
        power: evCharging,
        status: evCharging > 0 ? "online" : "offline",
        icon: <Car className="h-3 w-3 text-purple-600" />,
        bgColor: "bg-purple-100 dark:bg-purple-950",
      },
    },
  ], [solarPower, batteryPower, gridImport, gridExport, homeConsumption, evCharging, batterySoC, isDarkMode]);

  const initialEdges: Edge[] = useMemo(() => {
    const edges: Edge[] = [];

    // Solar flows
    if (solarPower > 0) {
      const toHome = Math.min(solarPower, homeConsumption);
      const remainingAfterHome = solarPower - toHome;
      const toEV = evCharging > 0 ? Math.min(remainingAfterHome, evCharging) : 0;
      const remainingAfterEV = remainingAfterHome - toEV;
      const toBattery = batteryPower > 0 ? Math.min(remainingAfterEV, batteryPower) : 0;
      const toGrid = Math.max(0, remainingAfterEV - toBattery);

      const labelBg = isDarkMode ? "#141414" : "#ffffff";

      if (toHome > 0) {
        edges.push({
          id: "solar-home",
          source: "solar",
          sourceHandle: "output",
          target: "home",
          targetHandle: "solar-input",
          type: "default",
          animated: true,
          style: { stroke: "#22c55e", strokeWidth: Math.max(2, Math.min(8, toHome / 500)) },
          label: formatPower(toHome),
          labelStyle: { fill: "#22c55e", fontWeight: 600 },
          labelBgStyle: { fill: labelBg },
          markerEnd: { type: MarkerType.ArrowClosed, color: "#22c55e" },
        });
      }
      if (toBattery > 0) {
        edges.push({
          id: "solar-battery",
          source: "solar",
          sourceHandle: "output",
          target: "battery",
          targetHandle: "input",
          type: "default",
          animated: true,
          style: { stroke: "#22c55e", strokeWidth: Math.max(2, Math.min(8, toBattery / 500)) },
          label: formatPower(toBattery),
          labelStyle: { fill: "#22c55e", fontWeight: 600 },
          labelBgStyle: { fill: labelBg },
          markerEnd: { type: MarkerType.ArrowClosed, color: "#22c55e" },
        });
      }
      if (toEV > 0) {
        edges.push({
          id: "solar-ev",
          source: "solar",
          sourceHandle: "output",
          target: "ev",
          targetHandle: "solar-input",
          type: "default",
          animated: true,
          style: { stroke: "#22c55e", strokeWidth: Math.max(2, Math.min(8, toEV / 500)) },
          label: formatPower(toEV),
          labelStyle: { fill: "#22c55e", fontWeight: 600 },
          labelBgStyle: { fill: labelBg },
          markerEnd: { type: MarkerType.ArrowClosed, color: "#22c55e" },
        });
      }
      if (toGrid > 0) {
        edges.push({
          id: "solar-grid",
          source: "solar",
          sourceHandle: "output",
          target: "grid",
          targetHandle: "input",
          type: "default",
          animated: true,
          style: { stroke: "#22c55e", strokeWidth: Math.max(2, Math.min(8, toGrid / 500)) },
          label: formatPower(toGrid),
          labelStyle: { fill: "#22c55e", fontWeight: 600 },
          labelBgStyle: { fill: labelBg },
          markerEnd: { type: MarkerType.ArrowClosed, color: "#22c55e" },
        });
      }
    }

    // Battery flows (discharging)
    if (batteryPower < 0) {
      const discharge = Math.abs(batteryPower);
      const toHome = Math.min(discharge, homeConsumption);
      const labelBg = isDarkMode ? "#141414" : "#ffffff";

      if (toHome > 0) {
        edges.push({
          id: "battery-home",
          source: "battery",
          sourceHandle: "output",
          target: "home",
          targetHandle: "battery-input",
          type: "default",
          animated: true,
          style: { stroke: "#facc15", strokeWidth: Math.max(2, Math.min(8, toHome / 500)) },
          label: formatPower(toHome),
          labelStyle: { fill: "#facc15", fontWeight: 600 },
          labelBgStyle: { fill: labelBg },
          markerEnd: { type: MarkerType.ArrowClosed, color: "#facc15" },
        });
      }
    }

    // Grid flows
    if (gridImport > 0) {
      const toHome = Math.min(gridImport, homeConsumption);
      const gridColor = isDarkMode ? "#404040" : "#3b82f6";
      const labelBg = isDarkMode ? "#141414" : "#ffffff";

      if (toHome > 0) {
        edges.push({
          id: "grid-home",
          source: "grid",
          sourceHandle: "output",
          target: "home",
          targetHandle: "grid-input",
          type: "default",
          animated: true,
          style: { stroke: gridColor, strokeWidth: Math.max(2, Math.min(8, toHome / 500)) },
          label: formatPower(toHome),
          labelStyle: { fill: gridColor, fontWeight: 600 },
          labelBgStyle: { fill: labelBg },
          markerEnd: { type: MarkerType.ArrowClosed, color: gridColor },
        });
      }
    }

    return edges;
  }, [solarPower, batteryPower, gridImport, gridExport, homeConsumption, evCharging, isDarkMode]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Update nodes and edges when dark mode or data changes
  useEffect(() => {
    setNodes(initialNodes);
  }, [initialNodes, setNodes]);

  useEffect(() => {
    setEdges(initialEdges);
  }, [initialEdges, setEdges]);

  return (
    <div className={cn("w-full h-[500px] rounded-lg border border-sourceful-gray-200 dark:border-[#1a1a1a]", className)}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.5}
        maxZoom={2}
        nodesDraggable={true}
        nodesConnectable={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          gap={16}
          size={1}
          color={isDarkMode ? "#404040" : "#9ca3af"}
          variant={BackgroundVariant.Dots}
        />
        <Controls />
      </ReactFlow>
    </div>
  );
}
