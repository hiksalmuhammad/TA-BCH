import { Inter, Kaisei_HarunoUmi } from 'next/font/google'
import './globals.css'

const kaisei = Kaisei_HarunoUmi({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-kaisei',
})

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kaisei.className}>{children}</body>
    </html>
  )
}
