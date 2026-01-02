"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LogoutPage() {
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, this would clear auth tokens, session, etc.
    // For demo purposes, just redirect to home
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50/50 flex items-center justify-center p-6">
      <Card className="p-8 bg-white rounded-2xl border-0 shadow-card max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-4">
          <LogOut className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Log Out</h1>
        <p className="text-sm text-gray-500 mb-6">
          Are you sure you want to log out of your account?
        </p>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button 
            className="flex-1 bg-red-600 hover:bg-red-700"
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>
      </Card>
    </div>
  );
}

