import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import SidebarContextProvider from '@/context/sidebar';

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
        <SidebarContextProvider>
          <Header />
          <div className="flex justify-center">
            <div className="w-full 2xl:container">{children}</div>
          </div>
        </SidebarContextProvider>
      </body>
    </html>
  );
}
