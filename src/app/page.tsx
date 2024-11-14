import Layout from './(components)/layout/Layout';
import HomeIntro from './home/(components)/HomeIntro';
import PaymentProcess from './home/PaymentProcess';
import { SaveOnFees } from './home/SaveOnFees';
import Streamline from './home/Streamline';
import { WhyCarousal } from './home/WhyCarasoul';

const Home = () => {
  return (
    <Layout>
      <div className='w-full sm:w-full md:w-[90%] lg:w-[92%] flex flex-col items-center mx-auto'>
        <HomeIntro />
        <WhyCarousal />
        <Streamline />
        <PaymentProcess />
        <SaveOnFees />
      </div>
    </Layout>
  );
};

export default Home;
