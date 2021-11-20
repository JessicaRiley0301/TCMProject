import React from 'react'
import Footer from './Footer'
import Headerfeature from './Headerfeature'
import HeaderHome from './HeaderHome'
import HomeAbout from './HomeAbout'
import HomeBlog from './HomeBlog'
import HomeInsta from './HomeInsta'
import HomeServices from './HomeServices'
import HomeSignup from './HomeSignup'
import HomeStore from './HomeStore'
import HomeYoutube from './HomeYoutube'


const Home = () => {
    return (
        <div class="space-y-8">
            <div>
            <HeaderHome/>
            <HomeAbout/>
            <Headerfeature/>
            <HomeServices/>
            <HomeBlog/>
            <HomeStore/>
            <HomeYoutube/>
            <HomeSignup/>
            <HomeInsta/>

            </div>

        </div>

    )
}

export default Home
