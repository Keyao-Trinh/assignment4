import { MainLayout } from './layout/MainLayout';
import { CreditsView, ErrorView, HomeView, MovieView, NowPlayingView, ReviewsView, TrendingView } from '@/views';
import { Route, Routes } from "react-router-dom";


// import axios from "axios";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />

      <Route path="/movies/catagory" element={<MainLayout />}>

        {/* <Route path="/catagory"> */}
        <Route path="now-playing" element={<NowPlayingView />} />
        <Route path="popular" element={<TrendingView />} />

        {/* <Route path="/top_rated" element={<TopView />} /> */}
        {/* <Route path="/upcoming" element={<UpcomingView />} /> */}
      </Route>

        <Route path="/:id" element={<MovieView />}>
          <Route path="credits" element={<CreditsView />} />
          {/* <Route path="trailers" element={<TrailerView/>} /> */}
          <Route path="reviews" element={<ReviewsView />} />
        </Route>
      {/* </Route> */}
      {/* <Route path="/person" element={<MainLayout/>}> */}
      {/* <Route path="/:id" element={<PersonView />}> */}
      {/* </Route> */}
      {/* <Route path="/tv"> </Route> */}
      <Route path="*" element={<ErrorView />} />
    </Routes>
  );
};