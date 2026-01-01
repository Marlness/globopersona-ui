"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft,
  Home,
  Upload,
  FileText,
  Check,
  ChevronDown,
  Info,
  Eye,
  Sparkles,
  Mail,
  User,
  Building,
  Globe,
  MapPin,
  Hash,
  Flag,
  Map,
  Briefcase,
  X
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fieldMappingOptions, contacts } from "@/lib/mock-data";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  mail: Mail,
  user: User,
  briefcase: Briefcase,
  building: Building,
  globe: Globe,
  "map-pin": MapPin,
  map: Map,
  flag: Flag,
  hash: Hash,
};

export default function UploadEmailListPage() {
  const [step, setStep] = useState(1);
  const [listName, setListName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fieldMappings, setFieldMappings] = useState<{ [key: string]: string }>({
    email: "Email",
    firstName: "First Name",
    lastName: "Last Name",
    title: "Contact Title",
    company: "Company Name",
    website: "URL",
    address: "Address",
    city: "City",
    state: "State",
    country: "Country",
    zip: "Zip Code",
  });

  const isNameValid = listName.length > 2;
  const canProceed = isNameValid && file;

  // Mock file data after upload
  const mockFileData = {
    name: "RAVI SAMPLE 1.csv",
    rows: 5,
    columns: 22,
    size: "2.3 KB",
  };

  // Mock preview data
  const previewContacts = contacts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/lists">
              <Button variant="ghost" size="sm" className="gap-2 text-gray-600">
                <ArrowLeft className="w-4 h-4" />
                Email Lists
              </Button>
            </Link>
            <div className="h-6 w-px bg-gray-200" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Upload Email List</h1>
              <p className="text-sm text-gray-500">Import contacts from CSV file</p>
            </div>
          </div>
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 text-gray-600">
              <Home className="w-4 h-4" />
              Dashboard
            </Button>
          </Link>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-100 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className={step === 1 ? "font-medium text-violet-600" : "text-gray-400"}>
              {step === 1 ? "Progress" : "Mapping Progress"}
            </span>
          </div>
          <span className="text-sm text-gray-500">Step {step} of 2</span>
        </div>
        <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full transition-all duration-500"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {step === 1 ? (
          /* Step 1: List Information & Upload */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* List Information */}
              <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
                <h2 className="text-base font-semibold text-gray-900 mb-1">List Information</h2>
                <p className="text-sm text-gray-500 mb-4">Basic details about your email list</p>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="listName" className="text-sm font-medium text-gray-700">
                      List Name
                    </Label>
                    <Input
                      id="listName"
                      value={listName}
                      onChange={(e) => setListName(e.target.value)}
                      placeholder="Newsletter Subscribers"
                      className="mt-1.5 h-11 border-gray-200"
                    />
                    {isNameValid && (
                      <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Looks good
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                      Description (Optional)
                    </Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe the purpose of this list..."
                      className="mt-1.5 min-h-[100px] border-gray-200 resize-none"
                    />
                  </div>
                </div>
              </Card>

              {/* Upload CSV File */}
              <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
                <h2 className="text-base font-semibold text-gray-900 mb-1">Upload CSV File</h2>
                <p className="text-sm text-gray-500 mb-4">Select your CSV file containing contact information</p>

                {!file ? (
                  <div 
                    className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-violet-300 hover:bg-violet-50/50 transition-colors cursor-pointer"
                    onClick={() => {
                      // Simulate file selection
                      setFile(new File([""], "RAVI SAMPLE 1.csv"));
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-3">
                        <Upload className="w-6 h-6 text-gray-400" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">Click to upload</p>
                      <p className="text-xs text-gray-500 mt-1">or drag and drop your CSV file</p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                        <span>🔒 Secure</span>
                        <span>📁 Max 10MB</span>
                        <span>📄 CSV only</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{mockFileData.name}</p>
                          <p className="text-xs text-emerald-600">{mockFileData.rows} rows • {mockFileData.columns} columns</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setFile(null)}>
                        <X className="w-4 h-4 text-gray-400" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xl font-bold text-emerald-600">{mockFileData.rows}</p>
                        <p className="text-xs text-gray-500">Rows</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xl font-bold text-blue-600">{mockFileData.columns}</p>
                        <p className="text-xs text-gray-500">Columns</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xl font-bold text-purple-600">{mockFileData.size}</p>
                        <p className="text-xs text-gray-500">KB</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* CSV Format Tips */}
                <div className="mt-4 p-3 bg-blue-50 rounded-lg flex gap-2">
                  <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-600">
                    <span className="font-medium">CSV Format Tips:</span> Ensure your CSV has headers in the first row. Common columns: Email, First Name, Last Name, Company, Title, Phone, Address, City, State, Country. Quoted fields and embedded commas are supported.
                  </p>
                </div>
              </Card>

              {/* Continue Button */}
              <Button 
                className="w-full h-12 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-medium rounded-xl"
                disabled={!canProceed}
                onClick={() => setStep(2)}
              >
                Continue to Field Mapping →
              </Button>
              {canProceed && (
                <p className="text-center text-xs text-gray-500">Ready to map {mockFileData.rows} contacts</p>
              )}
            </div>

            {/* Right Column - Preview */}
            <div className="space-y-6">
              <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="w-4 h-4 text-gray-400" />
                  <h3 className="text-base font-semibold text-gray-900">Preview</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">Live preview of your data</p>

                {file ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-medium text-gray-500 mb-2">Columns ({mockFileData.columns})</p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Tech", "Email", "Company Name", "URL", "Contact Name", "First Name", "+16"].map((col, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                            {col}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {previewContacts.map((contact, i) => (
                        <div key={i} className="p-3 bg-gray-50 rounded-lg text-xs space-y-1.5">
                          <div className="flex justify-between">
                            <span className="text-gray-400">📧 Email Address:</span>
                            <span className="text-gray-700 font-medium">{contact.email}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">👤 First Name:</span>
                            <span className="text-gray-700">{contact.firstName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">👤 Last Name:</span>
                            <span className="text-gray-700">{contact.lastName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">💼 Title:</span>
                            <span className="text-gray-700">{contact.jobTitle}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">🏢 Company Name:</span>
                            <span className="text-gray-700">{contact.company}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">🌐 Website:</span>
                            <span className="text-gray-700">{contact.website}</span>
                          </div>
                          <p className="text-center text-gray-400 text-xs pt-1">+7 more fields</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-center text-xs text-gray-400">Showing 3 of 5 rows</p>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-emerald-50 rounded-lg text-center">
                        <p className="text-lg font-bold text-emerald-600">{mockFileData.rows}</p>
                        <p className="text-xs text-gray-500">Contacts</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg text-center">
                        <p className="text-lg font-bold text-purple-600">{mockFileData.columns}</p>
                        <p className="text-xs text-gray-500">Fields</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                      <FileText className="w-8 h-8 text-gray-300" />
                    </div>
                    <p className="text-sm font-medium text-gray-500">No data yet</p>
                    <p className="text-xs text-gray-400 mt-1">Upload a CSV file to see preview</p>
                  </div>
                )}
              </Card>
            </div>
          </div>
        ) : (
          /* Step 2: Field Mapping */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Field Mapping */}
            <div className="lg:col-span-2 space-y-4">
              {/* File Info */}
              <Card className="p-4 bg-white rounded-xl border-0 shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{mockFileData.name}</p>
                      <p className="text-xs text-gray-500">{mockFileData.size} • Creating {`"${listName || 'test360marco'}"`}</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-50 text-blue-600 border-blue-100">
                    13 Fields Available
                  </Badge>
                </div>
              </Card>

              {/* Mapping Fields */}
              <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <h2 className="text-base font-semibold text-gray-900">Map CSV Columns to Contact Fields</h2>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  Connect each CSV column to the appropriate contact field. Smart auto-mapping has been applied.
                </p>

                <div className="space-y-4">
                  {fieldMappingOptions.map((field) => {
                    const Icon = iconMap[field.icon] || Mail;
                    const isMapped = fieldMappings[field.id];
                    
                    return (
                      <div 
                        key={field.id}
                        className={`p-4 rounded-xl border-2 transition-colors ${
                          field.required 
                            ? "bg-red-50/50 border-red-100" 
                            : "bg-white border-gray-100"
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                              field.required ? "bg-red-100" : "bg-blue-100"
                            }`}>
                              <Icon className={`w-4 h-4 ${field.required ? "text-red-500" : "text-blue-600"}`} />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-900">{field.label}</span>
                                {field.required && (
                                  <Badge className="text-2xs bg-red-500 text-white border-0">Required</Badge>
                                )}
                              </div>
                              <p className="text-xs text-gray-500">{field.description}</p>
                            </div>
                          </div>
                          {isMapped && (
                            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>

                        <Select 
                          value={fieldMappings[field.id] || ""} 
                          onValueChange={(value) => setFieldMappings({ ...fieldMappings, [field.id]: value })}
                        >
                          <SelectTrigger className="w-full h-10 bg-white border-gray-200">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-gray-400" />
                              <SelectValue placeholder={`Select ${field.label}`} />
                            </div>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Email">Email</SelectItem>
                            <SelectItem value="First Name">First Name</SelectItem>
                            <SelectItem value="Last Name">Last Name</SelectItem>
                            <SelectItem value="Contact Title">Contact Title</SelectItem>
                            <SelectItem value="Company Name">Company Name</SelectItem>
                            <SelectItem value="URL">URL</SelectItem>
                            <SelectItem value="Address">Address</SelectItem>
                            <SelectItem value="City">City</SelectItem>
                            <SelectItem value="State">State</SelectItem>
                            <SelectItem value="Country">Country</SelectItem>
                            <SelectItem value="Zip Code">Zip Code</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>

            {/* Right Column - Mapping Status & Preview */}
            <div className="space-y-6">
              {/* Mapping Status */}
              <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="w-4 h-4 text-gray-400" />
                  <h3 className="text-base font-semibold text-gray-900">Mapping Status</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Fields Mapped</span>
                    <span className="text-sm font-medium text-gray-900">13 of 13</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Required Fields</span>
                    <Badge className="badge-completed">Complete</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Rows</span>
                    <span className="text-sm font-medium text-gray-900">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium text-gray-900">100%</span>
                  </div>
                </div>
              </Card>

              {/* Data Preview */}
              <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-gray-400" />
                  <h3 className="text-base font-semibold text-gray-900">Data Preview</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">Sample of mapped contact data</p>

                <div className="space-y-3">
                  {previewContacts.map((contact, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg text-xs space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-gray-400">📧 Email Address:</span>
                        <span className="text-gray-700 font-medium truncate max-w-[140px]">{contact.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">👤 First Name:</span>
                        <span className="text-gray-700">{contact.firstName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">👤 Last Name:</span>
                        <span className="text-gray-700">{contact.lastName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">💼 Title:</span>
                        <span className="text-gray-700 truncate max-w-[120px]">{contact.jobTitle}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">🏢 Company Name:</span>
                        <span className="text-gray-700 truncate max-w-[120px]">{contact.company}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">🌐 Website:</span>
                        <span className="text-gray-700">{contact.website}</span>
                      </div>
                      <p className="text-center text-gray-400 text-xs pt-1">+7 more fields</p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-xs text-gray-400 mt-3">Showing 3 of 5 rows</p>
              </Card>

              {/* Create Button */}
              <Button 
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-xl gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Create Email List
              </Button>
              <p className="text-center text-xs text-gray-500">Ready to import 5 contacts with 13 mapped fields</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

