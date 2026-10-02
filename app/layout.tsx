import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'White Diamond Nursery | Your Hometown Nursery in Palmetto',
 description: 'Explore plants, flowers, palms and pottery at White Diamond Nursery in Palmetto, Florida. Visit us at 7301 36th Ave East or call 941-545-2520.',
 robots: { index: false, follow: false }, // Enable indexing after the redesign is approved.
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) {
 return <html lang="en"><body>{children}</body></html>;
}
