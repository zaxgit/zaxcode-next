import styles from './about.module.scss';
import Wrapper from '../layout/wrapper';
import Image from 'next/image';
import ButtonPrimary from '../buttons/buttonPrimary';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

export default function About({ author }) {
  return (
    <Wrapper>
      <div className={styles.profileImage}>
        <Image
          src={author.profile_image}
          height={400}
          width={400}
          alt='Image of Zach'
        />
      </div>
      <div>
        <ButtonPrimary>
          View More
          <HiOutlineDocumentDownload />
        </ButtonPrimary>
      </div>
    </Wrapper>
  );
}
