// frontend/src/restaurant/RestaurantList.tsx
"use client";

import React, { useEffect, useState } from "react";
import { getRestaurants } from "./restaurant.api";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const RestaurantList = () => {
  interface Restaurant {
    id: number;
    name: string;
    image: string;
    description: string;
    menuUrl: string;
  }

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants();
        setRestaurants(data);
      } catch (err) {
        setError("Error al cargar los restaurantes");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="mx-16 py-16  bg-orange-50 mt-16 mb-16">
      <div>
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">
          Nuestros Restaurantes
        </h2>
        <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white  rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold  p-4 text-dark">
                {restaurant.name}
              </h3>
              <div className="flex justify-center">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  width={400}
                  height={400}
                  className="rounded-md p-4"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                {restaurant.description}
              </p>
              <div className="flex justify-center items-center my-4">
                <Link
                  href={restaurant.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline" })}
                >
                  Ver Menú
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantList;
