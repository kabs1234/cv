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
    img: '/images/cv/what-to-watch.png',
    bullets: [
      'Задача: разработать SPA с авторизацией и фильтрацией',
      'Реализация: React, Redux, RTK, тесты на Jest',
      'Результат: быстрый и удобный онлайн-кинотеатр',
    ],
  },
  {
    title: 'Bouquet',
    tech: ['JavaScript', 'ООП', 'MVP', 'Webpack'],
    github: 'https://github.com/kabs1234/bouquet',
    demo: 'https://kabs1234.github.io/bouquet',
    img: '/images/cv/bouquet.png',
    bullets: [
      'Задача: интернет-магазин с MVP-архитектурой',
      'Реализация: модульная структура, ООП',
      'Результат: быстрая и поддерживаемая платформа',
    ],
  },
  {
    title: 'Big Trip',
    tech: ['JavaScript (ES6+)', 'Webpack', 'Day.js', 'Chart.js'],
    github: 'https://github.com/kabs1234/big-trip',
    demo: 'https://kabs1234.github.io/big-trip',
    img: '/images/cv/big-trip.png',
    bullets: [
      'Задача: сервис планирования поездок',
      'Реализация: SPA, фильтры, сортировка',
      'Результат: оптимизация планирования путешествий',
    ],
  },
  {
    title: 'Cryptostar',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/kabs1234/cryptostar',
    demo: 'https://kabs1234.github.io/cryptostar',
    img: '/images/cv/cryptostar.png',
    bullets: [
      'Задача: лендинг криптоплатформы',
      'Реализация: анимации, продуманный дизайн',
      'Результат: привлечение новых пользователей',
    ],
  },
  {
    title: 'Кексобукинг',
    tech: ['JavaScript', 'Leaflet', 'noUiSlider'],
    github: 'https://github.com/kabs1234/booking-vanilla-js',
    demo: 'https://kabs1234.github.io/booking-vanilla-js',
    img: '/images/cv/vanilla-js.png',
    bullets: [
      'Задача: сервис бронирования транспорта',
      'Реализация: динамическая фильтрация, интеграция карты',
      'Результат: удобный поиск и заказ',
    ],
  },
  {
    title: 'Sedona',
    tech: ['HTML5', 'CSS3 (Sass)', 'Gulp', 'БЭМ'],
    github: 'https://github.com/kabs1234/sedona',
    demo: 'https://kabs1234.github.io/sedona',
    img: '/images/cv/sedona.png',
    bullets: [
      'Задача: pixel-perfect сайт для турсервиса',
      'Реализация: mobile-first, адаптив, Sass',
      'Результат: современный UI для разных устройств',
    ],
  },
  {
    title: 'Pink',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/kabs1234/pink',
    demo: 'https://kabs1234.github.io/pink',
    img: '/images/cv/pink.png',
    bullets: [
      'Задача: сайт фотосервиса',
      'Реализация: макетная верстка, интерактив',
      'Результат: удобный сервис для фотографов',
    ],
  },
  {
    title: 'Device',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/kabs1234/device',
    demo: 'https://kabs1234.github.io/device',
    img: '/images/cv/device.png',
    bullets: [
      'Задача: интернет-магазин электроники',
      'Реализация: интерактивные элементы, адаптив',
      'Результат: готовая верстка страницы',
    ],
  },
];
