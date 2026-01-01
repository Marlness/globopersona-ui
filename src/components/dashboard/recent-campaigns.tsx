"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { campaigns } from "@/lib/mock-data";
import { formatDate, formatNumber, formatPercentage } from "@/lib/utils";
import { ArrowRight, Mail, Zap, FlaskConical } from "lucide-react";

const statusVariants = {
  draft: "draft",
  scheduled: "warning",
  active: "active",
  paused: "paused",
  completed: "completed",
} as const;

const typeIcons = {
  email: Mail,
  automation: Zap,
  "a/b-test": FlaskConical,
} as const;

export function RecentCampaigns() {
  const recentCampaigns = campaigns.slice(0, 5);

  return (
    <Card className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-semibold">Recent Campaigns</CardTitle>
        <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary">
          <Link href="/campaigns">
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentCampaigns.map((campaign) => {
          const TypeIcon = typeIcons[campaign.type];
          return (
            <Link
              key={campaign.id}
              href={`/campaigns/${campaign.id}`}
              className="block"
            >
              <div className="flex items-center justify-between p-3 rounded-xl border hover:bg-muted/50 transition-colors group">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted group-hover:bg-background transition-colors">
                    <TypeIcon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium truncate group-hover:text-primary transition-colors">
                      {campaign.name}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">
                      {campaign.sent > 0
                        ? `${formatNumber(campaign.sent)} sent • ${formatPercentage(campaign.openRate)} opens`
                        : `${formatNumber(campaign.recipients)} recipients`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Badge variant={statusVariants[campaign.status]}>
                    {campaign.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground hidden sm:block">
                    {formatDate(campaign.createdAt)}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}

