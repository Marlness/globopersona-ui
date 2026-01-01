"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft,
  Eye,
  Target,
  Users,
  Sparkles,
  Check,
  X,
  Edit,
  RefreshCw,
  Search,
  ChevronDown,
  Mail,
  Bot
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { aiEmailPitches } from "@/lib/mock-data";

const colorVariants = ["bg-emerald-500", "bg-violet-500", "bg-blue-500", "bg-pink-500", "bg-amber-500"];

export default function EmailPreviewPage() {
  const [pitches, setPitches] = useState(aiEmailPitches.map(p => ({
    ...p,
    status: "pending" as "pending" | "approved" | "rejected"
  })));

  const approvedCount = pitches.filter(p => p.status === "approved").length;
  const pendingCount = pitches.filter(p => p.status === "pending").length;
  const rejectedCount = pitches.filter(p => p.status === "rejected").length;
  const avgConfidence = Math.round(pitches.reduce((sum, p) => sum + p.confidence, 0) / pitches.length);

  const handleApprove = (id: string) => {
    setPitches(prev => prev.map(p => p.id === id ? { ...p, status: "approved" as const } : p));
  };

  const handleReject = (id: string) => {
    setPitches(prev => prev.map(p => p.id === id ? { ...p, status: "rejected" as const } : p));
  };

  const handleApproveAll = () => {
    setPitches(prev => prev.map(p => ({ ...p, status: "approved" as const })));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 to-cyan-50/50">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href="/campaigns/contacts">
            <Button variant="ghost" size="sm" className="gap-2 text-gray-600">
              <ArrowLeft className="w-4 h-4" />
              Back to Content Selection
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AI Generated Email Preview</h1>
              <p className="text-sm text-gray-500">
                {pitches.length} AI-generated emails ready for review ({pitches.length} total contacts selected)
              </p>
            </div>
          </div>

          {/* Campaign Info Bar */}
          <Card className="p-4 bg-white rounded-xl border-0 shadow-card mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Campaign</p>
                    <p className="text-sm font-medium text-gray-900">land scaping</p>
                    <Badge className="badge-ai text-xs mt-1">
                      AI Powered
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Total Selected</p>
                    <p className="text-sm font-medium text-gray-900">5 contacts</p>
                    <p className="text-xs text-gray-400">From test360marco</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Generated</p>
                    <p className="text-sm font-medium text-emerald-600">{pitches.length} emails</p>
                    <p className="text-xs text-gray-400">{5 - pitches.length} still need generation</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Status</p>
                    <p className="text-sm font-medium text-emerald-600">{approvedCount} approved</p>
                    <p className="text-xs text-gray-400">Step: 3/4</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Row */}
          <div className="grid grid-cols-6 gap-4 mb-6">
            <Card className="p-4 bg-white rounded-xl border-0 shadow-card text-center">
              <p className="text-2xl font-bold text-gray-900">5</p>
              <p className="text-xs text-gray-500">Total Contacts</p>
              <p className="text-xs text-gray-400 mt-1">Selected for campaign</p>
            </Card>
            <Card className="p-4 bg-white rounded-xl border-0 shadow-card text-center">
              <p className="text-2xl font-bold text-violet-600">{pitches.length}</p>
              <p className="text-xs text-gray-500">Generated</p>
              <p className="text-xs text-gray-400 mt-1">{5 - pitches.length} still need generation</p>
            </Card>
            <Card className="p-4 bg-white rounded-xl border-0 shadow-card text-center">
              <p className="text-2xl font-bold text-emerald-600">{approvedCount}</p>
              <p className="text-xs text-gray-500">Approved</p>
              <p className="text-xs text-gray-400 mt-1">Ready to send</p>
            </Card>
            <Card className="p-4 bg-white rounded-xl border-0 shadow-card text-center">
              <p className="text-2xl font-bold text-amber-600">{pendingCount}</p>
              <p className="text-xs text-gray-500">Pending</p>
              <p className="text-xs text-gray-400 mt-1">{pendingCount} review + 2 generate</p>
            </Card>
            <Card className="p-4 bg-white rounded-xl border-0 shadow-card text-center">
              <p className="text-2xl font-bold text-red-500">{rejectedCount}</p>
              <p className="text-xs text-gray-500">Rejected</p>
              <p className="text-xs text-gray-400 mt-1">Need regeneration</p>
            </Card>
            <Card className="p-4 bg-white rounded-xl border-0 shadow-card text-center">
              <p className="text-2xl font-bold text-blue-600">{avgConfidence}%</p>
              <p className="text-xs text-gray-500">Avg Confidence</p>
              <p className="text-xs text-gray-400 mt-1">AI Quality</p>
            </Card>
          </div>

          {/* Filters & Actions */}
          <Card className="p-4 bg-white rounded-xl border-0 shadow-card mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    placeholder="Search pitches by name, email, or subject..."
                    className="pl-10 h-10 bg-gray-50 border-gray-200"
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-32 h-10 bg-gray-50 border-gray-200">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={handleApproveAll} className="gap-2">
                  <Check className="w-4 h-4" />
                  Approve All
                </Button>
              </div>
              
              <Link href="/campaigns/validate">
                <Button 
                  className="h-10 gap-2 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700"
                  disabled={approvedCount === 0}
                >
                  <Check className="w-4 h-4" />
                  Validate & Schedule ({approvedCount}) →
                </Button>
              </Link>
            </div>

            <div className="mt-3 text-sm">
              <span className="text-gray-600">Campaign Progress: </span>
              <span className="text-gray-900">{pitches.length} of 5 emails generated (60%)</span>
              <span className="text-gray-600"> • </span>
              <span className="text-emerald-600">{approvedCount} approved</span>
              <span className="text-gray-600"> • </span>
              <span className="text-amber-600">{pendingCount} pending review</span>
              <span className="text-gray-600"> • </span>
              <span className="text-gray-400">2 awaiting generation</span>
              <span className="text-gray-600"> • </span>
              <span className="text-red-500">{rejectedCount} rejected</span>
            </div>

            {5 - pitches.length > 0 && (
              <p className="mt-2 text-xs text-amber-600">
                ⚠️ {5 - pitches.length} contacts still need email generation
              </p>
            )}
          </Card>

          {/* Email Pitches */}
          <div className="space-y-4">
            {pitches.map((pitch, index) => {
              const initials = `${pitch.contact.firstName[0]}${pitch.contact.lastName[0]}`;
              const colorClass = colorVariants[index % colorVariants.length];
              
              return (
                <Card key={pitch.id} className={`bg-white rounded-2xl border-0 shadow-card overflow-hidden ${
                  pitch.status === "approved" ? "ring-2 ring-emerald-200" : ""
                }`}>
                  {/* Contact Header */}
                  <div className="p-5 border-b border-gray-100">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className={`${colorClass} text-white font-medium`}>
                            {initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {pitch.contact.firstName} {pitch.contact.lastName}
                          </p>
                          <p className="text-sm text-gray-500">{pitch.contact.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100">
                          {pitch.confidence}% Confidence
                        </Badge>
                        <span className="text-sm text-gray-500">{pitch.tokens} tokens</span>
                        <Badge className={
                          pitch.status === "approved" ? "badge-completed" :
                          pitch.status === "rejected" ? "badge-poor" :
                          "badge-running"
                        }>
                          {pitch.status.charAt(0).toUpperCase() + pitch.status.slice(1)}
                        </Badge>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {pitch.tags.slice(0, 12).map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-blue-50 text-blue-600 border-blue-100">
                          {tag}
                        </Badge>
                      ))}
                      {pitch.tags.length > 12 && (
                        <span className="text-xs text-gray-400">+{pitch.tags.length - 12} more</span>
                      )}
                    </div>
                  </div>

                  {/* Email Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Mail className="w-4 h-4" />
                      Subject Line
                    </div>
                    <p className="text-base font-medium text-gray-900 mb-4">{pitch.subjectLine}</p>

                    <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 leading-relaxed max-h-48 overflow-y-auto">
                      {pitch.body.split('\n\n').map((paragraph, i) => (
                        <p key={i} className={i > 0 ? "mt-3" : ""}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-5 pb-5 flex items-center gap-3">
                    <Button 
                      variant={pitch.status === "approved" ? "default" : "outline"}
                      size="sm"
                      className={pitch.status === "approved" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
                      onClick={() => handleApprove(pitch.id)}
                    >
                      <Check className="w-4 h-4 mr-1" />
                      {pitch.status === "approved" ? "Approved" : "Approve"}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleReject(pitch.id)}
                    >
                      <X className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="w-4 h-4 mr-1" />
                      Regenerate
                    </Button>
                  </div>
                </Card>
              );
            })}

            {/* Ready to Generate CTA */}
            {5 - pitches.length > 0 && (
              <Card className="p-8 bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl border-0 shadow-card text-center text-white">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Ready to Generate AI Emails</h3>
                <p className="text-sm text-white/80 mb-4">
                  Generate personalized emails for your first 3 contacts using AI
                  <br />
                  <span className="text-white/60">(5 total contacts selected)</span>
                </p>
                <Button className="bg-white text-violet-600 hover:bg-white/90">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Email Pitches →
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



