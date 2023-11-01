import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardTitle, CardContainer, CardImage, CardReleaseDate, CardContent } from "./Card.styles.ts";
import { getMovieByID } from "../../api/services.ts";


function MovieCard( {movieID} ) {
  const [imageURL, setImageURL] = useState('');
  const [movieName, setMovieName] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await getMovieByID(movieID);
        setImageURL(response?.data?.poster_path || 'default_image_url');
        setMovieName(response?.data?.title || 'No title available');
        setReleaseDate(new Date(response?.data?.release_date).toLocaleString() || 'No release date available');
        //console.log('response', response);
      } catch (error) {
        console.error('Error fetching Movie data:', error);
        setImageURL('default_image_url');
        setMovieName('No title available');
        setReleaseDate('No release date available');
      }
    };

    fetchMovieData();
  }, [movieID]);

  return (
    <Link to={`/movie/${movieID}`}>
      <CardContainer>
        <CardContent>
          <CardImage src={`https://image.tmdb.org/t/p/w500${imageURL}`}/>
          <CardTitle>{movieName}</CardTitle>
          <CardReleaseDate>{releaseDate}</CardReleaseDate>
        </CardContent>
      </CardContainer>
    </Link>
)};

export default MovieCard;