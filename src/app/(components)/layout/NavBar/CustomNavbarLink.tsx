// components/NavLink.tsx

import Link from 'next/link';

type NavLinkProps = {
  href: string;
  text: string;
  isActive: boolean;
};

export const CustomNavLink = ({ href, text, isActive }: NavLinkProps) => {
  return (
    <li className='px-4'>
      <Link
        href={href}
        className={`text-base ${
          isActive ? 'text-main-color' : 'text-contrust-color4'
        }`}>
        {text}
      </Link>
    </li>
  );
};
