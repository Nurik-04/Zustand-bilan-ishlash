import { create } from "zustand";
import { persist } from "zustand/middleware";



export const userFavoriteStore = create(
    persist(
        (set, get) =>({
            favorites: [],
            addFavorites: (car) => set((state)=> ({favorites: [...state.favorites, car]})),
            removeFovarite: (id)=> set((state)=> ({favorites: state.favorites.filter(item => item.id !== id)})),
            isFavorite: (id) =>{
                return get().favorites.some(item => item.id === id)
            }
        }),
        {
            name: 'favorite',
            partialize: (state) => ({favorites: state.favorites})
        }
    )
)