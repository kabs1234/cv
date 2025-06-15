import {
  Star,
  Code,
  LayoutTemplate,
  TestTube2,
  Settings,
  Cpu,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Языки',
      gradient: 'from-amber-500 to-orange-500',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Sass/SCSS'],
    },
    {
      icon: LayoutTemplate,
      title: 'Фреймворки и библиотеки',
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['React', 'Redux', 'Redux Toolkit', 'React Router'],
    },
    {
      icon: TestTube2,
      title: 'Тестирование',
      gradient: 'from-green-500 to-emerald-500',
      skills: ['Jest', 'React Testing Library', 'Vitest'],
    },
    {
      icon: Settings,
      title: 'Инструменты разработки',
      gradient: 'from-purple-500 to-fuchsia-500',
      skills: ['Git', 'Gulp', 'Axios', 'Leaflet.js'],
    },
    {
      icon: Cpu,
      title: 'Подходы',
      gradient: 'from-rose-500 to-pink-500',
      skills: [
        'SPA',
        'OOP',
        'MVC/MVP',
        'REST API',
        'Mobile-first',
        'Pixel Perfect',
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg mb-1">
          <Star className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 text-center">Технические навыки</h2>
      </div>

      <div className="space-y-5">
        {skillCategories.map((category, index) => (
          <div key={index} className="group mb-5">
            <div className="flex items-center gap-2 mb-3">
              <div
                className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} shadow-md group-hover:scale-105 transition-transform duration-200`}
              >
                <category.icon className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-medium text-gray-800 text-sm">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1">
              {category.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="secondary"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-2 py-0.5 transition-colors duration-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
