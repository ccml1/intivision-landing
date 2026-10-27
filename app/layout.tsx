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
  title: 'VIGÍA — Videovigilancia inteligente para comunidades',
  description:
    'VIGÍA detecta amenazas en las cámaras de tu comunidad con IA y avisa a los vecinos al instante. Desarrollado en Lima, con piloto en preparación para La Molina.',
  keywords: ['VIGÍA', 'videovigilancia inteligente', 'seguridad vecinal', 'IA para cámaras', 'Lima', 'La Molina'],
  authors: [{ name: 'VIGÍA' }],
  creator: 'VIGÍA',
  publisher: 'VIGÍA',
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
    title: 'VIGÍA — Videovigilancia inteligente para comunidades',
    description: 'Detecta amenazas con IA y avisa a tus vecinos al instante.',
    siteName: 'VIGÍA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIGÍA — Videovigilancia inteligente',
    description: 'Seguridad inteligente para comunidades en Lima.',
    creator: '@vigia',
  },
  category: 'technology',
  icons: { icon: '/vigia-camera.svg' },
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
    <html lang="es-PE" className={`${jetbrainsMono.variable} ${GeistPixelGrid.variable}`} suppressHydrationWarning>
      <body className="font-mono antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
