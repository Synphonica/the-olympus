// src/lib/axios.ts
import axios from "axios";

// Configuración inicial de Axios
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true, // Enviamos las cookies en todas las solicitudes
});

// Interceptor para añadir el token de acceso en las solicitudes
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken"); // Obtén el token desde localStorage
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar respuestas con errores, como token expirado
axiosInstance.interceptors.response.use(
  (response) => response, // Si la respuesta es exitosa, la devolvemos tal cual
  async (error) => {
    const originalRequest = error.config;

    // Si el token ha expirado, intentamos refrescarlo
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          const response = await axiosInstance.post(
            "/auth/refresh",
            {},
            {
              headers: {
                Authorization: `Refresh ${refreshToken}`,
              },
            }
          );

          const { accessToken, refreshToken: newRefreshToken } = response.data;

          // Guarda los nuevos tokens en localStorage
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", newRefreshToken);

          // Actualiza el token de la solicitud original y reinténtala
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return axiosInstance(originalRequest);
        }
      } catch (err) {
        // En caso de que refrescar el token falle, redirigimos a la página de login o tomamos otras acciones
        console.error("No se pudo refrescar el token, redirigiendo al login.");
        window.location.href = "/auth/login"; // Redirigir al login
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
