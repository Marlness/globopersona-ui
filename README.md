# Globopersona - AI Email Marketing Platform UI Redesign

A modern, clean, and highly usable frontend UI redesign for the Globopersona AI-powered email marketing and automation platform, built with Next.js 14, React, and Tailwind CSS.

![Globopersona Dashboard](https://via.placeholder.com/1200x600?text=Globopersona+AI+Email+Marketing+Platform)

## 🚀 Features

### Core Pages Implemented

- **Dashboard Overview** - Performance metrics with 6 key stat cards, real-time tracking, and visual progress indicators
- **Email Lists** - Grid view with search, filters, status badges, and list management (upload, view, download, delete)
- **Upload Email List** - 2-step wizard:
  - Step 1: List information and CSV file upload with live preview
  - Step 2: Field mapping with smart auto-mapping and data validation
- **Email Accounts/Configuration** - SMTP account management with status indicators, daily limits, and utilization tracking
- **Email Campaigns** - Grid view with campaign cards, status badges (running/draft/completed), AI personalization tags, and metrics
- **Create New Campaign** - 3-step wizard:
  - Step 1: Campaign setup with name and target audience selection
  - Step 2: Choose approach (Standard Content vs AI Personalization)
  - Step 3: AI Configuration or Template creation
- **AI Configuration** - Interactive chat-based AI assistant setup with progress tracking and configuration summary
- **Contact Selection** - Table view with multi-select, search, filters, and AI potential indicators
- **AI Email Preview** - Review and approve AI-generated personalized emails with confidence scores, token counts, and edit/regenerate options
- **Validate & Send Campaign** - Campaign validation with spam score, deliverability metrics, scheduling, and email gap controls
- **Analytics** - Performance tracking with charts and activity feed
- **Settings** - Profile, notifications, security, and appearance settings

### AI-Powered Features

- **AI Email Strategist** - Conversational interface for campaign configuration
- **Smart Field Mapping** - Automatic CSV column to contact field mapping
- **Personalized Email Generation** - AI-generated emails tailored to each contact
- **Confidence Scoring** - Quality metrics for AI-generated content
- **Token Tracking** - Monitor AI usage and costs

### Key Design Improvements

- **Modern Visual Hierarchy** - Clear information architecture with proper spacing, typography, and color usage
- **Component Consistency** - Unified design system with reusable shadcn/ui components
- **Gradient Accents** - Beautiful purple-to-pink gradients for AI features and primary actions
- **Status Indicators** - Color-coded badges for campaign status, list quality, and account verification
- **Progress Tracking** - Visual progress bars and step indicators throughout wizards
- **Responsive Design** - Desktop-first with mobile-friendly adaptations
- **Micro-interactions** - Smooth transitions, hover effects, and loading states
- **Card-based Layout** - Modern card design with shadows and hover effects

### Technical Highlights

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom design tokens
- **shadcn/ui** components for consistent UI
- **Radix UI** primitives for accessibility
- **Lucide React** for icons
- **Plus Jakarta Sans** font for modern typography
- **Component-based architecture** with clean folder structure

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Marlness/globopersona-ui.git
cd globopersona-ui
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type safety and developer experience |
| Tailwind CSS | Utility-first CSS framework with custom design tokens |
| Radix UI | Accessible UI primitives |
| shadcn/ui | High-quality React components |
| Lucide React | Icon library |
| Plus Jakarta Sans | Modern sans-serif font |

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Dashboard Overview
│   ├── lists/                   # Email Lists pages
│   │   ├── page.tsx            # Lists grid view
│   │   └── upload/             # Upload wizard
│   │       └── page.tsx        # 2-step upload & mapping
│   ├── accounts/                # Email Accounts
│   │   └── page.tsx            # Account configuration
│   ├── campaigns/               # Campaign pages
│   │   ├── page.tsx            # Campaigns grid view
│   │   ├── new/                # Campaign creation
│   │   │   └── page.tsx        # 3-step wizard
│   │   ├── ai-config/          # AI Configuration
│   │   │   └── page.tsx        # AI chat interface
│   │   ├── contacts/           # Contact Selection
│   │   │   └── page.tsx        # Contact table
│   │   ├── preview/            # AI Email Preview
│   │   │   └── page.tsx        # Email review & approve
│   │   └── validate/           # Validate & Send
│   │       └── page.tsx        # Campaign validation
│   ├── analytics/               # Analytics dashboard
│   │   └── page.tsx
│   ├── settings/                # Settings pages
│   │   └── page.tsx
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles & design tokens
├── components/
│   ├── ui/                      # Reusable UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── table.tsx
│   │   ├── dialog.tsx
│   │   ├── select.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   └── layout/                  # Layout components
│       ├── sidebar.tsx          # Navigation sidebar
│       ├── header.tsx           # Top header with user menu
│       └── main-layout.tsx      # Main layout wrapper
└── lib/
    ├── utils.ts                 # Utility functions (cn, etc.)
    └── mock-data.ts             # Mock data for demo
```

## 🎨 Design System

### Color Palette

- **Primary**: Violet/Purple gradient (#7C3AED to #EC4899) - AI features, primary actions
- **Success**: Emerald (#10B981) - Positive states, approved items
- **Warning**: Amber (#F59E0B) - Pending states, alerts
- **Destructive**: Red (#EF4444) - Errors, delete actions
- **Info**: Blue (#3B82F6) - Information, links
- **Neutral**: Gray scale for text and backgrounds

### Typography

- **Font**: Plus Jakarta Sans - Modern, clean, professional
- **Headings**: Bold weight with proper hierarchy
- **Body**: Regular weight with comfortable line height
- **Mono**: JetBrains Mono for code/technical content

### Spacing & Layout

- Consistent 4px/8px grid system
- Generous padding in cards (p-5, p-6)
- Rounded corners (rounded-xl, rounded-2xl)
- Shadow system (shadow-card, shadow-soft, shadow-elevated)

### Component Patterns

- **Cards**: White background, rounded-2xl, shadow-card, hover:shadow-soft
- **Buttons**: Gradient backgrounds for primary actions, outline for secondary
- **Badges**: Color-coded status indicators (active, draft, completed, poor, AI-powered)
- **Progress Bars**: Gradient fills with percentage indicators
- **Icons**: Lucide React with consistent sizing (w-4 h-4, w-5 h-5)

## 🔧 Available Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📱 Responsive Behavior

The UI is designed desktop-first but adapts gracefully:

- **Desktop (1024px+)**: Full sidebar (64px), multi-column layouts, full feature set
- **Tablet (768px-1023px)**: Collapsible sidebar, adapted grids (2 columns)
- **Mobile (<768px)**: Hidden sidebar with hamburger menu, single column layouts

## 🚀 Deployment

### Vercel (Recommended)

The project is configured for Vercel deployment:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with default settings (auto-detects Next.js)

The project includes `vercel.json` configuration for optimal deployment.

```bash
# Or deploy from CLI
npx vercel
```

### Build Output

Build the production bundle:
```bash
npm run build
```

The output will be in the `.next` folder, ready for deployment to any Node.js hosting platform.

## ✨ Key Features Showcase

### AI Email Strategist
- Conversational chat interface
- 8-step configuration process
- Real-time progress tracking
- Configuration summary with all details

### Smart Field Mapping
- Automatic CSV column detection
- Visual mapping interface
- Required field validation
- Live data preview

### Email Campaign Wizard
- Step-by-step campaign creation
- AI vs Standard content selection
- Target audience selection
- Campaign preview sidebar

### AI Email Preview
- Confidence scoring (85-87%)
- Token usage tracking
- Approve/Reject/Edit/Regenerate actions
- Contact-specific personalization tags

## 📝 Notes

- This is a frontend-only demo with mock data
- No backend integration required
- All data is static/simulated for demonstration purposes
- AI features are UI mockups showing the intended user experience

## 🎯 Design Principles

1. **Clarity First** - Information hierarchy and clear visual communication
2. **Consistency** - Unified design system across all pages
3. **Accessibility** - WCAG compliant components with keyboard navigation
4. **Performance** - Optimized builds and lazy loading
5. **User Experience** - Intuitive flows with helpful feedback

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ for the Globopersona Frontend UI Redesign Assessment

**Live Demo**: [Deployed on Vercel](https://globopersona-ui.vercel.app)
