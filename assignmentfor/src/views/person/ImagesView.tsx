//show images related to actor
//(image Grid)
//   id: number;
//   imagePath: string | null;
//   primaryText: string;    it is all the same actor so this should be optional
//   secondaryText?: string;
//

import { ImageGrid, Link, Pagination } from '@/components';
import { PERSON_ENDPOINT } from '@/core/constants';
import type { MediaResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useState } from 'react';

export const ImagesView = () => {
  const [page, setPage] = useState<number>(1);
  const { data } = useTmdb<MediaResponse>(`${PERSON_ENDPOINT}/${id}`, { page }, [page]);

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imagePath: result.poster_path,
    primaryText: result.original_title,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="space-y-5 p-5">
    <h2 className="text-2xl font-bold">Images</h2>
    {data.results.length ? (
      data.results.slice(0, 5).map((image) => (
        <ImageGrid results={gridData} getHref={(id) => `/movie/${id}`} />

      ))
    ) : (
      <p className="text-gray-400 text-center">No Images available.</p>
    )}
          <Pagination page={page} maxPages={data.total_pages} onClick={setPage} />

  </section>
);};
