import { MainLayout } from './layout/MainLayout';
import { CreditsView, ErrorView, HomeView, MovieView, TrendingTvView, NowPlayingView, TrendingView, ReviewsView, PopularView, TopRatedView, UpcomingView, AiringView, TvCreditsView, TvReviewsView, OnAirView, PopularTvView, TopTvView } from '@/views';
import { Route, Routes } from "react-router-dom";

// import axios from "axios";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/movies/catagory" element={<MainLayout />}>
        <Route path="now_playing" element={<NowPlayingView />} />
        <Route path="popular" element={<PopularView />} />
        <Route path="top_rated" element={<TopRatedView />} />
        <Route path="upcoming" element={<UpcomingView />} />
        </Route>
        <Route path="/movie/:id" element={<MovieView />}>
          <Route path="credits" element={<CreditsView />} />
          <Route path="trailers" element={<TrailerView/>} /> 
          <Route path="reviews" element={<ReviewsView />} />
      </Route>
      {/* </Route> */}
      {/* <Route path="/person" element={<MainLayout/>}> */}
      {/* <Route path="/:id" element={<PersonView />}> */}
      {/* </Route> */}
      <Route path="/tv/catagory" element={<MainLayout />}>
        <Route path="airing_today" element={<AiringView />} />
        <Route path="on_the_air" element={<OnAirView />} />
        <Route path="popular" element={<PopularTvView />} />             
        <Route path="top_rated" element={<TopTvView />} />
       <Route/> 
         <Route path="/tv/:id" element={<TelevisonView />} > 
          <Route path="seasons" element={<SeasonsView />} > 
           <Route path="episode" element={<EpisodeView />} /> 
          <Route/>
           <Route path="credits" element={<TvCreditsView />} /> 
           <Route path="reviews" element={<TvReviewsView />} /> 
        <Route/> 
        </Route>
      </Route>
<Route path="/genre" element={<MainLayout />} >
        <Route path="movies" element={<GenreView />} />
        <Route path="tv" element={<TvGenreView />} />
</Route>

        
      <Route path="/trending" element={<MainLayout />}>
        <Route path="movies" element={<TrendingView />} />
        <Route path="tv" element={<TrendingTvView />} />
      </Route>
      <Route path="*" element={<ErrorView />} />
    </Routes>
  );
};
