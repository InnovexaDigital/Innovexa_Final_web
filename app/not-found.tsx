import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { Logo } from "@/components/common/logo";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 text-center">
      <div className="mx-auto max-w-xl">
        <Link href="/" aria-label="INNOVEXA DIGITAL home" className="inline-flex">
          <Logo className="mx-auto w-[190px]" />
        </Link>

        <p className="mt-12 font-display text-7xl font-bold text-white/15">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
          This page took a wrong turn.
        </h1>
        <p className="mt-4 text-base leading-7 text-white/55">
          The page you are looking for may have moved or no longer exists. Let&apos;s get you
          back to building, automating, and scaling.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,#1D9BF0,#3B82F6)] px-6 text-sm font-semibold text-white transition hover:bg-[linear-gradient(110deg,#38BDF8,#2563EB)]"
          >
            <Home className="h-4 w-4" />
            Back to home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 text-sm font-semibold text-white/80 transition hover:text-white"
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <nav aria-label="Helpful links" className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/45">
          <Link href="/#services" className="transition hover:text-cyan-400">Services</Link>
          <Link href="/#portfolio" className="transition hover:text-cyan-400">Portfolio</Link>
          <Link href="/#about" className="transition hover:text-cyan-400">About</Link>
          <Link href="/#faq" className="transition hover:text-cyan-400">FAQ</Link>
          <Link href="/#contact" className="transition hover:text-cyan-400">Contact</Link>
        </nav>
      </div>
    </main>
  );
}
