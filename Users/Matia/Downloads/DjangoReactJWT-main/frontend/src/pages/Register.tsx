import React, { useState } from 'react';
import axios from 'axios';

const Register: React.FC = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password_1: '',
		password_2: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [successMessage, setSuccessMessage] = useState<string | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const validateForm = () => {
		const newErrors: { [key: string]: string } = {};
		if (!formData.username) newErrors.username = 'El nombre de usuario es requerido';
		if (!formData.email) newErrors.email = 'El email es requerido';
		if (!formData.password_1) newErrors.password_1 = 'La contraseña es requerida';
		if (formData.password_1.length < 8)
			newErrors.password_1 = 'La contraseña debe tener al menos 8 caracteres';
		if (formData.password_1 !== formData.password_2)
			newErrors.password_2 = 'Las contraseñas no coinciden';
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isLoading) return;
		if (!validateForm()) return;
		setIsLoading(true);

		try {
			const response = await axios.post(
				'http://127.0.0.1:8000/api/accounts/register/',
				{
					username: formData.username,
					email: formData.email,
					password_1: formData.password_1,
					password_2: formData.password_2,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			const data = response.data;
			console.log('Registro Exitoso', data);
			setSuccessMessage('Registro exitoso. ¡Bienvenido!');
			setErrors({});
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				// El servidor respondió con un código de estado fuera del rango 2xx
				console.error('Error en la respuesta del servidor:', error.response.data);
				setErrors(error.response.data);
			} else if (error.request) {
				// La solicitud fue hecha pero no se recibió respuesta
				console.error('No se recibió respuesta del servidor:', error.request);
			} else {
				// Algo sucedió al configurar la solicitud
				console.error('Error al configurar la solicitud:', error.message);
			}
		} finally {
			setIsLoading(false);
		}
	};

	const renderInput = (id: string, label: string, type: string, value: string) => (
		<div className="mb-4">
			<label htmlFor={id} className="block text-sm font-medium text-gray-700">
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={id}
				value={value}
				onChange={handleChange}
				className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent text-black"
			/>
			{errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id]}</p>}
		</div>
	);

	return (
		<div className="w-full h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded shadow-md w-full max-w-4xl mx-4">
				<h1 className="text-2xl font-bold mb-6 text-blue-500">Register Page</h1>

				{successMessage && (
					<div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
						{successMessage}
					</div>
				)}

				<form onSubmit={handleSubmit} className="w-full">
					{renderInput('username', 'Nombre', 'text', formData.username)}
					{renderInput('email', 'Email', 'email', formData.email)}
					{renderInput('password_1', 'Contraseña', 'password', formData.password_1)}
					{renderInput(
						'password_2',
						'Confirma Contraseña',
						'password',
						formData.password_2,
					)}
					<button
						type="submit"
						className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						disabled={isLoading}
					>
						Register
					</button>
				</form>
			</div>
		</div>
	);
};

export { Register };
