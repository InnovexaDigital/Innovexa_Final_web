import Link from "next/link";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" }
];

/** Lightweight header for standalone landing pages (links resolve back to the homepage). */
export function LandingHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto w-full max-w-[78rem]">
        <nav className="relative grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[1.35rem] border border-white/[0.12] bg-[linear-gradient(115deg,rgba(9,18,33,.82),rgba(14,19,35,.72),rgba(10,11,25,.8))] px-4 py-2.5 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_18px_55px_rgba(0,0,0,.34)] sm:px-5 lg:px-6">
          <Link href="/" aria-label="INNOVEXA DIGITAL home" className="flex items-center">
            <Logo className="h-10 w-auto sm:h-11" />
          </Link>

          <div className="hidden items-center justify-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-[13px] font-semibold text-white/66 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-self-end">
            <Button asChild variant="premium">
              <Link href="/#contact">Start Project</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
