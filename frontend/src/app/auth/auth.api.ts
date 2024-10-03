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
  try {
    const res = await fetch(`${BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) {
      throw new Error("Credenciales inválidas");
    }

    const response = await res.json();
    setAuthToken(response.access_token); // Guarda el token en localStorage
    return response; // Devuelve los datos de la respuesta
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
}

// Función para registrar un usuario
export async function register(data: {
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
  password: string;
}) {
  try {
    const res = await fetch(`${BACKEND_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Error en el registro");
    }

    const response = await res.json();
    return response;
  } catch (error) {
    console.error("Error al registrar:", error);
    throw error;
  }
}
