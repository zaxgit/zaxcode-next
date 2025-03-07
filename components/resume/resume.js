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
                <li className={styles.skill}>T-SQL</li>
                <li className={styles.skill}>PostgreSQL</li>
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
              R3 Dynamics, LLC
              <span>Data Analyst</span>
              <span>2023 - Current</span>
            </h4>
            <ul>
              <li>
                <p>Implement new technologies to automate data processes and reporting</p>      
              </li>
              <li>
                <p>Conducted report building and data transformation using TSQL, PostgreSQL, Power BI, Report Builder, and Intelliget</p>
              </li>
              <li>
                <p>Manage and prioritize multiple requests and projects to ensure timely and efficient delivery</p>
              </li>
              <li>
                <p>
                Led data conversion efforts and implemented data process adaptation strategies
                </p>
              </li>
              <li>
                <p>Collaborated with various departments internally and externally to ensure a smooth system migration</p>
              </li>
            </ul>
          </div>
          <div className={`${styles.section} text-color`}>
            <h4>
              ZaxCode
              <span>Freelance Developer</span>
              <span>2019 - Current</span>
            </h4>
            <ul>
              <li>
                <p>Developed front-ends with Next.js, React, Gatsby, HTML, CSS, and SCSS and vanilla JavaScript. Intergrated with various CMS's such as WordPress and Ghost</p>
              </li>
              <li>
                <p>
                Leveraged data from Supabase and Firebase databases
                </p>
              </li>
              <li>
                <p>Collaborated with developers and designers at Muv Ideas on website redesign implementaion campaigns</p>
              </li>
            </ul>
          </div>
          <div className={`${styles.section} text-color`}>
            <h4>
              STL Vapor
              <span>Sales Representative</span>
              <span>2019 - 2023</span>
            </h4>
            <ul>
              <li>
                <p>Managed inventory levels to ensure the store stocked adequately for sales demand</p>
              </li>
              <li>
                <p>
                Provided exceptional customer service to over 50 customers daily
                </p>
              </li>
              <li>
                <p>
                Spearheaded data aggregation and creation of product listing sheet for submission to regulatory authorities
                </p>
              </li>
            </ul>
          </div>
          <div className={`${styles.section} text-color`}>
            <h4>
              Point Roofing and Restoration
              <span>Sales Representative</span>
              <span>2018 - 2019</span>
            </h4>

            <ul>
              <li>
                <p>
                Generated over a million dollars in business through cold calling, previous customer referrals, and leads
                </p>
              </li>
              <li>
                <p>Utilized attention to detail during home inspections to determine the cause and extent of property damage</p>
              </li>
              <li>
                <p>
                Scheduled and managed multiple concurrent projects
                </p>
              </li>
              <li>
                <p>
                Demonstrated strong communication skills in interacting with various stakeholders to ensure successful project outcomes
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
