import styles from './about.module.scss';

import Image from 'next/image';
import Button from '../buttons/button';

import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { FaAward, FaCode, FaCheckDouble } from 'react-icons/fa';
import { IconArrDotDown } from '../icons/icons';

export default function About({ author, scrollToRef }) {
  return (
    <section className={styles.aboutGrid}>
      <div className={styles.aboutImage}>
        <Image
          src={author.profile_image}
          alt='Image of Zach'
          fill
          sizes='(max-width: 815px) 90vw,
              45vw'
          priority
        />
      </div>
      <div className={styles.aboutContent}>
        <h1 className='text-dark'>
          Zach
          <span className='color-primary'>Walter</span>
        </h1>
        <p className={`${styles.about} text-color`}>
        A versatile and quick-learning Data Analyst and Developer with a strong ability to adapt to new challenges and rapidly acquire the technical skills required to successfully tackle complex tasks.
        </p>
        <div className={`${styles.infoCards}`}>
          <div className={styles.infoCard}>
            <FaAward className='text-dark' />
            <h5 className='text-color'>Experience</h5>
            <p className='text-color-light'>3+ years</p>
          </div>
          <div className={styles.infoCard}>
            <FaCheckDouble className='text-dark' />
            <h5 className='text-color'>Completed</h5>
            <p className='text-color-light'>5+ projects</p>
          </div>
          <div className={styles.infoCard}>
            <FaCode className='text-dark' />
            <h5 className='text-color'>Studied</h5>
            <p className='text-color-light'>5+ languages</p>
          </div>
        </div>
        <div className={styles.actions}>
          <a
            href='./Zachary_Walter-Resume.pdf'
            download='Zachary_Walter-Resume.pdf'
          >
            <Button isPrimary={true}>
              Download cv
              <HiOutlineDocumentDownload />
            </Button>
          </a>

          <Button isPrimary={false} onClick={scrollToRef}>
            scroll down
            <IconArrDotDown />
          </Button>
        </div>
      </div>
    </section>
  );
}
