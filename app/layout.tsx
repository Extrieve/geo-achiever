import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Geo Achiever',
  description: 'Welcome to GeoAchiever, an innovative application designed for explorers and achievers worldwide!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('bg-white text-slate-900 antialiased light', inter.className)}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
