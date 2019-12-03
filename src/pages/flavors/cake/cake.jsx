import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { InternalLink } from '../../../ui/base/link/link';
import { TitleMedium, TextMedium } from '../../../ui/base/typography/typography';
import styles from './cake.module.css';

export const Cake = memo(({ id, title, description, image }) => (
  <section className={styles.section}>
    <div className={styles.img}>
      <img src={image} alt={title} style={{ height: '100%' }}/>
    </div>
    <div className={styles.titleWrap}>
      <TitleMedium text={title} className={styles.title}/>
    </div>
    <div className={styles.link}>
      <InternalLink href={`/flavors/${id}`} title={title}>
        Detail
      </InternalLink>
    </div>
  </section>
));

Cake.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
