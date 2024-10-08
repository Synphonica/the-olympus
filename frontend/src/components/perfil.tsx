/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/app/products/products.api";
import { ProductForm } from "@/app/products/new/product-form";

function Perfil() {
  const [activeTab, setActiveTab] = useState("profile");
  const [products, setProducts] = useState<
    { id: string; [key: string]: any }[]
  >([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (activeTab === "menuItems") {
      fetchProducts();
    }
  }, [activeTab]);

  async function fetchProducts() {
    const products = await getProducts();
    setProducts(products);
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab("profile")}
            className={`block w-full text-left px-4 py-2 rounded ${
              activeTab === "profile" ? "bg-red-500" : "bg-gray-700"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("categories")}
            className={`block w-full text-left px-4 py-2 rounded ${
              activeTab === "categories" ? "bg-red-500" : "bg-gray-700"
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => setActiveTab("menuItems")}
            className={`block w-full text-left px-4 py-2 rounded ${
              activeTab === "menuItems" ? "bg-red-500" : "bg-gray-700"
            }`}
          >
            Menu Items
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`block w-full text-left px-4 py-2 rounded ${
              activeTab === "users" ? "bg-red-500" : "bg-gray-700"
            }`}
          >
            Users
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`block w-full text-left px-4 py-2 rounded ${
              activeTab === "orders" ? "bg-red-500" : "bg-gray-700"
            }`}
          >
            Orders
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeTab === "menuItems" && (
          <div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              {showForm ? "Ver Productos" : "Crear Producto"}
            </button>
            {showForm ? (
              <ProductForm onProductCreated={fetchProducts} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default Perfil;
