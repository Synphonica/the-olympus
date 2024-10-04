import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
	return (
		<nav className="bg-gray-800 p-4">
			<ul className="flex space-x-4">
				<li>
					<Link to="/" className="text-white">
						Home
					</Link>
				</li>
				<li>
					<Link to="/login" className="text-white">
						Login
					</Link>
				</li>
				<li>
					<Link to="/register" className="text-white">
						Register
					</Link>
				</li>
				<li>
					<Link to="/productos" className="text-white">
						Products
					</Link>
				</li>
				<li>
					<Link to="/admin" className="text-white">
						Admin
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
