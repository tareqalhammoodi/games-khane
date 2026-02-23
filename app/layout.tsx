import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://games-khane.vercel.app'),
  title: 'Games Khane',
  description: 'All-in-one party games: Truth or Dare, Would You Rather, Most Likely To, challenges, and more.',
  openGraph: {
    title: 'Games Khane',
    description: 'Instant party fun. Pick a game and pass the phone.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Games Khane',
    description: 'Instant party games in one app.'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
