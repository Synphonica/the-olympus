/* eslint-disable @typescript-eslint/no-explicit-any */
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getRestaurants() {
  const data = await fetch(`${BACKEND_URL}/api/restaurant`, {
    cache: "no-store",
  });
  return await data.json();
}

export async function getRestaurant(id: string) {
  const data = await fetch(`${BACKEND_URL}/api/restaurant/${id}`, {
    cache: "no-store",
  });
  return await data.json();
}

export async function createRestaurant(restaurantData: any) {
  const res = await fetch(`${BACKEND_URL}/api/restaurant`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(restaurantData),
  });
  const data = await res.json();
  console.log(data);
}

export async function deleteProduct(id: string) {
  const res = await fetch(`${BACKEND_URL}/api/restaurant/${id}`, {
    method: "DELETE",
  });
  return await res.json();
}

export async function updateRestaurant(id: string, newRestaurant: any) {
  const res = await fetch(`${BACKEND_URL}/api/restaurant/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRestaurant),
    cache: "no-store",
  });
  return await res.json();
}
