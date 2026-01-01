"use client";

import React from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  Users, 
  Eye, 
  MousePointerClick, 
  DollarSign, 
  AlertTriangle,
  RefreshCw,
  ChevronDown
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dashboardStats } from "@/lib/mock-data";

const iconMap = {
  blue: Zap,
  purple: Users,
  green: Eye,
  yellow: MousePointerClick,
  pink: DollarSign,
  red: AlertTriangle,
};

const colorMap = {
  blue: {
    bg: "bg-blue-500",
    light: "bg-blue-50",
    text: "text-blue-600",
    progress: "bg-blue-500",
  },
  purple: {
    bg: "bg-purple-500",
    light: "bg-purple-50",
    text: "text-purple-600",
    progress: "bg-purple-500",
  },
  green: {
    bg: "bg-emerald-500",
    light: "bg-emerald-50",
    text: "text-emerald-600",
    progress: "bg-emerald-500",
  },
  yellow: {
    bg: "bg-amber-500",
    light: "bg-amber-50",
    text: "text-amber-600",
    progress: "bg-amber-500",
  },
  pink: {
    bg: "bg-pink-500",
    light: "bg-pink-50",
    text: "text-pink-600",
    progress: "bg-pink-500",
  },
  red: {
    bg: "bg-red-500",
    light: "bg-red-50",
    text: "text-red-600",
    progress: "bg-red-500",
  },
};

interface MetricCardProps {
  value: string | number;
  label: string;
  sublabel: string;
  change: string;
  changeType: "increase" | "decrease";
  progress: number;
  color: keyof typeof colorMap;
}

function MetricCard({ value, label, sublabel, change, changeType, progress, color }: MetricCardProps) {
  const colors = colorMap[color];
  const Icon = iconMap[color];
  
  return (
    <Card className="p-5 bg-white rounded-2xl border-0 shadow-card hover:shadow-soft transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-11 h-11 rounded-xl ${colors.light} flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${colors.text}`} strokeWidth={1.75} />
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${changeType === "increase" ? "text-emerald-600" : "text-red-500"}`}>
          {changeType === "increase" ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span>{change}</span>
        </div>
      </div>
      
      <div className="space-y-1">
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-3xl font-bold text-gray-900 tracking-tight">{value}</p>
        <p className="text-xs text-gray-400">{sublabel}</p>
      </div>

      <div className="mt-4">
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full ${colors.progress} transition-all duration-500`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1.5">{progress}% of target</p>
      </div>
    </Card>
  );
}

export default function DashboardPage() {
  const stats = [
    { ...dashboardStats.totalCampaigns, icon: "blue" },
    { ...dashboardStats.activeSubscribers, color: "purple" as const },
    { ...dashboardStats.avgOpenRate, color: "green" as const },
    { ...dashboardStats.avgClickRate, color: "yellow" as const },
    { ...dashboardStats.revenueGenerated, color: "pink" as const },
    { ...dashboardStats.bounceRate, color: "red" as const },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-sm text-gray-500">Welcome back, ravi! 👋</p>
            <span className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-9 px-3 gap-2 text-sm font-medium text-gray-600 border-gray-200 hover:bg-gray-50">
            Last 7 days
            <ChevronDown className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400 hover:text-gray-600">
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Section Title */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Performance Overview</h2>
        <p className="text-sm text-gray-500">Track your email marketing metrics in real-time</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((stat, index) => (
          <MetricCard
            key={index}
            value={stat.value}
            label={stat.label}
            sublabel={stat.sublabel}
            change={stat.change}
            changeType={stat.changeType}
            progress={stat.progress}
            color={stat.color}
          />
        ))}
      </div>

      {/* Charts Section - Placeholder for now */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Campaign Performance</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-400">Performance chart coming soon</p>
          </div>
        </Card>
        
        <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Subscriber Growth</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-400">Growth chart coming soon</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
