// Mock data for the email marketing platform

export interface Campaign {
  id: string;
  name: string;
  subject: string;
  status: "draft" | "scheduled" | "active" | "paused" | "completed";
  type: "email" | "automation" | "a/b-test";
  recipients: number;
  sent: number;
  opens: number;
  clicks: number;
  openRate: number;
  clickRate: number;
  createdAt: string;
  scheduledFor?: string;
  sentAt?: string;
}

export interface Contact {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  company?: string;
  status: "subscribed" | "unsubscribed" | "bounced" | "pending";
  tags: string[];
  lists: string[];
  createdAt: string;
  lastActivity?: string;
}

export interface EmailList {
  id: string;
  name: string;
  description?: string;
  contactCount: number;
  createdAt: string;
}

export interface DashboardStats {
  totalContacts: number;
  activeContacts: number;
  totalCampaigns: number;
  totalSent: number;
  avgOpenRate: number;
  avgClickRate: number;
  monthlyGrowth: number;
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  type: "campaign_sent" | "contact_added" | "contact_subscribed" | "campaign_completed";
  title: string;
  description: string;
  timestamp: string;
}

export interface ChartData {
  name: string;
  sent: number;
  opens: number;
  clicks: number;
}

// Mock Campaigns
export const campaigns: Campaign[] = [
  {
    id: "1",
    name: "Black Friday Sale 2024",
    subject: "🎉 Biggest Sale of the Year - Up to 70% OFF!",
    status: "completed",
    type: "email",
    recipients: 45230,
    sent: 45120,
    opens: 18934,
    clicks: 4521,
    openRate: 41.9,
    clickRate: 10.0,
    createdAt: "2024-11-15T10:00:00Z",
    sentAt: "2024-11-24T08:00:00Z",
  },
  {
    id: "2",
    name: "Holiday Newsletter",
    subject: "Season's Greetings from Globopersona ✨",
    status: "scheduled",
    type: "email",
    recipients: 52100,
    sent: 0,
    opens: 0,
    clicks: 0,
    openRate: 0,
    clickRate: 0,
    createdAt: "2024-12-01T14:30:00Z",
    scheduledFor: "2024-12-20T09:00:00Z",
  },
  {
    id: "3",
    name: "Welcome Series",
    subject: "Welcome to Globopersona! Here's what to expect",
    status: "active",
    type: "automation",
    recipients: 8450,
    sent: 7234,
    opens: 5412,
    clicks: 2156,
    openRate: 74.8,
    clickRate: 29.8,
    createdAt: "2024-06-01T12:00:00Z",
  },
  {
    id: "4",
    name: "Product Update - December",
    subject: "New features you'll love 🚀",
    status: "active",
    type: "email",
    recipients: 38500,
    sent: 38234,
    opens: 14123,
    clicks: 3845,
    openRate: 36.9,
    clickRate: 10.1,
    createdAt: "2024-12-05T16:00:00Z",
    sentAt: "2024-12-06T10:00:00Z",
  },
  {
    id: "5",
    name: "Re-engagement Campaign",
    subject: "We miss you! Come back for 20% off",
    status: "paused",
    type: "automation",
    recipients: 12340,
    sent: 5670,
    opens: 1234,
    clicks: 456,
    openRate: 21.8,
    clickRate: 8.0,
    createdAt: "2024-10-15T09:00:00Z",
  },
  {
    id: "6",
    name: "A/B Test: Subject Line Optimization",
    subject: "Variant A: Shop Now | Variant B: Limited Time Offer",
    status: "completed",
    type: "a/b-test",
    recipients: 10000,
    sent: 9980,
    opens: 4512,
    clicks: 1234,
    openRate: 45.2,
    clickRate: 12.4,
    createdAt: "2024-11-28T11:00:00Z",
    sentAt: "2024-11-29T09:00:00Z",
  },
  {
    id: "7",
    name: "Cyber Monday Flash Sale",
    subject: "⚡ 24 Hours Only - Extra 30% Off Everything",
    status: "completed",
    type: "email",
    recipients: 48000,
    sent: 47850,
    opens: 21045,
    clicks: 6890,
    openRate: 44.0,
    clickRate: 14.4,
    createdAt: "2024-11-26T07:00:00Z",
    sentAt: "2024-12-02T06:00:00Z",
  },
  {
    id: "8",
    name: "New Year Campaign",
    subject: "New Year, New You - Start 2025 Right!",
    status: "draft",
    type: "email",
    recipients: 0,
    sent: 0,
    opens: 0,
    clicks: 0,
    openRate: 0,
    clickRate: 0,
    createdAt: "2024-12-08T15:00:00Z",
  },
];

