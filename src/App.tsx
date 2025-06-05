import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Github,
  MapPin,
  Send,
  ExternalLink,
  Star,
  Code2,
  GraduationCap,
  Globe,
  Zap,
  Activity,
  CheckCircle,
  GitBranch,
  Smartphone,
} from 'lucide-react';

function App() {
  const projects = [
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

  const skills = [
    {
      name: 'HTML5, CSS3, SCSS',
      experience: 'Опытный',
      icon: Code2,
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'JavaScript (ES6+), TypeScript',
      experience: 'Продвинутый',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: 'React, Redux, Redux Toolkit',
      experience: 'Продвинутый',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'React Testing Library, Jest, Vitest',
      experience: 'Средний',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Gulp, Git',
      experience: 'Опытный',
      icon: GitBranch,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      name: 'Responsive Design',
      experience: 'Опытный',
      icon: Smartphone,
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 animate-pulse"></div>
              <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold text-white">АЖ</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Айхан Жашкеев
              </h1>
              <div className="relative">
                <p className="text-2xl text-gray-600 font-medium">
                  React Front-end Intern
                </p>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <a
                href="mailto:azhashkeev@gmail.com"
                className="group flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 font-medium">
                  azhashkeev@gmail.com
                </span>
              </a>
              <a
                href="https://github.com/kabs1234"
                target="_blank"
                className="group flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-5 h-5 text-gray-800 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 font-medium">kabs1234</span>
              </a>
              <a
                href="https://t.me/aikhan24"
                target="_blank"
                className="group flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Send className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 font-medium">@aikhan24</span>
              </a>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
                <MapPin className="w-5 h-5 text-rose-500" />
                <span className="text-gray-700 font-medium">
                  Караганда, Казахстан
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-20">
        {/* Projects Section */}
        <section className="space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg">
              <Code2 className="w-6 h-6" />
              Проекты
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white text-xs font-bold">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}
                <CardContent className="relative p-6 space-y-4 h-full flex flex-col">
                  <div className="space-y-3 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4">
                    <a href={project.link} target="_blank">
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group/button">
                        <Github className="w-4 h-4 mr-2 group-hover/button:scale-110 transition-transform" />
                        Посмотреть код
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full text-white font-semibold text-lg shadow-lg">
              <Star className="w-6 h-6" />
              Навыки
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {skill.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 bg-gradient-to-r ${skill.color} bg-opacity-10 text-gray-700 rounded-full text-sm font-medium`}
                        >
                          {skill.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education & Languages */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <section className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full text-white font-semibold text-lg shadow-lg">
                <GraduationCap className="w-6 h-6" />
                Образование
              </div>
            </div>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900 text-lg">
                    Карагандинский технический университет им. А. Сагинова
                  </h3>
                  <p className="text-gray-600 font-medium">Бакалавр ИКТ</p>
                  <p className="text-sm text-gray-500">2021 – 2025</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Languages */}
          <section className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full text-white font-semibold text-lg shadow-lg">
                <Globe className="w-6 h-6" />
                Языки
              </div>
            </div>

            <div className="space-y-4">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">КZ</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Казахский</p>
                      <p className="text-sm text-gray-500">Родной</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-3 h-3 bg-green-500 rounded-full"
                      ></div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">EN</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Английский</p>
                      <p className="text-sm text-gray-500">B2</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-3 h-3 bg-blue-500 rounded-full"
                      ></div>
                    ))}
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
