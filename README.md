# FrameCut Studio — Landing Page

A premium, conversion-focused landing page for a professional video editing studio. Built with Next.js 14 (App Router), Supabase, and a custom PT/EN i18n system.

## ✨ Features

- **Premium Design** — Dark UI, glassmorphism, animated gradients, micro-interactions
- **Multilingual** — Full PT/EN support with browser language detection and manual toggle
- **Supabase Integration** — Lead capture form with instant database storage
- **SEO Ready** — Metadata, OG tags, semantic HTML
- **Accessible** — WCAG AA contrast, visible focus, ARIA labels, keyboard navigation
- **Fully Responsive** — Mobile, tablet, and desktop layouts
- **Vercel Ready** — Zero-config deployment

## 🎨 Brand Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#7000FF` | CTAs, accents, primary brand |
| Blue | `#1D3ECF` | Trust elements, highlights |
| Gold | `#E6AF00` | Attention, stars, badges |
| Mint | `#D7F7E1` | Soft backgrounds |
| Blush | `#FFEBE8` | Secondary backgrounds |

## 🗂 Project Structure

```
framecut/
├── app/
│   ├── api/contact/route.ts   # Form submission API
│   ├── globals.css             # Design tokens + base styles
│   ├── layout.tsx              # Root layout + metadata
│   └── page.tsx                # Main landing page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx + .module.css
│   │   └── Footer.tsx + .module.css
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Benefits.tsx
│   │   ├── Portfolio.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── ContactCTA.tsx
│   └── ui/
│       ├── AnimatedSection.tsx  # Scroll animation wrapper
│       ├── LanguageSwitcher.tsx # PT/EN toggle
│       └── Toast.tsx            # Success/error notifications
├── lib/
│   ├── i18n/
│   │   ├── en.ts               # English translations
│   │   ├── pt.ts               # Portuguese translations
│   │   └── index.ts            # i18n context + hook
│   ├── supabase.ts             # Supabase client
│   └── types/index.ts          # TypeScript types
└── supabase/
    └── schema.sql              # Database schema
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example file and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Set up Supabase

1. Create a [Supabase](https://supabase.com) project
2. Go to **SQL Editor** in the dashboard
3. Run the contents of `supabase/schema.sql`

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🗄 Supabase Schema

The `leads` table stores all contact form submissions:

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | Primary key, auto-generated |
| name | TEXT | Required |
| email | TEXT | Required |
| phone | TEXT | Optional |
| service | TEXT | Selected service |
| message | TEXT | Contact message |
| language | TEXT | "pt" or "en" |
| origin | TEXT | Source (e.g. "contact_form") |
| created_at | TIMESTAMPTZ | Auto timestamp |

Row Level Security (RLS) is enabled:
- ✅ Public inserts allowed (form submissions)
- 🔒 Reads restricted to authenticated users (admins)

## ☁️ Deploy to Vercel

### Option A: Via Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

### Option B: Via GitHub + Vercel Dashboard

1. Push your project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Add environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click **Deploy**

> ⚠️ Never commit `.env.local` to git. It's already in `.gitignore`.

## 🌐 Multilingual (i18n)

The site automatically detects the browser language and defaults to PT or EN. Users can toggle via the language switcher in the navbar or footer.

- Translations live in `lib/i18n/pt.ts` and `lib/i18n/en.ts`
- The `useTranslation()` hook provides `t` (translations) and `locale`
- Language preference is saved to `localStorage`

## 📝 Customization

### Changing the brand name
Search and replace `FrameCut Studio` across all files.

### Adding a new section
1. Create `components/sections/MySection.tsx` and `.module.css`
2. Import and add it to `app/page.tsx`
3. Add translations to both `lib/i18n/pt.ts` and `lib/i18n/en.ts`

### Changing colors
Edit the CSS variables at the top of `app/globals.css`:
```css
:root {
  --color-primary: #7000ff;
  --color-secondary: #1d3ecf;
  /* ... */
}
```

## 📄 License

MIT — Feel free to use for commercial projects.
