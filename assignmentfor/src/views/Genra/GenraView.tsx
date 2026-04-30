// with_genre a string
// get ids?
import { ButtonGroup, ImageGrid, Pagination } from '@/components';
import { MOVIE_GENRA_ENDPOINT } from '@/core/constants';
import type { MediaResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const GenraView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState('28');
  // const interval = searchParams.get('genre') || '28';
  const { data } = useTmdb<MediaResponse>(${MOVIE_GENRA_ENDPOINT}, {page, &with_genres/${genre} }, [page] );
  
  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imagePath: result.poster_path,
    primaryText: result.original_title,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="max-w-[1200px] mx-auto p-5 space-y-5">
      <h1 className="text-3xl font-bold mb-4">Genre</h1>


  <LinkGroup
        }}
        options={[
          { label: 'TV', to='/genre/tv/&with_genres=10759' },
          { label: 'Movies', to='/genre/movies/&with_genres=28' },
        ]}
      />

      
  {/* <ButtonGroup
        value={genre}
        onClick={(value: string) => {
          setSearchParams({ genre: value });
        }}
        options={[
          { label: 'Action', value: '28' },
          { label: 'Adventure', value: '12' },
          { label: 'Animation', value: '16' },
          { label: 'Crime', value: '80' },
          { label: 'Family', value: '10751' },
          { label: 'Fantasy', value: '14' },
          { label: 'History', value: '36' },
          { label: 'Horror', value: '27' },
          { label: 'Mystery', value: '9648' },
          { label: 'Sci-Fi', value: '878' },
        ]}
      /> */}

  <LinkGroup
        }}
        options={[
          { label: 'Action', to='/genre/movie/&with_genres=28' },
          { label: 'Adventure', to='/genre/movie/&with_genres=12' },
          { label: 'Animation', to='/genre/movie/&with_genres=16' },
          { label: 'Crime', to='/genre/movie/&with_genres=80' },
          { label: 'Family', to='/genre/movie/&with_genres=10751' },
          { label: 'Fantasy', to='/genre/movie/&with_genres=14' },
          { label: 'History', to='/genre/movie/&with_genres=36' },
          { label: 'Horror', to='/genre/movie/&with_genres=27' },
          { label: 'Mystery', to='/genre/movie/&with_genres=9648' },
          { label: 'Sci-Fi', to='/genre/movie/&with_genres=878'},
        ]}
      />
      
        {/* <ButtonGroup
        value={genre}
        onClick={(value: string) => {
          ({ setGenre: value });
        }}
        options={[
          { label: 'Action', value: '10759' },
          { label: 'Animation', value: '16' },
          { label: 'Comedy', value: '35' },
          { label: 'Crime', value: '80' },
          { label: 'Documentary', value: '99' },
          { label: 'Drama', value: '18' },
          { label: 'Family', value: '10751' },
          { label: 'Kids', value: '10762' },
          { label: 'Mystery', value: '9648' },
          { label: 'Sci-Fi', value: '10765' },
        ]}
      />  */}
          
          {/* <LinkGroup
            options={[
          { label: 'Action', to="/genre/tv/action" },
          { label: 'Animation', to="/genre/tv/animation" },
          { label: 'Comedy', to="/genre/tv/comedy" },
          { label: 'Crime', to="/genre/tv/crime" },
          { label: 'Documentary', to="/genre/tv/documentary" },
          { label: 'Drama', to="/genre/tv/drama" },
          { label: 'Family', to="/genre/tv/family" },
          { label: 'Kids', to="/genre/tv/kids" },
          { label: 'Mystery', to="/genre/tv/mystery" },
          { label: 'Sci-Fi', to="/genre/tv/scifi" },
        ]}
            ]}
          /> */}
          {/* or change vaule to to and make it a LinkGroup ??? */}
      <ImageGrid results={gridData} getHref={(id) => `/movie/${id}`} />
      <Pagination page={page} maxPages={data.total_pages} onClick={setPage} />
    </section>
  );
};
