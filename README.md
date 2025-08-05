# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark/Light theme support
- 📱 Mobile-first approach
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- 📧 Contact form
- 🚀 Deployed on GitHub Pages

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy when you push to the main branch

### Manual Deployment

If you want to build and deploy manually:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── *.tsx             # Page-specific components
├── public/               # Static assets
├── .github/workflows/    # GitHub Actions
└── next.config.mjs       # Next.js configuration
```

## Configuration

The project is configured for static export in `next.config.mjs`:

- `output: 'export'` - Enables static site generation
- `trailingSlash: true` - Adds trailing slashes for GitHub Pages compatibility
- `images.unoptimized: true` - Disables image optimization for static export

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push to the branch
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE). 