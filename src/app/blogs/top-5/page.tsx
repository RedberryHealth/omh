import Layout from '../../(components)/layout/Layout';

import TopFiveParent from './TopFiveParent';

const HowToReduce = () => {
  return (
    <Layout>
      <div className='w-full sm:w-full md:w-[90%] lg:w-[92%] flex flex-col items-center mx-auto'>
        <TopFiveParent />
      </div>
    </Layout>
  );
};

export default HowToReduce;
