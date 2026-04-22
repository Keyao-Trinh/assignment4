import { API_KEY } from '@/core/constants';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function useTmdb<T>(url: string, params: Record<string, any>, deps: any[]) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        console.log("happpened");

        const response = await axios.get<T>(url, {
          params: {
            api_key: API_KEY,
            ...params,
          },
          signal: controller.signal,
        });

        setData(response.data);
      } catch (err) {
        console.error(err);
        console.log("somehting abhpappened");
      }
    };

    fetchData();

    return () => controller.abort();
  }, deps);

  return { data };
}