/*
  Warnings:

  - A unique constraint covering the columns `[tokenVerificacion]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tokenVerificacion" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_tokenVerificacion_key" ON "Cliente"("tokenVerificacion");
