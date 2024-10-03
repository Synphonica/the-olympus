"use client";

import { useRouter } from "next/navigation";
import { RegisterForm } from "./registerForm";
import { register } from "../auth.api"; 

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (data: { nombre: string; correo: string; telefono: string; direccion: string; password: string }) => {
    try {
      await register({ ...data });
      router.push("/auth/login"); // Redirige al login si el registro es exitoso
    } catch (error) {
      alert("Error al registrarse. Inténtalo nuevamente.");
    }
  };

  return (
    <div>
      <h1>Registro de Usuario</h1>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
