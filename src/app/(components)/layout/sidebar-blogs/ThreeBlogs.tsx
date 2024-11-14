import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  image: string;
  title: string;
  link: string;
  description: string;
  tags: { text: string; bgColor: string; textColor: string }[];
}

interface ThreeBlogsProps {
  firstBlog: BlogCardProps;
  secondBlog: BlogCardProps;
  thirdBlog: BlogCardProps;
}

export default function ThreeBlogs({
  firstBlog,
  secondBlog,
  thirdBlog
}: ThreeBlogsProps) {
  return (
    // <div className='min-h-[550px] mt-20 md:mt-0 max-w-[1440px] flex flex-col md:flex-row justify-between mx-auto text-[#000] w-full'>
    <div className='min-h-[550px] min-w-1/2 mt-20 md:mt-0 max-w-[1440px] flex flex-col  justify-between mx-auto text-[#000] w-full'>
      {/* First Blog */}
      {/* <div className='p-4 flex flex-col justify-center items-center w-full md:w-1/2'> */}
      <div className='p-4 flex flex-col justify-center items-center w-full'>
        <Link
          href={firstBlog.link}
          // className='p-10 w-full h-[200px] md:h-[300px] rounded-[30px]'
          className='p-10 w-full h-[300px] rounded-[30px]'
          style={{
            backgroundImage: `url(${firstBlog.image})`, // Use inline styles for the background image
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Link
          href={firstBlog.link}
          className='mt-5 w-full flex flex-row justify-between'>
          <p className="w-full [font-family:'Sora-SemiBold',Helvetica] font-semibold text-contrust-color4 text-[22.1px] tracking-[0] leading-[29.5px]">
            {firstBlog.title}
          </p>
          <div className='w-[22px] h-[22px]'>
            <Image
              className='w-[22px] h-[22px]'
              alt='Icon'
              src={'/img/uprightarrow.svg'}
              width={22}
              height={22}
            />
          </div>
        </Link>
        <Link href={firstBlog.link}>
          <p className="mt-5 w-full [font-family:'Roboto-Regular',Helvetica] font-normal text-second-background-color3 text-[14.7px] tracking-[0] leading-[22.1px]">
            {firstBlog.description}
          </p>
        </Link>
        <div className='mt-6 w-full'>
          <div className='flex justify-start space-x-4'>
            {firstBlog.tags.map((tag, tagIndex) => (
              <div
                key={tagIndex}
                className={`whitespace-nowrap px-4 py-2 rounded-full ${tag.bgColor} ${tag.textColor}`}>
                {tag.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Blog */}
      {/* <div className='flex flex-col justify-between items-center w-full md:w-1/2'> */}
      <div className='flex flex-col justify-between items-center w-full'>
        <div className='w-full h-full flex flex-col justify-center items-center my-auto mx-auto text-[#000]'>
          {/* <div className='w-full flex flex-col md:flex-row justify-between mx-auto text-[#000]'> */}
          <div className='w-full flex flex-col justify-between mx-auto text-[#000]'>
            {/* <div className='p-4 flex flex-col justify-center items-center w-full md:w-1/2'> */}
            <div className='p-4 flex flex-col justify-center items-center w-full'>
              <Link
                href={secondBlog.link}
                // className='p-10 w-full h-[200px] rounded-[30px]'
                className='p-10 w-full h-[300px] rounded-[30px]'
                style={{
                  backgroundImage: `url(${secondBlog.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
            {/* <div className='p-4 flex flex-col justify-center items-center w-full md:w-1/2'> */}
            <div className='p-4 flex flex-col justify-center items-center w-full'>
              <p className="w-full [font-family:'Sora-SemiBold',Helvetica] font-semibold text-contrust-color4 text-[22.1px] tracking-[0] leading-[29.5px]">
                <Link href={secondBlog.link}>{secondBlog.title}</Link>
              </p>
              <p className="mt-4 w-full [font-family:'Roboto-Regular',Helvetica] font-normal text-second-background-color3 text-[14.7px] tracking-[0] leading-[22.1px]">
                <Link href={secondBlog.link}>{secondBlog.description}</Link>
              </p>
              <div className='mt-4 w-full'>
                <div className='flex justify-start space-x-4'>
                  {secondBlog.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className={`whitespace-nowrap px-4 py-2 rounded-full ${tag.bgColor} ${tag.textColor}`}>
                      {tag.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Blog */}
        <div className='w-full h-full flex flex-col justify-center items-center my-auto mx-auto text-[#000]'>
          {/* <div className='w-full flex flex-col md:flex-row justify-between mx-auto text-[#000]'> */}
          <div className='w-full flex flex-col justify-between mx-auto text-[#000]'>
            {/* <div className='p-4 flex flex-col justify-center items-center w-full md:w-1/2'> */}
            <div className='p-4 flex flex-col justify-center items-center w-full'>
              <Link
                href={thirdBlog.link}
                // className='p-10 w-full h-[200px] rounded-[30px]'
                className='p-10 w-full h-[300px] rounded-[30px]'
                style={{
                  backgroundImage: `url(${thirdBlog.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
            {/* <div className='p-4 flex flex-col justify-center items-center w-full md:w-1/2'> */}
            <div className='p-4 flex flex-col justify-center items-center w-full'>
              <p className="w-full [font-family:'Sora-SemiBold',Helvetica] font-semibold text-contrust-color4 text-[22.1px] tracking-[0] leading-[29.5px]">
                <Link href={thirdBlog.link}>{thirdBlog.title}</Link>
              </p>
              <Link href={thirdBlog.link}>
                <p className="mt-4 w-full [font-family:'Roboto-Regular',Helvetica] font-normal text-second-background-color3 text-[14.7px] tracking-[0] leading-[22.1px]">
                  {thirdBlog.description}
                </p>
              </Link>
              <div className='mt-4 w-full'>
                <div className='flex justify-start space-x-4'>
                  {thirdBlog.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className={`whitespace-nowrap px-4 py-2 rounded-full ${tag.bgColor} ${tag.textColor}`}>
                      {tag.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
