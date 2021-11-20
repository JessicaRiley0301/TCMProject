import React from 'react'
import latimes from '../Images/latimes.png'
import mercury from '../Images/mercury.png'
import qimag from '../Images/qimagazine.png'
import messenger from '../Images/themessenger.jpeg'

const HeaderAbout = () => {
    return (
        <div class="bg-paperteao w-screen h-96 bg-cover bg-center bg-fixed">
            <div class="pt-32 align-items-center">
            <h3 class="font-amatic font-extrabold text-black text-6xl md:text-8xl text-center">About Us</h3>
            <h5 class="font-amatic font-extrabold text-black text-2xl md:text-4xl text-center">Meet Our Practitioners. Learn About TCM.</h5>
            <p class="text-center p-12 space-x-2">
                <a
                href="tel:310-458-1488"
                className="hover:bg-red-900 bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                SCHEDULE NOW
                </a>
                </p>
            </div>
        </div>
    )
}

export default HeaderAbout
