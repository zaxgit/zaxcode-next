import styles from './projectCard.module.scss';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.cardImage}>
        <Image src={project.feature_image} fill alt='Image of project' />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.projectCardTitle}>{project.title}</h3>
        <div className={styles.tagContainer}>
          {project.tags.map((tag) => {
            if (tag.name !== 'Projects') {
              return (
                <p key={tag.id} className={styles.tag}>
                  {tag.name}
                </p>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
