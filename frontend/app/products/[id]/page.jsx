// app/products/[id]/page.jsx
import { getProductDetails } from '../../utils/apis'
import Link from 'next/link'

export default async function ProductPage({ params }) {
  const { id } = params
  const product = await getProductDetails(id)

  if (product.error) {
    return <p className="p-6 text-red-500 text-center">Product not found.</p>
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <img
          src={`/images/${product.image}`}
          alt={product.name}
          className="w-full h-[350px] object-cover rounded-xl shadow"
        />

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-xl font-semibold text-green-600">${product.price}</p>

          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
