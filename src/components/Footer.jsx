import React from 'react'
import {
  FaArrowUp,
  FaBuilding,
  FaFacebook,
  FaInstagram,
  FaMobile,
  FaMoon,
  FaSun,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa'
import { useDarkMode } from '../components/DarkModeContext'
import { Link } from 'react-scroll'
import { MdEmail } from 'react-icons/md'

function Footer() {
  const { darkMode, toggleDarkMode } = useDarkMode()
  return (
    <div className="">
      <footer
        className={`${
          darkMode ? 'dark bg-black' : 'light bg-gray-800'
        } w-full m-auto lg-px-20 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p className="text-slate-200 text-justify">
            Welcome to Tudow Properties, your trusted partner in the world of
            real estate. With years of experience and a commitment to
            excellence, we specialize in helping our clients find their ideal
            properties. Whether you're buying, selling, or renting, we offer a
            personalized approach to meet your unique needs. Our dedicated team
            of professionals is here to guide you through every step of the
            process, ensuring a smooth and successful transaction. Discover why
            Tudow Properties is the preferred choice for real estate solutions.
            Contact us today and let us help you achieve your property goals.
          </p>
          <div className="flex justify-start items-center gap-4 mt-4">
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaFacebook className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaInstagram className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaTwitter className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaWhatsapp className="size-5" />
            </div>
          </div>
          <h1 className="text-white mt-8">
            Developed by Tumelo Khanye - Copyright Tudow Properties, All Right
            Reserved
          </h1>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Contact us</h1>
          <div className="flex justify-center items-center gap-3">
            <FaBuilding className="text-white size-5" />
            <p className="text-slate-200">
              649 Azalea, Ext 1, Standerton, 2430
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaMobile className="text-white size-5" />
            <p className="text-slate-200">073 7411 332</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <MdEmail className="text-white size-5" />
            <p className="text-slate-200">tumelokhanye9811@gnail.com</p>
          </div>
        </div>
      </footer>

      <div className="bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6 ">
        <Link to="hero" spy={true} smooth={true}>
          <FaArrowUp className="size-6 text-white" />
        </Link>
      </div>

      <div className="w">
        <button
          onClick={toggleDarkMode}
          className="flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6"
        >
          {darkMode ? (
            <FaMoon size={25} className="text-black" />
          ) : (
            <FaSun size={25} className="text-black" />
          )}
        </button>
      </div>
    </div>
  )
}

export default Footer
