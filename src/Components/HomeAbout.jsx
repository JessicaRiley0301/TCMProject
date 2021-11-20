import React from 'react'

import homedrwupic from '../Images/drwupic.jpg'

const HomeAbout = () => {
    return (
        <div class="bg-white w-screen bg-cover bg-fixed pt-16 pb-8">
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
        <div class="md:flex-shrink-0">
            <img class="h-auto w-full object-cover md:w-60" src={homedrwupic} alt="Dr. Baolin Wu"/>
            </div>
            <div class="p-8">
            <div class="text-2xl text-black-500 font-extrabold">Dr. Baolin Wu, OMD., PhD., L.Ac.</div>
            <p class="block mt-1 text-md  font-sm text-gray-500">
            <span class="font-bold text-md text-black">Founder,
            </span> of Beijing Medical Center, Serving 20 Years</p>
            <p class="block mt-1 text-md  font-sm text-gray-500">
            <span class="font-bold text-md text-black">President,</span> American Academy of Traditional Chinese Medicine (AATCM)
            </p>
            <p class="block mt-1 text-md  font-sm text-gray-500">
            <span class="font-bold text-md text-black">Chairman,
            </span> California Alliance of Acupuncture Medicine (CAAM)
            </p>
            
            <p class="text-center mt-2 text-black text-md font-bold ">
                Dr. Wu is a 7th Generation Lineage Chinese Medicine Doctor with 40 years 
                of Clinical Experience in Santa Monica, CA.
            </p>
            <p class="text-center pt-4">
            <a
                href="/about"
                className="hover:bg-yellow-700 bg-yellow-500 text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                MEET OUR TEAM
            </a>
            </p>
        </div>
        </div>
        </div>
        </div>
    )
}

export default HomeAbout
