'use client';

import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-3">
      <ol className="flex">
        {breadcrumbs.map(breadcrumb => (
          <li key={breadcrumb.href} aria-current={breadcrumb.active}>
            <span className="mr-3 inline-block text-gray-500">/</span>
            <Link
              href={breadcrumb.href}
              className={`mr-3 ${
                breadcrumb.active ? 'text-gray-900' : 'text-gray-500'
              }`}>
              {breadcrumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
