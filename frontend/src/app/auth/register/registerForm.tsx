import React, { useState } from 'react';

interface RegisterFormProps {
  onSubmit: (data: { nombre: string; correo: string; telefono: string; direccion: string; password: string }) => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    direccion: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
      <input name="correo" placeholder="Correo" type="email" value={formData.correo} onChange={handleChange} required />
      <input name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
      <input name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} required />
      <input name="password" placeholder="Contraseña" type="password" value={formData.password} onChange={handleChange} required />
      <button type="submit">Registrarse</button>
    </form>
  );
};