// Mock Contacts
export const contacts: Contact[] = [
  {
    id: "1",
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (555) 123-4567",
    company: "Acme Corp",
    status: "subscribed",
    tags: ["vip", "newsletter"],
    lists: ["Main List", "VIP Customers"],
    createdAt: "2024-01-15T08:00:00Z",
    lastActivity: "2024-12-06T14:30:00Z",
  },
  {
    id: "2",
    email: "jane.smith@company.io",
    firstName: "Jane",
    lastName: "Smith",
    phone: "+1 (555) 234-5678",
    company: "Tech Solutions",
    status: "subscribed",
    tags: ["newsletter", "product-updates"],
    lists: ["Main List"],
    createdAt: "2024-02-20T10:30:00Z",
    lastActivity: "2024-12-05T09:15:00Z",
  },
  {
    id: "3",
    email: "robert.johnson@email.org",
    firstName: "Robert",
    lastName: "Johnson",
    company: "Johnson & Co",
    status: "subscribed",
    tags: ["vip"],
    lists: ["VIP Customers", "Enterprise"],
    createdAt: "2024-03-10T14:00:00Z",
    lastActivity: "2024-12-04T16:45:00Z",
  },
  {
    id: "4",
    email: "sarah.williams@gmail.com",
    firstName: "Sarah",
    lastName: "Williams",
    status: "subscribed",
    tags: ["newsletter"],
    lists: ["Main List"],
    createdAt: "2024-04-05T11:20:00Z",
    lastActivity: "2024-12-03T08:00:00Z",
  },
  {
    id: "5",
    email: "michael.brown@outlook.com",
    firstName: "Michael",
    lastName: "Brown",
    phone: "+1 (555) 345-6789",
    company: "Brown Industries",
    status: "unsubscribed",
    tags: [],
    lists: [],
    createdAt: "2024-05-12T09:45:00Z",
    lastActivity: "2024-11-20T12:00:00Z",
  },
  {
    id: "6",
    email: "emily.davis@startup.co",
    firstName: "Emily",
    lastName: "Davis",
    phone: "+1 (555) 456-7890",
    company: "StartupCo",
    status: "subscribed",
    tags: ["newsletter", "beta-tester"],
    lists: ["Main List", "Beta Testers"],
    createdAt: "2024-06-08T16:30:00Z",
    lastActivity: "2024-12-06T10:20:00Z",
  },
  {
    id: "7",
    email: "david.wilson@enterprise.com",
    firstName: "David",
    lastName: "Wilson",
    phone: "+1 (555) 567-8901",
    company: "Enterprise Solutions",
    status: "subscribed",
    tags: ["vip", "enterprise"],
    lists: ["Enterprise", "VIP Customers"],
    createdAt: "2024-07-22T13:15:00Z",
    lastActivity: "2024-12-05T15:40:00Z",
  },
  {
    id: "8",
    email: "lisa.martinez@freelance.io",
    firstName: "Lisa",
    lastName: "Martinez",
    status: "pending",
    tags: [],
    lists: ["Pending Confirmation"],
    createdAt: "2024-12-05T08:00:00Z",
  },
  {
    id: "9",
    email: "james.anderson@mail.com",
    firstName: "James",
    lastName: "Anderson",
    status: "bounced",
    tags: [],
    lists: [],
    createdAt: "2024-08-14T10:00:00Z",
    lastActivity: "2024-09-01T00:00:00Z",
  },
  {
    id: "10",
    email: "jennifer.taylor@business.org",
    firstName: "Jennifer",
    lastName: "Taylor",
    phone: "+1 (555) 678-9012",
    company: "Business Org",
    status: "subscribed",
    tags: ["newsletter", "webinar-attendee"],
    lists: ["Main List", "Webinar Attendees"],
    createdAt: "2024-09-30T14:45:00Z",
    lastActivity: "2024-12-06T11:30:00Z",
  },
];

