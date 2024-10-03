// src/app/profile/page.tsx
import { useEffect, useState } from 'react';

interface User {
  role: string | null;
  token: string | null;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    const token = localStorage.getItem('token');
    setUser({ role, token });
  }, []);

  if (!user) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      {user.role === 'ADMIN' && <AdminFeatures />}
      {user.role === 'SUPERADMIN' && <SuperadminFeatures />}
      {user.role === 'CLIENTE' && <ClienteFeatures />}
    </div>
  );
}

function AdminFeatures() {
  return <div>Funciones de Administrador</div>;
}

function SuperadminFeatures() {
  return <div>Funciones de Superadministrador</div>;
}

function ClienteFeatures() {
  return <div>Funciones de Cliente</div>;
}
