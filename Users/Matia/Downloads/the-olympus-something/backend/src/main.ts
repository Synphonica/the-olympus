import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Establecemos un prefijo global para todas las rutas de la API, si es necesario.
  // Esto significa que todas las rutas del backend comenzarán con '/api'.
  app.setGlobalPrefix('api');

  // Configurar CORS (Cross-Origin Resource Sharing) para permitir peticiones desde otros dominios, como tu frontend.
  app.enableCors({
    origin: ['http://localhost:3000'], // Aquí debes poner la URL del frontend, en desarrollo suele ser localhost:3000
    credentials: true,
  });

  const config = new DocumentBuilder()
  .setTitle('API Olympus')
  .setDescription('Esta es la documentación de la API de Olympus')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Usar ValidationPipe para validar los datos entrantes de las peticiones
  app.useGlobalPipes(new ValidationPipe());

  // Ejecutar el servidor NestJS en el puerto 4000
  await app.listen(4000);
  console.log(`🚀 Servidor corriendo en http://localhost:4000/api`);

  // Imprimir las rutas registradas en la aplicación (opcional para depuración)
  const server = app.getHttpAdapter().getInstance();
  console.log('Rutas disponibles:');
  server._router.stack
    .filter((layer) => layer.route)
    .forEach((layer) => console.log(layer.route.path));
}
bootstrap();
