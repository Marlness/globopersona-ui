"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft,
  CheckCircle,
  Send,
  Calendar,
  Clock,
  Users,
  Sparkles,
  AlertCircle,
  ChevronDown
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { emailAccounts, aiConfiguration } from "@/lib/mock-data";

export default function ValidateCampaignPage() {
  const [selectedAccount, setSelectedAccount] = useState(emailAccounts[0].id);
  const [companyInfo, setCompanyInfo] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [emailGap, setEmailGap] = useState("15");
  const [isValidated, setIsValidated] = useState(false);

  const handleValidate = () => {
    setIsValidated(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 to-orange-50/30">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href="/campaigns/preview">
            <Button variant="ghost" size="sm" className="gap-2 text-gray-600">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Validate & Send Campaign</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Validation Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Validation Section */}
              <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Validation</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Confirm sender, context, and readiness before launching. Improves deliverability and engagement predictions.
                </p>

                <div className="space-y-5">
                  {/* Sender Account */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Sender Account</Label>
                    <Select value={selectedAccount} onValueChange={setSelectedAccount}>
                      <SelectTrigger className="w-full h-11 mt-1.5 border-gray-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {emailAccounts.map((account) => (
                          <SelectItem key={account.id} value={account.id}>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{account.name}</span>
                              <span className="text-gray-500">({account.email})</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-400 mt-1.5">
                      Only active, verified accounts are listed. Update limits in account settings if needed.
                    </p>
                  </div>

                  {/* Company Info */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Company Info</Label>
                    <Textarea
                      value={companyInfo}
                      onChange={(e) => setCompanyInfo(e.target.value)}
                      placeholder="Describe the offering, ICP, and key value proposition used for AI generation"
                      className="mt-1.5 min-h-[100px] border-gray-200 resize-none"
                    />
                    <p className="text-xs text-gray-400 mt-1.5">
                      Richer context improves generation accuracy and reduces retries.
                    </p>
                  </div>

                  {/* Target Audience */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Target Audience</Label>
                    <Textarea
                      value={targetAudience}
                      onChange={(e) => setTargetAudience(e.target.value)}
                      placeholder="e.g., Job titles, industries, company sizes; or freeform description"
                      className="mt-1.5 min-h-[80px] border-gray-200 resize-none"
                    />
                    <p className="text-xs text-gray-400 mt-1.5">
                      This field accepts freeform text; any structured config loaded from storage has been normalized for display.
                    </p>
                  </div>

                  {/* Validate Button */}
                  <div className="flex items-center gap-4">
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={handleValidate}
                    >
                      <CheckCircle className="w-4 h-4" />
                      Validate Campaign
                    </Button>
                    
                    {isValidated && (
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>Spam score: <strong className="text-emerald-600">8</strong></span>
                        <span>•</span>
                        <span>Deliverability: <strong className="text-emerald-600">90</strong></span>
                        <span>•</span>
                        <span>Engagement: <strong className="text-emerald-600">80</strong></span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-6">
                {/* Contacts */}
                <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contacts</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total</span>
                      <span className="text-sm font-medium text-gray-900">5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Approved Pitches</span>
                      <span className="text-sm font-medium text-gray-900">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">To Generate</span>
                      <span className="text-sm font-medium text-violet-600">5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">With Website Data</span>
                      <span className="text-sm font-medium text-gray-900">5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Without Website Data</span>
                      <span className="text-sm font-medium text-gray-900">0</span>
                    </div>
                  </div>
                </Card>

                {/* Estimated Outcome */}
                <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Estimated Outcome</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Estimated Success Rate</span>
                      <span className="text-sm font-medium text-emerald-600">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Estimated Duration</span>
                      <span className="text-sm font-medium text-gray-900">2 hours</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Column - Send Settings */}
            <div>
              <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Send</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Optionally schedule and set pacing before launch.
                </p>

                <div className="space-y-5">
                  {/* Schedule */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Schedule (optional)</Label>
                    <div className="relative mt-1.5">
                      <Input
                        type="text"
                        value={scheduleDate}
                        onChange={(e) => setScheduleDate(e.target.value)}
                        placeholder="dd-mm-yyyy --:--"
                        className="h-11 pr-10 border-gray-200"
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-400 mt-1.5">
                      Leave empty to start immediately.
                    </p>
                  </div>

                  {/* Email Gap */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Email gap (minutes)</Label>
                    <Input
                      type="number"
                      value={emailGap}
                      onChange={(e) => setEmailGap(e.target.value)}
                      className="h-11 mt-1.5 border-gray-200"
                    />
                    <p className="text-xs text-gray-400 mt-1.5">
                      Controls pacing and throttling to maintain sender reputation.
                    </p>
                  </div>

                  {/* Launch Button */}
                  <Button 
                    className="w-full h-12 gap-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white"
                  >
                    <Send className="w-4 h-4" />
                    Launch Campaign Now
                  </Button>
                </div>
              </Card>

              {/* Quick Tips */}
              <Card className="p-4 bg-amber-50 rounded-xl border border-amber-100 mt-4">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-amber-800">Pro Tips</p>
                    <ul className="text-xs text-amber-700 mt-1 space-y-1">
                      <li>• Validate your campaign before launching</li>
                      <li>• Use 10-15 minute gaps for better deliverability</li>
                      <li>• Schedule during business hours for higher open rates</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



