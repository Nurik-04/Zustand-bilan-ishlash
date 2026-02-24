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
    fetch("https://jsonplaceholder.typicode.com/users")
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
      <div className="grid md:grid-cols-3 gap-8">
        {data.map((el) => (
          <div
            key={el.id}
            className="relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fadeIn"
          >
            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorites(el)}
              className="absolute top-2 right-2 text-2xl transition-all duration-300 hover:scale-125 active:scale-90"
            >
              {isFavorite(el.id) ? "❤️" : "🤍"}
            </button>

            <h1 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition">
              {el.name}
            </h1>

            <h2 className="text-gray-500 mt-2">@{el.username}</h2>
            <p className="text-gray-600 text-sm mt-1">{el.email}</p>

            {/* hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-indigo-400 before:to-purple-400 before:blur-2xl before:opacity-20"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
