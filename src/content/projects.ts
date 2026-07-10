export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  cardColor: string;
  cardSide: 'left' | 'right';
  cardImage: string;
  cardImageAlt: string;
}

export const projects: Project[] = [
  {
    slug: 'bytesize',
    title: 'bytesize',
    description:
      'A mobile app built around methods of digitizing recipes from different formats fast, so users can access or edit them to their liking.',
    tags: ['UI/UX', 'Brand Design'],
    href: '/work/bytesize',
    cardColor: '#abe2da',
    cardSide: 'left',
    cardImage: '/images/home_bytesize_mockup.png',
    cardImageAlt: 'bytesize app mockup showing recipe digitization interface',
  },
  {
    slug: 'ocf',
    title: 'OCF Website Redesign',
    description:
      "A redesign of the Oakville Community Foundation's main website, to promote information clarity and make their mission clear to their audience.",
    tags: ['UI/UX'],
    href: '/work/ocf',
    cardColor: '#ffb88a',
    cardSide: 'right',
    cardImage: '/images/home_ocf_mockup.png',
    cardImageAlt: 'OCF website redesign mockup showing homepage',
  },
  {
    slug: 'nook',
    title: 'Nook',
    description:
      'A social app built to help neurodivergent users stay in contact and set boundaries easily, so meaningful connections can stay alive without stress.',
    tags: ['UI/UX', 'Product'],
    href: '/work/nook',
    cardColor: '#ffddeb',
    cardSide: 'left',
    cardImage: '/images/home_nook_mockup.png',
    cardImageAlt: 'Nook app mockups showing social widget interface',
  },
];
