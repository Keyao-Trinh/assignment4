import { MOVIE_ENDPOINT } from '@/core/constants';
import type { MovieRespsonse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useParams } from 'react-router-dom';

export const TrailerView = () => {
  const { id } = useParams();
  const { data } = useTmdb<MovieRespsonse>(`${MOVIE_ENDPOINT}/${id}/videos`, { append_to_response: 'videos' }, []);

 const trailerVideo =
    data?.videos?.results.find(
      (video) => video.site === 'YouTube' && video.type === 'Trailer' && video.name?.toLowerCase().includes('official')
    ) || data?.videos?.results.find((video) => video.site === 'YouTube' && video.type === 'Trailer');

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6">Trailers</h2>
      {!data.cast.length && <p className="text-gray-400 text-center">No trailer available.</p>}
      {trailerVideo && (
              <div className="aspect-video w-[50%]">
                <iframe
                  className="h-full w-full rounded-xl"
                  src={`https://www.youtube.com/embed/${trailerVideo.key}`}
                  title={trailerVideo.name}
                  allowFullScreen
                />
              </div>
            )}
    </section>
  );
};
