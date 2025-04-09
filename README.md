# Nilay Raut Portfolio Website

This is a portfolio website for Nilay Raut built with Next.js, Tailwind CSS, and shadcn/ui components. The website showcases Nilay's professional background, skills, projects, publications, and contact information in a modern, interactive interface.
This is my Portfolio - https://v0-next-js-portfolio-website-1vmvso.vercel.app/
## Features

- Responsive design for both mobile and desktop devices
- Modern UI with shadcn/ui components
- Interactive elements including animations and theme switching
- Dark/light mode support
- Modular and maintainable code structure
- Sections for:
  - Hero/About
  - Education
  - Projects
  - Skills
  - Publications
  - Contact

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Custom React components

## Project Structure

The project follows a modular component-based architecture:

```
portfolio-website/
├── app/                      # Next.js app directory
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Main page component
├── components/               # Reusable components
│   ├── ui/                   # UI components from shadcn/ui
│   ├── brain-animation.tsx   # Interactive brain animation
│   ├── contact-section.tsx   # Contact form and information
│   ├── education-section.tsx # Education history
│   ├── footer.tsx            # Website footer
│   ├── hero-section.tsx      # Main landing section
│   ├── interactive-background.tsx # Background effects
│   ├── navbar.tsx            # Navigation bar
│   ├── project-card.tsx      # Project display card
│   ├── projects-section.tsx  # Projects showcase
│   ├── publications-section.tsx # Academic publications
│   ├── skills-section.tsx    # Skills and expertise
│   ├── theme-provider.tsx    # Theme context provider
│   ├── theme-toggle.tsx      # Light/dark mode toggle
│   └── wave-background.tsx   # Wave animation background
├── hooks/                    # Custom React hooks
│   ├── use-mobile.tsx        # Mobile detection hook
│   └── use-toast.ts          # Toast notification hook
├── lib/                      # Utility functions
│   └── utils.ts              # Helper utilities
├── public/                   # Static assets
│   └── placeholder images    # Image placeholders
└── styles/                   # Additional styles
    └── globals.css           # Global CSS
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm (preferred) or npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/username/nilay-portfolio.git
   cd nilay-portfolio
   ```

2. Install dependencies
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Run the development server
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website

## Customization

The portfolio is designed to be easily customizable:

- Update personal information in the respective section components
- Modify the theme in `theme-provider.tsx`
- Add or remove sections by editing `app/page.tsx`
- Customize UI components in the `components/ui` directory

## Deployment

The site can be deployed to platforms like Vercel, Netlify, or GitHub Pages:

```bash
pnpm build
# or
npm run build
```

This will generate a production-ready build in the `.next` directory.
