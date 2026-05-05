import { ImageGrid } from '@/components';
import { DETAIL_ENDPOINT } from '@/core/constants';
import type { MediaResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
 import { useState } from 'react';
import { useParams } from 'react-router-dom';


export const SeasonsView = () => {
  const { id } = useParams();
  const [season, setSeason] = useState(1);
  const { data } = useTmdb<MediaResponse>(`${DETAIL_ENDPOINT}/${id}/season/${season}`, { append_to_response: 'videos' }, []);



  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imagePath: result.poster_path,
    primaryText: result.season_number,
  }));
  setSeason(2);

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="max-w-[1200px] mx-auto p-5 space-y-5">
      <h1 className="text-3xl font-bold mb-4">Seasons</h1>
      <ImageGrid results={gridData} getHref={(id) => `/tv/${id}/season/${season}`} />
    </section>
  );
};
