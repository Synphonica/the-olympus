/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `SuperAdmin` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `SuperAdmin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "emailVerified",
ADD COLUMN     "otpSecret" TEXT;

-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "emailVerified";

-- AlterTable
ALTER TABLE "SuperAdmin" DROP COLUMN "emailVerified",
DROP COLUMN "estado",
ADD COLUMN     "otpSecret" TEXT;
