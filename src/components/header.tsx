'use client';
import { useSidebarContext } from '@/context/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const { isOpen, setOpen } = useSidebarContext();
  return (
    <header className="w-full h-12 flex justify-center border-y border-blue-500">
      <div className="w-full h-full flex items-center justify-between px-4 2xl:container">
        <div className="flex gap-2 items-center">
          {/* hide sidebar toggle when not on a dashboard route with a sidebar */}
          {pathname.startsWith('/dashboard') && (
            <button
              className="w-8 h-8 bg-blue-500 rounded-md md:hidden"
              onClick={() => setOpen(!isOpen)}>
              TS
            </button>
          )}
          <Link href="/">BQP-IMS</Link>
        </div>

        {/* Log Out will be replaced with Log In for an unauthenticated user */}
        <Link href="/auth/logout">Log Out</Link>
      </div>
    </header>
  );
}
