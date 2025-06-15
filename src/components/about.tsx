import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Code,
  LayoutTemplate,
  TestTube2,
  Settings,
  GraduationCap,
  Globe,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Левая колонка - 2/3 ширины для технических навыков */}
        <div className="md:col-span-2">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Языки программирования */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Языки</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript (ES6+)</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">HTML5</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                  <Badge variant="secondary">Sass/SCSS</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Фреймворки */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                    <LayoutTemplate className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Фреймворки</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Redux</Badge>
                  <Badge variant="secondary">Redux Toolkit</Badge>
                  <Badge variant="secondary">React Router</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Тестирование */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
                    <TestTube2 className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Тестирование</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Jest</Badge>
                  <Badge variant="secondary">React Testing Library</Badge>
                  <Badge variant="secondary">Vitest</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Инструменты */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-500">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Инструменты</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Gulp</Badge>
                  <Badge variant="secondary">Axios</Badge>
                  <Badge variant="secondary">Leaflet.js</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Правая колонка - фиксированные размеры для образования и языков */}
        <div className="w-full space-y-6">
          {/* Образование */}
          <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold">
                  Образование
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 pt-0">
              <p className="font-medium text-base leading-tight">
                Карагандинский технический университет им. А. Сагинова
              </p>
              <p className="text-sm text-muted-foreground">Бакалавр ИКТ</p>
              <p className="text-xs text-muted-foreground">
                Сентябрь 2021 – Июнь 2025
              </p>
            </CardContent>
          </Card>

          {/* Языки */}
          <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 flex-shrink-0">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold">Языки</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">Английский</p>
                  <p className="text-xs text-muted-foreground truncate">
                    B2 (чтение документации)
                  </p>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-2.5 h-2.5 bg-blue-500 rounded-full"
                    ></div>
                  ))}
                  <div className="w-2.5 h-2.5 bg-gray-200 rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">Русский</p>
                  <p className="text-xs text-muted-foreground">Свободный</p>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-2.5 h-2.5 bg-red-500 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">Казахский</p>
                  <p className="text-xs text-muted-foreground">Родной</p>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-2.5 h-2.5 bg-green-500 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
