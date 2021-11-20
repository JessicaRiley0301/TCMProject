import React from 'react'
import qigongbook from '../Images/qigongbook.jpg'
import lightingeyedragon from '../Images/lightingeyedragon.jpg'
import immortalsword from '../Images/immortalsword.jpg'
import souloftaiji from '../Images/souloftaiji.jpg'
import qigongjourney from '../Images/qigongjourney.jpg'

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        },
        // More products...
    ]

const StoreProducts = () => {
    return (
        <div class="bg-whiteflowerback w-screen bg-cover bg-fixed bg-bottom sm:p-16">
            <p class="text-center font-bold text-5xl pt-16">Best-Selling Books</p>

                
                <section class="relative pt-4 bg-blueGray-50">
                <div class="bg-white p-8 items-center flex flex-wrap">
                <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img id="qigongbook" alt="..." class="max-w-full rounded-lg shadow-lg" src={qigongbook}/>
                </div>
                <div class="p-8 w-full md:w-8/12 ml-auto mr-auto px-4">
                    <div class="md:pr-8">
                    <h1 class="text-gray-900 text-xl title-font font-medium mb-1">Qi Gong for Total Wellness: Increase Your Energy, Vitality, and Longevity with the Ancient 9 Palaces System from the White Cloud Monastery</h1>
        <h2 class="pb-4 text-xs title-font text-gray-500 tracking-widest">BY BAOLIN WU, JESSICA ECKSTEIN</h2>
            <a
                href="/"
                className="hover:bg-yellow-700 bg-yellow-500 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                SHOP AMAZON
                </a>
            <p class="pt-4 text-sm leading-relaxed">
            Qi Gong for Well-Being is a clear, illustrated guide to Qi Gong, the ancient self-healing art that combines movement, meditation, and visualization to boost energy and improve health. Author Baolin Wu specializes in Nine Palaces Solar Qi Gong which works with the energy of the son, and trains practioners to expel toxins and intake healthy qi through the nine openings--palaces-- of the body.

This introduction to the concepts of Qi Gong and contains exercises and methods pertaining to each part of the body, with clear instructions how to accurately apply the methods of Solar Qi Gong to increase physical and mental health using this ancient art.
                </p>



                    </div>
                </div>
                </div>
                </section>

                
                <section class="relative pt-4 bg-blueGray-50">
                <div class="bg-white p-8 items-center flex flex-wrap">
                <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img alt="..." class="max-w-full rounded-lg shadow-lg" src={lightingeyedragon}/>
                </div>
                <div class="p-8 w-full md:w-8/12 ml-auto mr-auto px-4">
                    <div class="md:pr-8">
                    <h1 class="text-gray-900 text-xl title-font font-medium mb-1">Lighting the Eye of the Dragon: Inner Secrets of Taoist Feng Shui</h1>
        <h2 class="pb-4 text-xs title-font text-gray-500 tracking-widest">BY BAOLIN WU, MICHAEL MCBRIDE</h2>
            <a
                href="/"
                className="hover:bg-yellow-700 bg-yellow-500 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                SHOP AMAZON
                </a>
            <p class="pt-4 text-sm leading-relaxed">
            Today the art of Feng Shui, once shrouded in secrecy and superstition, is taking on new life as a powerful, practical method for enhancing one's career, health and personal growth. Unfortunately, these techniques, as taught in the U.S.A., tend to be filled with incomplete, incorrect and unnecessarily complex information.Now Dr. Baolin Wu, renowned Feng Shui practitioner and living master of the complete canon of Taoist arts, presents publicly, for the first time, the inner teachings of the White Cloud Monastery in Beijing, as passed to him from a 1,000-year-old oral tradition.
                </p>



                    </div>
                </div>
                </div>
                </section>
                <section class="relative pt-4 bg-blueGray-50">
                <div class="bg-white p-8 items-center flex flex-wrap">
                <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img alt="..." class="max-w-full rounded-lg shadow-lg" src={immortalsword}/>
                </div>
                <div class="p-8 w-full md:w-8/12 ml-auto mr-auto px-4">
                    <div class="md:pr-8">
                    <h1 class="text-gray-900 text-xl title-font font-medium mb-1">The Eight Immortals' Revolving Sword of Pure Yang</h1>
        <h2 class="pb-4 text-xs title-font text-gray-500 tracking-widest">BY BAOLIN WU, JESSICA ECKSTEIN</h2>
            <a
                href="/"
                className="hover:bg-yellow-700 bg-yellow-500 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                SHOP AMAZON
                </a>
            <p class="pt-4 text-sm leading-relaxed">
            This is the story of Master Wu and the esoteric sword practice he learned at the White Cloud Monastery in Beijing. It opens this practice to the outside world for the first time, explaining its history, theory, cosmology, and practice in great detail.The Eight Immortals'Revolving Sword goes back for seventeen generations, starting with Wang Chongyang, the founder of the Complete Reality school and martial arts champion of the Song dynasty, and actively continued through Qiu Chuji and other senior Daoist lineage holders.

Practicing sword to attain immortality is a profound Daoist method. Master Wu shares his insights and practice instructions as a way of self-cultivation, illuminating the power of the practice to drive away inauspicious energies, eliminate harmful incidents, and safeguard against ghosts. Able to harness good fortune, practice of this sword set enhances inner communication and creates an intimate connection with the universe.In traditional Chinese fashion, Master Wu guides the reader through the ins and outs of the history, folklore, and technique of this sword practice, focusing especially on the figures of the Eight Immortals and explaining their legends, practices, and feats in great detail. Along the way, he highlights the hidden jewels of training with insightful commentaries on various parables, thereby to bring out the essence of Dao. He succeeds masterfully at braiding together his unique training history and deep Daoist insights with treasured traditional stories, creating a thrilling account and setting a palpable example of Daoism best kept inner secrets as brought to life in actual experiences today.
                </p>



                    </div>
                </div>
                </div>
                </section>

                <section class="relative pt-4 bg-blueGray-50">
                <div class="bg-white p-8 items-center flex flex-wrap">
                <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img alt="..." class="max-w-full rounded-lg shadow-lg" src={souloftaiji}/>
                </div>
                <div class="p-8 w-full md:w-8/12 ml-auto mr-auto px-4">
                    <div class="md:pr-8">
                    <h1 class="text-gray-900 text-xl title-font font-medium mb-1">The Soul of Taiji: Zhang Sanfeng-Wu Baolin Taijiquan</h1>
        <h2 class="pb-4 text-xs title-font text-gray-500 tracking-widest">BY BAOLIN WU, MICHAEL MCBRIDE</h2>
            <a
                href="/"
                className="hover:bg-yellow-700 bg-yellow-500 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                SHOP AMAZON
                </a>
            <p class="pt-4 text-sm leading-relaxed">
            The Soul of Taiji introduces the original practice of taijiquan as taught by Zhang Sanfeng, the original creator, to the outside world for the first time, pristinely preserved and complete. It tells the story of Master Wu Baolin and how he came to learn this Daoist taijiquan from Master Du Xinling at the White Cloud Monastery in Beijing. The practice goes back seven generations, starting with Zhang Sanfeng, the founder of the Wudang branch of the Complete Reality School; it has since continued through Zhang Daishan and other senior lineage holders.

Daoist taijiquan adheres to roundness, the circular symbolizing movement and exercise, and the key to opening the mysterious life gate, onto to a better path, each day fulfilled and joyous. Zhang Sanfeng Taijiquan amongst all forms is unique, practicing in only one singular direction, following the rotation of the earth, the direction of the winds, the turning of the stars, and the shapes of the planets. The universe is vast and unknown, but according to Yijing, the universe itself is round. By observing and practicing Daoist taijiquan, the roundness of the universe is then integrated, the self its reflection, becoming one.
                </p>



                    </div>
                </div>
                </div>
                </section>

                <section class="relative pt-4 bg-blueGray-50">
                <div class="bg-white p-8 items-center flex flex-wrap">
                <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img alt="..." class="max-w-full rounded-lg shadow-lg" src={qigongjourney}/>
                </div>
                <div class="p-8 w-full md:w-8/12 ml-auto mr-auto px-4">
                    <div class="md:pr-8">
                    <h1 class="text-gray-900 text-xl title-font font-medium mb-1">Qigong Journey: Nine-Five Maintenance of Qi</h1>
        <h2 class="pb-4 text-xs title-font text-gray-500 tracking-widest">BY BAOLIN WU, JESSICA ECKSTEIN</h2>
            <a
                href="/"
                className="hover:bg-yellow-700 bg-yellow-500 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                SHOP AMAZON
                </a>
            <p class="pt-4 text-sm leading-relaxed">
            Qigong Journey brings students of Asian culture, Daoist philosophy, and the mind/body wellness connection directly into the mind of a master. Through the unparalleled knowledge and openness of Dr. Baolin Wu, take a journey through the many layers of the Daoist qigong experience. In this expansive volume, filled with personal anecdotes of life in the White Cloud Monastery, lies an in-depth exploration of the holistic and lyrical Daoist worldview, a shamanic experience both pragmatic and poetic. Discover the connection between the history and traditions of ancient understanding and the daily life we all lead today. The book is a practical manual detailing a complete, eight hundred year old protective qigong practice from the founder of the White Cloud Monastery itself, preserved in silence by the members of the White Cloud Monastery community until today. With painstaking, step-by-step instructions and beautiful illustrations by Oliver Benson, our beloved Qi Gong for Total Wellness artist, the goal of this book is to present the next level of Nine Palaces Daoist Qigong. Using a guided series of breath, visualization and internal isometric strengthening exercises, it is a life-changing physical training, focused on securing one’s body and consciousness in the midst of the very real health challenges, hardships and volatility of today’s world.
                </p>



                    </div>
                </div>
                </div>
                </section>

                <p class="text-center font-bold text-5xl pt-8">Herbal Products</p>
                <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
                
        </div>
    )
}

export default StoreProducts
