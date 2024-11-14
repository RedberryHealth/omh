export const FooterCard = ({
  title,
  content
}: {
  title: string;
  content: string[];
}) => (
  <div className='flex flex-col w-[168px] items-start gap-5 pl-0 pr-4 pt-0 pb-20 relative'>
    <div
      className="
      font-normal font-['Sora'] 
    font-medium tracking-[0] leading-5 
    whitespace-nowrap relative w-fit 
    mt-[-1.00px] text-contrust-color4 text-base">
      {title}
    </div>
    <div className='pl-0 pr-[123.67px] pt-0 pb-px mr-[-16.00px] flex flex-col w-[168px] items-start gap-5 relative flex-[0_0_auto]'>
      {content.map((item, index) => (
        <div
          key={index}
          className="
          relative w-fit mt-[-1.00px] 
          text-second-background-color3 
          font-normal font-['Roboto']  
          text-sm tracking-[0] 
          leading-5 whitespace-nowrap">
          {item}
        </div>
      ))}
    </div>
  </div>
);
