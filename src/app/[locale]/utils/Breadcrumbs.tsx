"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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
    // const isNumeric = /^\d+$/.test(segment);

    const label = decodeURIComponent(segment).replace(/-/g, " ");
    // const label = isNumeric
    //   ? segment
    //   : decodeURIComponent(segment).replace(/-/g, " ");

    return {
      label: t(segment) || label.charAt(0).toUpperCase() + label.slice(1),
      href,
    };
  });

  return (
    <Breadcrumb className="mt-4">
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href="/">Home</Link>
        </BreadcrumbLink>
        {segments.length > 0 && <BreadcrumbSeparator />}
      </BreadcrumbItem>

      {breadcrumbs.map((crumb, idx) => (
        <BreadcrumbItem key={idx}>
          <BreadcrumbLink asChild>
            <Link href={crumb.href}>{crumb.label}</Link>
          </BreadcrumbLink>
          {idx < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
