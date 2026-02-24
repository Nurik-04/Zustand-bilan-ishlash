import React from 'react'
import { userFavoriteStore } from '../Store/FavoriteStore'

const Favorite = () => {
    const {favorites, removeFovarite} = userFavoriteStore()
  return (
    // <div>
    //   {favorites.map(car =>(
    //     <div key={car.id}>
    //         <button onClick={()=> removeFovarite(car?.id)}>🤍</button>
    //         <h2>{car.username}</h2>
    //         <p>{car.username}</p>
    //     </div>
    //   ))}
    // </div>
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 p-10">
  <div className="grid md:grid-cols-3 gap-8">
    {favorites.map(car => (
      <div
        key={car.id}
        className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-red-300 transition-all duration-500 transform hover:scale-105 animate-fadeIn"
      >
        <button
          onClick={() => removeFovarite(car.id)}
          className="text-red-500 text-2xl hover:scale-125 transition"
        >
          ❤️
        </button>

        <h2 className="text-xl font-bold mt-2">{car.name}</h2>
        <p className="text-gray-500">@{car.username}</p>
      </div>
    ))}
  </div>
</div>

  )
}

export default Favorite


