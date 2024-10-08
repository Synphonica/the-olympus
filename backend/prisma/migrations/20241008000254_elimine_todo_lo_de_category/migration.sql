/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Restaurante` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoria` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Producto" DROP CONSTRAINT "Producto_categoriaId_fkey";

-- DropIndex
DROP INDEX "Producto_categoriaId_idx";

-- AlterTable
ALTER TABLE "Producto" DROP COLUMN "categoriaId",
ADD COLUMN     "categoria" TEXT NOT NULL;

-- DropTable
DROP TABLE "Categoria";

-- DropTable
DROP TABLE "Restaurante";

-- CreateIndex
CREATE INDEX "Producto_categoria_idx" ON "Producto"("categoria");
