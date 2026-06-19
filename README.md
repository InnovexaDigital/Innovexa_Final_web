# INNOVEXA Premium Site

A premium Next.js website for INNOVEXA, an AI, design, automation, and digital growth studio. The site includes animated service sections, an animated hero, pricing, portfolio highlights, testimonials, blog previews, and a contact intake form.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- GSAP and Framer Motion
- Lenis smooth scrolling
- EmailJS for contact form delivery

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app at:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production build locally.

```bash
npm run lint
```

Runs Next.js linting.

```bash
npm run typecheck
```

Runs TypeScript type checking without emitting files.

## Environment Variables

The contact form can send messages through EmailJS. Create a `.env.local` file in the project root if you want form submissions to be delivered:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

If these variables are not set, the form still displays a success state but does not send through EmailJS.

## Project Structure

```text
app/
  globals.css        Global styles
  layout.tsx         App metadata and root layout
  page.tsx           Homepage composition
components/
  common/            Shared visual components
  layout/            Navbar and footer
  providers/         Animation and smooth-scroll providers
  sections/          Homepage sections
  ui/                Reusable UI primitives
hooks/               Custom React hooks
lib/                 Utilities, store, and site data
```

## Customizing Content

Most site copy, navigation, services, pricing, portfolio items, testimonials, blog previews, and contact options live in:

```text
lib/site-data.ts
```

Update that file to change the business content without digging through every section component.

## Deployment

This app can be deployed to Vercel or any platform that supports Next.js.

For a production build:

```bash
npm run build
```
