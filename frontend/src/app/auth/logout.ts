import { removeAuthToken } from "./auth.api";

export function logout() {
  removeAuthToken(); // Elimina el token
  window.location.href = "/auth/login"; // Redirige al login
}
