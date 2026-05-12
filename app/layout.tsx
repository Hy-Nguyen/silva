import type { Metadata } from 'next'
import './globals.css'
import Logo from '@/public/assets/logo.jpg'

export const metadata: Metadata = {
    title: 'Mariscos Silva',
    description: 'Fresh Daily · Phoenix, AZ',
    openGraph: {
        title: 'Mariscos Silva',
        description: 'Fresh Daily · Phoenix, AZ',
        url: 'https://mariscossilva.com',
        siteName: 'Mariscos Silva',
        images: [
            {
                url: Logo.src,
                width: 1200,
                height: 630,
                alt: 'Mariscos Silva - Fresh Daily · Phoenix, AZ',
            },
        ],
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/* Google Fonts preconnect — actual font links injected dynamically by ThemeProvider */}
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                {/* Default font pair loaded statically to avoid FOUC */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body style={{ margin: 0 }}>{children}</body>
        </html>
    )
}
