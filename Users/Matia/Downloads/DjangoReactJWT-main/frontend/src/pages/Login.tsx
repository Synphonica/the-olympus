import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState<string | null>(null);
	const [successMessage, setSuccessMessage] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const validateForm = (): boolean => {
		if (!formData.email || !formData.password) {
			setError('Todos los campos son obligatorios.');
			return false;
		}
		setError(null);
		return true;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isLoading) return;
		if (!validateForm()) return;
		setIsLoading(true);

		try {
			const response = await axios.post(
				'http://127.0.0.1:8000/api/accounts/login/',
				{
					email: formData.email,
					password: formData.password,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			const data = response.data;
			console.log('Login Exitoso', data);
			localStorage.setItem('access_token', response.data.tokens.access);
			localStorage.setItem('refresh_token', response.data.tokens.refresh);
			console.log(localStorage.getItem('access_token'));
			setSuccessMessage('Login exitoso. ¡Bienvenido!');
			setError(null);
			navigate('/');
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				// El servidor respondió con un código de estado fuera del rango 2xx
				console.error('Error en la respuesta del servidor:', error.response.data);
				setError('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
			} else if (error.request) {
				// La solicitud fue hecha pero no se recibió respuesta
				console.error('No se recibió respuesta del servidor:', error.request);
				setError(
					'No se recibió respuesta del servidor. Por favor, inténtelo de nuevo más tarde.',
				);
			} else {
				// Algo sucedió al configurar la solicitud
				console.error('Error al configurar la solicitud:', error.message);
				setError(
					'Ocurrió un error al configurar la solicitud. Por favor, inténtelo de nuevo.',
				);
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="w-full h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-transparent p-8 rounded shadow-md w-full max-w-4xl mx-4">
				{error && <p className="text-red-500">{error}</p>}
				{successMessage && <p className="text-green-500">{successMessage}</p>}

				<h1 className="text-2xl font-bold mb-6 text-blue-500">Login Page</h1>
				<form onSubmit={handleSubmit} className="w-full">
					<div className="mb-4">
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent text-black"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="block text-sm font-medium text-gray-700">
							Contraseña
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent text-black"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export { Login };
