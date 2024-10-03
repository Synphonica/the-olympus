-- CreateTable
CREATE TABLE "RegistroActividad" (
    "id" SERIAL NOT NULL,
    "accion" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "detalles" TEXT NOT NULL,

    CONSTRAINT "RegistroActividad_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RegistroActividad" ADD CONSTRAINT "RegistroActividad_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
