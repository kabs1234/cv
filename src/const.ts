export const PROJECTS = [
  {
    id: 'whatToWatch',
    tech: [
      'TypeScript',
      'React',
      'Redux',
      'React Router',
      'Axios',
      'RTK',
      'Jest',
    ],
    github: 'https://github.com/kabs1234/what-to-watch',
    demo: 'https://kabs1234.github.io/what-to-watch/',
    img: './images/cv/what-to-watch.png',
  },
  {
    id: 'bouquet',
    tech: ['JavaScript', 'OOP', 'MVP', 'Webpack'],
    github: 'https://github.com/kabs1234/bouquet',
    demo: 'https://kabs1234.github.io/bouquet',
    img: './images/cv/bouquet.png',
  },
  {
    id: 'bigTrip',
    tech: ['JavaScript (ES6+)', 'Webpack', 'Day.js', 'Chart.js'],
    github: 'https://github.com/kabs1234/big-trip',
    demo: 'https://kabs1234.github.io/big-trip',
    img: './images/cv/big-trip.png',
  },
  {
    id: 'cryptostar',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/kabs1234/cryptostar',
    demo: 'https://kabs1234.github.io/cryptostar',
    img: './images/cv/cryptostar.png',
  },
  {
    id: 'keksobooking',
    tech: ['JavaScript', 'Leaflet', 'noUiSlider'],
    github: 'https://github.com/kabs1234/booking-vanilla-js',
    demo: 'https://kabs1234.github.io/booking-vanilla-js',
    img: './images/cv/vanilla-js.png',
  },
  {
    id: 'sedona',
    tech: ['HTML5', 'CSS3 (Sass)', 'Gulp', 'BEM'],
    github: 'https://github.com/kabs1234/sedona',
    demo: 'https://kabs1234.github.io/sedona',
    img: './images/cv/sedona.png',
  },
  {
    id: 'pink',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/kabs1234/pink',
    demo: 'https://kabs1234.github.io/pink',
    img: './images/cv/pink.png',
  },
  {
    id: 'device',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/kabs1234/device',
    demo: 'https://kabs1234.github.io/device',
    img: './images/cv/device.png',
  },
] as const;

export type Project = (typeof PROJECTS)[number];

export type ProjectId = Project['id'];

export const CONTACTS = [
  {
    id: 'email',
    href: 'mailto:azhashkeev@gmail.com',
    value: 'azhashkeev@gmail.com',
  },
  { id: 'telegram', href: 'https://t.me/aikhan24', value: '@aikhan24' },
  { id: 'github', href: 'https://github.com/kabs1234', value: 'kabs1234' },
  { id: 'phone', href: 'tel:+77079896938', value: '+7 707 989 69 38' },
] as const;

export const ADDRESS_MAP_URL = 'https://www.openstreetmap.org/relation/3386005';

export const FEATURED_PROJECT_IDS: ReadonlyArray<ProjectId> = [
  'whatToWatch',
  'bigTrip',
  'bouquet',
];

export const REPOSITORY_URL = 'https://github.com/kabs1234/cv';

export const CURRENT_YEAR = new Date().getFullYear();

export const PROFICIENCY_SCALE = 5;

export const SPOKEN_LANGUAGES = [
  { id: 'kz', proficiency: 5 },
  { id: 'ru', proficiency: 5 },
  { id: 'en', proficiency: 4 },
] as const;