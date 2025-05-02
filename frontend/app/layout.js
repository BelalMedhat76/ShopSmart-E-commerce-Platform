// app/layout.js
import './globals.css'
import Navbar from '../app/components/navbar'
import Footer from '../app/components/footer'
import AOSInit from '../app/components/AOSInit'

export const metadata = {
  title: 'ShopSmart',
  description: 'Simple E-Commerce with Flask + Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AOSInit />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
