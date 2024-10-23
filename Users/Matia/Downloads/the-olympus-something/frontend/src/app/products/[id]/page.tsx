import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { getProduct } from "../products.api"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

interface Props {
    params: {
        id: string
    }
}

async function ProductDetailPage({params} : Props) {
    const product = await getProduct(params.id)
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-3xl mx-auto overflow-hidden shadow-xl">
        <CardHeader className="bg-orange-500 text-white p-6">
          <CardTitle className="flex justify-between items-center">
            <span className="text-2xl font-bold">Detalle del producto: {product.id}</span>
            <Link className={buttonVariants({ variant: "secondary" })} href="/">Volver</Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Image src={product.imagenUrl} alt={product.nombre} width={500} height={256} className="w-full h-64 object-cover rounded-lg shadow-md mb-4" />
              <p className="text-3xl font-bold text-orange-600">${product.precio.toFixed(2)}</p>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-semibold text-gray-800">{product.nombre}</h1>
              <p className="text-gray-600"><span className="font-semibold">Descripción:</span> {product.descripcion}</p>
              <p className="text-gray-600"><span className="font-semibold">Categoría:</span> {product.categoria}</p>
              <p className="text-gray-600"><span className="font-semibold">Stock:</span> {product.stock} unidades</p>
              <div className="mt-6">
                <span className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                  {product.categoria}
                </span>
              </div>
            </div>
          </CardContent>
          </Card>
    </div>
  )
}

export default ProductDetailPage