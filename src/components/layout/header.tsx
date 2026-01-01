"use client";

import React from "react";
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface QuickStat {
  value: string;
  label: string;
}

interface HeaderProps {
  quickStats?: QuickStat[];
}

export function Header({ quickStats }: HeaderProps) {
  const defaultStats: QuickStat[] = [
    { value: "47", label: "Campaigns" },
    { value: "12.8K", label: "Subscribers" },
    { value: "28.4%", label: "Open Rate" },
  ];

  const stats = quickStats || defaultStats;

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between bg-white/80 backdrop-blur-md px-6 border-b border-gray-100">
      {/* Left side - Quick Stats */}
      <div className="flex items-center gap-6">
        <div className="flex items-center bg-gray-50 rounded-xl px-4 py-2 gap-4">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
              {index < stats.length - 1 && (
                <div className="h-8 w-px bg-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-xl text-gray-500 hover:text-gray-700 hover:bg-gray-100">
          <Bell className="h-5 w-5" strokeWidth={1.75} />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </Button>

        {/* Search */}
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-gray-500 hover:text-gray-700 hover:bg-gray-100">
          <Search className="h-5 w-5" strokeWidth={1.75} />
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 h-10 pl-3 pr-2 rounded-xl hover:bg-gray-100">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900">ravi</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <div className="relative">
                <Avatar className="h-8 w-8 ring-2 ring-violet-100">
                  <AvatarImage src="" alt="User avatar" />
                  <AvatarFallback className="bg-gradient-to-br from-violet-500 to-pink-500 text-white text-sm font-medium">
                    R
                  </AvatarFallback>
                </Avatar>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">ravi</p>
                <p className="text-xs text-muted-foreground">ravi@globopersona.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem>Account Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
