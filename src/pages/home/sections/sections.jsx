import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { PrimaryButton } from '../../../ui/base/button/button';
import { TitleMedium, TextMedium } from '../../../ui/base/typography/typography';
import { List } from '../../../ui/base/list/list';
import styles from './sections.module.css';
const sectionTexts = require('./section-text.json');

const Section = memo(({ title, description, buttonText }) => (
  <section className={styles.section}>
    <TitleMedium text={title} className={styles.title}/>
    <TextMedium text={description} className={styles.description}/>
    <div className={styles.button}>
      <PrimaryButton type="button">{buttonText}</PrimaryButton>
    </div>
  </section>
));

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
}

const sectionItem = sectionTexts.map(({ title, description, buttonText }) => ({
  Component: () => <Section title={title} description={description} buttonText={buttonText}/>,
  className: styles.sectionWrapper,
}));

export const Sections = memo(() => (
  <List items={sectionItem} className={styles.list}/>
));
