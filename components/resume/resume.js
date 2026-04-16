import styles from './resume.module.scss';

import { IoSchoolOutline } from 'react-icons/io5';
import { GiSkills } from 'react-icons/gi';
import { MdWorkOutline } from 'react-icons/md';

import { skills, experience, education } from './resumeData';

function SkillGroup({ category, items }) {
  return (
    <div className={styles.skillSection}>
      <h4 className={styles.skillSectionTitle}>{category}</h4>
      <ul className={styles.skills}>
        {items.map((item) => (
          <li key={item} className={styles.skill}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceEntry({ title, company, dates, promotion, bullets }) {
  return (
    <div className={`${styles.section} text-color`}>
      <div className={styles.entryHeader}>
        <h4>{title}</h4>
        <p className={styles.jobMeta}>{company} &nbsp;·&nbsp; {dates}</p>
      </div>
      {promotion && <p className={styles.promotion}>{promotion}</p>}
      <ul>
        {bullets.map((bullet, i) => (
          <li key={i}><p>{bullet}</p></li>
        ))}
      </ul>
    </div>
  );
}

function EducationEntry({ degree, school, date, honors, link }) {
  return (
    <div className={`${styles.section} text-color`}>
      <div className={styles.entryHeader}>
        <h4>{school}</h4>
        <p className={styles.jobMeta}>{degree}{date && ` · ${date}`}</p>
      </div>
      {honors && <p className={styles.jobMeta}>{honors}</p>}
      {link && (
        <a href={link} target='_blank' rel='noopener noreferrer' className={styles.certLink}>
          View Certificate
        </a>
      )}
    </div>
  );
}

export default function Resume({ scrollRef }) {
  return (
    <section>
      <h2 className='text-dark' ref={scrollRef}>
        resume
      </h2>
      <div className={styles.resumeContainer}>
        <div className={styles.leftCol}>
          <div className={`${styles.resumeSectionHeader} text-dark`}>
            <GiSkills />
            <h4>Skills</h4>
          </div>
          <div className={`${styles.skillSectionGrid} text-color`}>
            {skills.map((group) => (
              <SkillGroup key={group.category} {...group} />
            ))}
          </div>
        </div>

        <div className={`${styles.rightCol} ${styles.top}`}>
          <div className={`${styles.resumeSectionHeader} text-dark`}>
            <MdWorkOutline />
            <h4>Experience</h4>
          </div>
          {experience.map((job) => (
            <ExperienceEntry key={job.company} {...job} />
          ))}
        </div>

        <div className={`${styles.rightCol} ${styles.bottom}`}>
          <div className={`${styles.resumeSectionHeader} text-dark`}>
            <IoSchoolOutline />
            <h4>Education</h4>
          </div>
          {education.map((entry) => (
            <EducationEntry key={entry.school} {...entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
