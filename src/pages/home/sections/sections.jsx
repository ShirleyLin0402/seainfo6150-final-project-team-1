import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { PrimaryButton } from '../../../ui/base/button/button';
import { TitleMedium, TextMedium } from '../../../ui/base/typography/typography';
import { List } from '../../../ui/base/list/list';
import { InternalLink } from '../../../ui/base/link/link';
import styles from './sections.module.css';
const sectionTexts = require('./section-text.json');

const Section = memo(({ title, description,buttonText, id }) => (
  <section className={styles.section}>
    <TitleMedium text={title} className={styles.title}/>
    <TextMedium text={description} className={styles.description}/>
    <div className={styles.link}>
      <InternalLink href={`/section-text/${id}`} title={title}>
      {buttonText}
      </InternalLink>
      </div>

  </section>
));


Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

const sectionItem = sectionTexts.map(({ title, description, buttonText, id}) => ({
  Component: () => <Section title={title} description={description} buttonText={buttonText} id={id}/>,
  className: styles.sectionWrapper,
}));

export const Sections = memo(() => (
  <List items={sectionItem} className={styles.list} />

));
