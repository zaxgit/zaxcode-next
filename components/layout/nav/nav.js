import styles from './nav.module.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Hamburger from './hamburger';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggler from '@/components/layout/nav/themeToggler/themeToggle';

export default function Nav() {
  const { isBreakpoint } = useMediaQuery(768);

  return (
    <div className={styles.navContainer}>
      <div className={styles.navInner}>
        <Link href='/' className={styles.brand}>
          <Image src='/Z..svg' height={30} width={35} alt='ZaxCode Logo' />
          <h3 className={`${styles.navTitle} text-dark`}>
            zax<span className='color-primary'>Code</span>
          </h3>
        </Link>

        <nav className={styles.nav}>
          {isBreakpoint ? (
            <>
              <Hamburger />
              <ThemeToggler />
            </>
          ) : (
            <>
              <ul className='text-dark'>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/projects'>Projects</Link>
                </li>
                <li>
                  <Link href='/blog'>Blog</Link>
                </li>
                <li>
                  <Link href='/resume'>Resume</Link>
                </li>
                <li>
                  <Link href='/contact'>Contact</Link>
                </li>
              </ul>
              <ThemeToggler />
            </>
          )}
        </nav>
      </div>
    </div>
  );
}
