import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Briefcase, Code2, LayoutTemplate, GitBranch } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <Badge className="px-6 py-3 text-lg bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700">
          <Briefcase className="w-5 h-5 mr-2" />
          {t('experience.title')}
        </Badge>
      </div>

      <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <CardTitle className="text-lg">
              {t('experience.projectPractice')}
            </CardTitle>
            <Badge variant="outline" className="text-sm px-3 py-1">
              {t('experience.period')}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-gray-700">
            {t('experience.mainDescription')}
          </p>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Code2 className="w-4 h-4" />
              <span>{t('experience.badges.0')}</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <LayoutTemplate className="w-4 h-4" />
              <span>{t('experience.badges.1')}</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <GitBranch className="w-4 h-4" />
              <span>{t('experience.badges.2')}</span>
            </Badge>
          </div>

          <div className="mt-4">
            <h4 className="font-medium text-gray-900 mb-2">
              {t('experience.achievements')}
            </h4>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>{t('experience.achievementsList.0')}</li>
              <li>{t('experience.achievementsList.1')}</li>
              <li>{t('experience.achievementsList.2')}</li>
              <li>{t('experience.achievementsList.3')}</li>
            </ul>
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-2">
          <Badge variant="outline">{t('experience.technologies.0')}</Badge>
          <Badge variant="outline">{t('experience.technologies.1')}</Badge>
          <Badge variant="outline">{t('experience.technologies.2')}</Badge>
          <Badge variant="outline">{t('experience.technologies.3')}</Badge>
          <Badge variant="outline">{t('experience.technologies.4')}</Badge>
          <Badge variant="outline">{t('experience.adaptiveLayout')}</Badge>
        </CardFooter>

        <div className="flex justify-center">
          <Link
            to="/projects"
            style={{
              display: 'inline-block',
              padding: '10px 24px',
              background: '#1976d2',
              color: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(25, 118, 210, 0.15)',
              transition: 'background 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#1565c0')}
            onMouseOut={(e) => (e.currentTarget.style.background = '#1976d2')}
            onClick={() => window.scrollTo({ top: 0, left: 0 })}
          >
            {t('experience.viewAllProjects')}
          </Link>
        </div>
      </Card>
    </div>
  );
}
