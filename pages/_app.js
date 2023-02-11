import '../styles/main.css';
import { DM_Sans } from '@next/font/google';
const dmsans = DM_Sans({ weight: ['400', '500', '700'], subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={dmsans.className}>
      <Component {...pageProps} />
    </main>
  );
}
