import type { Metadata } from 'next';
import { Hanken_Grotesk, Josefin_Sans } from 'next/font/google';
import './globals.css';

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  weight: ['300', '400', '600', '700'],
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Katherine De Zilva — Portfolio',
  description: 'UI/UX designer, animator and digital illustrator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${hanken.variable} ${josefin.variable}`}>
      <body className="font-hanken text-heading-dark antialiased">
        {children}
      </body>
    </html>
  );
}
