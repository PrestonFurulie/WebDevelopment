import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'FLLC — Enterprise Intelligence Framework',
    description: 'Scalable cloud intelligence platform. AWS-native. Zero Trust architecture.',
    keywords: ['FLLC', 'cybersecurity', 'cloud', 'intelligence', 'AWS', 'enterprise'],
    authors: [{ name: 'FLLC' }],
    openGraph: {
        title: 'FLLC — Enterprise Intelligence Framework',
        description: 'Scalable cloud intelligence platform.',
        url: 'https://fllc.net',
        siteName: 'FLLC',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} bg-[#0D0D1A] text-[#E0E0FF] min-h-screen`}>
                {/* Ambient background gradient */}
                <div className="fixed inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
                </div>
                {children}
            </body>
        </html>
    );
}
