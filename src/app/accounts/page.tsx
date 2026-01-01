"use client";

import React from "react";
import { 
  RefreshCw, 
  Plus, 
  Mail,
  Check,
  Zap,
  Send,
  Settings,
  Edit,
  Trash2,
  CheckCircle,
  Cloud,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { emailAccounts, emailAccountStats } from "@/lib/mock-data";

const statColorMap = {
  green: { bg: "bg-emerald-50", icon: "bg-emerald-500", text: "text-emerald-600" },
  blue: { bg: "bg-blue-50", icon: "bg-blue-500", text: "text-blue-600" },
  purple: { bg: "bg-purple-50", icon: "bg-purple-500", text: "text-purple-600" },
  pink: { bg: "bg-pink-50", icon: "bg-pink-500", text: "text-pink-600" },
};

const statIconMap = {
  green: CheckCircle,
  blue: Mail,
  purple: Send,
  pink: Settings,
};

export default function EmailAccountsPage() {
  const stats = [
    { ...emailAccountStats.activeAccounts },
    { ...emailAccountStats.dailyLimit },
    { ...emailAccountStats.sentToday },
    { ...emailAccountStats.utilization },
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
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-900">Email Configuration</h1>
              <Badge className="bg-emerald-50 text-emerald-600 border-emerald-200 flex items-center gap-1">
                <Cloud className="w-3 h-3" />
                Online
              </Badge>
            </div>
            <p className="text-sm text-gray-500">Manage your email accounts and SMTP settings</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 gap-2 text-gray-600 border-gray-200 hover:bg-gray-50">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
          <Button className="h-10 gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-500/25">
            <Plus className="w-4 h-4" />
            Add Email Account
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const colors = statColorMap[stat.color];
          const Icon = statIconMap[stat.color];
          return (
            <Card key={index} className={`p-5 bg-gradient-to-br ${colors.bg} border-0 rounded-xl`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-600">{stat.label}</span>
                <div className={`w-10 h-10 rounded-xl ${colors.icon} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">
                {"total" in stat ? `of ${stat.total} total` : stat.sublabel}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Email Accounts List */}
      <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-base font-semibold text-gray-900">Email Accounts</h2>
            <p className="text-sm text-gray-500">Manage your configured email accounts</p>
          </div>
          <Badge variant="secondary" className="text-sm">
            {emailAccounts.length} accounts
          </Badge>
        </div>

        <div className="space-y-4">
          {emailAccounts.map((account) => (
            <div 
              key={account.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-4">
                {/* Provider Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  account.provider === "Gmail OAuth" 
                    ? "bg-white shadow-sm" 
                    : "bg-gradient-to-br from-cyan-400 to-blue-500"
                }`}>
                  {account.provider === "Gmail OAuth" ? (
                    <span className="text-2xl">📧</span>
                  ) : (
                    <Mail className="w-6 h-6 text-white" />
                  )}
                </div>

                {/* Account Info */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-900">{account.email}</span>
                    <Badge className="badge-active text-xs flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Active
                    </Badge>
                    <Badge className="badge-verified text-xs">
                      Verified
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      📡 {account.provider}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {account.sentToday}/{account.dailyLimit} sent today
                    </span>
                    {account.lastUsed && (
                      <span className="flex items-center gap-1">
                        ⏰ Last used: {account.lastUsed}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400 hover:text-gray-600">
                  <Zap className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400 hover:text-gray-600">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400 hover:text-red-500">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

