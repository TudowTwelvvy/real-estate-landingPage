import React, { useState } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import { Link } from 'react-scroll'
import { FaBars, FaPhoneAlt, FaUserCircle } from 'react-icons/fa'
import TudowLogo from '../assets/images/tudowlogo.png'
import { FaXmark } from 'react-icons/fa6'

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    {
      link: 'Home',
      path: 'hero',
    },
    {
      link: 'About',
      path: 'about',
    },
    {
      link: 'Properties',
      path: 'properties',
    },
    {
      link: 'Services',
      path: 'services',
    },
    {
      link: 'Testimonials',
      path: 'testimonials',
    },
    {
      link: 'Contact',
      path: 'contact',
    },
  ]
  return (
    <nav
      className={`${
        darkMode ? 'dark bg-black' : 'light bg-[#f3f3f3]'
      } flex justify-between items-center gap-4 lg:px-20 py-3 sticky top-0 z-30`}
    >
      <div>
        <img
          src={TudowLogo}
          alt="company logo"
          className="lg:w-[220px] w-[170px] dark:invert"
        />
      </div>

      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      <div
        className="flex justify-center items-center lg:hidden"
        onClick={toggleMenu}
      >
        <div className="w">
          {isMenuOpen ? (
            <FaXmark className="text-black dark:text-white text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-black dark:text-white text-2xl cursor-pointer" />
          )}
        </div>
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}
          onClick={closeMenu}
        >
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center"
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <FaUserCircle className="size-7 lg:size-10 text-red-600" />
      </div>
    </nav>
  )
}

export default Header
