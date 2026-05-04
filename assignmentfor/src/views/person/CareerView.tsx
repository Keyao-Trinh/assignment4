import { ImageGrid } from '@/components';
import { MOVIE_ENDPOINT } from '@/core/constants';
import type { CreditsResponse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useParams } from 'react-router-dom';

export const CareerView = () => {
  const { id } = useParams();
  const { data } = useTmdb<CreditsResponse>(`${MOVIE_ENDPOINT}/${id}/movie_credits`, {}, []);

  const gridData = (data?.cast ?? []).map((result) => ({
    id: result.id,
    imagePath: result.profile_path,
    primaryText: result.title,
    secondaryText: result.character,
  }));
  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }
  return (
    <section className="min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6">Credits</h2>
      {!data.cast.length && <p className="text-gray-400 text-center">No Movies available</p>}
      <ImageGrid results={gridData} getHref={(id) => `/movie/${id}/reviews`} />
    </section>
  );
};

//MovieView w/image grid that shows the moves and actor was in?
// give person id, 
// then get back movie name and chacter played?
//"original_path"
//"poster_title"
//secondary* "character"
