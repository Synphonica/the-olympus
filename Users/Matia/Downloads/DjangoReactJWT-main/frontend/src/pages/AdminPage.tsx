import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage: React.FC = () => {
	interface Product {
		id: number;
		name: string;
		price: number;
	}

	const [productos, setproductos] = useState<Product[]>([]);
	const [newProduct, setNewProduct] = useState({ name: '', price: 0 });

	useEffect(() => {
		const fetchproductos = async () => {
			const response = await axios.get('http://127.0.0.1:8000/api/productos/');
			setproductos(response.data);
		};
		fetchproductos();
	}, []);

	const handleCreateProduct = async () => {
		const token = localStorage.getItem('access_token');
		const response = await axios.post(
			'http://127.0.0.1:8000/api/productos/',
			newProduct,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
			},
		);
		setproductos([...productos, response.data]);
		setNewProduct({ name: '', price: 0 });
	};

	const handleDeleteProduct = async (id: number) => {
		const token = localStorage.getItem('access_token');
		await axios.delete(`http://127.0.0.1:8000/api/productos/${id}/`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		setproductos(productos.filter((product) => product.id !== id));
	};

	return (
		<div>
			<h1>Admin Page</h1>
			<div>
				<h2>Create Product</h2>
				<input
					type="text"
					placeholder="Product Name"
					value={newProduct.name}
					onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
				/>
				<input
					type="number"
					placeholder="Product Price"
					value={newProduct.price}
					onChange={(e) =>
						setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
					}
				/>
				<button onClick={handleCreateProduct}>Create</button>
			</div>
			<div>
				<h2>productos</h2>
				<ul>
					{productos.map((product) => (
						<li key={product.id}>
							{product.name} - ${product.price}
							<button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export { AdminPage };
