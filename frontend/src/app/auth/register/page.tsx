'use client';

import { useRouter } from 'next/navigation';
import { RegisterForm } from '@/app/auth/register/registerForm';
import { register } from '../auth.api'; // Importa la función register de tu auth.api

const RegisterPage = () => {
  const router = useRouter();

  // Función para manejar el envío del formulario
  const handleRegister = async (data: {
    nombre: string;
    correo: string;
    telefono: string;
    direccion: string;
    password: string;
  }) => {
    try {
      const response = await register(data); // Llama a la API de registro
      if (response.id) {
        // Si el registro es exitoso, redirige al login
        router.push('/auth/login');
      } else {
        alert('Error: No se pudo registrar el usuario');
      }
    } catch (error) {
      console.error('Error al registrarse:', error);
      alert('Ocurrió un error al registrarse. Intenta nuevamente.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Registrarse
        </h2>
        <RegisterForm onSubmit={handleRegister} />
      </div>
    </div>
  );
};

export default RegisterPage;
