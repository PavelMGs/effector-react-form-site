import React, { memo } from 'react';

interface IProps {}

const OnBlurFieldBrowser = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>OnBlurFieldBrowser</h1>
    </div>
  );
};

export default memo(OnBlurFieldBrowser);
