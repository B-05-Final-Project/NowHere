import React, { PropsWithChildren } from 'react';
import WebHeader from './_componets/WebHeader';
import WebFooter from './_componets/WebFooter';

function layout({ children }: PropsWithChildren) {
  return (
    <div className="w-full">
      <WebHeader />
      <div className="pt-[76px] pb-[244px]"> {children}</div>
      <WebFooter />
    </div>
  );
}

export default layout;
