import {
  Code2,
  Zap,
  Activity,
  CheckCircle,
  GitBranch,
  Smartphone,
} from 'lucide-react';

export const SKILLS = [
  {
    name: 'HTML5, CSS3, SCSS',
    icon: Code2,
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'JavaScript (ES6+), TypeScript',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'React, Redux, Redux Toolkit',
    icon: Activity,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Jest, RTL, Vitest',
    icon: CheckCircle,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Gulp, Git',
    icon: GitBranch,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    name: 'Адаптивная верстка',
    icon: Smartphone,
    color: 'from-pink-500 to-rose-500',
  },
];

export const PROJECTS = [
  {
    title: 'What to Watch',
    description:
      'Онлайн кинотеатр с фильтрацией, избранным, авторизацией и защищёнными маршрутами.',
    tech: [
      'TypeScript',
      'React',
      'Redux',
      'React Router',
      'Axios',
      'RTK',
      'Jest',
    ],
    link: 'https://github.com/kabs1234/what-to-watch',
    featured: true,
  },
  {
    title: 'Bouquet',
    description:
      'Магазин букетов. Архитектура на основе MVP, модульная структура, ООП.',
    tech: ['JavaScript (ES6+)', 'MVP', 'OOP'],
    link: 'https://github.com/kabs1234/bouquet',
  },
  {
    title: 'Кексобукинг',
    description:
      'Бронирование транспорта с динамической фильтрацией, картой, и формой заказа.',
    tech: ['JavaScript', 'Leaflet', 'noUiSlider'],
    link: 'https://github.com/kabs1234/booking-vanilla-js',
  },
  {
    title: 'Sedona',
    description:
      'Адаптивный сайт для туристического сервиса. Pixel-perfect вёрстка, mobile-first.',
    tech: ['HTML5', 'CSS3 (Sass)', 'Gulp', 'БЭМ'],
    link: 'https://github.com/kabs1234/sedona',
  },
  {
    title: 'Device',
    description:
      'Магазин электроники. Pixel-perfect вёрстка, интерактивные элементы, адаптив.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://github.com/kabs1234/device',
  },
  {
    title: 'Cryptostar',
    description:
      'Лендинг криптоплатформы. Эффекты, анимации, продуманный UI/UX дизайн.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://github.com/kabs1234/cryptostar',
  },
  {
    title: 'Pink',
    description:
      'Адаптивный сайт для фотосервиса. Макетная вёрстка и интерактивные элементы.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://github.com/kabs1234/pink',
  },
  {
    title: 'Big Trip',
    description:
      'Сервис планирования поездок. SPA с фильтрами, сортировкой, MVP архитектурой.',
    tech: ['JavaScript (ES6+)', 'Webpack', 'Day.js', 'Chart.js'],
    link: 'https://github.com/kabs1234/big-trip',
  },
];
