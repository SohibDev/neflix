import { useState, useEffect } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const getPosterUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
};

const SingleMovie = () => {
    const [movie, setMovie] = useState(null);
    const [trailerUrl, setTrailerUrl] = useState(null);
    const [similarMovies, setSimilarMovies] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=2549127d548d3a2f96bb538a296a8058&language=en-US`
            )
            .then((response) => {
                setMovie(response.data);
            });
    }, [id]);

    useEffect(() => {
        if (movie) {
            axios
                .get(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
                        movie.title + ' trailer'
                    )}&key=<YOUR_YOUTUBE_API_KEY>`
                )
                .then((response) => {
                    if (response.data.items.length > 0) {
                        setTrailerUrl(response.data.items[0].id.videoId);
                    }
                });
            axios
                .get(
                    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=2549127d548d3a2f96bb538a296a8058&language=en-US&page=1`
                )
                .then((response) => {
                    setSimilarMovies(response.data.results);
                });
        }
    }, [id, movie]);

    const handlePlayButtonClick = () => {
        setTrailerUrl(
            `https://www.youtube.com/embed/${trailerUrl}?autoplay=1&mute=1`
        );
    };

    if (!movie) {
        return <div className="text-center align-items-center text-white fs-1">Loading...</div>;
    }

    const posterUrl = getPosterUrl(movie.poster_path);

    return (
        <div>
            <div
                style={{
                    height: 'calc(100vh - 140px)',
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${posterUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                }}
            >
                <div style={{ margin: '50px 0 0 50px' }}>
                    <h1
                        style={{
                            fontSize: '50px',
                            fontWeight: '800',
                            marginBottom: '20px',
                            color: '#fff',
                        }}
                    >
                        {movie.title}
                    </h1>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        <div style={{ marginRight: '20px' }}>
                            <img
                                src={getPosterUrl(movie.poster_path)}
                                alt="movie poster"
                                style={{ maxWidth: '300px' }}
                            />
                        </div>
                        <div style={{ color: '#fff' }}>
                            <p style={{ marginBottom: '5px' }}>{movie.release_date}</p>
                            <p style={{ marginBottom: '5px' }}>
                                {movie.genres.map((genre) => genre.name).join(', ')}
                            </p>
                            <p style={{ marginBottom: '5px' }}>
                                {movie.runtime} mins | {movie.vote_average} / 10
                            </p>
                            <p style={{ marginBottom: '5px' }}>{movie.overview}</p>
                            {trailerUrl && (
                                <Button variant="danger" onClick={handlePlayButtonClick}>
                                    Play Trailer
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
                <div style={{ padding: '50px' }}>
                    <h2 className="text-white" style={{ marginBottom: '20px' }}>Similar Movies</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {similarMovies.map((movie) => (
                            <div
                            // className="mx-auto"
                                key={movie.id}
                                style={{
                                    marginRight: '20px',
                                    marginBottom: '20px',
                                    maxWidth: '220px',
                                }}
                            >
                                <a href={`/movies/${movie.id}`}>
                                    <img
                                        src={getPosterUrl(movie.poster_path)}
                                        alt="movie poster"
                                        style={{ maxWidth: '100%' }}
                                    />
                                </a>
                                <p style={{ marginTop: '10px', fontWeight: '600' }}>
                                    {movie.title}
                                </p>
                                <p style={{ marginTop: '5px' }}>
                                    {movie.release_date.substring(0, 4)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMovie;