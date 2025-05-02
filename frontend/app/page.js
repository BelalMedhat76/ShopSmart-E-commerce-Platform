'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { getCategories } from './utils/apis'
import { ChevronRight } from 'react-bootstrap-icons'

export default function Home() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    AOS.init({ duration: 700 })
    const fetchData = async () => {
      const cats = await getCategories()
      setCategories(cats)
    }
    fetchData()
  }, [])

  return (
    <main className=" bg-white  text-gray-800 dark:text-white p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-md mt-20">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">🗂️ Categories Menu</h1>
        <ul className="space-y-4">
          {categories.map((cat, index) => (
            <li
              key={cat.id}
              data-aos="fade-right"
              data-aos-delay={index * 100}
            >
              <Link
                href={`/categories/${cat.id}`}
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:bg-blue-100 dark:hover:bg-gray-700 transition-all duration-300 group"
              >
                <span className="text-lg font-medium group-hover:text-blue-600 transition-colors">{cat.name}</span>
                <ChevronRight className="text-gray-400 group-hover:text-blue-600 transition-transform transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
