/* eslint-disable @typescript-eslint/no-explicit-any */
// URL base del backend
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// Establecer el token en localStorage
export function setAuthToken(token: string): void {
  localStorage.setItem("token", token);
}

// Obtener el token de autenticación desde localStorage
export function getAuthToken(): string | null {
  return localStorage.getItem("token");
}

// Eliminar el token al cerrar sesión
export function removeAuthToken(): void {
  localStorage.removeItem("token");
}

// Función para iniciar sesión
export async function login(credentials: { correo: string; password: string }) {
  const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) throw new Error("Login fallido");
  return res.json(); // Debe devolver el token de acceso
}


// Función para registrar un usuario
export async function register(userData: any) {
  const res = await fetch(`${BACKEND_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    cache: "no-store",
  });

  return await res.json();
}

