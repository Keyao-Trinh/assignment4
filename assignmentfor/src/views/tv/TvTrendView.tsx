import { ButtonGroup, ImageGrid, Link, Pagination } from '@/components';
import { TV_ENDPOINT } from '@/core/constants';
import type { MediaResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const TvView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState<number>(1);
  const interval = searchParams.get('interval') || 'day';
  const { data } = useTmdb<MediaResponse>(`${TV_ENDPOINT}/${interval}`, {page, time_window: interval}, [page, interval]);


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

      <ButtonGroup
        value={interval}
        onClick={(value: string) => {
          setSearchParams({ interval: value });
        }}
        options={[
          { label: 'Day', value: 'day' },
          { label: 'Week', value: 'week' },
        ]}
      />
      <ImageGrid results={gridData} getHref={(id) => `/tv/${id}`} />
      <Pagination page={page} maxPages={data.total_pages} onClick={setPage} />
    </section>
  );
};
