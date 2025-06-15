import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Briefcase, Code2, LayoutTemplate, GitBranch } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <Badge className="px-6 py-3 text-lg bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700">
          <Briefcase className="w-5 h-5 mr-2" />
          Опыт работы
        </Badge>
      </div>

      <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <CardTitle className="text-lg">
              Проектная практика (некоммерческая)
            </CardTitle>
            <Badge variant="outline" className="text-sm px-3 py-1">
              Февраль 2023 — Настоящее время
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Разрабатывал проекты самостоятельно и в рамках обучения без
            коммерческого контракта, но с акцентом на реальные задачи,
            архитектуру, тестирование и чистый код.
          </p>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Code2 className="w-4 h-4" />
              <span>8 pet-проектов</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <LayoutTemplate className="w-4 h-4" />
              <span>SPA</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <GitBranch className="w-4 h-4" />
              <span>Production-ready</span>
            </Badge>
          </div>

          <div className="mt-4">
            <h4 className="font-medium text-gray-900 mb-2">
              Основные достижения:
            </h4>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>
                Создал 8 pet-проектов (SPA, интерактивные интерфейсы, вёрстка,
                карты, формы, фильтры)
              </li>
              <li>Разработал несколько учебных мини-проектов</li>
              <li>Работал по макетам и ТЗ</li>
              <li>Оформлял проекты в формате продакшн-ready</li>
            </ul>
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-2">
          <Badge variant="outline">JavaScript</Badge>
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Redux</Badge>
          <Badge variant="outline">HTML/CSS</Badge>
          <Badge variant="outline">Адаптивная верстка</Badge>
        </CardFooter>
      </Card>
    </div>
  );
}
