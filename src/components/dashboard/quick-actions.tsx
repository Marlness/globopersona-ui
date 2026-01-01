"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  UserPlus,
  Upload,
  Zap,
  BarChart3,
  Send,
} from "lucide-react";

const actions = [
  {
    title: "New Campaign",
    description: "Create an email campaign",
    icon: Mail,
    href: "/campaigns/new",
    color: "bg-primary/10 text-primary hover:bg-primary/20",
  },
  {
    title: "Add Contact",
    description: "Add a new subscriber",
    icon: UserPlus,
    href: "/contacts/new",
    color: "bg-green-500/10 text-green-600 hover:bg-green-500/20",
  },
  {
    title: "Import Contacts",
    description: "Upload CSV file",
    icon: Upload,
    href: "/contacts/import",
    color: "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20",
  },
  {
    title: "Automation",
    description: "Set up workflows",
    icon: Zap,
    href: "/automations/new",
    color: "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20",
  },
  {
    title: "View Reports",
    description: "Analytics & insights",
    icon: BarChart3,
    href: "/analytics",
    color: "bg-purple-500/10 text-purple-600 hover:bg-purple-500/20",
  },
  {
    title: "Send Test",
    description: "Preview your email",
    icon: Send,
    href: "/campaigns/test",
    color: "bg-pink-500/10 text-pink-600 hover:bg-pink-500/20",
  },
];

export function QuickActions() {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {actions.map((action) => (
            <Link key={action.title} href={action.href}>
              <Button
                variant="ghost"
                className="h-auto flex-col gap-2 p-4 w-full hover:bg-muted/50 group"
              >
                <div
                  className={`rounded-xl p-2.5 transition-transform group-hover:scale-110 ${action.color}`}
                >
                  <action.icon className="h-5 w-5" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">{action.title}</p>
                  <p className="text-xs text-muted-foreground hidden sm:block">
                    {action.description}
                  </p>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

