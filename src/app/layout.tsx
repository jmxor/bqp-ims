import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'BQP - IMS',
  description: 'A simple dashboard for managing eBay listings.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex flex-col items-center">
          <div className="w-full 2xl:container">{children}</div>
        </div>
      </body>
    </html>
  );
}
