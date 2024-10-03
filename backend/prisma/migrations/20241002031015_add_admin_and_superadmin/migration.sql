-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" "RolUsuario" NOT NULL DEFAULT 'ADMIN',
    "estado" BOOLEAN NOT NULL DEFAULT true,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "tokenVerificacion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuperAdmin" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" "RolUsuario" NOT NULL DEFAULT 'SUPERADMIN',
    "estado" BOOLEAN NOT NULL DEFAULT true,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "tokenVerificacion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SuperAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_correo_key" ON "Admin"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_tokenVerificacion_key" ON "Admin"("tokenVerificacion");

-- CreateIndex
CREATE INDEX "Admin_correo_idx" ON "Admin"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "SuperAdmin_correo_key" ON "SuperAdmin"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "SuperAdmin_tokenVerificacion_key" ON "SuperAdmin"("tokenVerificacion");

-- CreateIndex
CREATE INDEX "SuperAdmin_correo_idx" ON "SuperAdmin"("correo");

-- RenameForeignKey
ALTER TABLE "RegistroActividad" RENAME CONSTRAINT "RegistroActividad_usuarioId_fkey" TO "RegistroActividad_Cliente_fkey";

-- AddForeignKey
ALTER TABLE "RegistroActividad" ADD CONSTRAINT "RegistroActividad_SuperAdmin_fkey" FOREIGN KEY ("usuarioId") REFERENCES "SuperAdmin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroActividad" ADD CONSTRAINT "RegistroActividad_Admin_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
