import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; path: string };

/** Visible, accessible breadcrumb trail. Pair the same `crumbs` with breadcrumbSchema(). */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-10">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-white/50">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-white/30" aria-hidden />}
              {isLast ? (
                <span aria-current="page" className="text-white/75">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className="transition hover:text-cyan-400">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
