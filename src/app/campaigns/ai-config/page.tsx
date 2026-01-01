"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft,
  Mail,
  Users,
  Settings,
  Sparkles,
  MessageSquare,
  Check,
  Target,
  Briefcase,
  FileText,
  X,
  Send,
  Bot,
  Loader2
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { aiConfiguration } from "@/lib/mock-data";

interface Message {
  role: "assistant" | "user";
  content: string;
}

export default function AIConfigPage() {
  const [showChat, setShowChat] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm excited to help you configure your email campaign. To get started, could you please share some details about your company or business? Specifically, what is your company name, and what do you specialize in?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);

  const totalSteps = 8;
  const progress = (currentStep / totalSteps) * 100;

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: "user", content: inputValue }]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Thank you for sharing that detailed information about Whittlesey Landscape Supplies! Now, could you please describe the specific products or services that you will be promoting in this campaign?",
        "Great! It sounds like you offer a comprehensive range of landscaping supplies. Now, could you provide more details about your target audience? Specifically, what are the characteristics of the landscaping contractors you aim to reach?",
        "Thank you for that information! Now, let's dive into the key pain points your target audience may be experiencing. What challenges do landscaping contractors, property managers, and homeowners typically face?",
        "Thank you for outlining those key pain points and the solutions you offer. Now, let's discuss the desired communication tone for your email campaign. How would you like the tone of your emails to come across?",
        "Understood! A formal yet friendly tone will be effective for building relationships. Now, what would you like the primary call-to-action (CTA) to be in your email campaign?",
        "Got it! Your primary call-to-action will encourage recipients to either send their supplies list for a quote or visit your office for lunch and review your offerings. Finally, can you please share your unique value proposition?",
        "Perfect! I have all the information needed. Your AI configuration is complete!"
      ];

      const nextStep = Math.min(currentStep + 1, totalSteps);
      setCurrentStep(nextStep);
      
      if (nextStep >= totalSteps) {
        setIsConfigured(true);
      }

      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: responses[Math.min(currentStep - 1, responses.length - 1)]
      }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href="/campaigns/new">
            <Button variant="ghost" size="sm" className="gap-2 text-gray-600">
              <ArrowLeft className="w-4 h-4" />
              Back to Choose Approach
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Configure AI Assistant</h1>
              <p className="text-sm text-gray-500">Set up AI personalization for your campaign</p>
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
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Email List</p>
                    <p className="text-sm font-medium text-gray-900">test360marco</p>
                    <p className="text-xs text-gray-400">5 contacts</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">AI Status</p>
                    <Badge className={isConfigured ? "badge-completed" : "badge-running"}>
                      {isConfigured ? "✓ Configured" : "⏳ Pending Setup"}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Configuration */}
            <div className="lg:col-span-2">
              <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                  <h2 className="text-base font-semibold text-gray-900">AI Assistant Configuration</h2>
                </div>

                {!isConfigured ? (
                  /* Configuration Pending */
                  <div className="text-center py-8">
                    <div className="relative inline-block mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center">
                        <Bot className="w-8 h-8 text-violet-600" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Let&apos;s Configure Your AI Assistant
                    </h3>
                    <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
                      Our AI will ask strategic questions to create highly personalized email content for 5 contacts.
                    </p>

                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="p-4 bg-gray-50 rounded-xl text-center min-w-[120px]">
                        <Target className="w-5 h-5 text-violet-500 mx-auto mb-2" />
                        <p className="text-xs font-medium text-gray-900">Smart Targeting</p>
                        <p className="text-xs text-gray-500">Audience-specific messaging</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl text-center min-w-[120px]">
                        <Sparkles className="w-5 h-5 text-violet-500 mx-auto mb-2" />
                        <p className="text-xs font-medium text-gray-900">AI Personalization</p>
                        <p className="text-xs text-gray-500">Unique content per contact</p>
                      </div>
                    </div>

                    <Button 
                      className="h-11 px-6 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                      onClick={() => setShowChat(true)}
                    >
                      <Bot className="w-4 h-4 mr-2" />
                      Start AI Configuration →
                    </Button>
                  </div>
                ) : (
                  /* Configuration Complete */
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-emerald-600">Configuration Complete</span>
                      <Badge variant="secondary">✓ Ready for Contact Selection</Badge>
                      <span className="text-xs text-gray-400">10/11/2025</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-4 h-4 text-blue-500" />
                          <span className="text-xs font-medium text-gray-700">Company Info</span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-3">
                          {aiConfiguration.companyInfo}
                        </p>
                        <button className="text-xs text-violet-600 mt-2">Read more</button>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-emerald-500" />
                          <span className="text-xs font-medium text-gray-700">Product/Service</span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-3">
                          {aiConfiguration.productService}
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-4 h-4 text-purple-500" />
                          <span className="text-xs font-medium text-gray-700">Target Audience</span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-3">
                          {aiConfiguration.targetAudience}
                        </p>
                        <button className="text-xs text-violet-600 mt-2">Read more</button>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-red-500">⚠️</span>
                          <span className="text-xs font-medium text-gray-700">Pain Points</span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-3">
                          {aiConfiguration.painPoints}
                        </p>
                        <button className="text-xs text-violet-600 mt-2">Read more</button>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Settings className="w-4 h-4 text-gray-500" />
                        <span className="text-xs font-medium text-gray-700">Configuration Settings</span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs p-2 bg-pink-50 text-pink-600 rounded">
                          Tone: {aiConfiguration.tone}
                        </p>
                        <p className="text-xs p-2 bg-blue-50 text-blue-600 rounded">
                          CTA: {aiConfiguration.cta}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          Value Proposition: {aiConfiguration.valueProposition.substring(0, 60)}...
                        </p>
                        <button className="text-xs text-violet-600">Read more</button>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button variant="outline" className="gap-2">
                        <Settings className="w-4 h-4" />
                        Reconfigure
                      </Button>
                      <Button variant="outline" className="gap-2">
                        <FileText className="w-4 h-4" />
                        View Full Details
                      </Button>
                      <Link href="/campaigns/contacts">
                        <Button className="gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
                          <Users className="w-4 h-4" />
                          Select Target Contacts →
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </Card>
            </div>

            {/* Right Column - AI Personalization Info */}
            <div>
              <Card className="p-6 bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl border-0 shadow-card text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="text-base font-semibold">AI Personalization</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-violet-200 mb-2">For Each Contact:</p>
                    <ul className="space-y-1.5 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400" />
                        Personalized subject line
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400" />
                        Tailored email content
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400" />
                        Relevant pain points
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400" />
                        Custom call-to-action
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-xs text-violet-200 mb-2">Using Your Configuration:</p>
                    <ul className="space-y-1.5 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-violet-300" />
                        Business information
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-violet-300" />
                        Product/service details
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-violet-300" />
                        Target audience insights
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-violet-300" />
                        Communication preferences
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white rounded-2xl border-0 shadow-card mt-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">→ Next Steps</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-xs font-bold">1</span>
                    <span className="text-sm text-violet-600 font-medium">Configure AI Assistant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xs font-bold">2</span>
                    <span className="text-sm text-gray-500">Select target contacts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xs font-bold">3</span>
                    <span className="text-sm text-gray-500">Generate personalized emails</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xs font-bold">4</span>
                    <span className="text-sm text-gray-500">Review and send campaign</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-full max-w-lg mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="ai-header-gradient p-4 text-white">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Email Strategist</h3>
                    <p className="text-xs text-white/80">Creating 5 personalized emails</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white/80 hover:text-white hover:bg-white/20"
                  onClick={() => {
                    setShowChat(false);
                    if (currentStep >= totalSteps) {
                      setIsConfigured(true);
                    }
                  }}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge className="bg-white/20 text-white border-0 text-xs">
                  Step {currentStep} of {totalSteps}
                </Badge>
                <span className="text-xs text-white/60">{Math.round(progress)}%</span>
              </div>
              <div className="h-1 bg-white/20 rounded-full overflow-hidden mt-2">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[300px] overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((message, index) => (
                <div 
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center mr-2 flex-shrink-0">
                      <Bot className="w-4 h-4 text-violet-600" />
                    </div>
                  )}
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-tr-sm"
                        : "bg-gray-100 text-gray-700 rounded-tl-sm"
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center ml-2 flex-shrink-0">
                      <Users className="w-4 h-4 text-violet-600" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center mr-2">
                    <Bot className="w-4 h-4 text-violet-600" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-sm">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-gray-500">AI is thinking</span>
                      <span className="animate-pulse">• • •</span>
                    </div>
                  </div>
                </div>
              )}

              {isConfigured && (
                <div className="text-center py-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Configuration Complete! 🎉</h4>
                  <p className="text-sm text-gray-500 mt-1">Generating personalized emails...</p>
                  <p className="text-xs text-gray-400 mt-2 flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    This will take just a moment
                  </p>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a detailed answer..."
                  className="min-h-[44px] max-h-[120px] resize-none border-gray-200"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.ctrlKey) {
                      handleSendMessage();
                    }
                  }}
                />
                <Button 
                  className="h-11 px-4 bg-pink-500 hover:bg-pink-600"
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </Button>
              </div>
              <p className="text-xs text-gray-400 text-right mt-1">Ctrl+Enter</p>
            </div>

            {/* Footer */}
            <div className="px-4 pb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Sparkles className="w-3 h-3 text-violet-500" />
                AI Configuration
              </div>
              <div className="flex items-center gap-1">
                {[...Array(totalSteps)].map((_, i) => (
                  <div 
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < currentStep ? "bg-emerald-500" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

