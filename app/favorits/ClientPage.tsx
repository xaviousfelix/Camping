"use client";

import { useEffect, useState } from "react";
import EmptyList from "@/components/home/EmptyList";
import LandmarkList from "@/components/home/LandmarkList";

const ClientPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const res = await fetch("/api/favorites");
        const data = await res.json();
        setFavorites(data);
      } catch (error) {
        console.error("Failed to load favorites", error);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (favorites.length === 0)
    return <EmptyList heading="No items Favorits" />;

  return <LandmarkList landmarks={favorites} />;
};

export default ClientPage;
