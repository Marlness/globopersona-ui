"use client";

import React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="pl-16">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="min-h-[calc(100vh-4rem)]">
          <div className="page-transition">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
