# Masonic — Modern Construction Company Website Template

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy%20to%20Cloudflare%20Pages-🟠F6821F?style=for-the-badge&logo=cloudflare&logoColor=white)](https://dash.cloudflare.com/?to=/:account/pages/new)
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://masonic-site.pages.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A bold, modern, responsive website template for construction and masonry companies — built with React, TypeScript, Tailwind CSS, and Framer Motion. Free & open source.

## ✨ Features

- 🎨 **Bold, modern design** — Dark hero with amber accents, glass panels, and glowing highlights
- 📱 **Fully responsive** — Optimized for every screen size, mobile-first
- ✨ **Smooth animations** — Scroll-triggered reveals, marquee, counters, and micro-interactions via Framer Motion
- 🔍 **SEO ready** — JSON-LD structured data, Open Graph, meta tags, semantic HTML
- 🏗️ **Project gallery** — Filterable portfolio grid with modal detail views
- 🎠 **Testimonials carousel** — Auto-playing client reviews with star ratings
- 💬 **FAQ accordion** — Animated expand/collapse with 8 pre-written questions
- 📊 **Animated stats** — Counting number animations
- 📬 **Contact form** — Client-side validation with toast notifications
- 🔝 **Back-to-top** — Progress-ring button
- 🦶 **Rich footer** — Newsletter signup, working hours, social links
- 🚀 **Cloudflare Pages ready** — Deploy with one click

## 🚀 Live Demo

**[View live demo →](https://masonic-site.pages.dev/)**

## 💻 Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Headless UI](https://headlessui.com/)
- [Hero Icons](https://heroicons.com/)
- [react-hot-toast](https://react-hot-toast.com/)
- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+

```bash
# 1. Clone the repo
git clone https://github.com/ardakaano/masonic.git

# 2. Install dependencies
cd masonic
npm install

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build
```

## ☁️ Deploy to Cloudflare Pages

1. Push your repo to GitHub/GitLab
2. Go to [Cloudflare Dashboard → Pages](https://dash.cloudflare.com/?to=/:account/pages)
3. Click **Create a project** → **Connect to Git**
4. Select your repo
5. Build settings auto-detect for Vite — just confirm:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
6. Deploy!

Your site will be live at `https://your-project.pages.dev`. You can also add a custom domain.

## 📁 Project Structure

```
masonic/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Scroll-aware nav + mobile drawer
│   │   ├── Hero.tsx             # Full-screen hero with stats
│   │   ├── Stats.tsx            # Animated counter section
│   │   ├── About.tsx            # Company story & values
│   │   ├── Services.tsx         # Service cards with features
│   │   ├── Process.tsx          # 4-step workflow timeline
│   │   ├── Projects.tsx         # Filterable portfolio grid
│   │   ├── ProjectModal.tsx     # Detail modal
│   │   ├── TrustedBy.tsx        # Partner logo marquee
│   │   ├── Testimonials.tsx     # Carousel with stars
│   │   ├── FAQ.tsx             # Accordion
│   │   ├── Contact.tsx         # Form + validation
│   │   ├── Footer.tsx          # Newsletter + links
│   │   ├── BackToTop.tsx       # Progress-ring button
│   │   ├── AnimatedCounter.tsx  # Reusable counter
│   │   └── Reveal.tsx          # Scroll-reveal wrapper
│   ├── App.tsx                  # Main layout
│   ├── index.css               # Global styles + components
│   └── main.tsx                # Entry point
├── public/
│   ├── favicon.svg
│   └── _headers                # Cloudflare headers config
├── index.html                  # SEO meta + structured data
├── tailwind.config.js          # Color palette, fonts, animations
├── vite.config.ts
└── package.json
```

## 🎨 Customization

1. **Colors** — Edit `tailwind.config.js` to change the amber accent and dark primary
2. **Content** — Update text and images in `src/components/`
3. **Projects** — Add/remove items in the `projects` array in `Projects.tsx`
4. **FAQ** — Edit questions in `FAQ.tsx`
5. **Fonts** — Change Google Fonts in `index.html` and `tailwind.config.js`

## 📝 License

Open source under the [MIT License](LICENSE).

## 💖 Support

If this template helps you, consider supporting:

<a href="https://www.buymeacoffee.com/ardakaanozcan" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="60px" width="217px">
</a>

## 🤝 Contributing

PRs welcome!

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Arda Kaan Özcan**
- Twitter: [@ardakaanozcan_](https://twitter.com/ardakaanozcan_)
- Email: [hey@ardakaanozcan.com](mailto:hey@ardakaanozcan.com)

Project Link: [https://github.com/ardakaano/masonic](https://github.com/ardakaano/masonic)
