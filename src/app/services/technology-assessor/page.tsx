// pages/services/merchant-hub.tsx

import Layout from '@/app/(components)/layout/Layout';
import TechnologyAssessor from './TechnologyAssessor';

const Service = () => {
  return (
    <Layout>
      <div className='w-full sm:w-full md:w-[90%] lg:w-[100%] flex flex-col items-center mx-auto'>
        <TechnologyAssessor />
      </div>
    </Layout>
  );
};

export default Service;
