import { MdRestaurantMenu } from 'react-icons/md';
import { SiCodechef } from 'react-icons/si';
import { AiOutlinePhone } from 'react-icons/ai';
import { RiGalleryFill } from 'react-icons/ri';
const sublinks = [
  {
    page: 'menu',
    links: [
      { label: 'menu', url: '/products', icon: <MdRestaurantMenu />},
    ],
  },
  {
    page: 'restaurant',
    links: [
      { label: 'about', url: '/about', icon: <SiCodechef /> },
      { label: 'gallery', url: '/gallery', icon: <RiGalleryFill /> },
      { label: 'contact', url: '/contact', icon: <AiOutlinePhone /> },
    ],
  },
];

export default sublinks;