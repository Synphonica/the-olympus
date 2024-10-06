import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Api rset')
    .setDescription('Documentación de la API de rset')
    .setVersion('1.0')

    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

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
