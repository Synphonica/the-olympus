"use client";

import { useState } from "react";
import { registerUser } from "../auths.api"; // Importa la función desde auths.api
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
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
      const responseData = await registerUser(formData);
      console.log("Registro exitoso:", responseData);
      console.log("Redirigiendo a la página principal..."); // Comprobar si llega aquí
      router.push("/auth/login"); // Redirige a la página principal solo cuando es exitoso
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg">
        {/* Columna de imagen */}
        <div className="w-1/2 hidden md:block relative">
          <Image
            src="/img/img-delivery.png" // Cambia esta ruta a la imagen que desees usar
            alt="Registro Visual"
            layout="fill"
            objectFit="contain"
            className="rounded-l-lg"
          />
        </div>

        {/* Columna de formulario */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-extrabold text-orange-600 text-center mb-6">
            Regístrate
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition duration-300"
              />
            </div>
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
            <div className="mb-4">
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-700"
              >
                Teléfono:
              </label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="direccion"
                className="block text-sm font-medium text-gray-700"
              >
                Dirección:
              </label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={formData.direccion}
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
              Registrarse
            </Button>
          </form>
          <div className="text-center mt-6">
            <Link
              href="/auth/login"
              className="text-orange-600 hover:underline"
            >
              ¿Ya tienes una cuenta? Inicia sesión aquí
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
