import { Element } from '@components/right-panel';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {
  data: Element;
  key: number | string;
}

const NavElement = ({ data }: IProps) => {
  const { label, link = null, children = null } = data;
  return (
    <div className={styles.root}>
      {link ? (
        <Link className={styles.link} activeClassName={styles.activeLink} to={link}>
          {label}
        </Link>
      ) : (
        <div className={styles.link}>{label}</div>
      )}
      {children && children.map((item) => <NavElement data={item} key={item.id} />)}
    </div>
  );
};

export default memo(NavElement);
