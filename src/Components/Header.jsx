import React from 'react'
import { NavLink } from 'react-router-dom'
import { userFavoriteStore } from '../Store/FavoriteStore'

const Header = () => {
     const linkStyle =
    "relative px-4 py-2 font-semibold text-gray-700 transition-all duration-300 hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
    const {favorites} = userFavoriteStore()
  return (
    // <header>
    //   <nav>
    //     <NavLink to='/' >Home</NavLink>
    //     <NavLink to='/cards'>Cards</NavLink>
    //     <NavLink to='/favorites'>Favorites{favorites.length}</NavLink>
    //   </nav>
    // </header>
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <nav className="flex justify-center gap-10 py-4">
        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/cards" className={linkStyle}>
          Cards
        </NavLink>
        <NavLink to="/favorites" className={linkStyle}>
          Favorites  {favorites.length} 🛒
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
