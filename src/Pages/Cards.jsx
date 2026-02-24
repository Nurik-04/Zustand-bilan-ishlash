// import React, { useEffect, useState } from "react";
// import { userFavoriteStore } from "../Store/FavoriteStore";

// const Cards = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res);
//         console.log(res);
//       });
//   }, []);

//   const { addFavorites, isFavorite, removeFovarite } = userFavoriteStore();
//   const toggleFavorites = (car) => {
//     isFavorite(car?.id) 
//     ? removeFovarite(car?.id) 
//     : addFavorites(car);
//   };

//   return (
//     <div>
//       {data.map((el) => (
//         <div key={el.id}>
//           <h1>{el.name}</h1>
//           <button onClick={() => toggleFavorites(el)}>
//             {isFavorite(el.id) ? "❤" : "🤍"}
//           </button>
//           <h2>@{el.username}</h2>
//           <p>{el.email}</p>
//         </div>
//       ))}
      
//     </div>
//   );
// };

// export default Cards;

import React, { useEffect, useState } from "react";
import { userFavoriteStore } from "../Store/FavoriteStore";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://699d9db783e60a406a46e9be.mockapi.io/Talabalar")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const { addFavorites, isFavorite, removeFovarite } =
    userFavoriteStore();

  const toggleFavorites = (user) => {
    isFavorite(user.id)
      ? removeFovarite(user.id)
      : addFavorites(user);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-10">
      
      <div className="grid md:grid-cols-3 gap-10">

        {data.map((el) => (
          <div
            key={el.id}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fadeIn"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={el.avatar}
                alt={el.name}
                className="w-full h-95 object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            {/* Favorite button */}
            <button
              onClick={() => toggleFavorites(el)}
              className="absolute top-3 right-3 text-2xl bg-white/80 backdrop-blur-md rounded-full px-2 py-1 shadow hover:scale-125 active:scale-90 transition"
            >
              {isFavorite(el.id) ? "❤️" : "💜"}
            </button>

            {/* INFO */}
            <div className="p-6">

              <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition">
                {el.name}
              </h2>

              <p className="text-gray-500 mt-2">
                📅 {el.createdAt}
              </p>

            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-r before:from-indigo-400 before:to-purple-400 before:blur-3xl before:opacity-20"></div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Cards;
