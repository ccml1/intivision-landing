import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { GeistPixelGrid } from 'geist/font/pixel'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'INTIVISION — Videovigilancia inteligente para comunidades',
  description:
    'INTIVISION detecta amenazas en las cámaras de tu comunidad con IA y avisa a los vecinos al instante. Desarrollado en Lima, con piloto en preparación para La Molina.',
  keywords: ['INTIVISION', 'videovigilancia inteligente', 'seguridad vecinal', 'IA para cámaras', 'Lima', 'La Molina'],
  authors: [{ name: 'INTIVISION' }],
  creator: 'INTIVISION',
  publisher: 'INTIVISION',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    title: 'INTIVISION — Videovigilancia inteligente para comunidades',
    description: 'Detecta amenazas con IA y avisa a tus vecinos al instante.',
    siteName: 'INTIVISION',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INTIVISION — Videovigilancia inteligente',
    description: 'Seguridad inteligente para comunidades en Lima.',
    creator: '@intivision',
  },
  category: 'technology',
  icons: { icon: '/images/intivision-logo.png' },
}

export const viewport: Viewport = {
  themeColor: '#FF6A00',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-PE" className={`${jetbrainsMono.variable} ${GeistPixelGrid.variable}`}>
      <body className="font-mono antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} enableColorScheme={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
