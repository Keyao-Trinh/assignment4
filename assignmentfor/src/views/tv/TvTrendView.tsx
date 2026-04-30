import { ButtonGroup, ImageGrid, Link, Pagination } from '@/components';
import { AIR_ENDPOINT } from '@/core/constants';
import type { MediaResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useState } from 'react';

export const TvView = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState<number>(1);
  // const interval = searchParams.get('interval') || 'day';
  const { data } = useTmdb<MediaResponse>(`${AIR_ENDPOINT}`, {page}, [page]);


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
      <h1 className="text-3xl font-bold mb-4">Trending</h1>

      {/* <LinkGroup */}
      {/* options={[ */}
      {/* { label: 'movies', to: 'movies' }, */}
      {/* { label: 'Reviews', to: 'tv' } */}
      {/* ]} */}
      {/* />  */}
      <div>
        <Link to="/trending/movies?interval=day">Movies</Link>
        <Link to="/trending/tv?interval=day">TV</Link>
      </div>

      
      <ImageGrid results={gridData} getHref={(id) => `/tv/${id}`} />
      <Pagination page={page} maxPages={data.total_pages} onClick={setPage} />
    </section>
  );
};
