import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Layout } from './pages/Layout';
import { ProductsPage } from './pages/ProductsPage';
import { AdminPage } from './pages/AdminPage';
import './index.css';
import './tailwind.css'; // Importa Tailwind CSS

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* Ruta principal que renderiza el componente Home */}
					<Route index element={<Home />} />
					{/* Ruta para la página de inicio de sesión */}
					<Route path="login" element={<Login />} />
					{/* Ruta para la página de registro */}
					<Route path="register" element={<Register />} />
					<Route path="productos" element={<ProductsPage />} />
					<Route path="admin" element={<AdminPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
