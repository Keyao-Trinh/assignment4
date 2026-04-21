import { Link } from '@/components';
import { SearchView } from '@/views/SearchView';

export const Header = () => {
  return (
    <header>
      <nav className="flex gap-4 p-4 bg-gray-800">
        <h1 className="text-2xl font-bold text-white-900">TMDB Explorer</h1>
        <Link to="/movies/category/now_playing">Movies</Link>
        <Link to="/tv/category/airing_today">TV</Link>
        <Link to="/trending?interval=day">Trending</Link>
        {/* <Link to="/genre/movies/adventure">Genre</Link> */}
        {/* <Link to="/search">Search</Link> */}
      </nav>
      <SearchView/>
    </header>
  );
};
