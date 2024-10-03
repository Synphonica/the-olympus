import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAuthToken } from '@/app/auth/auth.api'; // Función que obtienes el token desde localStorage

export function ProtectedRoute({ children, roleRequired }: { children: React.ReactNode; roleRequired: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getAuthToken(); // Obtiene el token almacenado
    if (!token) {
      // Si no hay token, redirige al login
      router.push('/auth/login');
    } else {
      // Decodifica el payload del token JWT
      const payload = JSON.parse(atob(token.split('.')[1]));

      // Verifica si el rol del usuario es adecuado para acceder a la página
      if (payload.role !== roleRequired) {
        router.push('/'); // Redirige a la página principal si el rol no coincide
      }
    }
    setLoading(false); // Marca la carga como completa
  }, [router, roleRequired]);

  // Mientras se verifica, puedes mostrar un mensaje de "Cargando..."
  if (loading) return <p>Cargando...</p>;
  
  // Si todo está bien, muestra los componentes hijos
  return <>{children}</>;
}
