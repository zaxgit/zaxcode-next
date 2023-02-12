import styles from './projectsList.module.scss';
import Wrapper from '../layout/wrapper';
import ProjectCard from '../cards/projectCard';
import ButtonPrimary from '../buttons/buttonPrimary';
import Link from 'next/link';
import { HiOutlineDocumentText } from 'react-icons/hi';

export default function ProjectsList({ projects, hasButton }) {
  return (
    <Wrapper>
      <h2>projects</h2>
      <div className={styles.listWrapper}>
        {projects.map((project) => {
          return <ProjectCard key={project.uuid} project={project} />;
        })}
      </div>
      {hasButton && (
        <Link href='/projects'>
          <ButtonPrimary>
            View More
            <HiOutlineDocumentText />
          </ButtonPrimary>
        </Link>
      )}
    </Wrapper>
  );
}
