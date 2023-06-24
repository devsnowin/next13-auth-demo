import AuthProvider from '@/context/Auth';
import './globals.css';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Next Demo',
  description: 'Demo nextjs application with next-auth integrated',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="black">
      <body className="min-h-screen max-w-7xl mx-auto grid grid-rows-[auto_1fr_auto]">
        <AuthProvider>
          <Navbar />
          {children}
          <Toaster position="bottom-right" />
          <footer className="grid place-items-center py-2">
            <p>
              @2023. Made by{' '}
              <Link
                href="https://zipy.live/snowin/website"
                target="_blank"
                className="underline"
              >
                snowin
              </Link>
            </p>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
