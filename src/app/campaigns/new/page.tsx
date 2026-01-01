"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  Mail,
  Users,
  Palette,
  Send,
  Clock,
  Sparkles,
  Bold,
  Italic,
  Link2,
  Image,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Eye,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { emailLists } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const steps = [
  { id: "details", title: "Campaign Details", icon: Mail },
  { id: "audience", title: "Select Audience", icon: Users },
  { id: "content", title: "Design Email", icon: Palette },
  { id: "review", title: "Review & Send", icon: Send },
];

export default function NewCampaignPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedLists, setSelectedLists] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    preheader: "",
    fromName: "Globopersona",
    fromEmail: "hello@globopersona.com",
    replyTo: "support@globopersona.com",
    content: "",
    scheduleType: "now",
    scheduleDate: "",
    scheduleTime: "",
    trackOpens: true,
    trackClicks: true,
  });

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleList = (listId: string) => {
    setSelectedLists((prev) =>
      prev.includes(listId)
        ? prev.filter((id) => id !== listId)
        : [...prev, listId]
    );
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const totalRecipients = selectedLists.reduce((total, listId) => {
    const list = emailLists.find((l) => l.id === listId);
    return total + (list?.contactCount || 0);
  }, 0);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/campaigns">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">Create Campaign</h1>
          <p className="text-muted-foreground">
            Design and send your email campaign
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => setCurrentStep(index)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-4 py-3 transition-colors",
                    isActive && "bg-primary/10",
                    !isActive && !isCompleted && "opacity-60"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                      isActive && "bg-primary text-primary-foreground",
                      isCompleted && "bg-green-500 text-white",
                      !isActive && !isCompleted && "bg-muted text-muted-foreground"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p
                      className={cn(
                        "text-sm font-medium",
                        isActive && "text-primary"
                      )}
                    >
                      Step {index + 1}
                    </p>
                    <p className="text-xs text-muted-foreground">{step.title}</p>
                  </div>
                </button>
                {index < steps.length - 1 && (
                  <ChevronRight className="h-5 w-5 text-muted-foreground mx-2" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Steps */}
      <div className="md:hidden">
        <div className="flex items-center justify-between rounded-lg bg-muted p-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <button
                key={step.id}
                onClick={() => setCurrentStep(index)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                  isActive && "bg-primary text-primary-foreground",
                  isCompleted && "bg-green-500 text-white",
                  !isActive && !isCompleted && "text-muted-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
              </button>
            );
          })}
        </div>
        <p className="text-center text-sm font-medium mt-3">
          {steps[currentStep].title}
        </p>
      </div>

      {/* Step Content */}
      <div className="animate-fade-in">
        {/* Step 1: Campaign Details */}
        {currentStep === 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Campaign Details</CardTitle>
              <CardDescription>
                Set up the basic information for your campaign
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Campaign Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Holiday Sale Newsletter"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Internal name to identify this campaign
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Email Subject</Label>
                  <div className="relative">
                    <Input
                      id="subject"
                      placeholder="e.g., 🎉 Don't miss our biggest sale!"
                      value={formData.subject}
                      onChange={(e) => updateFormData("subject", e.target.value)}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-primary"
                    >
                      <Sparkles className="h-4 w-4 mr-1" />
                      AI Suggest
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preheader">Preview Text (Preheader)</Label>
                  <Input
                    id="preheader"
                    placeholder="Text that appears after the subject line"
                    value={formData.preheader}
                    onChange={(e) => updateFormData("preheader", e.target.value)}
                  />
                </div>

                <Separator className="my-6" />

                <h4 className="font-medium">Sender Information</h4>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fromName">From Name</Label>
                    <Input
                      id="fromName"
                      value={formData.fromName}
                      onChange={(e) => updateFormData("fromName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fromEmail">From Email</Label>
                    <Input
                      id="fromEmail"
                      type="email"
                      value={formData.fromEmail}
                      onChange={(e) => updateFormData("fromEmail", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="replyTo">Reply-To Email</Label>
                  <Input
                    id="replyTo"
                    type="email"
                    value={formData.replyTo}
                    onChange={(e) => updateFormData("replyTo", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Audience Selection */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Select Your Audience</CardTitle>
              <CardDescription>
                Choose which subscriber lists to send this campaign to
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Selected Summary */}
              {selectedLists.length > 0 && (
                <div className="rounded-lg border bg-primary/5 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-primary">
                        {selectedLists.length} list(s) selected
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Total recipients: {totalRecipients.toLocaleString()}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedLists([])}
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              )}

              {/* Lists Grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                {emailLists.map((list) => {
                  const isSelected = selectedLists.includes(list.id);
                  return (
                    <button
                      key={list.id}
                      onClick={() => toggleList(list.id)}
                      className={cn(
                        "flex items-start gap-4 rounded-xl border p-4 text-left transition-all hover:border-primary/50",
                        isSelected && "border-primary bg-primary/5"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        )}
                      >
                        <Users className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{list.name}</p>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {list.description}
                        </p>
                        <p className="text-sm font-medium text-primary mt-1">
                          {list.contactCount.toLocaleString()} contacts
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Email Design */}
        {currentStep === 2 && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Design Your Email</CardTitle>
                <CardDescription>
                  Create your email content using the editor below
                </CardDescription>
              </div>
              <Button variant="outline">
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="editor" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="editor">Visual Editor</TabsTrigger>
                  <TabsTrigger value="html">HTML</TabsTrigger>
                  <TabsTrigger value="templates">Templates</TabsTrigger>
                </TabsList>

                <TabsContent value="editor" className="space-y-4">
                  {/* Formatting Toolbar */}
                  <div className="flex flex-wrap items-center gap-1 rounded-lg border p-2">
                    <Button variant="ghost" size="icon-sm">
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                      <Italic className="h-4 w-4" />
                    </Button>
                    <Separator orientation="vertical" className="h-6 mx-1" />
                    <Button variant="ghost" size="icon-sm">
                      <Link2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                      <Image className="h-4 w-4" />
                    </Button>
                    <Separator orientation="vertical" className="h-6 mx-1" />
                    <Button variant="ghost" size="icon-sm">
                      <List className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                      <ListOrdered className="h-4 w-4" />
                    </Button>
                    <Separator orientation="vertical" className="h-6 mx-1" />
                    <Button variant="ghost" size="icon-sm">
                      <AlignLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                      <AlignCenter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                      <AlignRight className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Editor */}
                  <Textarea
                    placeholder="Start writing your email content here... 

You can personalize your email using merge tags:
• {{first_name}} - Subscriber's first name
• {{company}} - Company name
• {{unsubscribe_link}} - Unsubscribe link"
                    className="min-h-[400px] font-mono text-sm"
                    value={formData.content}
                    onChange={(e) => updateFormData("content", e.target.value)}
                  />
                </TabsContent>

                <TabsContent value="html">
                  <Textarea
                    placeholder="<html>
  <body>
    <!-- Paste your HTML here -->
  </body>
</html>"
                    className="min-h-[400px] font-mono text-sm"
                  />
                </TabsContent>

                <TabsContent value="templates" className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      "Newsletter",
                      "Promotional",
                      "Welcome Email",
                      "Product Update",
                      "Event Invitation",
                      "Plain Text",
                    ].map((template) => (
                      <button
                        key={template}
                        className="group relative overflow-hidden rounded-xl border p-4 text-left transition-all hover:border-primary hover:shadow-md"
                      >
                        <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-muted to-muted/50 mb-3" />
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {template}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Professional {template.toLowerCase()} template
                        </p>
                      </button>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Review & Send */}
        {currentStep === 3 && (
          <div className="space-y-6">
            {/* Campaign Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Review Your Campaign</CardTitle>
                <CardDescription>
                  Double-check everything before sending
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Campaign Name
                      </p>
                      <p className="font-medium">
                        {formData.name || "Untitled Campaign"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Subject</p>
                      <p className="font-medium">
                        {formData.subject || "No subject set"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">From</p>
                      <p className="font-medium">
                        {formData.fromName} &lt;{formData.fromEmail}&gt;
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Recipients
                      </p>
                      <p className="font-medium">
                        {totalRecipients.toLocaleString()} contacts
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedLists.map((listId) => {
                          const list = emailLists.find((l) => l.id === listId);
                          return list ? (
                            <Badge key={listId} variant="secondary" className="text-xs">
                              {list.name}
                            </Badge>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  When to Send
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <button
                    onClick={() => updateFormData("scheduleType", "now")}
                    className={cn(
                      "flex-1 rounded-xl border p-4 text-left transition-all",
                      formData.scheduleType === "now" &&
                        "border-primary bg-primary/5"
                    )}
                  >
                    <p className="font-medium">Send Now</p>
                    <p className="text-sm text-muted-foreground">
                      Start sending immediately
                    </p>
                  </button>
                  <button
                    onClick={() => updateFormData("scheduleType", "schedule")}
                    className={cn(
                      "flex-1 rounded-xl border p-4 text-left transition-all",
                      formData.scheduleType === "schedule" &&
                        "border-primary bg-primary/5"
                    )}
                  >
                    <p className="font-medium">Schedule</p>
                    <p className="text-sm text-muted-foreground">
                      Pick a date and time
                    </p>
                  </button>
                </div>

                {formData.scheduleType === "schedule" && (
                  <div className="grid gap-4 sm:grid-cols-2 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="scheduleDate">Date</Label>
                      <Input
                        id="scheduleDate"
                        type="date"
                        value={formData.scheduleDate}
                        onChange={(e) =>
                          updateFormData("scheduleDate", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="scheduleTime">Time</Label>
                      <Input
                        id="scheduleTime"
                        type="time"
                        value={formData.scheduleTime}
                        onChange={(e) =>
                          updateFormData("scheduleTime", e.target.value)
                        }
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tracking Options */}
            <Card>
              <CardHeader>
                <CardTitle>Tracking Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Track Opens</p>
                    <p className="text-sm text-muted-foreground">
                      Monitor when recipients open your email
                    </p>
                  </div>
                  <Switch
                    checked={formData.trackOpens as boolean}
                    onCheckedChange={(checked) =>
                      updateFormData("trackOpens", checked)
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Track Clicks</p>
                    <p className="text-sm text-muted-foreground">
                      Monitor which links recipients click
                    </p>
                  </div>
                  <Switch
                    checked={formData.trackClicks as boolean}
                    onCheckedChange={(checked) =>
                      updateFormData("trackClicks", checked)
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-4">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>

        <div className="flex gap-3">
          <Button variant="outline">Save as Draft</Button>
          {currentStep < steps.length - 1 ? (
            <Button onClick={nextStep}>
              Next Step
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button className="bg-green-600 hover:bg-green-700">
              <Send className="mr-2 h-4 w-4" />
              {formData.scheduleType === "now"
                ? "Send Campaign"
                : "Schedule Campaign"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

