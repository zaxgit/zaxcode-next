import styles from './pageWrapper.module.scss';

import Nav from '../nav/nav';
import Footer from '../footer/footer';

export default function PageContentWrapper({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.page}>{children}</div>
      <Footer />
    </>
  );
}
