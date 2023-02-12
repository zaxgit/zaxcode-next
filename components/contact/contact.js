import styles from './contact.module.scss';

import Wrapper from '../layout/wrapper';
import ContactForm from './form/contactForm';
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineGithub,
} from 'react-icons/ai';
import { HiArrowSmRight } from 'react-icons/hi';
import ButtonSecondary from '../buttons/buttonSecondary';
import Link from 'next/link';
export default function Contact() {
  return (
    <Wrapper>
      <h2>contact</h2>
      <div className={styles.contactGrid}>
        <div className={`${styles.contactCol} ${styles.rowTop}`}>
          {/* <div className={styles.contactCard}>
            <AiOutlineMail />
            <h4>Email</h4>
            <p>zwalter@zaxcode.dev</p>
            <div className={styles.btn}>
              <a href='mailto:zwalter@zaxcode.dev?subject=I would like to offer you a job!&body=You are Hired!'>
              <ButtonSecondary>
                with me <HiArrowSmRight />
              </ButtonSecondary>
              </a>
            </div>
          </div> */}
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
                <ButtonSecondary>
                  with me <HiArrowSmRight />
                </ButtonSecondary>
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
                <ButtonSecondary>
                  with me <HiArrowSmRight />
                </ButtonSecondary>
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
