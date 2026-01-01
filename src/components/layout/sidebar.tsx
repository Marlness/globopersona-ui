"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  Users,
  Mail,
  Send,
  BarChart3,
  LogOut,
  Settings,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Email Lists", href: "/lists", icon: Users },
  { name: "Email Accounts", href: "/accounts", icon: Mail },
  { name: "Email Campaigns", href: "/campaigns", icon: Send },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
];

const bottomNavigation = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Logout", href: "/logout", icon: LogOut },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={0}>
      <aside className="fixed left-0 top-0 z-40 h-screen w-16 flex flex-col bg-white border-r border-gray-100 shadow-sm">
        {/* Logo */}
        <div className="flex h-16 items-center justify-center border-b border-gray-100">
          <Link href="/" className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Mail className="h-5 w-5 text-white" />
            </div>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 flex flex-col items-center py-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== "/" && pathname.startsWith(item.href));
            
            return (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200",
                      isActive
                        ? "bg-violet-50 text-violet-600"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    )}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-violet-600 rounded-r-full" />
                    )}
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="font-medium">
                  {item.name}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </nav>

        {/* Bottom Navigation */}
        <div className="flex flex-col items-center py-4 space-y-1 border-t border-gray-100">
          {bottomNavigation.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200",
                      item.name === "Logout"
                        ? "text-gray-400 hover:bg-red-50 hover:text-red-500"
                        : isActive
                        ? "bg-violet-50 text-violet-600"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    )}
                  >
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="font-medium">
                  {item.name}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </aside>
    </TooltipProvider>
  );
}
