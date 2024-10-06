/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { loginUser } from "../auths.api"; // Usa las funciones de auths.api
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    correo: "",
    password: "",
  });

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await loginUser(formData);
      console.log("Login exitoso:", userData);
      router.push("/"); // Redirige a la página principal
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg">
        {/* Columna de imagen */}
        <div className="w-1/2 hidden md:block relative">
          <Image
            src="/img/img-delivery.png"
            alt="Imagen de entrega"
            layout="fill"
            objectFit="cover"
            className="rounded-l-lg"
          />
        </div>

        {/* Columna de formulario */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-extrabold text-orange-600 text-center mb-6">
            Iniciar sesión
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="correo"
                className="block text-sm font-medium text-gray-700"
              >
                Correo:
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition duration-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition duration-300"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Iniciar sesión
            </Button>
          </form>
          <div className="text-center mt-6">
            <Link href="/auth/register" className="text-orange-600 hover:underline">
              ¿No tienes cuenta? Regístrate aquí
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;