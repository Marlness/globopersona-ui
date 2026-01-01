"use client";

import React from "react";
import { 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Mail,
  MousePointerClick,
  Eye,
  Clock
} from "lucide-react";
import { Card } from "@/components/ui/card";

const analyticsStats = [
  { label: "Total Sent", value: "12,847", change: "+12%", isPositive: true, icon: Mail, color: "blue" },
  { label: "Open Rate", value: "28.4%", change: "+2.1%", isPositive: true, icon: Eye, color: "emerald" },
  { label: "Click Rate", value: "4.7%", change: "-0.3%", isPositive: false, icon: MousePointerClick, color: "violet" },
  { label: "Unsubscribes", value: "0.8%", change: "-0.2%", isPositive: true, icon: Users, color: "amber" },
];

const colorMap = {
  blue: { bg: "bg-blue-50", icon: "bg-blue-500", text: "text-blue-600" },
  emerald: { bg: "bg-emerald-50", icon: "bg-emerald-500", text: "text-emerald-600" },
  violet: { bg: "bg-violet-50", icon: "bg-violet-500", text: "text-violet-600" },
  amber: { bg: "bg-amber-50", icon: "bg-amber-500", text: "text-amber-600" },
};

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-sm text-gray-500">Track your email marketing performance</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {analyticsStats.map((stat, index) => {
          const colors = colorMap[stat.color as keyof typeof colorMap];
          const Icon = stat.icon;
          
          return (
            <Card key={index} className={`p-5 rounded-2xl border-0 shadow-card ${colors.bg}`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl ${colors.icon} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${stat.isPositive ? "text-emerald-600" : "text-red-500"}`}>
                  {stat.isPositive ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </Card>
          );
        })}
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900">Email Performance Over Time</h3>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Performance chart visualization</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900">Campaign Comparison</h3>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600">
              <option>By Open Rate</option>
              <option>By Click Rate</option>
              <option>By Revenue</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Campaign comparison chart</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: "Email opened", contact: "sarah@company.com", campaign: "Summer Sale", time: "2 minutes ago" },
            { action: "Link clicked", contact: "john@example.com", campaign: "Newsletter", time: "5 minutes ago" },
            { action: "Email delivered", contact: "mike@startup.io", campaign: "Product Launch", time: "12 minutes ago" },
            { action: "Email opened", contact: "lisa@agency.com", campaign: "Summer Sale", time: "18 minutes ago" },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.action === "Email opened" ? "bg-emerald-500" :
                  activity.action === "Link clicked" ? "bg-blue-500" :
                  "bg-gray-400"
                }`} />
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.contact} • {activity.campaign}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Clock className="w-3 h-3" />
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
