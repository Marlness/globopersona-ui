"use client";

import React from "react";
import { 
  Settings,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Key
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-lg shadow-gray-500/20">
          <Settings className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-500">Manage your account and preferences</p>
        </div>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="bg-gray-100 p-1 rounded-xl">
          <TabsTrigger value="profile" className="gap-2 rounded-lg data-[state=active]:bg-white">
            <User className="w-4 h-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2 rounded-lg data-[state=active]:bg-white">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2 rounded-lg data-[state=active]:bg-white">
            <Shield className="w-4 h-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="appearance" className="gap-2 rounded-lg data-[state=active]:bg-white">
            <Palette className="w-4 h-4" />
            Appearance
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="mt-6">
          <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Ravi" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Admin" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="ravi@globopersona.com" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="mt-1.5" />
              </div>
            </div>

            <div className="flex justify-end mt-6 pt-6 border-t border-gray-100">
              <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
                Save Changes
              </Button>
            </div>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="mt-6">
          <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h2>
            
            <div className="space-y-4">
              {[
                { label: "Email notifications", description: "Receive updates about your campaigns via email" },
                { label: "Campaign alerts", description: "Get notified when campaigns complete or need attention" },
                { label: "Weekly reports", description: "Receive weekly performance summary reports" },
                { label: "Marketing updates", description: "Stay informed about new features and tips" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                  <Switch defaultChecked={index < 2} />
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="mt-6">
          <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Security Settings</h2>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" className="mt-1.5 max-w-md" />
              </div>
              <div>
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" className="mt-1.5 max-w-md" />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" className="mt-1.5 max-w-md" />
              </div>
            </div>

            <div className="flex justify-end mt-6 pt-6 border-t border-gray-100">
              <Button variant="outline" className="mr-3">Cancel</Button>
              <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
                Update Password
              </Button>
            </div>
          </Card>
        </TabsContent>

        {/* Appearance Tab */}
        <TabsContent value="appearance" className="mt-6">
          <Card className="p-6 bg-white rounded-2xl border-0 shadow-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Appearance Settings</h2>
            
            <div className="space-y-6">
              <div>
                <Label className="text-sm font-medium text-gray-700">Theme</Label>
                <div className="flex gap-4 mt-3">
                  <div className="flex items-center gap-2 p-3 border-2 border-violet-500 rounded-xl cursor-pointer bg-violet-50">
                    <div className="w-4 h-4 rounded-full bg-white border border-gray-200" />
                    <span className="text-sm font-medium">Light</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300">
                    <div className="w-4 h-4 rounded-full bg-gray-900" />
                    <span className="text-sm font-medium">Dark</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium">System</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-t border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-900">Compact Mode</p>
                  <p className="text-xs text-gray-500">Use a more compact layout</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
