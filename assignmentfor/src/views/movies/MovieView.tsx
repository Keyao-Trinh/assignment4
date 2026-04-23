import { Button, LinkGroup } from '@/components';
import { Modal } from '@/components/Modal';
import { IMAGE_BASE_URL, MOVIE_ENDPOINT, ORIGINAL_IMAGE_BASE_URL } from '@/core/constants';
import type { DetailRepsonse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { FaCalendarAlt } from 'react-icons/fa';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
// popular, Now Playing, Upcoming, and Top

export const MovieView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useTmdb<DetailRepsonse>(`${MOVIE_ENDPOINT}/${id}`, { append_to_response: 'videos' }, []);

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <Modal onClose={() => navigate(-1)}>
    <section className="max-w-[1200px] mx-auto p-10">
      <div
        className="h-[300px] bg-cover bg-center mt-4"
        style={{
          backgroundImage: `url(${ORIGINAL_IMAGE_BASE_URL}${data.backdrop_path})`,
        }}
      />
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col flex-row gap-8">
        <img
          className="w-[250px] h-[375px] object-cover rounded-xl shadow-lg"
          src={`${IMAGE_BASE_URL}${data.poster_path}`}
          alt={data.title}
        />
        <div className="space-y-4">
          <Button onClick={() => navigate(-1)}>← Back</Button>
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p className="text-gray-400 flex items-center gap-2">
            <FaCalendarAlt />
            {data.release_date}
          </p>
          <p className="text-gray-300 leading-relaxed">{data.overview}</p>
        
          <LinkGroup
            options={[
              { label: 'Credits', to: 'credits' },
              { label: 'Reviews', to: 'reviews' },
              { label: 'Trailer', to: 'trailer' }
            ]}
          />
        </div>
      </div>
      <section className="max-w-[1200px] mx-auto">
        <Outlet />
      </section>
    </section>
    </Modal>
  );
};
