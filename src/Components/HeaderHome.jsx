import React from 'react'



const HeaderHome = () => {
    return (
        <div class="bg-zenrockso w-screen h-96 bg-cover bg-right bg-fixed">
            <div class="pt-16 align-items-center">
            <p class="font-amatic text-center font-bold text-2xl sm:text-4xl">Welcome to</p>
            <p class="font-amatic text-center font-extrabold text-5xl md:text-6xl">Beijing Chinese Medical Center</p>
            <p class="font-amatic text-center font-black text-2xl md:text-4xl">Acupuncture. Herbs. Chiropractic. Massage.</p>
            <p class="text-center p-4 space-x-2">
            <a
                href="tel:310-458-1488"
                className="hover:bg-red-900 bg-red-600 text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                SCHEDULE NOW
                </a>
                <a
                href="/store"
                className="hover:bg-yellow-900 bg-yellow-500 text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                SHOP BOOKS
                </a>
                </p>
                <p class="text-center p-2">
                <a
                href="/blog"
                className="hover:bg-blue-900 bg-blue-700 text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                DAILY HEALTH ADVICE
                </a>
                </p>

            </div>
        </div>
    )
}

export default HeaderHome
