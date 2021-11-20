import React from 'react'
import acupuncturehome from '../Images/acupuncturehome.jpg'
import mortarpestle from '../Images/mortarpestle.jpg'
import chiropractorhome1 from '../Images/chiropractorhome1.jpg'
import acumassagehome from '../Images/acumassagehome.jpg'

const HomeServices = () => {
    return (
        <div class="bg-flowerbackground5 w-screen bg-cover bg-fixed">
            <div class="p-4 sm:pt-12 sm:pb-16">
            <p class="font-amatic text-center font-bold text-5xl sm:text-7xl pt-4 sm:pt-16">Natural Healing Services</p>
            <p class="font-amatic text-center font-bold text-3xl md:text-4xl p-2">Safe. Gentle. Effective.</p>
            <p class=" text-lg font-light leading-relaxed sm:mt-6 mb-4 text-gray-800 text-center px-4 sm:px-16">
                Traditional Chinese Medicine has been practiced for over 5000 years. 
                Increase your health, wellness, longevity, and vitality with acupuncture, herbs, chiropractic, or 
                massage. TCM releases blockages to restore the natural flow of the meridians or energy channels within 
                the body, returning your body to a state of harmony and balance.
                
            
            </p>
            <p className="text-center pt-4">
            <a
                href="tel:310-458-1488"
                className="hover:bg-red-900 bg-red-600 text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                SCHEDULE NOW
                </a>
            </p>
            </div>
            <div class="flex flex-wrap mx-16 pd items-center">
            <div class="px-2 sm:px-16 w-1/2 md:1/6 lg:1/8">
            <a href="/services">
            <img class="rounded-3xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" src={acupuncturehome} alt="acupuncturehome"/>
            <p class="text-center font-bold text-1xl sm:text-2xl p-4">Acupuncture</p>
            </a>
            </div>
            <div class="px-2 sm:px-16 w-1/2 md:1/6 lg:1/8">
            <a href="/services">
            <img class="rounded-3xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" src={mortarpestle} alt="mortarpestle"/>
            <p class="text-center font-bold text-1xl sm:text-2xl p-4">Herbology</p>
            </a>
            </div>
            <div class="px-2 sm:px-16 w-1/2 md:1/6 lg:1/8">
            <a href="/services">
            <img class="rounded-3xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" src={chiropractorhome1} alt="chiropractorhome"/>
            <p class="text-center font-bold text-1xl sm:text-2xl p-4">Chiropractic</p>
            </a>
            </div>
            <div class="px-2 sm:px-16 w-1/2 md:1/6 lg:1/8">
            <a href="/services">
            <img class="rounded-3xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" src={acumassagehome} alt="acumassage" title="acumassage"/>
            <div class="text-center font-bold text-1xl sm:text-2xl p-4">AcuMassage</div>
            </a>

            </div>
            </div>
        </div>
    )
}

export default HomeServices
