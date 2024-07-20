import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import heroImg from '../assets/images/hero1.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Hero() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])

  const { darkMode, toggleDark } = useDarkMode()

  return (
    <>
      <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
        <section
          id="hero"
          className=" w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <h1
            data-aos="zoom-in"
            className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
          >
            Find your next Home in Johannesburg
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white text-xl lg:pr[500px] pr-0"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            commodi iste voluptate veniam deserunt aliquid voluptas distinctio
            dolorem, accusantium quibusdam.
          </p>
        </section>
      </div>

      {/*form*/}
      <div
        className={`${
          darkMode ? 'dark bg-black' : 'light bg-transparent'
        } z-10`}
      >
        <div
          data-aos="zoom-in"
          id="form"
          className={`${
            darkMode ? 'dark bg-gray-800' : 'light bg-white'
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}
        ></div>
      </div>
    </>
  )
}

export default Hero
