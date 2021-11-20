import React from 'react'
import instagram1 from '../Images/instagram1.jpeg'
import instagram2 from '../Images/instagram2.jpeg'
import instagram5 from '../Images/instagram4.png'
import instagram4 from '../Images/instagram3.jpeg'

const HomeInsta = () => {
    return (
        <div>
            <div>
            <p class="font-amatic text-center font-bold text-7xl pt-16 pb-8">Follow Us on Instagram</p>
                <a href="https://www.instagram.com/beijingchinesemedicalcenter/">
                <p class="text-blue-500 hover:underline text-center">@beijingchinesemedicalcenter</p>
                </a>
            </div>
                <section class="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-10">
        <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" >
            <li class="relative">
            <div class="block overflow-hidden w-full group aspect-w-10 aspect-h-7">
                <a href="https://www.instagram.com/beijingchinesemedicalcenter/">
            <img src={instagram2} width="300" height="300" class="object-cover pointer-events-none group-hover:opacity-75"/>
            </a>
            </div>
            </li>
            <li class="relative">
            <div class="block overflow-hidden w-full group aspect-w-10 aspect-h-7">
            <a href="https://www.instagram.com/beijingchinesemedicalcenter/">
                <img src={instagram1} width="300" height="300" class="object-cover pointer-events-none group-hover:opacity-75"/>
            </a>
            </div>
            </li>
            <li class="relative">
            <div class="block overflow-hidden w-full group aspect-w-10 aspect-h-7">
            <a href="https://www.instagram.com/beijingchinesemedicalcenter/">
                <img src={instagram5} width="300" height="300" class="object-cover pointer-events-none group-hover:opacity-75"/>
            </a>
            </div>
            </li>
            <li class="relative">
            <div class="block overflow-hidden w-full group aspect-w-10 aspect-h-7">
            <a href="https://www.instagram.com/beijingchinesemedicalcenter/">
                <img src={instagram4} width="300" height="300" class="object-cover pointer-events-none group-hover:opacity-75"/>
            </a>
            </div>
            </li>
        </ul>
        </section>
        </div>
    )
}

export default HomeInsta
