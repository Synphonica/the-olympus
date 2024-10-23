/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/auth/auths.api.ts
import axiosInstance from "../../lib/axios";

// Función para registrar a un nuevo usuario
export const registerUser = async (userData: {
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
  password: string;
}) => {
  try {
    const response = await axiosInstance.post("/api/auth/register", userData);
    return response.data;
  } catch (error) {
    const err = error as any;
    throw new Error(
      `Error en el registro: ${err.response?.data?.message || err.message}`
    );
  }
};

// Función para hacer login sin manejar tokens manualmente
export const loginUser = async (loginData: {
  correo: string;
  password: string;
}) => {
  try {
    console.log("Datos de inicio de sesión enviados:", loginData);

    // Realizamos la solicitud al backend
    const response = await axiosInstance.post("/api/auth/login", loginData);

    // El backend debería estar manejando las cookies, solo verificamos si la respuesta fue exitosa
    console.log("Respuesta del backend:", response); // Solo para verificar

    return response.data; // Devolver el resultado de la respuesta si es necesario
  } catch (error: any) {
    console.error("Error en loginUser:", error.response?.data || error.message);
    throw new Error(
      `Error al iniciar sesión: ${
        error.response?.data?.message || error.message
      }`
    );
  }
};

// No es necesario refrescar el token manualmente, ya que la cookie lo hace por ti
