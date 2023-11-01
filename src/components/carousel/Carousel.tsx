import React from 'react';
import { Carousel } from 'react-bootstrap';
import MovieCard from '../cards/Card.tsx';
import { CustomCarousel } from './Carousel.styles.ts';

const MovieCarousel = ({ movies }) => {

    return (
        <CustomCarousel>
        {movies.map((movie) => (
            <Carousel.Item key={movie.id}>
            <MovieCard
            key={movie.id}
            movieID={movie.id}
            />
            </Carousel.Item>
        ))}
        </CustomCarousel>
    );
};

export default MovieCarousel;
