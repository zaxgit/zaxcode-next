import styles from './projectsList.module.scss';

import { useState } from 'react';

import Dropdown from '../dropdown/dropdown';
import ProjectCard from '../cards/projectCard';
import Button from '../buttons/button';
import Link from 'next/link';

import { HiOutlineDocumentText } from 'react-icons/hi';

export default function ProjectsList({
  title,
  projects,
  tags,
  hasButton,
  hasDropdown,
}) {
  const [filter, setFilter] = useState('All');

  if (Array.isArray(projects) && projects.length > 0) {
    return (
      <section>
        <div className={styles.listHeader}>
          <h2 className='text-dark'>{title}</h2>
          {hasDropdown && (
            <Dropdown tags={tags} filter={filter} setFilter={setFilter} />
          )}
        </div>
        <div className={styles.listWrapper}>
          {!filter || filter === 'All'
            ? projects.map((project) => {
                return <ProjectCard key={project.uuid} project={project} />;
              })
            : projects
                .filter((project) =>
                  project.tags.some((tag) => tag.name === filter)
                )
                .map((project) => {
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
      </section>
    );
  }

  return (
    <section>
      <h2 className='text-dark'>Error</h2>
      <p className='text-dark'>No Posts found</p>
    </section>
  );
}
