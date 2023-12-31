import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

        <title>dPI Connect</title>

        {/* Meta Tags */}

      </head>
      <body>
        <main>
          <ChakraProvider theme={theme}>
            {children}
          </ChakraProvider>
        </main>
      </body>
    </html>
  )
}
