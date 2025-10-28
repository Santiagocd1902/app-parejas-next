import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Juegos Originales',
  description: 'Mini juegos desarrollados con Next.js y TypeScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
