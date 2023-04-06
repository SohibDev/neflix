import React from 'react';

import Footer from './Footer';
import NetflixNavbar from './Navbar';
import NetflixHero from './Hero';
import CardCarousel from './Carousel';

function Home() {
   
    return (
        <div>
            <NetflixNavbar />
            <section className="hero">
                <NetflixHero />
            </section>
            <section>
                <CardCarousel />
            </section>
            <section></section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;