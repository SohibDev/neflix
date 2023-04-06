import SwiperCore, { Navigation, Autoplay } from 'swiper';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Set up Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const getPosterUrl = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
    <div className="card shadow">
      <img src={getPosterUrl(movie.poster_path)} className="card-img-top" alt={movie.title} />
    </div>
    </Link>
  );
};

const CardCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2549127d548d3a2f96bb538a296a8058&language=en-US&page=1')
      .then((response) => {
        setMovies(response.data.results);
      })
  }, []);

  return (
    <div>
      <Swiper
        style={{ backgroundColor: 'black' }}
        spaceBetween={1}
        slidesPerView={1}
        // autoplay={{ delay: 2500 }}
        navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 3,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 4,
          },
          1400: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
