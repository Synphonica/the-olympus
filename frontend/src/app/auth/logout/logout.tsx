// src/app/auth/logout/logout.tsx
import { useRouter } from 'next/router';

export default function Logout() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    router.push('/auth/login');
  };

  return <button onClick={handleLogout}>Cerrar Sesión</button>;
}
