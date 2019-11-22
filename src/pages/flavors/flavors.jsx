import React, { memo } from 'react';
import { TitleLarge } from '../../ui/base/typography/typography';
import { List } from '../../ui/base/list/list';
import { Page } from '../../ui/base/page-container/page-container';
import { Cake } from './cake/cake';
import styles from './flavors.module.css';
import NavBar from '../../nav/nav-bar';
const flavorsData = require('../../data/flavors.json');

const flavorItems = flavorsData.map(f => ({
  Component: () => (
    <Cake id={f.categoryId} title={f.title} description={f.description} image={f.image}/>
  ),
}));

export const Flavors = memo(() => (
  <Page>
    <TitleLarge text="Cake"/>
    <List items={flavorItems} className={styles.list}/>
    <NavBar />
  </Page>
));
