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
          <h2 className={styles.name}>Zach</h2>
          <p>Front End Web Developer.</p>
          <p className={styles.about}>
            I&apos;ve been teaching myself to code for a couple years. I started
            this journey on sites such as CodeCademy and Udemy. Most of my
            recent learning has been through reading documentation and problem
            solving for projects. Seeking to join a company where I can continue
            to cultivate new skills and to help bring their online visions to
            fruition.
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
          <div className={styles.contentSecondary}>
            <p className={styles.synopsis}>
              Web developer, specializing in front end. I&apos;ve created with
              Javscript, React, WordPress and PHP. Familiar with both SQL and
              noSQL data structures.
            </p>
            <div className={styles.actions}>
              <ButtonPrimary>
                Download cv
                <HiOutlineDocumentDownload />
              </ButtonPrimary>
              <button className={styles.scrollBtn}>
                scroll down <HiArrowSmDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
