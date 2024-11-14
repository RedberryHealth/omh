// pages/services/merchant-hub.tsx

import Layout from '@/app/(components)/layout/Layout';
import ServiceIntro from './(components)/ServiceIntro';
import TechnologyAssessors from './TechnologyAssessors';
import { OurServices } from './OurServices';
const Service = () => {
  return (
    <Layout>
      <div className='w-full sm:w-full md:w-[90%] lg:w-[92%] flex flex-col items-center mx-auto'>
        <ServiceIntro />
        <OurServices />
        <TechnologyAssessors />
      </div>
    </Layout>
  );
};

export default Service;
