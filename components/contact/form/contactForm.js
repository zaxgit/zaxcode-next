import styles from './contactForm.module.scss';
import { useForm, ValidationError } from '@formspree/react';

import Button from '@/components/buttons/button';
import { FiSend } from 'react-icons/fi';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mpzeppbq');

  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.inputContainer}>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='name'
          className='input'
        />
        <ValidationError prefix='Name' field='name' errors={state.errors} />

        <input
          id='email'
          type='email'
          name='email'
          placeholder='email'
          className='input'
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />

        <textarea
          type='textarea'
          id='message'
          name='message'
          placeholder='message'
          className='textarea'
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
      </div>
      <div className={styles.formActions}>
        <Button
          type='submit'
          className='primary-button-colors'
          isPrimary={true}
        >
          Send Message <FiSend />
        </Button>
      </div>
    </form>
  );
}
