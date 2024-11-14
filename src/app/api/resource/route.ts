import { NextResponse } from 'next/server';

const resourcesData = [
  {
    title: 'Resource Place Holder 1',
    description:
      'Odin Merchant Resource Place Holder 1 Resource Place Holder 1 Resource',
    href: '/resources/placeholder1',
    top: '136px',
    left: '9px'
  }
  // {
  //   title: 'Resource Place Holder 2',
  //   description:
  //     'Resource Place Holder 2 Resource Place Holder 2 Resource Place Holder 2',
  //   href: '/resources/placeholder1',
  //   top: '59px',
  //   left: '387px'
  // },
  // {
  //   title: 'Resource Place Holder 3',
  //   description:
  //     'Resource Place Holder 3 Resource Place Holder 3 Resource Place Holder 3',
  //   href: '/resources/placeholder1',
  //   top: '59px',
  //   left: '9px'
  // },
  // {
  //   title: 'Resource Place Holder 4',
  //   description:
  //     'Resource Place Holder 4 Resource Place Holder 4 Resource Place Holder 4',
  //   href: '/resources/placeholder1',
  //   top: '144px',
  //   left: '387px'
  // },
  // {
  //   title: 'Resource Place Holder 5',
  //   description:
  //     'Resource Place Holder 5 Resource Place Holder 5 Resource Place Holder 5 Resource Place Holder 5',
  //   href: '/resources/placeholder1',
  //   top: '229px',
  //   left: '9px'
  // }
];

export async function GET() {
  return NextResponse.json(resourcesData);
}
