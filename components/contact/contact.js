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
          <div className={styles.contactCard}>
            <AiOutlineLinkedin className='text-dark' />
            <h4 className='text-dark'> LinkedIn</h4>
            <div className={styles.btn}>
              <a
                href='//www.linkedin.com/in/zaxcode'
                rel='noreferrer'
                target='_blank'
              >
                <Button isPrimary={false}>
                  with me
                  <IconArrDotRight />
                </Button>
              </a>
            </div>
          </div>
          <div className={styles.contactCard}>
            <AiOutlineGithub className='text-dark' />
            <h4 className='text-dark'>GitHub</h4>
            <div className={styles.btn}>
              <a
                href='//www.github.com/zaxgit'
                rel='noreferrer'
                target='_blank'
              >
                <Button isPrimary={false}>
                  with me
                  <IconArrDotRight />
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.contactCol} ${styles.rowBottom}`}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
