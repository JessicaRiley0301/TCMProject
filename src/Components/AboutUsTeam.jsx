import React from 'react'
import jess from '../Images/jess.jpeg'
import drwuacu from '../Images/drwuacu.jpg'
import ericwu from '../Images/Eric-Di-Wu.jpeg'
import jessicaeckstein from '../Images/jessicaeckstein.jpeg'

const AboutUsTeam = () => {
    return (
        <div class="bg-aboutbackground2 w-screen bg-cover bg-fixed bg-bottom p-2 sm:p-16">
            <div class="container mx-auto my-5 p-8">

<div class="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
    
    <div class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
        <div class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom bg-clinic" ></div>
        <div class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
            <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">Welcome to Beijing Medical Center</h3>
            <h4 class="w-full text-xl text-gray-100 leading-tight">About Clinic</h4>
        </div>
        <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
    </div>

    <div class="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
        <div class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
            <h4 class="hidden md:block text-xl text-gray-400">About Clinic</h4>
            <h3 class="hidden md:block font-bold text-2xl text-gray-700">Welcome to Beijing Medical Center</h3>
            <p class="text-gray-600">Beijing Chinese Medical Center (BCMC) was established in the 1990’s by Dr. Baolin Wu OMD, LAc. in Santa Monica, California. Since then, the clinic has been serving and helping patients from all over the world. When Dr. Baolin Wu first started his practice, it was and still is today his hope and dream to better the world by helping one patient at a time.</p>

        </div>
    </div>

</div>
</div>
    <div class="text-center pb-4">
            <h2 class="text-base font-bold text-indigo-600">
            </h2>
            <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                Check Out Our Team
            </h1>
        </div>
    <section class="relative pt-4 bg-blueGray-50">
        <div class="items-center flex flex-wrap">
        <div class="w-full md:w-4/12 ml-auto mr-auto px-8">
            <img alt="..." class="max-w-full rounded-lg shadow-lg" src={drwuacu}/>
        </div>
        <div class="w-full md:w-5/12 ml-auto mr-auto px-8 py-4">
            <div class="md:pr-12">
            <h3 class="text-3xl font-semibold">Dr. Baolin Wu</h3>
            <p class="text-base text-1xl text-gray-400 font-normal">OMD., L.Ac</p>
            <p class="mt-4 text-md leading-relaxed text-blueGray-500">
            </p>
            <ul class="list-disc text-blueGray-500 mt-4 text-md">
                <li>Seventh Generation Family Lineage Practitioner of Traditional Chinese Medicine/Acupuncture</li>
            <li>Guang An Men Hospital of Beijing China (1972-1985)</li>
            <li>Traditional Chinese Medicine / Acupuncture Doctor</li>
            <li>Practiced TCM/Acupuncture in Santa Monica, California. (1990’s – Present)</li>
            <li>Currently holding LA.c and OMD degree in TCM</li>
            <li>American Academy of Traditional Chinese Medicine (AATCM): President</li>
            <li>California Alliance of Acupuncture Medicine (CAAM): Chairman</li>
            </ul>

            
            
            </div>
        </div>
        </div>
        </section>

        <section class="relative pt-12 bg-blueGray-50">
        <div class="items-center flex flex-wrap">
        <div class="w-full md:w-4/12 ml-auto mr-auto px-8 py-4">
            <img alt="..." class="max-w-full rounded-lg shadow-lg" src={ericwu}/>
        </div>
        <div class="w-full md:w-5/12 ml-auto mr-auto px-8">
            <div class="md:pr-12">
            <h3 class="text-3xl font-semibold">Dr. Eric Wu</h3>
            <p class="text-base text-1xl text-gray-400 font-normal">Chiropractor</p>
            <p class="mt-4 text-md leading-relaxed text-blueGray-500">
            Dr. Eric Wu began his career in health care with Southern California University of Health Sciences. During his time there he earned the “Doctor of Chiropractic Degree”. He then furthered his education in Medicine by attending Shantou University School of Medicine in China and earning his MBBS degree.
            </p>
            <ul class="list-disc">
                <li>University of California, Irvine (Bachelors Degree)</li>
                <li>Southern University of Health Sciences (Doctor of Chiropractic, DC Degree)</li>
                <li>Shantou University Medical College (MBBS Degree)</li>
            </ul>
            
            
            </div>
        </div>
        </div>
        </section>
        
        <div class="min-w-screen min-h-screen flex items-center justify-center py-5">
        <div class="w-full bg-aboutbackground2 border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div class="w-full max-w-6xl mx-auto">
            <div class="text-center max-w-xl mx-auto">
                <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">What people are saying</h1>
                <h3 class="text-xl mb-5 font-light">From many of Dr. Wu's satisfied patients</h3>
                <div class="text-center mb-10">
                    <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                </div>
            </div>
            <div class="-mx-3 md:flex items-start">
                <div class="px-3 md:w-1/3">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=1" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Uddhava Om, D.O., Physician & Healer</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>“In my experience, Dr Wu exemplifies the ancient Daoist wisdom of China. He personally assisted me in attaining a deeper experience of spirit and greater physical vitality.”<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=2" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Anonymous,
Computer Programmer</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight">
                            <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                            “I came to Dr. Wu because I had been diagnosed with cancer and diabetes. By strengthening my immune system, Dr. Wu enabled me to fight the cancer cells, which now appear to be in remission. With continued treatment, Dr. Wu brought my blood sugar down from a dangerous level to an acceptable level without the use of insulin. If not for Dr. Wu’s Qi Gong treatments, I might not be alive today.”
                            <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                </div>
                <div class="px-3 md:w-1/3">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=3" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">George Gerdes, Actor </h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                            “I had a chronic cough for several years before discovering Dr. Wu. The constant antibiotics from my Western doctor were not helping. With a combination of Qi Gong, herbs and acupuncture, Dr. Wu cured me very quickly. I strongly recommend Dr. Wu to anyone with or without a health problem because of the incredible power of Qi Gong.”
                            <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=4" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Courtney Cunniff,</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight">
                                <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"
                                </span>
                                “Dr Wu has completely changed my life and I cannot recommend him more. 
                                I’ve been to lots of acupuncturists over the years when I lived in NYC and Chicago, but I moved to LA in March of 2019 and have been seeing Dr Wu regularly since. He is a true healer.
                                Also Dr Wu is mind blowingly intuitive – my first visit he knew I went through a tough breakup when I was 23 (no clue how he would’ve known that). He’s amazing!”
                                <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                </div>
                <div class="px-3 md:w-1/3">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=5" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Anne Kerry Ford, Actress & Writer</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                            “Dr. Wu concerns himself with complete wellness. He treats the entire person… physically, psychologically and emotionally. He facilitates the proper flow of Qi, enabling one to fulfill their whole human potential.”
                            <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"
                            </span></p>
                        </div>
                    </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=6" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Claire</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                            “Hello Dr. Wu (and Lily and Michael), You said that Alex would be changing and she certainly is! Her grades for the past two years have been very poor. She has begun this school year with new enthusiasm and is right now getting straight A’s!
                            And, for the first time in five years, she has decided she wants to play soccer. She has begun playing with a community team just to get fit and for enjoyment. I know these changes are thanks to you. I am very grateful to be getting my cheerful daughter back!”
                            <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default AboutUsTeam
