
import React from 'react';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';
import PullToRefreshIndicator from '@/components/PullToRefreshIndicator';

import { usePullToRefresh } from '@/hooks/usePullToRefresh';
import { SEO, OrganizationSchema } from '@/components/SEO';

const Index: React.FC = () => {
  const handleRefresh = async () => {
    // Simulate refresh - reload the page content
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.location.reload();
  };

  const { isRefreshing, pullDistance } = usePullToRefresh(handleRefresh);

  return (
    <AppProvider>
      <SEO
        title="KCIC Pathway College - Study in India, Graduate Globally"
        description="Save up to ₹40 Lakhs on your UK degree. Study 1-2 years at KCIC India, then transfer to top universities in Finland, UK, or Australia. Pearson Education UK programs."
        keywords="study abroad, UK degree, affordable education, pathway programs, international university, KCIC, Pearson Education"
        url="https://kcic.edu.in/"
      />
      <OrganizationSchema />
      <PullToRefreshIndicator pullDistance={pullDistance} isRefreshing={isRefreshing} />
      <AppLayout />
    </AppProvider>
  );
};

export default Index;


