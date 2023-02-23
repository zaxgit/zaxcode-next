import styles from './projectsList.module.scss';
import Wrapper from '../layout/wrapper';
import ProjectCard from '../cards/projectCard';
import Button from '../buttons/button';
import Link from 'next/link';
import { HiOutlineDocumentText } from 'react-icons/hi';

export default function ProjectsList({ title, projects, hasButton }) {
  if (Array.isArray(projects) && projects.length > 0) {
    return (
      <Wrapper>
        <h2 className='text-dark'>{title}</h2>
        <div className={styles.listWrapper}>
          {projects.map((project) => {
            return <ProjectCard key={project.uuid} project={project} />;
          })}
        </div>
        {hasButton && (
          <Link href='/projects' className={styles.float}>
            <Button className='primary-button-colors' isPrimary={true}>
              View More
              <HiOutlineDocumentText />
            </Button>
          </Link>
        )}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2 className='text-dark'>Error</h2>
      <p className='text-dark'>No Posts found</p>
    </Wrapper>
  );
}
