import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {Header} from '~/components';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Systeme.io',
  description: 'The only tool you need to launch your online business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
