import styles from './about.module.scss';
import Wrapper from '../layout/wrapper';
import Image from 'next/image';
import Button from '../buttons/button';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { FaAward, FaCode, FaCheckDouble } from 'react-icons/fa';
import { IconArrDotDown } from '../icons/icons';

export default function About({ author, scrollToRef }) {
  return (
    <Wrapper>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutImage}>
          <Image src={author.profile_image} alt='Image of Zach' fill priority />
        </div>
        <div className={styles.aboutContent}>
          <h1 className='text-dark'>
            Zach
            <span className='color-primary'>Walter</span>
          </h1>
          <p className={`${styles.about} text-color`}>
            <span className='color-primary'>
              As an enthusiastic self-taught programmer
            </span>
            with over two years of experience, I have honed my skills through
            various resources such as CodeCademy and Udemy. I have a passion for
            continuously expanding my knowledge and have been consistently
            reading technical documentation and solving challenging programming
            problems through independent projects. I am now seeking a dynamic
            and challenging company that can provide opportunities for
            professional growth and where I can contribute to realizing the
            company&apos;s online initiatives.
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
              <p className='text-color-light'>4+ projects</p>
            </div>
            <div className={styles.infoCard}>
              <FaCode className='text-dark' />
              <h5 className='text-color'>Studied</h5>
              <p className='text-color-light'>7+ languages</p>
            </div>
          </div>
          <div className={styles.actions}>
            <a
              href='./Zachary_Walter-Resume.pdf'
              download='Zachary_Walter-Resume.pdf'
            >
              <Button className='primary-button-colors' isPrimary={true}>
                Download cv
                <HiOutlineDocumentDownload />
              </Button>
            </a>

            <Button
              className='secondary-button-colors'
              isPrimary={false}
              onClick={scrollToRef}
            >
              scroll down
              <IconArrDotDown />
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
