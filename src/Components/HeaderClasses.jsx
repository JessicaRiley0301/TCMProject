import React from 'react'

const HeaderClasses = () => {
    return (
<div class="bg-lotusbackground w-screen h-96 bg-cover bg-left bg-fixed">
            <div class="pt-32 align-items-center">
            <h3 class="font-amatic font-extrabold text-black text-6xl md:text-8xl text-center">Classes</h3>
            <h5 class="font-amatic font-extrabold text-black text-2xl md:text-4xl text-center">Chi Gong. Taoist Feng Shui.</h5>

            <p class="text-center p-8 space-x-2">
                <a
                href="/"
                className="hover:bg-red-900 bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                SCHEDULE NOW
                </a>
                <a
                href="/"
                className="hover:bg-yellow-700 bg-yellow-500 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                SHOP BOOKS
                </a>
                </p>
            </div>
        </div>
    )
}

export default HeaderClasses
