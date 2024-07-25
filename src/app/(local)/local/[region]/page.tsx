'use client';

import { Item } from '@/types/localList';
import { getRegionName } from '@/utils/getRegionName';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

type LocalListData = {
  localList: Item[];
  totalPage: number;
};

function LocalListPage({ params }: { params: { region: string } }) {
  const {
    data,
    error,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<LocalListData, Error, LocalListData, string[], number>({
    queryKey: ['localList', params.region],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axios.get<LocalListData>(
        `/api/local-list/${params.region}?pageNo=${pageParam}`,
      );

      return response.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage, lastPageParam) => {
      return lastPageParam === lastPage.totalPage
        ? undefined
        : lastPageParam + 1;
    },
    select: (data) => ({
      localList: data.pages.flatMap((page) => page.localList),
      totalPage: data.pages[0].totalPage,
    }),
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  const { ref } = useInView({
    threshold: 1,
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  if (isPending) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다. {error.message}</div>;
  console.log('data => ', data);

  const defaultImage = '/default-image.png';
  const regionName = getRegionName(params.region);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">{regionName}의 정보 리스트</h1>
      {data && data.localList.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {data.localList.map((item) => (
            <div
              key={item.contentid}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={item.firstimage || defaultImage}
                width={300}
                height={200}
                alt="지역 썸네일"
                className="object-cover w-full h-48"
                priority
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p>{item.addr1}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
      <div ref={ref} className="h-1" />
      {isFetchingNextPage && <p>로딩 중...</p>}
      {/* 마지막 페이지 일 때 로딩 중 없애기 */}
    </div>
  );
}

export default LocalListPage;
