"use client";

import { cn, formatNumber } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: React.ReactNode;
  iconColor?: string;
  className?: string;
  animationDelay?: string;
}

export function StatsCard({
  title,
  value,
  change,
  changeLabel = "from last month",
  icon,
  iconColor = "bg-primary/10 text-primary",
  className,
  animationDelay,
}: StatsCardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <Card
      className={cn(
        "animate-fade-in overflow-hidden",
        className
      )}
      style={{ animationDelay }}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold tracking-tight">
              {typeof value === "number" ? formatNumber(value) : value}
            </p>
            {change !== undefined && (
              <div className="flex items-center gap-1.5 text-sm">
                <span
                  className={cn(
                    "flex items-center gap-0.5 font-medium",
                    isPositive && "text-success",
                    isNegative && "text-destructive"
                  )}
                >
                  {isPositive ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : isNegative ? (
                    <TrendingDown className="h-4 w-4" />
                  ) : null}
                  {Math.abs(change)}%
                </span>
                <span className="text-muted-foreground">{changeLabel}</span>
              </div>
            )}
          </div>
          <div
            className={cn(
              "rounded-xl p-3 transition-transform hover:scale-110",
              iconColor
            )}
          >
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

