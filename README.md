# Mentiva AI — Local dev

Quick start:

1. Copy `.env.local.example` to `.env.local` and add your `GEMINI_API_KEY` and `GEMINI_API_URL` (you already have `.env.local`).
2. Install dependencies:

```bash
npm install
```

3. Run dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

Note: Do not commit `.env.local` to version control. Use Vercel or other host's environment variable settings for deployment.
