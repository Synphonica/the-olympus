/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `Producto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Producto_nombre_key" ON "Producto"("nombre");
