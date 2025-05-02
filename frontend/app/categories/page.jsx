'use client'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Grid } from 'react-bootstrap-icons'

const CategoriesPage = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <section className="min-h-screen bg-white  text-gray-900 dark:text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 tracking-tight">
      <span className="text-blue-600 dark:text-blue-400">     🛍️ Explore Our  Categories</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              data-aos="zoom-in"
            >
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 p-4 rounded-full mb-4">
                <Grid size={32} />
              </div>
              <h2 className="text-xl font-semibold mb-2">{cat.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Discover the best in <strong>{cat.name}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesPage
