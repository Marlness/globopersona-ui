"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  RefreshCw, 
  Upload, 
  Search, 
  Filter, 
  LayoutGrid, 
  List,
  Eye,
  Download,
  Trash2,
  MoreVertical,
  AlertTriangle,
  Mail,
  Users,
  TrendingUp,
  Star,
  MousePointerClick,
  ListIcon
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { emailLists, emailListsStats } from "@/lib/mock-data";

const colorMap = {
  blue: { border: "border-t-blue-500", icon: "bg-blue-500" },
  purple: { border: "border-t-purple-500", icon: "bg-purple-500" },
  pink: { border: "border-t-pink-500", icon: "bg-pink-500" },
  green: { border: "border-t-emerald-500", icon: "bg-emerald-500" },
  cyan: { border: "border-t-cyan-500", icon: "bg-cyan-500" },
  yellow: { border: "border-t-amber-500", icon: "bg-amber-500" },
};

const statIconMap = {
  blue: ListIcon,
  green: Users,
  purple: TrendingUp,
  yellow: Star,
  pink: Mail,
  cyan: MousePointerClick,
};

const statColorMap = {
  blue: { bg: "bg-blue-50", icon: "bg-blue-500", text: "text-blue-600" },
  green: { bg: "bg-emerald-50", icon: "bg-emerald-500", text: "text-emerald-600" },
  purple: { bg: "bg-purple-50", icon: "bg-purple-500", text: "text-purple-600" },
  yellow: { bg: "bg-amber-50", icon: "bg-amber-500", text: "text-amber-600" },
  pink: { bg: "bg-pink-50", icon: "bg-pink-500", text: "text-pink-600" },
  cyan: { bg: "bg-cyan-50", icon: "bg-cyan-500", text: "text-cyan-600" },
};

export default function EmailListsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const stats = [
    emailListsStats.totalLists,
    emailListsStats.totalContacts,
    emailListsStats.thisMonth,
    emailListsStats.avgQuality,
    emailListsStats.openRate,
    emailListsStats.clickRate,
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <ListIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Email Lists</h1>
            <p className="text-sm text-gray-500">Welcome back, ravi! Manage your email campaigns</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 gap-2 text-gray-600 border-gray-200 hover:bg-gray-50">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
          <Link href="/lists/upload">
            <Button className="h-10 gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-500/25">
              <Upload className="w-4 h-4" />
              Upload Email List
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, index) => {
          const colors = statColorMap[stat.color];
          const Icon = statIconMap[stat.color];
          return (
            <Card key={index} className={`p-4 bg-gradient-to-br ${colors.bg} border-0 rounded-xl`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-600">{stat.label}</span>
                <div className={`w-8 h-8 rounded-lg ${colors.icon} flex items-center justify-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.sublabel}</p>
            </Card>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Search lists by name, description, or tags..."
              className="pl-10 h-10 bg-white border-gray-200"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-32 h-10 bg-white border-gray-200">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="h-10 gap-2 border-gray-200">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>
        
        <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-lg">
          <Button
            variant={viewMode === "grid" ? "secondary" : "ghost"}
            size="sm"
            className={`h-8 gap-2 ${viewMode === "grid" ? "bg-white shadow-sm" : ""}`}
            onClick={() => setViewMode("grid")}
          >
            <LayoutGrid className="w-4 h-4" />
            Grid
          </Button>
          <Button
            variant={viewMode === "list" ? "secondary" : "ghost"}
            size="sm"
            className={`h-8 gap-2 ${viewMode === "list" ? "bg-white shadow-sm" : ""}`}
            onClick={() => setViewMode("list")}
          >
            <List className="w-4 h-4" />
            List
          </Button>
        </div>
      </div>

      {/* Email Lists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {emailLists.map((list) => {
          const colors = colorMap[list.color];
          return (
            <Card 
              key={list.id} 
              className={`overflow-hidden bg-white rounded-2xl border-0 shadow-card hover:shadow-soft transition-all duration-300 border-t-[3px] ${colors.border}`}
            >
              <div className="p-5">
                {/* Status Badges */}
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="badge-active text-xs">
                    {list.status}
                  </Badge>
                  {list.quality === "poor" && (
                    <Badge className="badge-poor text-xs flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {list.quality}
                    </Badge>
                  )}
                </div>

                {/* List Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{list.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{list.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-emerald-50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-emerald-600">{list.validContacts}</p>
                    <p className="text-xs text-gray-500">Valid Contacts</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-gray-600">{list.openRate}%</p>
                    <p className="text-xs text-gray-500">Open Rate</p>
                  </div>
                </div>

                {/* Valid Count */}
                <div className="bg-gray-50 rounded-lg p-2 text-center mb-4">
                  <p className="text-lg font-semibold text-emerald-600">{list.valid}</p>
                  <p className="text-xs text-gray-400">Valid</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-400">
                    <p>⏱ {list.createdAt}</p>
                    <p className="flex items-center gap-1 mt-0.5">
                      📄 {list.source}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
