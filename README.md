# www.s2nm.com

Website for signal | noise marketing, LLC. Built with Astro and Tailwind CSS, hosted on Firebase (project `www-s2nm-com`).

## Develop

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build
firebase deploy --only hosting
```

## Content

Most text lives in `src/data/site.ts`. The legacy site and source docs are in `backup/`, which is kept locally and not committed.
