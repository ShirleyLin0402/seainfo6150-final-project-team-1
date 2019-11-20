import React, { memo, useState, useCallback } from 'react';
import { PrimaryButton } from '../../ui/base/button/button';
import { TextInput } from '../../ui/base/form/text-input/text-input';
import { useNonEmptyTextinputState } from '../../ui/base/form/text-input/use-textinput-state';
import { TitleMedium } from '../../ui/base/typography/typography';
import { ContactServiceClient } from '../../services/contact/contact-client';
import { Page } from '../../ui/base/page-container/page-container';
import styles from './contact.module.css';

const TextField = memo(({ value, onChange, title, error }) => (
  <div className={styles.field}>
    <TitleMedium text={title}/>
    <TextInput
      type="text"
      value={value}
      title={title}
      error={error}
      onChange={onChange}
      placeholder={title}
    />
  </div>
));

export const Contact = () => {
  const [name, onNameChange, isNameError] = useNonEmptyTextinputState('');
  const [email, onEmailChange, isEmailError] = useNonEmptyTextinputState('');
  const [content, onContentChange, isContentError] = useNonEmptyTextinputState('');
  const [startValidating, setStartValidating] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const resetForm = useCallback(() => {
    setSubmitting(false);
    onNameChange({ target: { value: '' }});
    onEmailChange({ target: { value: '' }});
    onContentChange({ target: { value: '' }});
    setStartValidating(false);
  }, [onNameChange, onEmailChange, onContentChange, setStartValidating]);

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    setStartValidating(true);
    if (submitting || isNameError || isEmailError || isContentError) {
      return;
    }
    setSubmitting(true);
    await ContactServiceClient.contact(name, email, content);
    resetForm();
    alert('Content Sent');
  }, [setStartValidating, isNameError, name, isEmailError, email, isContentError, content, submitting, resetForm]);

  return (
    <Page>
      <form onSubmit={onSubmit} className={styles.form}>
        <TextField 
          value={name}
          title="Your name"
          onChange={onNameChange}
          error={startValidating && isNameError}
        />
        <TextField
          value={email}
          title="Email"
          onChange={onEmailChange}
          error={startValidating && isEmailError}
        />
        <TextField
          value={content}
          title="Content"
          onChange={onContentChange}
          error={startValidating && isContentError}
        />
        <div className={styles.button}>
          <PrimaryButton type="submit" disabled={submitting} strentch={true}>
            Submit
          </PrimaryButton>
        </div>
      </form>
    </Page>
  );
}
