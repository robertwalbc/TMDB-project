import React, { useEffect, useState } from 'react'
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../../api/services.ts';
import MovieCard from '../../components/cards/Card.tsx';
import { CardGrid } from './home.styles.ts';


function Home() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popularMovies, setPopularMovies] = useState('');
  const [topRatedMovies, setTopRatedMovies] = useState('');
  const [upcomingMovies, setUpcomingMovies] = useState('');
  const [loading, setLoading] = useState(false);

  const callNowPlaying = async () => {
    try {
      const res = await getNowPlayingMovies();
      setLoading(true);

      setNowPlaying(res?.data?.results);

      //console.log('Now Playing: ', nowPlaying);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    //callNowPlaying();
    //console.log('Test Now Playing: ', nowPlaying);
  }, [callNowPlaying()]);
  
  return (
    <>
      <div>home</div>
      <CardGrid>
          {loading ? <p>loading...</p> :
          nowPlaying?.map(mov => 
          <MovieCard
          key={mov.id}
          movieID={mov.id}
          />)}
      </CardGrid>
    </>
  )
}

export default Home;