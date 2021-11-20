import React from 'react'
import souloftaiji from '../Images/souloftaiji.jpg'
import lightingeyedragon from '../Images/lightingeyedragon.jpg'
import immortalsword from '../Images/immortalsword.jpg'
import qigongbook from '../Images/qigongbook.jpg'
import qigongjourney from '../Images/qigongjourney.jpg'


const HomeStore = () => {
    return (
        <div class="bg-whiteflowerback w-screen bg-cover bg-fixed py-8 pb-16">
            <p class="font-amatic text-center font-bold text-5xl sm:text-7xl pt-4 sm:pt-16">
            Shop Our Store
            </p>
            <p class="font-amatic text-center font-bold text-3xl md:text-4xl p-2">Published Books. Herbs.</p>
            <p class="sm:mx-24 text-lg font-light leading-relaxed mt-6 mb-4 text-gray-800 text-center px-16">
                Each best-selling publication is an authentic source of ancient Chinese knowledge from a variety of the most important topics of Taoism.
                As the 17th generation Master of White Cloud Monastery's Dragon Gate Sect, he dives deep into 
                secrets never before shared with the public or the world until now. Explore our Shop to
                learn more about Chi Gong, Taoist Feng Shui, Tai Chi, and Martial Arts.
                
            </p>
            <p className="text-center p-2 pb-4">
            <a
                href="/store"
                className="hover:bg-yellow-900 bg-yellow-500 text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                SHOP BOOKS
                </a>
                </p>
            <div class="container px-2 py-2 mx-auto ">
            <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-full">
                <div class="w-1/5 p-2 md:1/3">
                    <a href="/store">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        src={qigongbook}/>
                    </a>
                </div>
                <div class="w-1/5 p-2 md:1/3">
                <a href="/store">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        src={lightingeyedragon}/>
                        </a>
                </div>
                <div class="w-1/5 p-2 md:1/3">
                <a href="/store">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        src={immortalsword}/>
                        </a>
                </div>
                <div class="w-1/5 p-2 md:1/3">
                <a href="/store">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        src={souloftaiji}/>
                        </a>
                </div>
                <div class="w-1/5 p-2 md:1/3">
                <a href="/store">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        src={qigongjourney}/>
                        </a>
                </div>
            </div>

            </div>
            </div>
            <div>
                

            </div>


        </div>
    )
}

export default HomeStore
