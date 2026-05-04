//shows details about actor
//birthday string
//place of birth string
//id int

import { Button, LinkGroup } from '@/components';
import { IMAGE_BASE_URL, SEARCH_ENDPOINT, ORIGINAL_IMAGE_BASE_URL } from '@/core/constants';
import type { DetailRepsonse } from '@/core/types';
import { useTmdb } from '@/hooks';
import { FaCalendarAlt } from 'react-icons/fa';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
// popular, Now Playing, Upcoming, and Top


type PersonData = {
  id: number;
  profile_path: string | null;
  name: string;
  biography?: string;
  birthday?: string;
}

export const PersonView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useTmdb<PersonData>(`${SEARCH_ENDPOINT}/${id}`, { append_to_response: 'videos' }, []);

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="max-w-[1200px] mx-auto p-10">
      <div
        className="h-[300px] bg-cover bg-center mt-4"
      />
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col flex-row gap-8">
        <img
          className="w-[250px] h-[375px] object-cover rounded-xl shadow-lg"
          src={`${IMAGE_BASE_URL}${data.profile_path}`}
          alt={data.name}
        />
        <div className="space-y-4">
          <Button onClick={() => navigate(-1)}>← Back</Button>
          <h1 className="text-4xl font-bold">{data.name}</h1>
          
          <p className="text-gray-400 flex items-center gap-2">
            <FaCalendarAlt />
            {data.birthday}
          </p>
          <p className="text-gray-300 leading-relaxed" alt={data.name}
            >{data.biography}</p>
        
          <LinkGroup
            options={[
              { label: 'Images', to: 'images' },
              { label: 'Career', to: 'career' },
            ]}
          />
        </div>
      </div>
      <section className="max-w-[1200px] mx-auto">
        <Outlet />
      </section>
    </section>
  );
};
