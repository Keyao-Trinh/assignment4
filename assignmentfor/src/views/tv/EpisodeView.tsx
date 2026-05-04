import { ImageGrid, Link } from '@/components';
import { DETAIL_ENDPOINT } from '@/core/constants';
import type { MediaResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useState } from 'react';

export const EpisodeView = () => {
  const [season, setSeason] useState<number>(1);
  const { data } = useTmdb<MediaResponse>(`${DETAIL_ENDPOINT}/${id}/season/${season}`, { append_to_response: 'videos' }, []);

  const gridData = (data?.results ?? []).map((result) => ({
    id: episode.id,
    imagePath: episode.still_path,
    primaryText: episode.name,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="max-w-[1200px] mx-auto p-5 space-y-5">
      <h1 className="text-3xl font-bold mb-4">Season {season} </h1>
      <ImageGrid results={gridData}/>
    </section>
  );
};
