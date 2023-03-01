import styles from './contact.module.scss';

import ContactForm from './form/contactForm';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import Button from '../buttons/button';

import { IconArrDotRight } from '../icons/icons';

export default function Contact() {
  return (
    <section>
      <h2 className='text-dark'>contact</h2>
      <div className={styles.contactGrid}>
        <div className={`${styles.contactCol} ${styles.rowTop}`}>
          <a
            href='//www.linkedin.com/in/zaxcode'
            rel='noreferrer'
            target='_blank'
          >
            <div className={styles.contactCard}>
              <AiOutlineLinkedin className='text-dark' />
              <h4 className='text-dark'> LinkedIn</h4>
              <div className={styles.btn}>
                <Button isPrimary={false}>
                  with me
                  <IconArrDotRight />
                </Button>
              </div>
            </div>
          </a>
          <a href='//www.github.com/zaxgit' rel='noreferrer' target='_blank'>
            <div className={styles.contactCard}>
              <AiOutlineGithub className='text-dark' />
              <h4 className='text-dark'>GitHub</h4>
              <div className={styles.btn}>
                <Button isPrimary={false}>
                  with me
                  <IconArrDotRight />
                </Button>
              </div>
            </div>
          </a>
        </div>
        <div className={`${styles.contactCol} ${styles.rowBottom}`}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
