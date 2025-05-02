// app/categories/[id]/page.jsx
import { getProductsByCategory } from '../../utils/apis'
import Link from 'next/link'

export default async function CategoryPage({ params }) {
  const { id } = params
  const products = await getProductsByCategory(id)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <img src={`/images/${product.image}`} alt={product.name} className="w-full h-40 object-cover rounded-md mb-3" />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
