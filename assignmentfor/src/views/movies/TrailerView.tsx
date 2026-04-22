import { MOVIE_ENDPOINT } from '@/core/constants';
import type { DetailRepsonse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { useParams } from 'react-router-dom';
// popular, Now Playing, Upcoming, and Top

export const TrailerView = () => {
//   const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useTmdb<DetailRepsonse>(`${MOVIE_ENDPOINT}/${id}`, { append_to_response: 'videos' }, []);

  const trailerVideo =
    data?.videos?.results.find(
      (video) => video.site === 'YouTube' && video.type === 'Trailer' && video.name?.toLowerCase().includes('official')
    ) || data?.videos?.results.find((video) => video.site === 'YouTube' && video.type === 'Trailer');

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="max-w-[1200px] mx-auto p-10">
      <h2 className="text-2xl font-bold mb-6">Credits</h2>
      <div className="space-y-4">
          {trailerVideo && (
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${trailerVideo.key}`}
                title="Movie Trailer"
                allowFullScreen
              />
            </div>
          )}
      </div>
    </section>
  );
};
