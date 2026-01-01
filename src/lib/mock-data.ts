// Dashboard Stats
export const dashboardStats = {
  totalCampaigns: {
    value: 47,
    label: "Total Campaigns",
    sublabel: "Active & completed",
    change: "+12",
    changeType: "increase" as const,
    progress: 85,
    color: "blue" as const,
  },
  activeSubscribers: {
    value: "12,847",
    label: "Active Subscribers",
    sublabel: "Engaged users",
    change: "+234",
    changeType: "increase" as const,
    progress: 92,
    color: "purple" as const,
  },
  avgOpenRate: {
    value: "28.4%",
    label: "Avg Open Rate",
    sublabel: "Last 30 days",
    change: "+2.1%",
    changeType: "increase" as const,
    progress: 78,
    color: "green" as const,
  },
  avgClickRate: {
    value: "4.7%",
    label: "Avg Click Rate",
    sublabel: "Engagement metric",
    change: "-0.3%",
    changeType: "decrease" as const,
    progress: 65,
    color: "yellow" as const,
  },
  revenueGenerated: {
    value: "$24,847",
    label: "Revenue Generated",
    sublabel: "From campaigns",
    change: "+$1,247",
    changeType: "increase" as const,
    progress: 88,
    color: "green" as const,
  },
  bounceRate: {
    value: "2.3%",
    label: "Bounce Rate",
    sublabel: "Quality metric",
    change: "-0.5%",
    changeType: "decrease" as const,
    progress: 23,
    color: "red" as const,
  },
};

// Email Lists
export const emailLists = [
  {
    id: "1",
    name: "test360marco",
    description: "No description provided",
    status: "active" as const,
    quality: "poor" as const,
    validContacts: 5,
    openRate: 0,
    valid: 5,
    createdAt: "0m ago",
    source: "RAVI SAMPLE 1.csv",
    color: "blue" as const,
  },
  {
    id: "2",
    name: "final test",
    description: "No description provided",
    status: "active" as const,
    quality: "poor" as const,
    validContacts: 5,
    openRate: 0,
    valid: 5,
    createdAt: "20h ago",
    source: "test.csv",
    color: "purple" as const,
  },
  {
    id: "3",
    name: "madhu",
    description: "No description provided",
    status: "active" as const,
    quality: "poor" as const,
    validContacts: 24,
    openRate: 0,
    valid: 24,
    createdAt: "2d ago",
    source: "test.csv",
    color: "pink" as const,
  },
  {
    id: "4",
    name: "test vercel",
    description: "No description provided",
    status: "active" as const,
    quality: "poor" as const,
    validContacts: 24,
    openRate: 0,
    valid: 24,
    createdAt: "3d ago",
    source: "test.csv",
    color: "cyan" as const,
  },
];

// Email Lists Stats
export const emailListsStats = {
  totalLists: { value: 8, label: "Total Lists", sublabel: "Active campaigns", color: "blue" as const },
  totalContacts: { value: 79, label: "Total Contacts", sublabel: "Valid contacts", color: "green" as const },
  thisMonth: { value: "+60", label: "This Month", sublabel: "New additions", color: "purple" as const },
  avgQuality: { value: "40%", label: "Avg. Quality", sublabel: "Data quality score", color: "yellow" as const },
  openRate: { value: "0%", label: "Open Rate", sublabel: "Average opens", color: "pink" as const },
  clickRate: { value: "0%", label: "Click Rate", sublabel: "Average clicks", color: "cyan" as const },
};

// Email Accounts
export const emailAccounts = [
  {
    id: "1",
    email: "madhu.k@globopersona.com",
    name: "madhu",
    provider: "SMTP/IMAP",
    status: "active" as const,
    verified: true,
    sentToday: 0,
    dailyLimit: 100,
    lastUsed: null,
  },
  {
    id: "2",
    email: "test@globopersona.com",
    name: "test",
    provider: "SMTP/IMAP",
    status: "active" as const,
    verified: true,
    sentToday: 0,
    dailyLimit: 100,
    lastUsed: null,
  },
  {
    id: "3",
    email: "kotlamadhu0614@gmail.com",
    name: "madhu",
    provider: "Gmail OAuth",
    status: "active" as const,
    verified: true,
    sentToday: 0,
    dailyLimit: 100,
    lastUsed: "9/15/2025",
  },
];

// Email Account Stats
export const emailAccountStats = {
  activeAccounts: { value: 3, total: 3, label: "Active Accounts", color: "green" as const },
  dailyLimit: { value: 300, label: "Daily Limit", sublabel: "emails per day", color: "blue" as const },
  sentToday: { value: 0, label: "Sent Today", sublabel: "across all accounts", color: "purple" as const },
  utilization: { value: "0%", label: "Utilization", sublabel: "of daily capacity", color: "pink" as const },
};

