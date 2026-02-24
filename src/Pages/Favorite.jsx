// import React from "react";
// import { userFavoriteStore } from "../Store/FavoriteStore";

// const Favorite = () => {
//   const { favorites, removeFovarite } = userFavoriteStore();
//   return (
//     // <div>
//     //   {favorites.map(car =>(
//     //     <div key={car.id}>
//     //         <button onClick={()=> removeFovarite(car?.id)}>🤍</button>
//     //         <h2>{car.username}</h2>
//     //         <p>{car.username}</p>
//     //     </div>
//     //   ))}
//     // </div>
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 p-10">
//       <div className="grid md:grid-cols-3 gap-8">
//         {favorites.map((car) => (
//           <div
//             key={car.id}
//             className=" bg-white rounded-2xl p-6 shadow-xl relative hover:shadow-red-300 transition-all duration-500 transform hover:scale-105 animate-fadeIn"
//           >
            
//             <button
//               onClick={() => removeFovarite(car.id)}
//               className="text-red-500 text-2xl hover:scale-125 transition absolute right-3 top-4"
//             >
//               ❤️
//             </button>
//             <img src={car.avatar} alt={car.name} />
//             <h2 className="text-xl font-bold mt-2">{car.name}</h2>
//             <p className="text-gray-500">@{car.createdAt}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Favorite;
import React from "react";
import { userFavoriteStore } from "../Store/FavoriteStore";

const Favorite = () => {
  const { favorites, removeFovarite } = userFavoriteStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-red-100 p-10">

      <h1 className="text-3xl font-bold text-center mb-10 text-red-600">
        Favorites ❤️
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {favorites.map((car) => (
          <div
            key={car.id}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fadeIn"
          >

            <div className="overflow-hidden">
              <img
                src={car.avatar}
                alt={car.name}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <button
              onClick={() => removeFovarite(car.id)}
              className="absolute top-3 right-3 text-2xl bg-white/80 rounded-full px-2 py-1 shadow hover:scale-125 transition"
            >
              ❤️
            </button>

            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">
                {car.name}
              </h2>

              <p className="text-gray-500 mt-2">
                📅 {car.createdAt}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Favorite;
