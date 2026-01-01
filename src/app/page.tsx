import { Users, Mail, MousePointerClick, TrendingUp } from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { RecentCampaigns } from "@/components/dashboard/recent-campaigns";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { dashboardStats } from "@/lib/mock-data";
import { formatNumber, formatPercentage } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s an overview of your email marketing performance.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Contacts"
          value={dashboardStats.totalContacts}
          change={dashboardStats.monthlyGrowth}
          icon={<Users className="h-5 w-5" />}
          iconColor="bg-blue-500/10 text-blue-600"
          animationDelay="0.1s"
        />
        <StatsCard
          title="Emails Sent"
          value={formatNumber(dashboardStats.totalSent)}
          change={12.5}
          icon={<Mail className="h-5 w-5" />}
          iconColor="bg-primary/10 text-primary"
          animationDelay="0.15s"
        />
        <StatsCard
          title="Avg. Open Rate"
          value={formatPercentage(dashboardStats.avgOpenRate)}
          change={2.3}
          icon={<TrendingUp className="h-5 w-5" />}
          iconColor="bg-green-500/10 text-green-600"
          animationDelay="0.2s"
        />
        <StatsCard
          title="Avg. Click Rate"
          value={formatPercentage(dashboardStats.avgClickRate)}
          change={-0.8}
          icon={<MousePointerClick className="h-5 w-5" />}
          iconColor="bg-amber-500/10 text-amber-600"
          animationDelay="0.25s"
        />
      </div>

      {/* Charts and Activity Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <PerformanceChart />
        <ActivityFeed />
      </div>

      {/* Recent Campaigns and Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RecentCampaigns />
        <QuickActions />
      </div>
    </div>
  );
}

