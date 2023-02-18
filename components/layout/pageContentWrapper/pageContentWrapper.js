import styles from './pageContentWrapper.module.scss';

export default function PageContentWrapper({ children }) {
  return <div className={styles.page}>{children}</div>;
}
