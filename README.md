# Taller Rondinara SPA

Professional single-page application for Taller Rondinara automotive service.

## Quick Start

### Development Server

**Option 1: Using the wrapper script (recommended)**
```bash
./dev.sh
```

**Option 2: Using npm with correct Node version**
```bash
node node_modules/.bin/vite
```

The app will be available at: http://localhost:5173/

### Build for Production

```bash
node node_modules/.bin/vite build
```

### Preview Production Build

```bash
node node_modules/.bin/vite preview
```

## Node Version

This project requires **Node.js v22.17.0** or higher. The `.nvmrc` file specifies the correct version.

If using nvm, run:
```bash
nvm use
```

## Tech Stack

- **React** 19.2.0
- **Vite** 7.2.4
- **ESLint** for code quality

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer
│   ├── sections/      # Hero, About, Services, Dealers
│   └── ui/           # Button, Card, SectionContainer
├── hooks/            # Custom React hooks
├── styles/           # Global styles
├── App.jsx           # Main application component
└── index.css         # CSS variables and global styles
```

## CSS Architecture

Uses a comprehensive CSS variable system defined in `index.css`:
- **Colors**: Brand colors, grays
- **Typography**: Font sizes (rem-based)
- **Spacing**: Six-level spacing scale
- **Effects**: Transitions, shadows, borders
- **Layout**: Header height, responsive breakpoints

All units are in **rem** for responsive scaling.

## Brand Colors

- Primary Red: `#eb2326`
- Black: `#000000`
- White: `#ffffff`
