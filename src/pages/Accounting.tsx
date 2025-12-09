import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import AccountingHeroSection from '@/components/accounting/AccountingHeroSection';
import AccountingModulesSection from '@/components/accounting/AccountingModulesSection';
import AccountingCareerSection from '@/components/accounting/AccountingCareerSection';
import AccountingSuccessStorySection from '@/components/accounting/AccountingSuccessStorySection';
import { AccountingRequirementsSection, AccountingWhyKCICSection, AccountingFAQSection } from '@/components/accounting/AccountingRemainingComponents';
import RelatedProgramsSection from '@/components/RelatedProgramsSection';

export default function Accounting() {
  useEffect(() => {
    document.title = 'BA (Hons) Professional Accounting with ACCA | KCIC Pathway';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <PageBreadcrumb 
          items={[
            { label: 'Programs', href: '/programs' },
            { label: 'Accounting & Finance' }
          ]} 
        />
        <AccountingHeroSection />
        <AccountingModulesSection />
        <AccountingCareerSection />
        <AccountingSuccessStorySection />
        <AccountingRequirementsSection />
        <AccountingWhyKCICSection />
        <AccountingFAQSection />
        <RelatedProgramsSection 
          category="business" 
          currentSlug="bsc-hons-accounting-finance-acca"
          title="Other Business Programs"
        />
      </main>
      <Footer />
    </>
  );
}
