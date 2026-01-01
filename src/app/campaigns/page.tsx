"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  RefreshCw, 
  Plus, 
  Search, 
  Filter, 
  LayoutGrid, 
  List,
  Mail,
  Users,
  Target,
  MousePointerClick,
  Sparkles,
  Zap,
  CheckCircle,
  Clock,
  Edit,
  MoreVertical
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
import { emailCampaigns, campaignStats } from "@/lib/mock-data";

const colorMap = {
  blue: { border: "border-t-blue-500" },
  purple: { border: "border-t-purple-500" },
  pink: { border: "border-t-pink-500" },
  green: { border: "border-t-emerald-500" },
  cyan: { border: "border-t-cyan-500" },
  yellow: { border: "border-t-amber-500" },
};

const statColorMap = {
  blue: { bg: "bg-blue-50", icon: "bg-blue-500" },
  green: { bg: "bg-emerald-50", icon: "bg-emerald-500" },
  purple: { bg: "bg-purple-50", icon: "bg-purple-500" },
  pink: { bg: "bg-pink-50", icon: "bg-pink-500" },
  cyan: { bg: "bg-cyan-50", icon: "bg-cyan-500" },
  yellow: { bg: "bg-amber-50", icon: "bg-amber-500" },
};

const statIconMap = {
  blue: Target,
  green: Edit,
  purple: Sparkles,
  pink: Users,
  cyan: Mail,
  yellow: MousePointerClick,
};

const statusConfig = {
  running: { badge: "badge-running", icon: Zap, label: "running" },
  draft: { badge: "badge-draft", icon: Edit, label: "draft" },
  completed: { badge: "badge-completed", icon: CheckCircle, label: "completed" },
};

export default function CampaignsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const stats = [
    campaignStats.totalCampaigns,
    campaignStats.manualCampaigns,
    campaignStats.aiCampaigns,
    campaignStats.totalRecipients,
    campaignStats.openRate,
    campaignStats.clickRate,
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Email Campaigns</h1>
            <p className="text-sm text-gray-500">Create, manage, and track your email marketing campaigns</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 gap-2 text-gray-600 border-gray-200 hover:bg-gray-50">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
          <Link href="/campaigns/new">
            <Button className="h-10 gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-500/25">
              <Plus className="w-4 h-4" />
              New Campaign
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
              placeholder="Search campaigns by name, description, or email list..."
              className="pl-10 h-10 bg-white border-gray-200"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-32 h-10 bg-white border-gray-200">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="running">Running</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-32 h-10 bg-white border-gray-200">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="ai">AI Personalized</SelectItem>
              <SelectItem value="manual">Manual</SelectItem>
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

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {emailCampaigns.map((campaign) => {
          const colors = colorMap[campaign.color];
          const statusInfo = statusConfig[campaign.status];
          
          return (
            <Card 
              key={campaign.id} 
              className={`overflow-hidden bg-white rounded-2xl border-0 shadow-card hover:shadow-soft transition-all duration-300 border-t-[3px] ${colors.border}`}
            >
              <div className="p-5">
                {/* Status Badges */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Badge className={`${statusInfo.badge} text-xs flex items-center gap-1`}>
                      {campaign.status === "running" && <Zap className="w-3 h-3" />}
                      {campaign.status === "draft" && <Edit className="w-3 h-3" />}
                      {campaign.status === "completed" && <CheckCircle className="w-3 h-3" />}
                      {statusInfo.label}
                    </Badge>
                    {campaign.type === "ai" && (
                      <Badge className="badge-ai text-xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        AI Personalized
                      </Badge>
                    )}
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Campaign</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Campaign Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{campaign.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{campaign.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-emerald-50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-emerald-600">{campaign.recipients}</p>
                    <p className="text-xs text-gray-500">Recipients</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-red-500">{campaign.openRate}%</p>
                    <p className="text-xs text-gray-500">Open Rate</p>
                  </div>
                </div>

                {/* Additional Stats */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <p className="font-semibold text-red-500">{campaign.sent}</p>
                    <p className="text-gray-400">Sent</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-500">{campaign.opens}</p>
                    <p className="text-gray-400">Opens</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-500">{campaign.clicks}</p>
                    <p className="text-gray-400">Clicked</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{campaign.createdAt}</span>
                  <span className="text-xs text-gray-400">{campaign.list || "No list"}</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
