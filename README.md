This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design System Reference

### 🎨 Colors

**Brand Colors**
- **Blue (Primary)**: `#137cc1` (Used for Links, Buttons, Gradients in Light Mode)
- **Blue Darker**: `#0b4e7a` (Gradient Mid)
- **Blue Darkest**: `#062e4a` (Gradient End)

**Theme Specifics (Light Mode)**
- **Backgrounds**:
  - Global: White / Light Grey `#EFEFEF` (TextContent Area)
  - Hero Awards: `#137cc1` (70% Opacity)
- **Text**:
  - Headings: Slate 900
  - Body: Slate 900 / Dark Grey
- **Gradients**:
  - Main: `#137cc1` → `#0b4e7a` → `#062e4a`
  - Text on Blue BG: White Gradient

**Theme Specifics (Dark Mode)**
- **Backgrounds**:
  - Global: Black / Neutral 900
  - Content Areas: `#1c2127`
  - Awards: Black (30% Opacity)
- **Text**:
  - Headings/Body: White / Grey
- **Gradients** (The "Gold Standard"):
  - Gold: `#F2E59E` → `#DBC065` → `#A07727`

### 🅰️ Typography

- **Font Family**: `Manrope` (Variable font via Google Fonts)
- **Weights**:
  - Regular (400)
  - Bold (700)
  - Extra Bold (800)
  - Black (900)

### 🧩 Assets & Icons

- **Icons**: Font Awesome Pro 6 Duotone (Loaded via `public/css/all.min.css`)
- **Images**:
  - Light Mode Hero: `/images/Puffy-Lux-Hybrid-light.jpeg`
  - Dark Mode Hero: `/images/Puffy-Lux-Hybrid.jpeg`
  - Logo: `/images/Puffy_Logo.png`

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
