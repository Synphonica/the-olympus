import React, { useState } from 'react';

interface LoginFormProps {
  onSubmit: (data: { correo: string; password: string }) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    correo: '',
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
      <input name="correo" placeholder="Correo" type="email" value={formData.correo} onChange={handleChange} required />
      <input name="password" placeholder="Contraseña" type="password" value={formData.password} onChange={handleChange} required />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};
