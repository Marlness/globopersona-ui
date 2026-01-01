# Globopersona - Email Marketing Platform UI Redesign

A modern, clean, and highly usable frontend UI redesign for the Globopersona email marketing and automation platform, built with Next.js 14, React, and Tailwind CSS.

![Globopersona Dashboard](https://via.placeholder.com/1200x600?text=Globopersona+Dashboard)

## 🚀 Features

### Pages Implemented

- **Dashboard** - Overview with analytics cards, performance charts, recent campaigns, activity feed, and quick actions
- **Campaigns** - List view with filtering, search, bulk actions, and detailed campaign information
- **Campaign Creation** - Multi-step form with audience selection, email editor, and scheduling options
- **Contacts** - Data table with search, filtering, bulk operations, and contact management modal
- **Lists** - Grid view of subscriber lists with management capabilities
- **Automations** - Workflow management with templates and status controls
- **Analytics** - Comprehensive charts and metrics for email performance tracking
- **Settings** - Complete settings panel with profile, email, notifications, security, appearance, team, billing, and API sections

### Key Design Improvements

- **Visual Hierarchy** - Clear information architecture with proper spacing and typography
- **Component Consistency** - Unified design system with reusable components
- **Color Usage** - Professional purple primary color with semantic colors for status indicators
- **Responsive Design** - Desktop-first with mobile-friendly adaptations
- **Micro-interactions** - Smooth transitions, hover states, and animations
- **Modern UI Patterns** - Collapsible sidebar, dropdown menus, modals, toast notifications

### Technical Highlights

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** inspired components
- **Radix UI** primitives for accessibility
- **Recharts** for data visualization
- **Lucide React** for icons
- **Component-based architecture** with clean folder structure

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/globopersona-ui.git
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
| Tailwind CSS | Utility-first CSS framework |
| Radix UI | Accessible UI primitives |
| Recharts | Data visualization |
| Lucide React | Icon library |
| class-variance-authority | Component variant management |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Dashboard
│   ├── campaigns/         # Campaign pages
│   ├── contacts/          # Contact pages
│   ├── lists/             # List pages
│   ├── automations/       # Automation pages
│   ├── analytics/         # Analytics pages
│   ├── settings/          # Settings pages
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── table.tsx
│   │   └── ...
│   ├── layout/            # Layout components
│   │   ├── sidebar.tsx
│   │   ├── header.tsx
│   │   └── main-layout.tsx
│   └── dashboard/         # Dashboard-specific components
│       ├── stats-card.tsx
│       ├── performance-chart.tsx
│       └── ...
└── lib/
    ├── utils.ts           # Utility functions
    └── mock-data.ts       # Mock data for demo
```

## 🎨 Design Decisions

### Color Palette
- **Primary**: Purple (#7c3aed) - Modern, professional, stands out
- **Success**: Green (#22c55e) - Positive states, growth indicators
- **Warning**: Amber (#f59e0b) - Alerts, pending states
- **Destructive**: Red (#ef4444) - Errors, delete actions
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter (sans-serif) - Clean, readable, professional
- **Headings**: Bold weight with tight tracking
- **Body**: Regular weight with comfortable line height

### Spacing & Layout
- Consistent 4px/8px grid system
- Generous padding in cards and sections
- Responsive breakpoints at sm, md, lg, xl

### Component Philosophy
- Atomic design principles
- Composable components
- Accessible by default (ARIA, keyboard navigation)
- Animation for feedback and delight

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

- **Desktop (1024px+)**: Full sidebar, multi-column layouts
- **Tablet (768px-1023px)**: Collapsible sidebar, adapted grids
- **Mobile (<768px)**: Hidden sidebar with hamburger menu, single column

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with default settings

```bash
# Or deploy from CLI
npx vercel
```

### Other Platforms

Build the production bundle:
```bash
npm run build
```

The output will be in the `.next` folder, ready for deployment to any Node.js hosting platform.

## 📝 Notes

- This is a frontend-only demo with mock data
- No backend integration required
- All data is static/simulated for demonstration purposes

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



