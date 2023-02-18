import Footer from '@/components/layout/footer/footer';
import Nav from '@/components/layout/nav/nav';
import PageContentWrapper from '@/components/layout/pageContentWrapper/pageContentWrapper';
import Resume from '../components/resume/resume';

export default function ResumePage() {
  return (
    <>
      <Nav />
      <PageContentWrapper>
        <Resume />
      </PageContentWrapper>
      <Footer />
    </>
  );
}
