import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsPage: React.FC = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios.get('http://127.0.0.1:8000/api/productos/products/');
			setProducts(response.data);
		};
		fetchProducts();
	}, []);

	return (
		<div>
			<h1>Products</h1>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						{product.name} - ${product.price}
					</li>
				))}
			</ul>
		</div>
	);
};

export { ProductsPage };
