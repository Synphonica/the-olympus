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

// Función para hacer login
export const loginUser = async (loginData: {
  correo: string;
  password: string;
}) => {
  try {
    const response = await axiosInstance.post("/api/auth/login", loginData);
    const { accessToken, refreshToken } = response.data.backendTokens;

    // Guardamos los tokens en el localStorage
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return response.data;
  } catch (error) {
    const err = error as any;
    throw new Error(
      `Error al iniciar sesión: ${err.response?.data?.message || err.message}`
    );
  }
};

// Función para refrescar el token de acceso usando el refreshToken
export const refreshAccessToken = async () => {
  try {
    const response = await axiosInstance.post("/api/auth/refresh");
    const { accessToken, refreshToken } = response.data;

    // Actualizamos los tokens en el localStorage
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return accessToken;
  } catch (error) {
    const err = error as any;
    throw new Error(
      `Error al refrescar el token: ${
        err.response?.data?.message || err.message
      }`
    );
  }
};

// Función para hacer logout
export const logoutUser = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
