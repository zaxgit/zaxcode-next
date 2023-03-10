import styles from './resume.module.scss';

import { IoSchoolOutline } from 'react-icons/io5';
import { GiSkills } from 'react-icons/gi';
import { MdWorkOutline } from 'react-icons/md';

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
            <div className={styles.skillSection}>
              <h4 className={styles.skillSectionTitle}>Languages</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>HTML 5</li>
                <li className={styles.skill}>CSS 3</li>
                <li className={styles.skill}>SASS/SCSS</li>
                <li className={styles.skill}>JavaScript</li>
                <li className={styles.skill}>SQL</li>
                <li className={styles.skill}>Node</li>
                <li className={styles.skill}>PHP</li>
              </ul>
            </div>
            <div className={styles.skillSection}>
              <h4 className={styles.skillSectionTitle}>Frameworks</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>React</li>
                <li className={styles.skill}>Next</li>
                <li className={styles.skill}>Gatsby</li>
              </ul>
            </div>
            <div className={styles.skillSection}>
              <h4 className={styles.skillSectionTitle}>CMS</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>WordPress</li>
                <li className={styles.skill}>GhostBlog</li>
              </ul>
            </div>
            <div className={styles.skillSection}>
              <h4 className={styles.skillSectionTitle}>Tools</h4>
              <ul className={styles.skills}>
                <li className={styles.skill}>Git</li>
                <li className={styles.skill}>Adobe XD</li>
                <li className={styles.skill}>Figma</li>
                <li className={styles.skill}>Gatsby Cloud</li>
                <li className={styles.skill}>Vercel</li>
                <li className={styles.skill}>Firebase</li>
                <li className={styles.skill}>Supabase</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles.rightCol} ${styles.top}`}>
          <div className={`${styles.resumeSectionHeader} text-dark`}>
            <MdWorkOutline />
            <h4>Experience</h4>
          </div>
          <div className={`${styles.section} text-color`}>
            <h4>
              ZaxCode
              <span>Self Employed</span>
              <span>2019 -</span>
            </h4>
            <ul>
              <li>
                <p>Write clean, readable and scalable code</p>
              </li>
              <li>
                <p>
                  Translate designs into user friendly, responsive websites and
                  applications
                </p>
              </li>
              <li>
                <p>Collaborate with other developers on joint projects</p>
              </li>
            </ul>
          </div>
          <div className={`${styles.section} text-color`}>
            <h4>
              STL Vapor
              <span>Sales Representative</span>
              <span>2019 -</span>
            </h4>
            <ul>
              <li>
                <p>Keyholder and inventory management</p>
              </li>
              <li>
                <p>
                  Collaborate on new products to carry informed by shopper input
                </p>
              </li>
              <li>
                <p>
                  Facilitate great customer experiences for 50+ customers daily
                </p>
              </li>
              <li>
                <p>
                  Spearheaded product listing sheet for submission to the FDA
                </p>
              </li>
            </ul>
          </div>
          <div className={`${styles.section} text-color`}>
            <h4>
              Point Roofing and Restoration
              <span>Sales Representative</span>
              <span>2019 -</span>
            </h4>

            <ul>
              <li>
                <p>
                  Brought in over a million dollars in sales through cold
                  calling, previous customer referrals and leads
                </p>
              </li>
              <li>
                <p>Determine cause and scale of property damage</p>
              </li>
              <li>
                <p>
                  Facilitate communication between customer and claims adjuster
                </p>
              </li>
              <li>
                <p>
                  Schedule projects and maintain connection with homeowners
                  through the build duration
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.rightCol} ${styles.bottom}`}>
          <div className={`${styles.resumeSectionHeader} text-dark`}>
            <IoSchoolOutline />
            <h4>Education</h4>
          </div>
          <div className={`${styles.section} text-color`}>
            <h4>
              Vatterott
              <span>
                Associates in Audio Engineering and Production with Business
              </span>
              <span>2016</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
