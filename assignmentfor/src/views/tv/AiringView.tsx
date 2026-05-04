import { ImageGrid, Link, Pagination } from '@/components';
import { AIR_ENDPOINT } from '@/core/constants';
import type { MediaResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useState } from 'react';

export const AiringView = () => {
  const [page, setPage] = useState<number>(1);
  const { data } = useTmdb<MediaResponse>(AIR_ENDPOINT, { page }, [page]);

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imagePath: result.poster_path,
    primaryText: result.original_name,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="max-w-[1200px] mx-auto p-5 space-y-5">
      <h1 className="text-3xl font-bold mb-4">Airing Today</h1>

      <div>
        <Link to="/tv/catagory/on_the_air">On The Air</Link>
        <Link to="/tv/catagory/popular">Popular</Link>
        <Link to="/tv/catagory/top_rated">Top Rated</Link>
        <Link to="/tv/catagory/airing_today">Airing Today</Link>
      </div>

      <ImageGrid results={gridData} getHref={(id) => `/tv/${id}/credits`} />
      <Pagination page={page} maxPages={data.total_pages} onClick={setPage} />
    </section>
  );
};
