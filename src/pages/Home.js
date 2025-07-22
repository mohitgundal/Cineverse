import React from 'react';
import BannerHome from '../components/BannerHome';
import { useSelector } from 'react-redux';
import HorizontalScollCard from '../components/HorizontalScollCard';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const trendingData = useSelector(state => state.movieoData.bannerData);

  const { data: nowPlayingData } = useFetch('/movie/now_playing');
  const { data: topRatedData } = useFetch('/movie/top_rated');
  const { data: popularTvShowData } = useFetch('/tv/popular');
  const { data: onTheAirShowData } = useFetch('/tv/on_the_air');

  return (
    <main className="bg-neutral-900 text-white min-h-screen">
      <BannerHome />

      <section aria-label="Trending Movies Section">
        <HorizontalScollCard
          data={trendingData}
          heading="Trending"
          trending={true}
        />
      </section>

      <section aria-label="Now Playing Movies">
        <HorizontalScollCard
          data={nowPlayingData}
          heading="Now Playing"
          media_type="movie"
        />
      </section>

      <section aria-label="Top Rated Movies">
        <HorizontalScollCard
          data={topRatedData}
          heading="Top Rated Movies"
          media_type="movie"
        />
      </section>

      <section aria-label="Popular TV Shows">
        <HorizontalScollCard
          data={popularTvShowData}
          heading="Popular TV Shows"
          media_type="tv"
        />
      </section>

      <section aria-label="TV Shows On The Air">
        <HorizontalScollCard
          data={onTheAirShowData}
          heading="On The Air"
          media_type="tv"
        />
      </section>
    </main>
  );
};

export default Home;
