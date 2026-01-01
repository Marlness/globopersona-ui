"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { dashboardStats } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Mail, UserPlus, CheckCircle, Upload } from "lucide-react";

const activityIcons = {
  campaign_sent: Mail,
  contact_added: Upload,
  contact_subscribed: UserPlus,
  campaign_completed: CheckCircle,
} as const;

const activityColors = {
  campaign_sent: "bg-primary/10 text-primary",
  contact_added: "bg-blue-500/10 text-blue-600",
  contact_subscribed: "bg-green-500/10 text-green-600",
  campaign_completed: "bg-amber-500/10 text-amber-600",
} as const;

export function ActivityFeed() {
  const { recentActivity } = dashboardStats;

  const getRelativeTime = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInHours = Math.floor((now.getTime() - time.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return "Yesterday";
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <Card className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[280px] pr-4">
          <div className="space-y-4">
            {recentActivity.map((activity, index) => {
              const Icon = activityIcons[activity.type];
              return (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 animate-slide-in-left"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                      activityColors[activity.type]
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {activity.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {getRelativeTime(activity.timestamp)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

