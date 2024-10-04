import React, { useEffect, useState } from 'react';
import axios from 'axios';
export { Home };

const Home: React.FC = () => {
	const [username, setUsername] = useState<string | null>(null);

	useEffect(() => {
		const checkLoggedInUser = async () => {
			try {
				const token = localStorage.getItem('access_token');
				console.log('Token:', token); // Verificar si el token está presente
				if (token) {
					const response = await axios.get('http://127.0.0.1:8000/api/accounts/user/', {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});
					console.log('Response:', response.data); // Verificar la respuesta de la API
					if (response.data && response.data.username) {
						setUsername(response.data.username);
					} else {
						console.error('No username found in response');
						setUsername(null);
					}
				} else {
					console.error('No token found');
					setUsername(null);
				}
			} catch (error) {
				console.error('Error fetching user:', error);
				setUsername(null);
			}
		};
		checkLoggedInUser();
	}, []);

	const handleLogout = async () => {
		try {
			const refreshToken = localStorage.getItem('refresh_token');
			const accessToken = localStorage.getItem('access_token');
			if (refreshToken && accessToken) {
				await axios.post(
					'http://127.0.0.1:8000/api/accounts/logout/',
					{ refresh: refreshToken },
					{
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},
					},
				);
				localStorage.removeItem('access_token');
				localStorage.removeItem('refresh_token');
				setUsername(null);
			} else {
				console.error('No refresh token or access token found');
			}
		} catch (error) {
			console.error('Error during logout:', error);
		}
	};

	return (
		<div>
			{username ? (
				<>
					<h1>Bienvenido, {username}!</h1>
					<button onClick={handleLogout}>Cerrar sesión</button>
				</>
			) : (
				<h1>Por favor, inicie sesión.</h1>
			)}
		</div>
	);
};