// Email Campaigns
export const emailCampaigns = [
  {
    id: "1",
    name: "land scaping",
    description: "No description available",
    status: "running" as const,
    type: "ai" as const,
    recipients: 5,
    openRate: 0,
    sent: 3,
    opens: 0,
    clicks: 0,
    createdAt: "Just now",
    list: null,
    color: "blue" as const,
  },
  {
    id: "2",
    name: "test final",
    description: "No description available",
    status: "draft" as const,
    type: "ai" as const,
    recipients: 5,
    openRate: 0,
    sent: 0,
    opens: 0,
    clicks: 0,
    createdAt: "Just now",
    list: null,
    color: "purple" as const,
  },
  {
    id: "3",
    name: "madhu hero",
    description: "No description available",
    status: "draft" as const,
    type: "ai" as const,
    recipients: 5,
    openRate: 0,
    sent: 0,
    opens: 0,
    clicks: 0,
    createdAt: "Just now",
    list: null,
    color: "pink" as const,
  },
  {
    id: "4",
    name: "ravi kojja",
    description: "No description available",
    status: "completed" as const,
    type: "ai" as const,
    recipients: 5,
    openRate: 120,
    sent: 5,
    opens: 6,
    clicks: 0,
    createdAt: "Just now",
    list: null,
    color: "green" as const,
  },
];

// Campaign Stats
export const campaignStats = {
  totalCampaigns: { value: 12, label: "Total Campaigns", sublabel: "All campaigns", color: "blue" as const },
  manualCampaigns: { value: 0, label: "Manual Campaigns", sublabel: "User created", color: "green" as const },
  aiCampaigns: { value: 12, label: "AI Campaigns", sublabel: "AI personalized", color: "purple" as const },
  totalRecipients: { value: 60, label: "Total Recipients", sublabel: "Email contacts", color: "pink" as const },
  openRate: { value: "60%", label: "Open Rate", sublabel: "Opens (events)", color: "cyan" as const },
  clickRate: { value: "0%", label: "Click Rate", sublabel: "Average clicks", color: "yellow" as const },
};

// Contacts
export const contacts = [
  {
    id: "1",
    email: "michael.leadflux@outlook.com",
    firstName: "Michael",
    lastName: "King",
    jobTitle: "CFO",
    company: "Schlouch Incorporated",
    website: "schlouch.com",
    phone: "Rich King",
    address: "132 Excelsior Dr",
    city: "Blandon",
    state: "PA",
    country: "United States",
    zip: "19510",
    industry: "Construction",
    status: "active" as const,
  },
  {
    id: "2",
    email: "sarah.leadflux@outlook.com",
    firstName: "Sarah",
    lastName: "Hallquist",
    jobTitle: "Chief Executive Officer",
    company: "HPM, Inc.",
    website: "hpmcontracting.com",
    phone: "Ray Hallquist",
    address: "9200 East Mineral Avenue",
    city: "Englewood",
    state: "CO",
    country: "United States",
    zip: "80112",
    industry: "Construction",
    status: "active" as const,
  },
  {
    id: "3",
    email: "christopher.leadflux@outlook.com",
    firstName: "Christopher",
    lastName: "Gerry",
    jobTitle: "Chief Financial Officer",
    company: "R. P. Marzilli & Company, Inc.",
    website: "rpmarzilli.com",
    phone: "Paula Gerry",
    address: "21 Trotter Dr",
    city: "Medway",
    state: "MA",
    country: "United States",
    zip: "02053-2299",
    industry: "Construction, R...",
    status: "active" as const,
  },
  {
    id: "4",
    email: "ashley.leadflux@outlook.com",
    firstName: "Ashley",
    lastName: "Powers",
    jobTitle: "Chief Financial Officer",
    company: "Douglass Colony Group",
    website: "douglasscolony.com",
    phone: "Jaci Powers",
    address: "5901 E 58th Ave",
    city: "Commerce C...",
    state: "CO",
    country: "United States",
    zip: "80022",
    industry: "Construction",
    status: "active" as const,
  },
  {
    id: "5",
    email: "emily.leadflux@outlook.com",
    firstName: "Emily",
    lastName: "Hasegawa",
    jobTitle: "Principal, Chief Design Officer",
    company: "ELS Architecture and Urban Design",
    website: "elsarch.com",
    phone: "Kenneth Hasegawa",
    address: "2040 Addison St",
    city: "Berkeley",
    state: "CA",
    country: "United States",
    zip: "94704-1104",
    industry: "Architecture & P...",
    status: "active" as const,
  },
];

