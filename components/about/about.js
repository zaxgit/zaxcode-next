import styles from './about.module.scss';
import Wrapper from '../layout/wrapper';
import Image from 'next/image';
import ButtonPrimary from '../buttons/buttonPrimary';
import { HiOutlineDocumentDownload, HiArrowSmDown } from 'react-icons/hi';
import { FaAward, FaCode, FaCheckDouble } from 'react-icons/fa';

export default function About({ author }) {
  return (
    <Wrapper>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutImage}>
          <Image src={author.profile_image} alt='Image of Zach' fill priority />
        </div>
        <div className={styles.aboutContent}>
          <p className={styles.about}>
            <span>As an enthusiastic self-taught programmer</span> with over two
            years of experience, I have honed my skills through various
            resources such as CodeCademy and Udemy. I have a passion for
            continuously expanding my knowledge and have been consistently
            reading technical documentation and solving challenging programming
            problems through independent projects. I am now seeking a dynamic
            and challenging company that can provide opportunities for
            professional growth and where I can contribute to realizing the
            company&apos;s online initiatives.
          </p>
          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <FaAward />
              <h5>Experience</h5>
              <p>3+ years</p>
            </div>
            <div className={styles.infoCard}>
              <FaCheckDouble />
              <h5>Completed</h5>
              <p>4+ projects</p>
            </div>
            <div className={styles.infoCard}>
              <FaCode />
              <h5>Studied</h5>
              <p>7+ languages</p>
            </div>
          </div>
          <div className={styles.actions}>
            <ButtonPrimary>
              <a
                href='./Portfolio_Resume.pdf'
                download='Zach_Walter-Resume.pdf'
              >
                Download cv
              </a>
              <HiOutlineDocumentDownload />
            </ButtonPrimary>
            <button className={styles.scrollBtn}>
              scroll down <HiArrowSmDown />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
