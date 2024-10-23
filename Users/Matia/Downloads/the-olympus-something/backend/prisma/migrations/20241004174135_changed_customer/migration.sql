/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `tokenVerificacion` on the `Cliente` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Cliente_tokenVerificacion_key";

-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "emailVerified",
DROP COLUMN "tokenVerificacion";