// AI Email Pitches
export const aiEmailPitches = [
  {
    id: "1",
    contact: contacts[4], // Emily Hasegawa
    subjectLine: "Exploring Synergies Between ELS and Whittlesey Landscape Supplies",
    body: `Hi Emily,

I hope this message finds you well! I recently came across ELS Architecture and Urban Design and was impressed by your commitment to enhancing urban spaces sustainably. Your work resonates with our mission at Whittlesey Landscape Supplies, where we've been providing high-quality landscaping products for over 45 years, focusing on customer service and quality.

I believe there's an opportunity for us to collaborate, especially considering your projects likely require reliable landscaping materials. I'd love to invite you to share any upcoming supply needs for a quote or perhaps join me for lunch at our office to discuss our services further.

Looking forward to the possibility of working together!

Best regards,`,
    confidence: 87,
    tokens: 984,
    status: "pending" as const,
    tags: ["First Name", "Job Title", "Company Name", "Industry", "City Location", "State Location", "Address", "Country", "ZIP Code", "Phone Number", "Website", "Company Services", "Technology Stack", "Recent Activity", "Company Description", "Website Research", "Emily's name", "Position as Chief Design Officer", "Company name ELS Architecture and Urban Design", "Emphasis on sustainability and urban design"],
  },
  {
    id: "2",
    contact: contacts[0], // Michael King
    subjectLine: "Let's Build Something Together at Schlouch Incorporated",
    body: `Hi Michael,

I hope this message finds you well! I came across Schlouch Incorporated and was truly impressed by your commitment to quality in the construction industry. As the CFO, I'm sure you're keen on innovative partnerships that enhance your project outcomes.

At Whittlesey Landscape Supplies, we specialize in high-quality landscaping products with flexible terms and dedicated support. We'd love the opportunity to provide you with a quote tailored to your supplies list. If you're available, I'd also like to invite you to our office for lunch to review how we can support your upcoming projects.

Looking forward to hearing from you soon!

Best regards,`,
    confidence: 85,
    tokens: 766,
    status: "pending" as const,
    tags: ["First Name", "Job Title", "Company Name", "Industry", "City Location", "State Location", "Address", "Country", "ZIP Code", "Phone Number", "Website", "Michael's name", "CFO role", "Schlouch Incorporated's focus on quality"],
  },
  {
    id: "3",
    contact: contacts[1], // Sarah Hallquist
    subjectLine: "Exploring Partnership Opportunities in Construction",
    body: `Hi Sarah,

I hope this message finds you well! I recently came across HPM, Inc. and was impressed by your innovative approach to construction, especially in a stunning area like Englewood. At Whittlesey Landscape Supplies, we understand that quality materials are essential for successful projects, and we pride ourselves on delivering just that.

I'd love to explore how our landscaping products can complement your projects. We offer a 15-day credit period, free delivery, and the ability to return unused supplies—all supported by a dedicated account manager available seven days a week.

If you're open to it, I'd be thrilled to discuss your upcoming needs over lunch or review your supply list for a quote.

Looking forward to hearing from you!

Best regards,`,
    confidence: 85,
    tokens: 803,
    status: "pending" as const,
    tags: ["First Name", "Job Title", "Company Name", "Industry", "City Location", "State Location", "Address", "Country", "ZIP Code", "Phone Number", "Website", "Sarah's name", "HPM, Inc. and its location in Englewood, CO"],
  },
];

// AI Configuration
export const aiConfiguration = {
  companyInfo: "Whittlesey Landscape Supplies, founded in 1975, is a leading provider of high-quality landscaping products. With decades of experience in the industry, we understand the unique needs of landscaping contractors and the importance of using superior materials for successful projects.",
  productService: "Comprehensive range of landscaping supplies including soil, fencing, plants, pavings, etc.",
  targetAudience: "Landscaping contractors, property managers, and homeowners across Austin, TX.",
  painPoints: "15 days credit period for payment, ability to exchange goods or return remaining supplies after project completion.",
  tone: "Formal and friendly conversation aimed at building relationships.",
  cta: "Encourage recipients to send their supplies list for a quote or visit the office for lunch and review offerings.",
  valueProposition: "Referral bounce, 15 days credit period, free replacement, free delivery, and dedicated account executive 7 days round the clock on emails and calls.",
};

// Field Mapping Options
export const fieldMappingOptions = [
  { id: "email", label: "Email Address", description: "Primary email address (required)", required: true, icon: "mail" },
  { id: "firstName", label: "First Name", description: "Contact's first name", required: false, icon: "user" },
  { id: "lastName", label: "Last Name", description: "Contact's last name", required: false, icon: "user" },
  { id: "title", label: "Title", description: "Job title or professional position", required: false, icon: "briefcase" },
  { id: "company", label: "Company Name", description: "Company or organization name", required: false, icon: "building" },
  { id: "website", label: "Website", description: "Company or personal website URL", required: false, icon: "globe" },
  { id: "address", label: "Address", description: "Street address or full address", required: false, icon: "map-pin" },
  { id: "city", label: "City", description: "City name", required: false, icon: "building" },
  { id: "state", label: "State", description: "State or province", required: false, icon: "map" },
  { id: "country", label: "Country", description: "Country name", required: false, icon: "flag" },
  { id: "zip", label: "Zip Code", description: "ZIP or postal code", required: false, icon: "hash" },
];
