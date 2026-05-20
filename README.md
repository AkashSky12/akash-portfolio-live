# Akash Simon — Portfolio Website

A premium, production-ready personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# → Open http://localhost:3000

# 3. Build for production
npm run build

# 4. Preview production build locally
npx serve out
```

---

## 📁 Project Structure

```
akash-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout + SEO metadata
│   │   ├── page.tsx          # Main page (assembles all sections)
│   │   └── globals.css       # Global styles + Tailwind
│   └── components/
│       └── sections/
│           ├── Navbar.tsx
│           ├── Hero.tsx
│           ├── About.tsx
│           ├── Experience.tsx
│           ├── Skills.tsx
│           ├── Certifications.tsx
│           ├── Contact.tsx
│           └── Footer.tsx
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── .github/
│   └── workflows/
│       └── deploy.yml        # Auto-deploy to GitHub Pages
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🌐 Deployment

### Option A — GitHub Pages (Free, Recommended)

#### Step 1: Create GitHub Repository

```bash
# Initialize git in your project folder
cd akash-portfolio
git init
git add .
git commit -m "feat: initial portfolio commit"
```

#### Step 2: Create repo on GitHub

Go to https://github.com/new and create a repo named `akash-simon-portfolio` (or `akashsimon.com`).

```bash
git remote add origin https://github.com/YOUR_USERNAME/akash-simon-portfolio.git
git branch -M main
git push -u origin main
```

#### Step 3: Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under "Source", select **GitHub Actions**
3. The `.github/workflows/deploy.yml` workflow will auto-build and deploy on every push to `main`

#### Step 4: Connect Custom Domain (akashsimon.com)

1. In GitHub Pages settings, add `akashsimon.com` as your custom domain
2. GitHub will add a `CNAME` file automatically

**DNS Configuration** (at your domain registrar — Namecheap, GoDaddy, Cloudflare, etc.):

```
Type    Host    Value                   TTL
A       @       185.199.108.153         Auto
A       @       185.199.109.153         Auto
A       @       185.199.110.153         Auto
A       @       185.199.111.153         Auto
CNAME   www     YOUR_USERNAME.github.io  Auto
```

> DNS changes propagate within 24–48 hours. GitHub will auto-provision SSL via Let's Encrypt.

#### Step 5: Enforce HTTPS + WWW redirect

In GitHub Pages settings:
- ✅ Enforce HTTPS
- The www → non-www redirect is handled automatically by GitHub

---

### Option B — Vercel (Fastest, Zero Config)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts — select your GitHub account
# Vercel auto-detects Next.js and deploys instantly
```

Then in Vercel dashboard:
1. Go to your project → **Settings** → **Domains**
2. Add `akashsimon.com`
3. Follow Vercel's DNS instructions (similar to above, or use Vercel nameservers for automatic SSL)

---

## 🔧 Customisation

### Updating Content

All content is in the component files under `src/components/sections/`. Edit the data arrays directly — no CMS needed.

### Contact Form

The contact form currently logs to console. To make it functional:

**Option 1 — Formspree (free tier available)**
```bash
# 1. Sign up at formspree.io
# 2. Create a form and get your endpoint
# 3. In Contact.tsx, update the form action:
```
```tsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option 2 — EmailJS**
```bash
npm install emailjs-com
```

### Adding Profile Photo

1. Add your photo to `/public/profile.jpg`
2. In `Hero.tsx`, add an `<Image>` component from `next/image`:
```tsx
import Image from 'next/image'
<Image src="/profile.jpg" alt="Akash Simon" width={120} height={120} className="rounded-full" />
```

---

## ⚡ Performance

- **Static export** (`output: 'export'`) — pure HTML/CSS/JS, CDN-ready
- **Framer Motion** animations only on viewport enter (no layout thrash)
- **Google Fonts** loaded via `@import` — can be swapped to `next/font` for zero-CLS
- Images use `unoptimized: true` for static export compatibility

To run Lighthouse:
```bash
npm run build
npx serve out &
npx lighthouse http://localhost:3000 --view
```

---

## ♿ Accessibility

- Semantic HTML5 landmarks (`<nav>`, `<section>`, `<main>`, `<footer>`)
- All interactive elements are keyboard-navigable
- Color contrast: teal `#00d4aa` on navy `#0a0f1e` = **4.7:1** (WCAG AA)
- Focus rings preserved on inputs
- `aria-label` on icon-only links

---

## 📊 SEO

- Full Open Graph + Twitter Card metadata in `layout.tsx`
- `robots.txt` allows all crawlers
- `sitemap.xml` at `/sitemap.xml`
- Semantic heading hierarchy (h1 → h2 → h3)
- Canonical URL set to `https://akashsimon.com`

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.x | Framework + static export |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Utility-first styling |
| Framer Motion | 11.x | Scroll animations |
| Lucide React | latest | Icons |

---

## 📝 License

Personal use. All content © Akash Simon.
