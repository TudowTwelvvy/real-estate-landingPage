import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'
import areaImg1 from '../assets/images/area1.jpg'
import areaImg2 from '../assets/images/area2.jpg'
import areaImg3 from '../assets/images/area3.jpg'

function PopularAreas() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])

  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section
        className={`${
          darkMode ? 'dark bg-gray-800' : 'light bg-red-100'
        } lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20`}
      >
        <div
          id="top"
          className="w-full grid lag:grid-cols-3 lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          <div>
            <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
              POPULAR AREAS
            </h1>
            <h1
              data-aos="zoom-in"
              className="text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white"
            >
              Explore most <br></br> popular areas
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="h-[400px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${areaImg1})` }}
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="h-[400px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${areaImg2})` }}
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="h-[400px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${areaImg3})` }}
            ></div>
          </div>
        </div>
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-start gap-6">
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center lg:items-center gap-8 w-full"
          >
            <h1 className="text-black text-5xl font-semibold dark:text-white">
              5K
            </h1>
            <h3 className="dark:text-white">
              ACTIVE <br /> LISTINGS
            </h3>
          </div>
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center lg:items-center gap-8 w-full"
          >
            <h1 className="text-black text-5xl font-semibold dark:text-white">
              5K
            </h1>
            <h3 className="dark:text-white">
              ACTIVE <br /> LISTINGS
            </h3>
          </div>
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center lg:items-center gap-8 w-full"
          >
            <h1 className="text-black text-5xl font-semibold dark:text-white">
              5K
            </h1>
            <h3 className="dark:text-white">
              ACTIVE <br /> LISTINGS
            </h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PopularAreas
