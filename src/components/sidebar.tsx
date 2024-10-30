'use client';
import { useSidebarContext } from '@/context/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Listings', href: '/dashboard/listings' },
];

export default function Sidebar() {
  const { isOpen, setOpen } = useSidebarContext();
  const pathname = usePathname();

  return (
    <nav
      className={`absolute top-0 ${
        isOpen ? 'left-0' : '-left-full'
      } w-full min-h-[calc(100vh-3rem)] flex flex-col bg-white border-r border-blue-500 transition-all md:static md:w-64`}>
      <ul className="w-full">
        {links.map(link => (
          <li key={link.href} className="w-full">
            <Link
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block w-full px-4 py-3 ${
                pathname == link.href && 'bg-gray-100'
              } hover:bg-gray-200`}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
