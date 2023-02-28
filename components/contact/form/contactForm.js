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
        <p className={`${styles.status} text-dark`}>Loading...</p>;
      </div>
    );
  }

  if (state.succeeded) {
    return (
      <div className={styles.statusContainer}>
        <p className={`${styles.status} text-dark`}>Thanks for your message!</p>
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
        <div className={`${styles.control} ${errors.name && styles.error}`}>
          <input
            className='input'
            placeholder=' '
            type='text'
            id='name'
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
          <label className='text-color' htmlFor='name'>
            name
          </label>
          <p className='text-color'>{errors.name?.message}</p>
        </div>
        <div className={`${styles.control} ${errors.email && styles.error}`}>
          <input
            className='input'
            placeholder=' '
            id='email'
            type='email'
            {...register('email', {
              required: 'Email must not be blank',
              pattern: {
                value: /^.+@[^\.].*\.[a-z]{2,}$/,
                message: 'Email must be a valid email',
              },
            })}
          />
          <label className='text-color' htmlFor='email'>
            email
          </label>
          <p className='text-color'>{errors.email?.message}</p>
        </div>

        <div className={`${styles.control} ${errors.message && styles.error}`}>
          <textarea
            className='textarea'
            placeholder=' '
            type='textarea'
            id='message'
            {...register('message', {
              required: 'Message can not be blank',
              maxLength: {
                value: 500,
                message: 'Message must be less than 500 characters long',
              },
            })}
          />
          <label className='text-color' htmlFor='message'>
            message
          </label>
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
