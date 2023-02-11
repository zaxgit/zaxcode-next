import styles from './contactForm.module.scss';
import { useForm, ValidationError } from '@formspree/react';

import ButtonPrimary from '@/components/buttons/buttonPrimary';
import { FiSend } from 'react-icons/fi';

export default function contactForm() {
  const [state, handleSubmit] = useForm('mpzeppbq');

  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.inputContainer}>
        <input type='text' id='name' placeholder='name' />
        <ValidationError prefix='Name' field='name' errors={state.errors} />

        <input id='email' type='email' name='email' placeholder='email' />
        <ValidationError prefix='Email' field='email' errors={state.errors} />

        <textarea id='message' name='message' placeholder='message' />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
      </div>
      <div className={styles.formActions}>
        <ButtonPrimary type='submit'>
          Send Message <FiSend />
        </ButtonPrimary>
      </div>
    </form>
  );
}
