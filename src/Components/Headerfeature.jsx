import React from 'react'
import latimes from '../Images/latimes.png'
import mercury from '../Images/mercury.png'
import qimag from '../Images/qimagazine.png'
import messenger from '../Images/themessenger.jpeg'

const Headerfeature = () => {
    return (
        <div class="bg-white p-2 md:p-8">
            <div class="flex flex-wrap mx-2 md:mx-16 pd items-center">
            <div class="px-2 w-1/4 md:1/6 lg:1/8">
                <img class="block w-full h-auto" src={latimes} alt="Dr. Baolin Wu"/>
            </div>
            <div class="px-2 w-1/4 md:1/6 lg:1/8">
                <img class="block w-full h-auto" src={mercury} alt="Dr. Baolin Wu"/>
            </div>
            <div class="px-2 w-1/4 md:1/6 lg:1/8">
                <img class="block w-full h-20" src={messenger} alt="Dr. Baolin Wu"/>
            </div>
            <div class="px-2 w-1/4 md:1/6 lg:1/8">
                <img class="block w-full h-20" src={qimag} alt="Dr. Baolin Wu"/>
            </div>
            </div>
        </div>
    )
}

export default Headerfeature
