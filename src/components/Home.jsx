import React from 'react';

import Footer from './Footer';
import NetflixNavbar from './Navbar';
import NetflixHero from './Hero';
import CardCarousel from './Carousel';
import BetweenCarousel from './BeetweenCarousel';
import BottomCarousel from './BottomCarousel';

function Home() {
   
    return (
        <div>
            {/* <NetflixNavbar /> */}
            <section className="hero">
                <NetflixHero />
                <div>
                <CardCarousel />
                </div>
                <div className="py-5 bg-black">
                <h3 className="text-white">Netflix Orijinal İçerikleri</h3>
                <BetweenCarousel />
                </div>
                <div className="pb-3">
                <h3 className="text-white">Yeniden İzle</h3>
                <BottomCarousel />
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;