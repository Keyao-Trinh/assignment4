import { MainLayout } from './layout/MainLayout';
import { CreditsView, ErrorView, HomeView, MovieView, NowPlayingView, ReviewsView, SearchView, TrendingView } from './views';
import { Route, Routes } from "react-router-dom";


// import axios from "axios";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/search?" element={SearchView} />
      {/* Movie, TV, Person */}

      <Route path="/movies/category" element={<MainLayout />}>
        <Route path="/now-playing" element={<NowPlayingView />} />
        {/* <Route path="/popular" element={<PopularView />} /> */}
        {/* <Route path="/top_rated" element={<TopView />} /> */}
        {/* <Route path="/upcoming" element={<UpcomingView />} /> */}
        <Route path="/movie/:id" element={<MovieView />}>
          <Route path="credits" element={<CreditsView />} />
          <Route path="reviews" element={<ReviewsView />} />
        </Route>
        <Route path="/trending" element={<TrendingView />} />
      </Route>
      <Route path="/tv"> </Route>

      <Route path="*" element={<ErrorView />} />
    </Routes>
  );
};