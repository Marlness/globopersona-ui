"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft,
  Users,
  Search,
  Check,
  Target,
  FileText,
  Sparkles,
  Mail,
  Building,
  MapPin,
  Phone,
  LayoutGrid,
  Table as TableIcon
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { contacts } from "@/lib/mock-data";

const colorVariants = ["bg-violet-500", "bg-emerald-500", "bg-blue-500", "bg-pink-500", "bg-amber-500"];

export default function ContactSelectionPage() {
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");

  const toggleContact = (id: string) => {
    setSelectedContacts(prev => 
      prev.includes(id) 
        ? prev.filter(c => c !== id)
        : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedContacts.length === contacts.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(contacts.map(c => c.id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href="/campaigns/ai-config">
            <Button variant="ghost" size="sm" className="gap-2 text-gray-600">
              <ArrowLeft className="w-4 h-4" />
              Back to AI Configuration
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Select Target Audience</h1>
                <p className="text-sm text-gray-500">Choose contacts for AI personalization</p>
              </div>
            </div>

            <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-lg">
              <Button
                variant={viewMode === "table" ? "secondary" : "ghost"}
                size="sm"
                className={`h-8 gap-2 ${viewMode === "table" ? "bg-white shadow-sm" : ""}`}
                onClick={() => setViewMode("table")}
              >
                <TableIcon className="w-4 h-4" />
                Table
              </Button>
              <Button
                variant={viewMode === "cards" ? "secondary" : "ghost"}
                size="sm"
                className={`h-8 gap-2 ${viewMode === "cards" ? "bg-white shadow-sm" : ""}`}
                onClick={() => setViewMode("cards")}
              >
                <LayoutGrid className="w-4 h-4" />
                Cards
              </Button>
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
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI Personalized
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Email List</p>
                    <p className="text-sm font-medium text-gray-900">test360marco</p>
                    <p className="text-xs text-emerald-600">✓ Connected</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Available Contacts</p>
                    <p className="text-sm font-medium text-gray-900">{contacts.length} contacts</p>
                    <p className="text-xs text-gray-400">Ready for AI processing</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Selected</p>
                    <p className="text-sm font-medium text-emerald-600">{selectedContacts.length} contacts</p>
                    <p className="text-xs text-gray-400">Step: 2/4</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Filters & Actions */}
          <Card className="p-4 bg-white rounded-xl border-0 shadow-card mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    placeholder="Search contacts..."
                    className="pl-10 h-10 bg-gray-50 border-gray-200"
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-36 h-10 bg-gray-50 border-gray-200">
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={toggleAll}>
                  {selectedContacts.length === contacts.length ? "Deselect All" : "Select All"}
                </Button>
              </div>
              
              <Link href="/campaigns/preview">
                <Button 
                  className="h-10 gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                  disabled={selectedContacts.length === 0}
                >
                  <Sparkles className="w-4 h-4" />
                  Continue with {selectedContacts.length} contacts →
                </Button>
              </Link>
            </div>
          </Card>

          {/* Contacts Table */}
          <Card className="bg-white rounded-2xl border-0 shadow-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 hover:bg-gray-50">
                  <TableHead className="w-12">
                    <Checkbox 
                      checked={selectedContacts.length === contacts.length}
                      onCheckedChange={toggleAll}
                    />
                  </TableHead>
                  <TableHead className="font-medium">Name ↕</TableHead>
                  <TableHead className="font-medium">Email ↕</TableHead>
                  <TableHead className="font-medium">Company ↕</TableHead>
                  <TableHead className="font-medium">Job Title ↕</TableHead>
                  <TableHead className="font-medium">Location ↕</TableHead>
                  <TableHead className="font-medium">Phone</TableHead>
                  <TableHead className="font-medium text-right">AI Potential</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact, index) => {
                  const isSelected = selectedContacts.includes(contact.id);
                  const initials = `${contact.firstName[0]}${contact.lastName[0]}`;
                  const colorClass = colorVariants[index % colorVariants.length];
                  
                  return (
                    <TableRow 
                      key={contact.id}
                      className={`cursor-pointer transition-colors ${isSelected ? "bg-violet-50" : "hover:bg-gray-50"}`}
                      onClick={() => toggleContact(contact.id)}
                    >
                      <TableCell>
                        <Checkbox 
                          checked={isSelected}
                          onCheckedChange={() => toggleContact(contact.id)}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback className={`${colorClass} text-white text-xs font-medium`}>
                              {initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {contact.firstName} {contact.lastName}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                          <Mail className="w-3.5 h-3.5 text-gray-400" />
                          {contact.email}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                          <Building className="w-3.5 h-3.5 text-gray-400" />
                          {contact.company}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-xs font-normal">
                          {contact.jobTitle}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" />
                          {contact.city} {contact.state}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                          <Phone className="w-3.5 h-3.5 text-gray-400" />
                          {contact.phone}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <Check className="w-4 h-4 text-emerald-500" />
                          <span className="text-sm text-emerald-600">6 fields</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
}



