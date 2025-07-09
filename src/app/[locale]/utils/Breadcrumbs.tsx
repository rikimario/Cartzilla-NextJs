"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTranslations } from "next-intl";

export default function Breadcrumbs() {
  const t = useTranslations();
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");

    const label = decodeURIComponent(segment).replace(/-/g, " ");

    return {
      label: t(segment) || label.charAt(0).toUpperCase() + label.slice(1),
      href,
    };
  });

  return (
    <Breadcrumb className="mt-4">
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link className="text-muted-foreground" href="/">
            Home
          </Link>
        </BreadcrumbLink>
        {segments.length > 0 && <BreadcrumbSeparator />}
      </BreadcrumbItem>

      {breadcrumbs.map((crumb, idx) => {
        const isLast = idx === breadcrumbs.length - 1;

        return (
          <BreadcrumbItem key={idx}>
            {isLast ? (
              <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink asChild className="text-muted-foreground">
                <Link href={crumb.href}>{crumb.label}</Link>
              </BreadcrumbLink>
            )}
            {!isLast && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
