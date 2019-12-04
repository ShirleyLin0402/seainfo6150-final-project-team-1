import { useParams, Redirect} from "react-router";
import React, { memo, useMemo } from 'react';
import { TitleMedium, TextMedium } from '../../ui/base/typography/typography';
import { Page } from '../../ui/base/page-container/page-container';
import styles from './flavor.module.css';
const flavorParams = require('../../data/flavors.json');

export const FLavorPage = memo(({ title, description, image }) => (
  <Page>
   <div className={styles.img}>
      <img src={image} alt={title}/>
  </div>
    <div className={styles.title}>
      <TitleMedium text={title}/>
    </div>
    <TextMedium text={description}/>
  </Page>
));

export const Flavor = () => {
  const { id } = useParams();
  const flavor = useMemo(() => flavorParams.find(f => f.categoryId === id), [id]);
  if (flavor == null) {
    return <Redirect to="/404"/>
  }
  const { title, description, detailedimage } = flavor;
  return <FLavorPage title={title} description={description} image={detailedimage} />
}