// Mock Email Lists
export const emailLists: EmailList[] = [
  {
    id: "1",
    name: "Main List",
    description: "Primary subscriber list for all marketing communications",
    contactCount: 45230,
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "VIP Customers",
    description: "High-value customers with premium engagement",
    contactCount: 2340,
    createdAt: "2023-03-15T00:00:00Z",
  },
  {
    id: "3",
    name: "Enterprise",
    description: "B2B enterprise clients",
    contactCount: 890,
    createdAt: "2023-06-20T00:00:00Z",
  },
  {
    id: "4",
    name: "Beta Testers",
    description: "Early adopters and product testers",
    contactCount: 1250,
    createdAt: "2023-09-10T00:00:00Z",
  },
  {
    id: "5",
    name: "Webinar Attendees",
    description: "Users who have attended product webinars",
    contactCount: 3400,
    createdAt: "2024-01-05T00:00:00Z",
  },
];

// Dashboard Stats
export const dashboardStats: DashboardStats = {
  totalContacts: 52340,
  activeContacts: 48920,
  totalCampaigns: 156,
  totalSent: 2450000,
  avgOpenRate: 38.5,
  avgClickRate: 12.3,
  monthlyGrowth: 8.4,
  recentActivity: [
    {
      id: "1",
      type: "campaign_sent",
      title: "Campaign Sent",
      description: "Product Update - December was sent to 38,234 contacts",
      timestamp: "2024-12-06T10:00:00Z",
    },
    {
      id: "2",
      type: "contact_subscribed",
      title: "New Subscribers",
      description: "234 new subscribers joined today",
      timestamp: "2024-12-06T09:30:00Z",
    },
    {
      id: "3",
      type: "campaign_completed",
      title: "Campaign Completed",
      description: "A/B Test: Subject Line Optimization finished with 45.2% open rate",
      timestamp: "2024-12-05T18:00:00Z",
    },
    {
      id: "4",
      type: "contact_added",
      title: "Contacts Imported",
      description: "1,500 contacts imported from CSV file",
      timestamp: "2024-12-05T14:00:00Z",
    },
  ],
};

// Chart Data for the last 7 days
export const weeklyChartData: ChartData[] = [
  { name: "Mon", sent: 12500, opens: 4875, clicks: 1500 },
  { name: "Tue", sent: 18200, opens: 7098, clicks: 2184 },
  { name: "Wed", sent: 15800, opens: 6162, clicks: 1896 },
  { name: "Thu", sent: 22400, opens: 8736, clicks: 2688 },
  { name: "Fri", sent: 38234, opens: 14911, clicks: 4588 },
  { name: "Sat", sent: 8500, opens: 3315, clicks: 1020 },
  { name: "Sun", sent: 6200, opens: 2418, clicks: 744 },
];

// Monthly performance data
export const monthlyPerformanceData: ChartData[] = [
  { name: "Jan", sent: 185000, opens: 72150, clicks: 22200 },
  { name: "Feb", sent: 198000, opens: 77220, clicks: 23760 },
  { name: "Mar", sent: 210000, opens: 81900, clicks: 25200 },
  { name: "Apr", sent: 225000, opens: 87750, clicks: 27000 },
  { name: "May", sent: 240000, opens: 93600, clicks: 28800 },
  { name: "Jun", sent: 255000, opens: 99450, clicks: 30600 },
  { name: "Jul", sent: 268000, opens: 104520, clicks: 32160 },
  { name: "Aug", sent: 285000, opens: 111150, clicks: 34200 },
  { name: "Sep", sent: 298000, opens: 116220, clicks: 35760 },
  { name: "Oct", sent: 315000, opens: 122850, clicks: 37800 },
  { name: "Nov", sent: 385000, opens: 150150, clicks: 46200 },
  { name: "Dec", sent: 245000, opens: 95550, clicks: 29400 },
];

// Available tags
export const availableTags = [
  "vip",
  "newsletter",
  "product-updates",
  "beta-tester",
  "enterprise",
  "webinar-attendee",
  "new-customer",
  "returning-customer",
  "inactive",
  "promotional",
];

