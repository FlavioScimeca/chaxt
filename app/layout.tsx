import Head from 'next/head';
import ActiveStatus from './components/ActiveStatus';
import AuthContext from './context/AuthContext';
import ToasterContext from './context/ToasterContext';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const APP_NAME = 'Chaxt app';

export const metadata = {
  title: 'Chaxt',
  description: 'Chat app created by Flavio Scimeca',
  icons: {
    icon: '/images/favicon.png',
  },
  applicationName: APP_NAME,
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  manifest: '/manifest.json',
  keywords: ['nextjs', 'pwa', 'next-pwa'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        <meta name="theme-color" content="#000" />
      </Head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
