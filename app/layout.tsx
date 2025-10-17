import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Fredericka_the_Great } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

const fredericka = Fredericka_the_Great({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-fredericka'
});

export const metadata: Metadata = {
  title: 'Hexed Sugar - Halloween Candy Boutique',
  description:
    'Dive into a neon nightmare of sweets at Hexed Sugar, the ultimate Gen Z Halloween candy store experience.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${fredericka.variable}`}>
      <body>{children}</body>
    </html>
  );
}
