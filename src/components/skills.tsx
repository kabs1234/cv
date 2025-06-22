import {
  Star,
  Code,
  LayoutTemplate,
  TestTube2,
  Settings,
  Cpu,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();
  const skillCategories = [
    {
      icon: Code,
      title: t('skills.categories.0'),
      gradient: 'from-amber-500 to-orange-500',
      skills: [t('skills.0'), t('skills.1'), t('skills.2'), t('skills.3'), t('skills.4')],
    },
    {
      icon: LayoutTemplate,
      title: t('skills.categories.1'),
      gradient: 'from-blue-500 to-cyan-500',
      skills: [t('skills.5'), t('skills.6'), t('skills.7'), t('skills.8')],
    },
    {
      icon: TestTube2,
      title: t('skills.categories.2'),
      gradient: 'from-green-500 to-emerald-500',
      skills: [t('skills.9'), t('skills.10'), t('skills.11')],
    },
    {
      icon: Settings,
      title: t('skills.categories.3'),
      gradient: 'from-purple-500 to-fuchsia-500',
      skills: [t('skills.12'), t('skills.13'), t('skills.14'), t('skills.15')],
    },
    {
      icon: Cpu,
      title: t('skills.categories.4'),
      gradient: 'from-rose-500 to-pink-500',
      skills: [
        t('skills.16'),
        t('skills.17'),
        t('skills.18'),
        t('skills.19'),
        t('skills.20'),
        t('skills.21'),
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg mb-1">
          <Star className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 text-center">{t('skills.sectionTitle')}</h2>
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
