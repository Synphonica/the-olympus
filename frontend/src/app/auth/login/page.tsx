"use client";

import { useRouter } from "next/navigation";
import { LoginForm } from "./loginForm";
import { login } from "../auth.api";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (data: { correo: string; password: string }) => {
    try {
      const response = await login(data);
      
      // Redirige según el rol del usuario
      if (response.role === "admin") {
        router.push("/admin");
      } else if (response.role === "superadmin") {
        router.push("/superadmin");
      } else {
        router.push("/products");
      }
    } catch (error) {
      alert("Credenciales incorrectas. Inténtalo nuevamente.");
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
