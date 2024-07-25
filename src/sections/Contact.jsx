import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useDarkMode } from '../components/DarkModeContext'

function Contact() {
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
    <div
      className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}
    >
      <section
        className={`${
          darkMode ? 'dark bg-gray-800' : 'light bg-red-100'
        } lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px36 px-6 py-20 gap-10`}
      >
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl"
        >
          <h1 className="text-xl text-black font-semibold dark:text:white">
            Send a message today
          </h1>
          <input
            type="text"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
            placeholder="Enter your full name"
          />
          <input
            type="email"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
            placeholder="Enter your Email"
          />
          <input
            type="number"
            className="w-full px-6 py-3 border-2  border-gray-200 rounded-xl"
            placeholder="Enter your number"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Enter yor message"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          ></textarea>
          <button className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">
            SEND EMAIL
          </button>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-red-500 dark:text-white"
          >
            REACH US
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-black text-[20px] font-semibold leading-10 dark:text-white"
          >
            Have questions about our listings or services? We're here to help!
            Feel free to reach out to us via the contact form below, and our
            dedicated team will get back to you promptly. Whether you're looking
            to buy, sell, or rent a property, or simply need more information,
            we're committed to providing you with the assistance you need. Your
            dream property is just a message away!
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="600"
            className="text-gray-600 text-xl text-justify  leading-10 dark:text-white"
          >
            For urgent inquiries, you can also reach us directly at 0737411332
            during business hours. We look forward to hearing from you and
            helping you find your perfect home.
          </p>
          <button className="bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">
            SEND EMAIL
          </button>
        </div>
      </section>
    </div>
  )
}

export default Contact
