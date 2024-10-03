"use client";

import { useRouter } from "next/navigation";
import { LoginForm } from "@/app/auth/login/loginForm";
import { login } from "../auth.api";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (data: { correo: string; password: string }) => {
    try {
      const response = await login(data); // Llama a la API del backend
      if (response.access_token) {
        localStorage.setItem("token", response.access_token);

        // Verifica el rol del usuario y redirige
        if (response.role === "superadmin") {
          router.push("/admin/panel"); // Redirigir al panel de superadmin
        } else if (response.role === "admin") {
          router.push("/admin/dashboard"); // Redirigir al dashboard de admin
        } else {
          router.push("/"); // Redirigir a la página principal para clientes
        }
      } else {
        alert("Error: Credenciales inválidas");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Ocurrió un error al iniciar sesión. Intenta nuevamente.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Iniciar sesión
        </h2>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
