import React, { useState, useCallback } from 'react';
import { SecondaryButton } from '../../../ui/base/button/button';
import { TextInput } from '../../../ui/base/form/text-input/text-input';
import { useNonEmptyTextinputState } from '../../../ui/base/form/text-input/use-textinput-state';
import { NewsLetterServiceClient } from '../../../services/newsletter/newsletter-client';
import styles from './newsletter-form.module.css';

export const NewsLetterForm = () => {
  const [email, onEmailChange, isEmailError] = useNonEmptyTextinputState("");
  const [submitting, setSubmitting] = useState(false);
  const [startValidating, setStartValidating] = useState(false);

  const resetForm = useCallback(() => {
    setSubmitting(false);
    onEmailChange({ target: { value: '' }});
    setStartValidating(false);
  }, [setSubmitting, onEmailChange, setStartValidating]);

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    setStartValidating(true);
    if (isEmailError || submitting) {
      return;
    };
    setSubmitting(true);
    await NewsLetterServiceClient.subscribe(email)
    resetForm()
    alert('You have subscribed to our news letter');
  }, [email, isEmailError, submitting, resetForm]);

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.input}>
        <TextInput
          type="text"
          value={email}
          title="email"
          placeholder="sign up for newsletter!"
          onChange={onEmailChange}
          error={startValidating && isEmailError}
        />
      </div>

      <div>
        <SecondaryButton type="submit" disabled={submitting}>
          Sign Up
        </SecondaryButton>
      </div>
    </form>
  )
};
