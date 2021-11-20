import React from 'react'

const Footer = () => {
    return (
        <div id="footer">
            <section class="bg-black py-8 w-full">
    <div class="container mx-auto px-8">
        <div class="table w-full">
        <div class="block sm:table-cell">
                <p class="uppercase text-white text-xl py-4">Contact</p>

                <p class="text-white hover:underline text-md py-2">
                <a href="tel:310458-1488">(310) 458-1788
                </a>
                </p>
                <p class="text-white hover:underline text-md py-2"><a href="mailto:baolinwu.medicalcenter@gmail.com">baolinwu.medicalcenter@gmail.com</a></p>


                <div>

                
                <p class="uppercase text-white text-xl py-4">Hours</p>
                <p class="text-white text-md py-2">
                Monday, Tuesday, Wednesday, Friday: 1 pm – 5 pm
                </p>
                <p class="text-white text-md py-2">
                Thursday, Sunday: Closed
                </p>
                <p class="text-white text-md py-2">
                Saturday: 10am - 3pm
                </p>
                </div>
            </div>
            <div class="block sm:table-cell">
                <p class="uppercase text-white text-xl py-4">Location</p>
                <div>
                <p class="text-white text-md py-2">
                <a href="/https://www.google.com/maps/place/Beijing+Chinese+Medical+Center/@34.0140936,-118.4824968,17z/data=!4m12!1m6!3m5!1s0x80c2a4d11cf1afa1:0x9bbd06158b141cb2!2sBeijing+Chinese+Medical+Center!8m2!3d34.0141325!4d-118.4802486!3m4!1s0x80c2a4d11cf1afa1:0x9bbd06158b141cb2!8m2!3d34.0141325!4d-118.4802486" class="link-dark" target= "_blank">
                1930 11th St, Santa Monica, CA 90404
                </a>
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.1605673505055!2d-118.48249148492941!3d34.014089180616395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d11cf1afa1%3A0x9bbd06158b141cb2!2sBeijing%20Chinese%20Medical%20Center!5e0!3m2!1sen!2sus!4v1633032296730!5m2!1sen!2sus" width="300" height="250" allowfullscreen="" loading="lazy">
                </iframe>

                </div>
            </div>


        </div>
    </div>
</section>

<div class="pt-2 bg-black">
        <div class="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-400 text-white text-sm 
            flex-col md:flex-row max-w-6xl">
            <div class="mt-2">
                © Copyright 2021. All Rights Reserved.
            </div>

            <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="/" class="w-6 mx-1">
                    <i class="uil uil-facebook-f"></i>
                </a>
                <a href="/" class="w-6 mx-1">
                    <i class="uil uil-twitter-alt"></i>
                </a>
                <a href="/" class="w-6 mx-1">
                    <i class="uil uil-youtube"></i>
                </a>
                <a href="/" class="w-6 mx-1">
                    <i class="uil uil-linkedin"></i>
                </a>
                <a href="/" class="w-6 mx-1">
                    <i class="uil uil-instagram"></i>
                </a>
            </div>
        </div>
    </div>

        </div>
    )
}

export default Footer
