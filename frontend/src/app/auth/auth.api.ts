/* eslint-disable @typescript-eslint/no-explicit-any */

export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function login(credentials: { correo: string; password: string }) {
  const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    cache: "no-store",
  });
  return await res.json();
}

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

export async function logout() {
  const res = await fetch(`${BACKEND_URL}/api/auth/logout`, {
    method: "POST",
    cache: "no-store",
  });
  return await res.json();
}

export async function getCurrentUser() {
  const res = await fetch(`${BACKEND_URL}/api/auth/user`, {
    cache: "no-store",
  });
  return await res.json();
}

export async function updateUser(userId: string, userData: any) {
  const res = await fetch(`${BACKEND_URL}/api/auth/user/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    cache: "no-store",
  });
  return await res.json();
}

export async function resetPassword(email: string) {
  const res = await fetch(`${BACKEND_URL}/api/auth/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
    cache: "no-store",
  });
  return await res.json();
}

export function getAuthToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
}

export function setAuthToken(token: string): void {
  localStorage.setItem('token', token);
}

export function removeAuthToken(): void {
  localStorage.removeItem('token');
}

export function isAuthenticated(): boolean {
  return !!getAuthToken();
}