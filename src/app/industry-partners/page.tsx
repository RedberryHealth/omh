// pages/services/merchant-hub.tsx

import Layout from '@/app/(components)/layout/Layout';
import IndeustryPartnersIntro from './(components)/IndeustryPartnersIntro';
import TrustedPartners from './TrustedPartners';
import IndustriesWeServie from './IndustriesWeServie';
const IndeustryPartners = () => {
  return (
    <Layout>
      <div className='w-full sm:w-full md:w-[90%] lg:w-[92%] flex flex-col items-center mx-auto'>
        <IndeustryPartnersIntro />
        <TrustedPartners />
        <IndustriesWeServie />
      </div>
    </Layout>
  );
};

export default IndeustryPartners;
