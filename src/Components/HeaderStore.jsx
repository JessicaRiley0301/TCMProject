import React from 'react'

const HeaderStore = () => {
    return (
        <div class="bg-store w-screen h-96 bg-cover bg-center bg-fixed">
            <div class="pt-32 align-items-center">
            <h3 class="font-amatic font-extrabold text-black text-6xl md:text-8xl text-center">Shop Our Store</h3>
            <h5 class="font-amatic font-extrabold text-black text-2xl md:text-4xl text-center p-4">Shop Best-Selling Books. Buy Herbs.</h5>

            <p class="text-center p-8 space-x-2">
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

export default HeaderStore
