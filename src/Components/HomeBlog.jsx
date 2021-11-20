import React from 'react'
import autumn from '../Images/autumn.jpg'
import jess from '../Images/jess.jpeg'

const HomeBlog = () => {
    return (
        <div class="bg-white w-screen bg-cover bg-fixed">
            <div>
            <p class="font-amatic text-center font-bold text-7xl pt-16">From The Blog</p>
            <p class="text-lg font-light leading-relaxed mt-6 mb-4 text-gray-800 text-center px-16">
                Follow our blog for daily health advice that combines the wisdom of ancient chinese meidcine and the 24 seasonal chinese calendar
                with real time weather updates.
                
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
            <div class="container my-4 mx-auto">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">


        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">


            <article class="overflow-hidden rounded-lg shadow-lg bg-white">

                <a href="/">
                    <img alt="Placeholder" class="block h-auto w-full" src={autumn}/>
                </a>

                <div class="p-4">
                <p class="font-bold text-xs text-purple-500 mb-3">Daily Health Tips</p>
                <a href="/">
                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Fall Beginning</h5>
                </a>
                <p class="font-normal text-gray-700 mb-3 text-sm">The weather is starting to get colder and that means that
                we need toe at these certain foods in order to maintain our healthy chi balance</p>
                <p class="text-blue-500 hover:underline">Read More</p>
                </div>

                <footer class="flex items-center justify-between leading-none p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="/">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                        <div>
                        <p class="ml-2 text-sm font-bold">
                            Author Name
                        </p>
                        <p class=" ml-2  text-grey-darker text-xs">
                        October 12, 2021
                        </p>
                        </div>
                    </a>
                </footer>

            </article>


        </div>



        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article class="overflow-hidden rounded-lg shadow-lg bg-white">

        <a href="/">
            <img alt="Placeholder" class="block h-auto w-full" src={autumn}/>
        </a>

        <div class="p-4">
        <p class="font-bold text-xs text-purple-500 mb-3">Daily Health Tips</p>
        <a href="/">
            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Fall Beginning</h5>
        </a>
        <p class="font-normal text-gray-700 mb-3 text-sm">The weather is starting to get colder and that means that
        we need toe at these certain foods in order to maintain our healthy chi balance</p>
        <p class="text-blue-500 hover:underline">Read More</p>
        </div>

        <footer class="flex items-center justify-between leading-none p-4">
            <a class="flex items-center no-underline hover:underline text-black" href="/">
                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                <div>
                <p class="ml-2 text-sm font-bold">
                    Author Name
                </p>
                <p class=" ml-2  text-grey-darker text-xs">
                October 12, 2021
                </p>
                </div>
            </a>
        </footer>

        </article>


        </div>



        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">


        <article class="overflow-hidden rounded-lg shadow-lg bg-white">

        <a href="/">
            <img alt="Placeholder" class="block h-auto w-full" src={autumn}/>
        </a>

        <div class="p-4">
        <p class="font-bold text-xs text-purple-500 mb-3">Daily Health Tips</p>
        <a href="/">
            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Fall Beginning</h5>
        </a>
        <p class="font-normal text-gray-700 mb-3 text-sm">The weather is starting to get colder and that means that
        we need toe at these certain foods in order to maintain our healthy chi balance</p>
        <p class="text-blue-500 hover:underline">Read More</p>
        </div>

        <footer class="flex items-center justify-between leading-none p-4">
            <a class="flex items-center no-underline hover:underline text-black" href="/">
                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                <div>
                <p class="ml-2 text-sm font-bold">
                    Author Name
                </p>
                <p class=" ml-2  text-grey-darker text-xs">
                October 12, 2021
                </p>
                </div>
            </a>
        </footer>

        </article>


        </div>


    </div>
</div>
    
        </div>










    )
}

export default HomeBlog
