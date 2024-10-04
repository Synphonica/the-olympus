import { Outlet, Link } from 'react-router-dom';
import Footer from './footer';
import React from 'react';
import NavBar from './NavBar';

export const Layout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <NavBar />
            </header>
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
