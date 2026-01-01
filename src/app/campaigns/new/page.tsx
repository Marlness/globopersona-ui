"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft,
  Mail,
  Users,
  Check,
  ChevronDown,
  Sparkles,
  Zap,
  Target,
  MessageSquare,
  Send,
  Loader2
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { emailLists } from "@/lib/mock-data";

export default function NewCampaignPage() {
  const [step, setStep] = useState(1);
  const [campaignName, setCampaignName] = useState("");
  const [selectedList, setSelectedList] = useState("");
  const [approach, setApproach] = useState<"standard" | "ai" | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const selectedListData = emailLists.find(l => l.id === selectedList);
  const canProceed = campaignName.length > 2 && selectedList;

  const handleNext = () => {
    if (step === 1 && canProceed) {
      setStep(2);
    } else if (step === 2 && approach) {
      if (approach === "ai") {
        // Navigate to AI configuration
        window.location.href = "/campaigns/ai-config";
      } else {
        // Navigate to standard template
        window.location.href = "/campaigns/template";
      }
    }
  };

  const handleCreateCampaign = async () => {
    setIsCreating(true);
    // Simulate API call
    setTimeout(() => {
      setStep(2);
      setIsCreating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href="/campaigns">
            <Button variant="ghost" size="sm" className="gap-2 text-gray-600">
              <ArrowLeft className="w-4 h-4" />
              Back to Campaigns
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {step === 1 && (
          /* Step 1: Campaign Setup */
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-sm text-gray-500">Step 1 of 3</span>
              <h1 className="text-2xl font-bold text-gray-900 mt-1">Create New Campaign</h1>
              <p className="text-gray-500">Set up your campaign name and choose which audience to target</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Campaign Form */}
              <div className="lg:col-span-2">
                <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
                  <div className="flex items-center gap-2 mb-4">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <h2 className="text-base font-semibold text-gray-900">Campaign Details</h2>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">
                    Enter your campaign information and select your target audience
                  </p>

                  <div className="space-y-6">
                    {/* Campaign Name */}
                    <div>
                      <Label htmlFor="campaignName" className="text-sm font-medium text-gray-700">
                        Campaign Name
                      </Label>
                      <Input
                        id="campaignName"
                        value={campaignName}
                        onChange={(e) => setCampaignName(e.target.value)}
                        placeholder="e.g. Summer Sale Outreach"
                        className="mt-1.5 h-11 border-gray-200"
                      />
                      <p className="text-xs text-gray-500 mt-1.5">
                        Choose a descriptive name that helps you identify this campaign later
                      </p>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <Label className="text-sm font-medium text-gray-700">
                        Target Audience
                      </Label>
                      <p className="text-xs text-gray-500 mb-2">
                        Select which email list to send this campaign to
                      </p>
                      
                      <Select value={selectedList} onValueChange={setSelectedList}>
                        <SelectTrigger className="w-full h-11 border-gray-200">
                          <SelectValue placeholder="Select an email list" />
                        </SelectTrigger>
                        <SelectContent>
                          {emailLists.map((list) => (
                            <SelectItem key={list.id} value={list.id}>
                              <div className="flex items-center justify-between w-full">
                                <span>{list.name}</span>
                                <Badge variant="secondary" className="ml-2">
                                  <Users className="w-3 h-3 mr-1" />
                                  {list.validContacts}
                                </Badge>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {/* List Preview */}
                      {selectedList && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                          {emailLists.map((list) => (
                            list.id === selectedList && (
                              <div key={list.id} className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{list.name}</p>
                                  <p className="text-xs text-gray-500">{list.description}</p>
                                </div>
                                <Badge variant="secondary">
                                  <Users className="w-3 h-3 mr-1" />
                                  {list.validContacts}
                                </Badge>
                              </div>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                    <Button variant="ghost" className="text-gray-500">
                      Clear Form
                    </Button>
                    <Button 
                      className="h-11 px-6 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                      disabled={!canProceed || isCreating}
                      onClick={handleCreateCampaign}
                    >
                      {isCreating ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Creating Campaign...
                        </>
                      ) : (
                        <>Next →</>
                      )}
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Campaign Preview */}
              <div>
                <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">Campaign Preview</h3>
                  <p className="text-sm text-gray-500 mb-6">Review your campaign setup</p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Campaign Name</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        {campaignName || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Target Audience</p>
                      {selectedListData ? (
                        <div className="mt-1">
                          <p className="text-sm font-medium text-gray-900">{selectedListData.name}</p>
                          <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                            <Users className="w-3 h-3" />
                            {selectedListData.validContacts} contacts
                          </p>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-400 mt-1">No list selected</p>
                      )}
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Progress</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-gray-600">Step 1 of 3</span>
                        <span className="text-sm font-medium text-gray-900">33%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mt-2">
                        <div className="h-full w-1/3 bg-violet-600 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Next Steps</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-5 h-5 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-xs font-medium">2</span>
                        Choose Your Approach
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium">3</span>
                        Review & Launch
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          /* Step 2: Choose Approach */
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Link href="/campaigns" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-block">
                ← Back to Setup
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Choose Your Approach</h1>
              <p className="text-gray-500 mt-1">
                How would you like to create content for {`"${campaignName}"`}?
              </p>
              <p className="text-sm text-gray-400">
                Select between standard content creation or AI-powered personalization
              </p>
              
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-violet-50 rounded-full text-sm text-violet-600">
                <Mail className="w-4 h-4" />
                Campaign: {campaignName} | 
                <span className="text-gray-500">List: {selectedListData?.name}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Standard Content */}
              <Card 
                className={`p-6 bg-white rounded-2xl border-2 cursor-pointer transition-all ${
                  approach === "standard" 
                    ? "border-violet-500 shadow-lg shadow-violet-500/10" 
                    : "border-gray-100 hover:border-gray-200"
                }`}
                onClick={() => setApproach("standard")}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </div>
                  {approach === "standard" && (
                    <div className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-1">Standard Content</h3>
                <p className="text-sm text-gray-500 mb-4">Single template for all recipients</p>

                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    Quick and easy setup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    Consistent messaging
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    Perfect for announcements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    Full content control
                  </li>
                </ul>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-violet-600 font-medium">📝 Next: Create email content template</p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Best For:</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Newsletters, product launches, event invitations
                  </p>
                </div>
              </Card>

              {/* AI Personalization */}
              <Card 
                className={`p-6 bg-white rounded-2xl border-2 cursor-pointer transition-all relative overflow-hidden ${
                  approach === "ai" 
                    ? "border-violet-500 shadow-lg shadow-violet-500/10" 
                    : "border-gray-100 hover:border-gray-200"
                }`}
                onClick={() => setApproach("ai")}
              >
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white border-0">
                  AI POWERED
                </Badge>

                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-100 to-pink-100 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-violet-600" />
                  </div>
                  {approach === "ai" && (
                    <div className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-1">AI Personalization</h3>
                <p className="text-sm text-gray-500 mb-4">Tailored emails for each recipient</p>

                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-violet-500">✓</span>
                    Personalized subject lines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-violet-500">✓</span>
                    Higher engagement rates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-violet-500">✓</span>
                    Smart content recommendations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-violet-500">✓</span>
                    Automated A/B testing
                  </li>
                </ul>

                <div className="mt-4 p-3 bg-violet-50 rounded-lg">
                  <p className="text-xs text-violet-600 font-medium">🤖 Next: Configure AI Assistant</p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Best For:</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Sales outreach, customer retention, recommendations
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Target className="w-3 h-3" />
                      Better targeting
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Higher ROI
                    </span>
                  </div>
                </div>

                {approach === "ai" && (
                  <p className="text-center text-xs text-violet-600 mt-4">✓ Selected</p>
                )}
              </Card>
            </div>

            {/* Continue Button */}
            <div className="mt-8 text-center">
              <Button 
                className="h-12 px-8 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700"
                disabled={!approach}
                onClick={handleNext}
              >
                {approach === "ai" ? "Configure AI Assistant →" : "Create Email Template →"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
