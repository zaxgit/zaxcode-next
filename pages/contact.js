import Nav from '@/components/layout/nav/nav';
import Footer from '@/components/layout/footer/footer';

import Contact from '@/components/contact/contact';
import PageContentWrapper from '@/components/layout/pageContentWrapper/pageContentWrapper';

export default function ContactPage() {
  return (
    <>
      <Nav />
      <PageContentWrapper>
        <Contact />
      </PageContentWrapper>
      <Footer />
    </>
  );
}
