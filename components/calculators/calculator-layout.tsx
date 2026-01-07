"use client";

import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator } from "lucide-react";

interface CalculatorLayoutProps {
  title: string;
  description: string;
  badge?: string;
  children: ReactNode;
}

export function CalculatorLayout({ title, description, badge = "Calculator", children }: CalculatorLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-4">
          <Calculator className="h-3 w-3 mr-1" />
          {badge}
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </div>
      <Card className="shadow-lg">
        <CardContent className="p-6 md:p-8">
          {children}
        </CardContent>
      </Card>
    </div>
  );
}

interface CalculatorResultsProps {
  title: string;
  children: ReactNode;
}

export function CalculatorResults({ title, children }: CalculatorResultsProps) {
  return (
    <div className="mt-8 pt-8 border-t">
      <h2 className="text-xl font-semibold mb-6 text-center">{title}</h2>
      {children}
    </div>
  );
}

interface ResultCardProps {
  label: string;
  value: string;
  subtext?: string;
  highlight?: boolean;
}

export function ResultCard({ label, value, subtext, highlight }: ResultCardProps) {
  return (
    <Card className={highlight ? "border-primary bg-primary/5" : ""}>
      <CardContent className="p-4 text-center">
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className={`text-2xl md:text-3xl font-bold ${highlight ? "text-primary" : ""}`}>
          {value}
        </p>
        {subtext && (
          <p className="text-xs text-muted-foreground mt-1">{subtext}</p>
        )}
      </CardContent>
    </Card>
  );
}
