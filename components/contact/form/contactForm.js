import styles from './contactForm.module.scss';
import ButtonPrimary from '@/components/buttons/buttonPrimary';
import { FiSend } from 'react-icons/fi';

export default function contactForm() {
  return (
    <form className={styles.contactForm}>
      <div className={styles.inputContainer}>
        <input type='text' placeHolder='name' />
        <input type='email' placeHolder='email' />
        <input type='text' placeholder='message'></input>
      </div>
      <div className={styles.formActions}>
        <ButtonPrimary>
          Send Message <FiSend />
        </ButtonPrimary>
      </div>
    </form>
  );
}
