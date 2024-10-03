import { PrismaClient, RolUsuario } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Define la contraseña de Superadmin
  const plainPassword =
    'HRhaUc9w2nKvz4LfCGP%0uMuz4PKmNoEJ&9QQ4gfV$m64W$97Zbs8TRnRJyX%rGWbJ^S!p3EMR2q^aM%o*WjxCUhLyWTNmD&0!Qf@T3Qj&m8auaBA74HBcZ1uzI5uR9S';
  const password = await bcrypt.hash(plainPassword, 10);

  // Crear un SuperAdmin en la base de datos
  const superAdmin = await prisma.superAdmin.create({
    data: {
      nombre: 'Super Admin',
      correo: 'superadmin@example.com',
      password,
      rol: RolUsuario.SUPERADMIN,
    },
  });

  console.log('Usuario SuperAdmin creado:', superAdmin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
