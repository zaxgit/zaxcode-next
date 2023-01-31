import '../styles/styles.global.css';
import { DM_Sans } from '@next/font/google';
const dmsans = DM_Sans({ weight: ['400', '500', '700'], subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={dmsans.className}>
      {/* <style jsx global>{`
        html {
          font-family: ${dmsans.style.fontFamily};
        }
      `}</style> */}
      <Component {...pageProps} />
    </main>
  );
}
