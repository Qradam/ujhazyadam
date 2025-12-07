export interface Project {
  slug: string;
  title: string;
  subtext: string;
  mainImage: string;
  additionalImages: string[];
  category: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    slug: 'vancouver',
    title: 'UI/UX - Vancouver Impact',
    subtext: 'Esports team website design.',
    mainImage: 'vancouver.webp',
    additionalImages: ['vancouver2.webp'],
    category: ['Esports', 'UI/UX - Web'],
  },
  {
    slug: 'divernex',
    title: 'Esports - Divernex',
    subtext: 'Gaming team branding and social media content.',
    mainImage: 'divernex.webp',
    additionalImages: ['dvx1.webp', 'dvx2.webp', 'dvx3.webp'],
    category: ['Esports', 'Socials'],
  },
  {
    slug: 'ember',
    title: 'Socials - Ember',
    subtext: 'Esports team banner design.',
    mainImage: 'ember.webp',
    additionalImages: ['ember2.webp'],
    category: ['Esports', 'Socials'],
  },
  {
    slug: 'wylde',
    title: 'Esports - Wylde',
    subtext: 'Esports team promotional materials.',
    mainImage: 'wylde.webp',
    additionalImages: ['wylde1.webp', 'wylde2.webp'],
    category: ['Esports', 'Socials'],
  },
  {
    slug: 'espseke',
    title: 'Esports - Espseke',
    subtext: 'Esports logo and jersey design',
    mainImage: 'espseke.webp',
    additionalImages: ['espeke1.webp', 'espseke2.webp'],
    category: ['Esports', 'Socials'],
  },
  {
    slug: 'other',
    title: 'Esports - Other',
    subtext: 'Various esports and gaming related designs.',
    mainImage: 'other.webp',
    additionalImages: ['other1.webp'],
    category: ['Esports', 'Socials'],
  },
  /*
  {
    slug: 'socials',
    title: 'Socials - Social media posts',
    subtext: 'Social media content and digital marketing materials.',
    mainImage: 'socials.webp',
    additionalImages: ['socials1.webp', 'socials2.webp'],
    category: ['Socials'],
  },
  {
    slug: 'tent-logo',
    title: 'Logo - Commercial tent company',
    subtext: 'Clean and professional logo design.',
    mainImage: 'tent.webp',
    additionalImages: ['tent1.webp'],
    category: ['Logos'],
  },
  {
    slug: 'hiring-company-logo',
    title: 'Logo - Hiring company',
    subtext: 'Modern logo for recruitment business.',
    mainImage: 'hiring.webp',
    additionalImages: ['hiring1.webp'],
    category: ['Logos'],
  },
  {
    slug: 'fence-logo',
    title: "Logo - Fence company",
    subtext: 'Simple and memorable brand identity.',
    mainImage: 'fence.webp',
    additionalImages: ['fence1.webp', 'fence2.webp'],
    category: ['Logos'],
  },
  {
    slug: 'tech-logo',
    title: 'Logo - Tech company',
    subtext: 'Professional logo for software development company.',
    mainImage: 'tech.webp',
    additionalImages: ['tech1.webp'],
    category: ['Logos'],
  },
  {
    slug: 'tech-school-logo',
    title: 'Logo - Tech school',
    subtext: 'Educational institution branding.',
    mainImage: 'tech-school.webp',
    additionalImages: ['tech-school1.webp'],
    category: ['Logos'],
  },
  {
    slug: 'tech-school-alt-logo',
    title: 'Logo - Tech school alternative',
    subtext: 'Alternative design for tech education brand.',
    mainImage: 'tech-schoolalt.webp',
    additionalImages: ['tech-schoolalt1.webp'],
    category: ['Logos'],
  },
  {
    slug: 'electronics-logo',
    title: 'Logo - Electronics Lab',
    subtext: 'Technical and scientific laboratory branding.',
    mainImage: 'electronics.webp',
    additionalImages: [],
    category: ['Logos'],
  },
  {
    slug: 'school-website',
    title: 'UI/UX - School website',
    subtext: 'User-friendly educational website design.',
    mainImage: 'school.webp',
    additionalImages: ['school1.webp'],
    category: ['UI/UX - Web'],
  },
  {
    slug: 'minecraft-website',
    title: 'Web - Minecraft website',
    subtext: 'Gaming community website with modern interface.',
    mainImage: 'minecraft.webp',
    additionalImages: [],
    category: ['UI/UX - Web'],
    link: 'https://powacraft.eu ',
  },
  {
    slug: 'voxel-website',
    title: 'Web - Voxel game',
    subtext: '3D voxel roguelike',
    mainImage: 'voxel.webp',
    additionalImages: [],
    category: ['UI/UX - Web'],
    link: 'https://ruined.pages.dev ',
  },
  {
    slug: 'book-covers',
    title: 'Press - Book covers',
    subtext: 'Creative book cover designs for publishing.',
    mainImage: 'covers.webp',
    additionalImages: ['covers1.webp', 'covers2.webp'],
    category: ['Press'],
  },
  {
    slug: 'children-books',
    title: 'Press - Children books',
    subtext: 'Colorful and engaging children\'s book illustrations.',
    mainImage: 'child.webp',
    additionalImages: [],
    category: ['Press'],
  },
  */
];
