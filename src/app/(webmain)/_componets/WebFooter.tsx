import Image from 'next/image';
import React from 'react';

function WebFooter() {
  return (
    <div className="fixed bottom-0 w-full h-[244px] bg-white right-0 z-10 pt-20 pr-80 pb-20 pl-80">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[16px]">
          <h2 className="text-4xl font-medium leading-[normal] text-blue4 font-[양진체]">
            지금,여기
          </h2>
          <div className="flex gap-[24px]">
            <p className="text-sm not-italic font-normal leading-5">이용약관</p>
            <p className="text-sm not-italic font-semibold leading-5">
              개인정보처리방침
            </p>
            <p className="text-sm not-italic font-normal leading-5">
              위치기반 서비스 이용약관
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="w-28 h-11 shrink-0 rounded-lg border-[#E5E5EC] border text-sm not-italic font-normal leading-5 flex justify-center items-center gap-1">
            <Image
              src="/app-store.jpg"
              alt="App이미지"
              width={24}
              height={24}
            />
            <p>App Store</p>
          </button>
          <button className="w-28 h-11 shrink-0 rounded-lg border-[#E5E5EC] border text-sm not-italic font-normal leading-5 flex justify-center items-center gap-1">
            <Image
              src="/play-store.jpg"
              alt="play이미지"
              width={24}
              height={24}
            />
            <p>Play Store</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WebFooter;
