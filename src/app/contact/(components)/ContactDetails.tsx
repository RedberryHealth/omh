import React from 'react';

// Define the props for ContactDetails to accept the arrays from the parent
interface ContactDetailsProps {
  contactMethods: ContactMethodProps[]; // Array of contact methods
  socialLinks: { icon: React.ReactNode; link: string }[]; // Array of social media links
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  contactMethods,
  socialLinks
}) => {
  return (
    <div className='ml-20 flex flex-col w-[90%] items-start sm:items-center md:items-start lg:items-start gap-[140px] relative border-r-[6px] border-gray-300'>
      <div className='flex flex-col w-full sm:w-[576px] items-start sm:items-center md:items-start h-[auto] gap-12 relative'>
        {/* Contact Methods */}
        <div className='flex flex-col items-start gap-6 relative flex-wrap '>
          {contactMethods.map((method, index) => (
            <ContactMethod
              key={index}
              icon={method.icon}
              title={method.title}
              description={method.description}
              contactInfo={method.contactInfo}
            />
          ))}
        </div>
      </div>
      {/* Social Icons */}
      <div className='w-full flex items-start justify-start gap-[32.59px]'>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target='_blank'
            rel='noopener noreferrer'>
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
export interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  contactInfo: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({
  icon,
  title,
  description,
  contactInfo
}) => (
  <div className='flex flex-col items-start gap-2 '>
    <div className='sm:self-stretch font-sora font-semibold text-main-color text-xl'>
      {icon}
    </div>
    <div className='sm:self-stretch font-sora font-semibold text-contrust-color4 text-xl'>
      {title}
    </div>
    <p className='self-stretch font-Roboto font-normal text-second-background-color3 text-base '>
      {description}
    </p>

    <button className="[font-family:'Roboto',Helvetica] font-medium text-second-background-color3 text-sm  whitespace-nowrap">
      {contactInfo}
    </button>
  </div>
);
