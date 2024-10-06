/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { createProduct, updateProduct } from "../products.api";
import { useParams, useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

export function ProductForm({ product }: any) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      nombre: product?.nombre,
      descripcion: product?.descripcion,
      precio: product?.precio,
      categoria: product?.categoria,
      stock: product?.stock,
      imagenUrl: product?.imagenUrl,
    },
  });
  const router = useRouter();
  const params = useParams<{id: string}>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (params?.id) {
        await updateProduct(params.id, {
          ...data,
          precio: parseFloat(data.precio),
          stock: parseInt(data.stock),
        })
      }
      await createProduct({
        ...data,
        precio: parseFloat(data.precio),
        stock: parseInt(data.stock),
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  });

  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="nombre" className="text-sm font-medium text-gray-700">Nombre de Producto</Label>
        <Input id="nombre" {...register("nombre")} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="descripcion" className="text-sm font-medium text-gray-700">Descripción</Label>
        <Input id="descripcion" {...register("descripcion")} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="precio" className="text-sm font-medium text-gray-700">Precio</Label>
          <Input id="precio" {...register("precio")} type="number" step="0.01" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="stock" className="text-sm font-medium text-gray-700">Stock</Label>
          <Input id="stock" {...register("stock")} type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="categoria" className="text-sm font-medium text-gray-700">Categoría</Label>
        <Input id="categoria" {...register("categoria")} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="imagenUrl" className="text-sm font-medium text-gray-700">URL de la Imagen</Label>
        <Input id="imagenUrl" {...register("imagenUrl")} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
      </div>

      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
        {params.id ? 'Editar Producto' : 'Crear Producto'}
      </Button>
    </form>
  );
}

export default ProductForm;