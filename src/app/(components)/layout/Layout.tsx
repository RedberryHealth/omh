'use client'; // Ensures the component is rendered as a Client Component
import { Provider } from 'react-redux';
import Footer from './Footer/Footer';
import Navbar from './NavBar/Navbar';
import { store } from '@/redux/store'; // Import the Redux store
import { usePathname, useRouter } from 'next/navigation'; // Import useRouter
import { useEffect } from 'react';
import SideBar from './sidebar-blogs/SideBar';

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter(); // Initialize useRouter for navigation

  useEffect(() => {
    // Scroll to the top whenever the route changes
    if (typeof window !== 'undefined') {
      // Check if window is defined
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Function to handle the button click
  const handleRedirect = () => {
    router.push('/about#book'); // Redirect to the "About" page and scroll to the "book" s
  };

  return (
    <Provider store={store}>
      <div className='bg-main-background-color4 flex flex-row w-full'>
        <div className='bg-main-background-color4 flex flex-col justify-center w-full min-h-screen relative'>
          <Navbar /> {/* No props passed */}
          <main className='flex-grow w-full max-w-[1440px] mx-auto'>
            <SideBar
              slideInTime={250000} // 10 seconds before it slides in
              slideOutTime={500000} // 15 seconds to stay visible
              restTime={250000} // 20 seconds of rest before sliding in again
            />
            {children}
          </main>
          <div className='w-full max-w-[1440px] mx-auto'>
            <Footer />
          </div>
        </div>
      </div>
      <div
        className='fixed bottom-5 right-[6%] 
      z-50 flex 
      w-32 md:w-56 h-[45px] md:h-[65px] items-center justify-center gap-2.5 p-4 bg-main-color rounded-[54px]'>
        <button
          onClick={handleRedirect} // Add the onClick handler
          className="relative w-fit [font-family:'Sora-SemiBold',Helvetica] font-semibold text-colorwhite whitespace-nowrap text-[10px] md:text-sm text-center tracking-[0] leading-[normal]">
          FREE CONSULTATION
        </button>
      </div>
    </Provider>
  );
}
