import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const GetName = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>GetName</h1>
    </div>
  );
};

export default memo(GetName);
