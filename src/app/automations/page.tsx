"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Zap,
  Play,
  Pause,
  MoreHorizontal,
  Copy,
  Trash2,
  Edit,
  Users,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatNumber } from "@/lib/utils";

const automations = [
  {
    id: "1",
    name: "Welcome Series",
    description: "Onboard new subscribers with a 5-email welcome sequence",
    status: "active",
    trigger: "New subscriber",
    steps: 5,
    enrolled: 8450,
    completed: 7234,
    createdAt: "2024-06-01",
  },
  {
    id: "2",
    name: "Re-engagement Campaign",
    description: "Win back inactive subscribers with special offers",
    status: "paused",
    trigger: "No activity for 30 days",
    steps: 3,
    enrolled: 12340,
    completed: 5670,
    createdAt: "2024-10-15",
  },
  {
    id: "3",
    name: "Birthday Celebration",
    description: "Send personalized birthday greetings with discount",
    status: "active",
    trigger: "Birthday",
    steps: 1,
    enrolled: 2340,
    completed: 2340,
    createdAt: "2024-03-20",
  },
  {
    id: "4",
    name: "Cart Abandonment",
    description: "Remind customers about items left in their cart",
    status: "active",
    trigger: "Cart abandoned",
    steps: 3,
    enrolled: 5670,
    completed: 3456,
    createdAt: "2024-08-10",
  },
  {
    id: "5",
    name: "Post-Purchase Follow-up",
    description: "Thank customers and ask for reviews after purchase",
    status: "draft",
    trigger: "Purchase completed",
    steps: 4,
    enrolled: 0,
    completed: 0,
    createdAt: "2024-12-01",
  },
];

const templates = [
  {
    name: "Welcome Series",
    description: "Onboard new subscribers",
    icon: Users,
  },
  {
    name: "Abandoned Cart",
    description: "Recover lost sales",
    icon: Mail,
  },
  {
    name: "Re-engagement",
    description: "Win back inactive users",
    icon: Clock,
  },
];

export default function AutomationsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Automations</h1>
          <p className="text-muted-foreground">
            Set up automated email workflows to engage subscribers.
          </p>
        </div>
        <Button asChild>
          <Link href="/automations/new">
            <Plus className="mr-2 h-4 w-4" />
            Create Automation
          </Link>
        </Button>
      </div>

      {/* Quick Start Templates */}
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>Quick Start Templates</CardTitle>
          <CardDescription>
            Get started quickly with pre-built automation workflows
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            {templates.map((template) => {
              const Icon = template.icon;
              return (
                <button
                  key={template.name}
                  className="flex items-center gap-4 rounded-xl border p-4 text-left transition-all hover:border-primary hover:bg-primary/5 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {template.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {template.description}
                    </p>
                  </div>
                  <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Automations
                </p>
                <p className="text-2xl font-bold">{automations.length}</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-2.5">
                <Zap className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active</p>
                <p className="text-2xl font-bold">
                  {automations.filter((a) => a.status === "active").length}
                </p>
              </div>
              <div className="rounded-lg bg-green-500/10 p-2.5">
                <Play className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Enrolled
                </p>
                <p className="text-2xl font-bold">
                  {formatNumber(
                    automations.reduce((sum, a) => sum + a.enrolled, 0)
                  )}
                </p>
              </div>
              <div className="rounded-lg bg-blue-500/10 p-2.5">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Emails Sent
                </p>
                <p className="text-2xl font-bold">
                  {formatNumber(
                    automations.reduce((sum, a) => sum + a.completed * a.steps, 0)
                  )}
                </p>
              </div>
              <div className="rounded-lg bg-amber-500/10 p-2.5">
                <Mail className="h-5 w-5 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Automations List */}
      <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <CardHeader>
          <CardTitle>All Automations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {automations.map((automation, index) => (
            <div
              key={automation.id}
              className="flex items-center justify-between rounded-xl border p-4 hover:bg-muted/50 transition-colors animate-fade-in group"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    automation.status === "active"
                      ? "bg-green-500/10"
                      : automation.status === "paused"
                      ? "bg-amber-500/10"
                      : "bg-muted"
                  }`}
                >
                  <Zap
                    className={`h-6 w-6 ${
                      automation.status === "active"
                        ? "text-green-600"
                        : automation.status === "paused"
                        ? "text-amber-600"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {automation.name}
                    </h3>
                    <Badge
                      variant={
                        automation.status === "active"
                          ? "active"
                          : automation.status === "paused"
                          ? "paused"
                          : "draft"
                      }
                    >
                      {automation.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {automation.description}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>Trigger: {automation.trigger}</span>
                    <span>•</span>
                    <span>{automation.steps} steps</span>
                    <span>•</span>
                    <span>{formatNumber(automation.enrolled)} enrolled</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {automation.status === "active" ? (
                  <Button variant="outline" size="sm">
                    <Pause className="mr-2 h-4 w-4" />
                    Pause
                  </Button>
                ) : automation.status === "paused" ? (
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                ) : (
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-4 w-4" />
                    Activate
                  </Button>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon-sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive focus:text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

