import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full h-12 flex justify-center border-y border-blue-500">
      <div className="w-full h-full flex items-center justify-between px-4 2xl:container">
        <Link href="/">BQP-IMS</Link>

        {/* Log Out will be replaced with Log In for an unauthenticated user */}
        <Link href="/auth/logout">Log Out</Link>
      </div>
    </header>
  );
}
