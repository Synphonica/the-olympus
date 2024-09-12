-- CreateEnum
CREATE TYPE "EstadoPedido" AS ENUM ('PENDIENTE', 'EN_PROCESO', 'ENVIADO', 'ENTREGADO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "MetodoPago" AS ENUM ('TARJETA', 'PAYPAL', 'TRANSFERENCIA', 'EFECTIVO');

-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "categoria" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "imagenUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "fechaPedido" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" "EstadoPedido" NOT NULL DEFAULT 'PENDIENTE',
    "total" DOUBLE PRECISION NOT NULL,
    "metodoPago" "MetodoPago" NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetallesPedido" (
    "id" SERIAL NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "productoId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precioUnitario" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DetallesPedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pago" (
    "id" SERIAL NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "fechaPago" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metodoPago" "MetodoPago" NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pago_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Producto_categoria_idx" ON "Producto"("categoria");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_correo_key" ON "Cliente"("correo");

-- CreateIndex
CREATE INDEX "Cliente_correo_idx" ON "Cliente"("correo");

-- CreateIndex
CREATE INDEX "Pedido_clienteId_idx" ON "Pedido"("clienteId");

-- CreateIndex
CREATE INDEX "Pedido_estado_idx" ON "Pedido"("estado");

-- CreateIndex
CREATE INDEX "DetallesPedido_pedidoId_idx" ON "DetallesPedido"("pedidoId");

-- CreateIndex
CREATE INDEX "DetallesPedido_productoId_idx" ON "DetallesPedido"("productoId");

-- CreateIndex
CREATE UNIQUE INDEX "Pago_pedidoId_key" ON "Pago"("pedidoId");

-- CreateIndex
CREATE INDEX "Pago_pedidoId_idx" ON "Pago"("pedidoId");

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallesPedido" ADD CONSTRAINT "DetallesPedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallesPedido" ADD CONSTRAINT "DetallesPedido_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
