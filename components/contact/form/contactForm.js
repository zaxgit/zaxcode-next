import styles from './contactForm.module.scss';

import { useForm as useHookForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';

import Button from '@/components/buttons/button';
import { FiSend } from 'react-icons/fi';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useHookForm();

  const [state, handleFormspree] = useFormspree('mpzeppbq');

  if (state.submitting) {
    return (
      <div className={styles.statusContainer}>
        <p className={styles.status}>Loading...</p>;
      </div>
    );
  }

  if (state.succeeded) {
    return (
      <div className={styles.statusContainer}>
        <p className={styles.status}>Thanks for your message!</p>;
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormspree)}
      className={styles.contactForm}
      noValidate
    >
      <div className={styles.inputContainer}>
        <div className={styles.control}>
          <input
            className={`input ${errors.name && styles.error}`}
            type='text'
            id='name'
            placeholder='name'
            {...register('name', {
              required: 'Name must not be blank',
              minLength: {
                value: 3,
                message: 'Input must be more than 3 characters long',
              },
              pattern: {
                value: /[A-Za-z]/,
                message: 'Name must only include letters',
              },
            })}
          />
          <p className='text-color'>{errors.name?.message}</p>
        </div>
        <div className={styles.control}>
          <input
            className={`input ${errors.email && styles.error}`}
            id='email'
            type='email'
            placeholder='email'
            {...register('email', {
              required: 'Email must not be blank',
              pattern: {
                value: /^.+@[^\.].*\.[a-z]{2,}$/,
                message: 'Email must be a valid email',
              },
            })}
          />
          <p className='text-color'>{errors.email?.message}</p>
        </div>

        <div className={styles.control}>
          <textarea
            className={`textarea ${errors.message && styles.error}`}
            type='textarea'
            id='message'
            placeholder='message'
            {...register('message', {
              required: 'Message can not be blank',
              maxLength: {
                value: 500,
                message: 'Message must be less than 500 characters long',
              },
            })}
          />
          <p className='text-color'>{errors.message?.message}</p>
        </div>
      </div>
      <div className={styles.formActions}>
        <Button
          type='submit'
          className='primary-button-colors'
          isPrimary={true}
          disabled={errors.name || errors.email || errors.message}
        >
          Send Message <FiSend />
        </Button>
      </div>
    </form>
  );
}
