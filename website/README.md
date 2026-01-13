# Harvard MIT Builders Club Website

A minimalistic React website for the Harvard MIT Builders Club, styled after the Foundry website design.

## Getting Started

### Installation

```bash
cd website
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
website/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── Mission.jsx
    │   ├── CTA.jsx
    │   ├── Team.jsx
    │   ├── Footer.jsx
    │   └── *.css (component styles)
    └── styles/
        └── main.css
```

## Customization

- Update team members in `src/components/Team.jsx`
- Modify mission statement in `src/components/Mission.jsx`
- Replace placeholder logo in `src/components/Header.jsx`
- Update CTA link in `src/components/CTA.jsx`
