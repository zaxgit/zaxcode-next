import styles from './projectCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../buttons/button';
import { IconArrDotLeft } from '../icons/icons';
import LikeButton from '../buttons/likeButton';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.cardImage}>
        <Image src={project.feature_image} fill alt='Image of project' />
      </div>

      <div className={styles.cardContent}>
        <h3 className={`${styles.projectCardTitle} text-dark`}>
          {project.title}
        </h3>
        <div className={styles.tagContainer}>
          {project.tags.map((tag) => {
            if (
              tag.name !== 'Projects' &&
              tag.name.toLowerCase() !== project.slug.toLowerCase()
            ) {
              return (
                <p key={tag.id} className={`${styles.tag} color-primary`}>
                  {tag.name}
                </p>
              );
            }
          })}
        </div>
        <div className={styles.cardActions}>
          <Link href={`/projects/${project.slug}`}>
            <Button isPrimary={false} className='secondary-button-colors'>
              read more
              <IconArrDotLeft />
            </Button>
          </Link>
          <LikeButton postId={project.uuid} />
        </div>
      </div>
    </div>
  );
}
