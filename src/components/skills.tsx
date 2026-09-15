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
      title: t('skills.categories.languages'),
      gradient: 'from-amber-500 to-orange-500',
      skills: [
        t('skills.technologies.htmlCss'),
        t('skills.technologies.jsTs')
      ],
    },
    {
      icon: LayoutTemplate,
      title: t('skills.categories.frameworks'),
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        t('skills.technologies.reactRedux'),
        t('skills.technologies.reactRouter'),
        t('skills.technologies.axios'),
        t('skills.technologies.leaflet')
      ],
    },
    {
      icon: TestTube2,
      title: t('skills.categories.testing'),
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        t('skills.technologies.jest'),
        t('skills.technologies.rtl'),
        t('skills.technologies.vitest')
      ],
    },
    {
      icon: Settings,
      title: t('skills.categories.tools'),
      gradient: 'from-purple-500 to-fuchsia-500',
      skills: [
        t('skills.technologies.git'),
        t('skills.technologies.gulp'),
        t('skills.technologies.webpack'),
        t('skills.technologies.vite')
      ],
    },
    {
      icon: Cpu,
      title: t('skills.categories.approaches'),
      gradient: 'from-rose-500 to-pink-500',
      skills: [
        t('skills.technologies.spa'),
        t('skills.technologies.oop'),
        t('skills.technologies.mvc'),
        t('skills.technologies.rest'),
        t('skills.technologies.mobileFirst'),
        t('skills.technologies.pixelPerfect')
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
