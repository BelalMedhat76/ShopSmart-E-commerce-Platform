// components/Navbar.jsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">🛍️ ShopSmart</Link>
        <ul className="flex gap-6 font-medium">
          <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
        </ul>
      </div>
    </nav>
  )
}
