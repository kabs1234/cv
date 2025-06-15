import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
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
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Badge className="px-6 py-3 text-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Star className="w-5 h-5 mr-2" />
          Технические навыки
        </Badge>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Языки программирования */}
        <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
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
        <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
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
        <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
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
        <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
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

        {/* Методологии */}
        <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Методологии</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">SPA</Badge>
              <Badge variant="secondary">OOP</Badge>
              <Badge variant="secondary">MVC/MVP</Badge>
              <Badge variant="secondary">REST API</Badge>
              <Badge variant="secondary">Mobile-first</Badge>
              <Badge variant="secondary">Pixel Perfect</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
