import styles from './contact.module.scss';

import Wrapper from '../layout/wrapper';
import ContactForm from './form/contactForm';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { HiArrowSmRight } from 'react-icons/hi';
import Button from '../buttons/button';

export default function Contact() {
  return (
    <Wrapper>
      <h2>contact</h2>
      <div className={styles.contactGrid}>
        <div className={`${styles.contactCol} ${styles.rowTop}`}>
          <div className={styles.contactCard}>
            <AiOutlineLinkedin />
            <h4>LinkedIn</h4>
            <p>www.linkedin.com/in/zaxcode</p>
            <div className={styles.btn}>
              <a
                href='//www.linkedin.com/in/zaxcode'
                rel='noreferrer'
                target='_blank'
              >
                <Button className='secondary'>
                  with me <HiArrowSmRight />
                </Button>
              </a>
            </div>
          </div>
          <div className={styles.contactCard}>
            <AiOutlineGithub />
            <h4>GitHub</h4>
            <p>www.github.com/zaxgit</p>
            <div className={styles.btn}>
              <a
                href='//www.github.com/zaxgit'
                rel='noreferrer'
                target='_blank'
              >
                <Button className='secondary'>
                  with me <HiArrowSmRight />
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.contactCol} ${styles.rowBottom}`}>
          <ContactForm />
        </div>
      </div>
    </Wrapper>
  );
}
