/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { deleteProduct } from "@/app/products/products.api";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function ProductCard({ product }: any) {
  const router = useRouter();

  async function handleRemoveProduct(id: any) {
    await deleteProduct(id);
    router.refresh();
  }

  return (
    <Card
      key={product.id}
      onClick={() => router.push(`/products/${product.id}`)}
      className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer group"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.imagenUrl}
          alt={product.nombre}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="flex justify-between items-center">
          <span className="text-lg font-semibold truncate">
            {product.nombre}
          </span>
          <span className="text-xl font-bold text-orange-500">
            ${product.precio.toFixed(2)}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.descripcion}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between gap-2">
        <Button
          className="flex-1 transition-colors hover:bg-orange-600"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/products/${product.id}/edit`);
          }}
        >
          Editar
        </Button>
        <Button
          className="flex-1 transition-colors hover:bg-red-700"
          variant="destructive"
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveProduct(product.id);
          }}
        >
          Eliminar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
