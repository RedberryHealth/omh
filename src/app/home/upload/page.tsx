import Layout from '@/app/(components)/layout/Layout';
import UploadMerchantStatement from './UploadMerchantStatement ';
const Service = () => {
  return (
    <Layout>
      <div className='w-full sm:w-full md:w-[90%] lg:w-[92%] flex flex-col items-center mx-auto'>
        <UploadMerchantStatement />
      </div>
    </Layout>
  );
};

export default Service;
