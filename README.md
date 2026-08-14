# Copperstate Machine & Industrial Service — Website

Built with React + Vite + Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to vercel.com, sign in with GitHub, click "Add New Project," and select the repo.
3. Vercel auto-detects Vite — leave the default build settings (`npm run build`, output `dist`).
4. Click Deploy. You'll get a live `.vercel.app` URL in about a minute.
5. To use your own domain: in the Vercel project, go to Settings → Domains, add your domain,
   and update your DNS records at your registrar with the values Vercel shows you.

## Project structure

```
src/
  components/   — one file per site section (Header, Hero, Services, etc.)
  assets/       — logo and other images
  App.jsx       — assembles all sections
  index.css     — Tailwind + brand fonts/colors
tailwind.config.js — brand color palette and type scale
```

## Placeholder content to replace

- Contact info in `src/components/ContactCTA.jsx` (phone, email, address)
- Service/equipment copy across `Services.jsx`, `Equipment.jsx`, `Capability.jsx`, `WhyUs.jsx`
- Location list in `LocationTicker.jsx`
