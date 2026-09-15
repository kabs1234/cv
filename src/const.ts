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