"use client";

import {
  BookOpen,
  MessageCircle,
  Mail,
  FileText,
  Video,
  ExternalLink,
  Search,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const resources = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics of Globopersona",
    icon: BookOpen,
    href: "#",
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step walkthroughs",
    icon: Video,
    href: "#",
  },
  {
    title: "Documentation",
    description: "Detailed feature documentation",
    icon: FileText,
    href: "#",
  },
  {
    title: "API Reference",
    description: "Technical API documentation",
    icon: ExternalLink,
    href: "#",
  },
];

const faqs = [
  {
    question: "How do I create my first campaign?",
    answer:
      "Navigate to Campaigns, click 'Create Campaign', and follow the step-by-step wizard to set up your email.",
  },
  {
    question: "How can I import contacts?",
    answer:
      "Go to Contacts, click 'Import', and upload a CSV file with your subscriber information.",
  },
  {
    question: "What are automations?",
    answer:
      "Automations are email workflows that send automatically based on triggers like new subscribers or user actions.",
  },
  {
    question: "How do I track email performance?",
    answer:
      "Visit the Analytics page to see open rates, click rates, and other metrics for your campaigns.",
  },
];

export default function HelpPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
        <p className="text-muted-foreground">
          Find answers, resources, and get in touch with our support team.
        </p>
      </div>

      {/* Search */}
      <Card className="animate-fade-in">
        <CardContent className="p-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold">How can we help you?</h2>
            <div className="relative">
              <Input
                placeholder="Search for help articles..."
                className="h-12 text-lg pl-12"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resources Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <Card
              key={resource.title}
              className="animate-fade-in hover:shadow-lg transition-shadow group cursor-pointer"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* FAQ Section */}
      <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Quick answers to common questions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border hover:bg-muted/50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-medium group-hover:text-primary transition-colors">
                  {faq.question}
                </h4>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">{faq.answer}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Contact Support */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Chat with our support team in real-time. Available Mon-Fri, 9am-6pm EST.
                </p>
                <Button className="mt-4">Start Chat</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Email Support</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Send us an email and we&apos;ll get back to you within 24 hours.
                </p>
                <Button variant="outline" className="mt-4">
                  support@globopersona.com
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

