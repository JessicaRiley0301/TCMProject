import React from 'react'
import fengshui1 from '../Images/fengshui1.jpeg'

const Classesdetail = () => {
    return (
        <div>
                        <section class=" bg-blueGray-200 -mt-24">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap">
                <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                    <div class="px-4 flex-auto">
                    </div>
                    </div>
                </div>
                </div>

                <div class="flex flex-wrap items-center mt-16">
                    
                <div class="w-full md:w-5/12 p-8 mr-auto ml-auto">
                    <h3 class="text-3xl mb-2 font-semibold leading-normal">
                    9 PALACES QIGONG CLASS
                    </h3>
                    <p class="text-lg text-gray-500">Taught by Taoist Master & Physician - Dr. Baolin Wu, OMD., L.Ac </p>
                    <p class="text-sm leading-relaxed mt-4 mb-4 ">
                    The 9 PALACES QI GONG practice represents one of the highest achievements of the ancient Chinese Taoist tradition of Qi Gong. It is an extremely powerful form of breathing, movement, and meditation, which draws yang energy from the sun and opens communication with the universe. Qi (chi) is life-force energy, which not only flows through the human body but through all of nature. While practicing 9 PALACES QI GONG, you allow sunlight and Qi in the air to recharge the body like a battery.
                    </p>
                    <p class="text-sm leading-relaxed mt-0 mb-4 ">
                    9 PALACES QI GONG is a powerful and effective way to increase your energy, manage stress, strengthen the immune system, and maintain optimum health. Daily practice brings a calm, relaxed state of well-being and promotes the following:

Greater capacity for self-healing
Stronger immune system
Higher energy levels
Need for less sleep
Increased longevity
Better sexual energy
Enhancement of creativity
Improved focus and concentration
Dr. Baolin Wu, OMD., L.Ac is a Taoist Master from the White Cloud Monastery in Beijing, which for almost a thousand years has been one of the most respected centers in China for the study and practice of Taoist philosophy and medicine. While Dr. Wu is a recognized authority on Traditional Chinese Medicine, Acupuncture, and Chinese herbal science, what truly sets him apart is his advanced expertise in Qi Gong.
                    </p>
                </div>
                <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg bg-red-600">
                    <img alt="..." src={fengshui1} class="w-full align-middle rounded-t-lg"/>
                    <blockquote class="relative p-8 mb-4">

                    
                        <h4 class="text-xl font-bold text-white">
                        Class information
                        </h4>
                        <p class="text-md font-light mt-2 text-white">
                        <ul>
                            <li>Dates:
July 22 ,11AM-6PM Sunday</li>
                            <li>Cost: $450.00 (Call for payment terms)</li>
                        </ul>
                        
                        </p>
                    </blockquote>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Classesdetail
