// // app/products/page.jsx
// 'use client'

// import { useEffect, useState } from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import Image from 'next/image'

// export default function ProductsPage() {
//   const [categories, setCategories] = useState([])
//   const [selectedCategory, setSelectedCategory] = useState(null)
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true })

//     // Fetch categories on load
//     fetch('http://localhost:5000/api/categories')
//       .then(res => res.json())
//       .then(data => setCategories(data))
//   }, [])

//   useEffect(() => {
//     if (selectedCategory) {
//       fetch(`http://localhost:5000/api/categories/${selectedCategory}/products`)
//         .then(res => res.json())
//         .then(data => setProducts(data))
//     }
//   }, [selectedCategory])

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

//       {/* Filter Buttons */}
//       <div className="flex flex-wrap gap-4 justify-center mb-8">
//         {categories.map(cat => (
//           <button
//             key={cat.id}
//             className={`px-4 py-2 rounded-full border transition-all ${
//               selectedCategory === cat.id
//                 ? 'bg-black text-white'
//                 : 'bg-white border-gray-300 hover:bg-gray-100'
//             }`}
//             onClick={() => setSelectedCategory(cat.id)}
//             data-aos="fade-up"
//           >
//             {cat.name}
//           </button>
//         ))}
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map(product => (
//           <div
//             key={product.id}
//             className="bg-white shadow-lg rounded-xl overflow-hidden p-4 hover:scale-105 transition-transform"
//             data-aos="fade-up"
//           >
//             <Image
//               src={`/images/${product.image}`}
//               alt={product.name}
//               width={300}
//               height={200}
//               className="w-full h-48 object-cover rounded-lg"
//             />
//             <h2 className="mt-4 font-bold text-lg">{product.name}</h2>
//             <p className="text-gray-500">{product.description}</p>
//             <p className="text-black font-semibold mt-2">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }



// app/products/page.jsx
'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryId = searchParams.get('category')
  const [products, setProducts] = useState([])

  useEffect(() => {
    AOS.init({ duration: 800, once: true })

    if (categoryId) {
      fetch(`http://localhost:5000/api/categories/${categoryId}/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }
  }, [categoryId])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden p-4 hover:scale-105 transition-transform"
            data-aos="fade-up"
          >
            <Image
              src={`/images/${product.image}`}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="mt-4 font-bold text-lg">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-black font-semibold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
