import { Card, CardContent } from '@/components/ui/card';
import { PROJECTS } from '../const';
import { Code2 } from 'lucide-react';
import ProjectInfo from './project-info';
import { Link } from 'react-router-dom';

export default function Projects(): React.ReactElement {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-20 space-y-20 mt-10">
      <section className="space-y-8">
        <div className="mb-4">
          <Link to="/" className="text-blue-600 hover:underline font-medium">
            ← На главную
          </Link>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg">
            <Code2 className="w-6 h-6" />
            Проекты
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <Card
              key={project.title}
              className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col py-0 pb-6`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="relative flex flex-col gap-4 h-full px-0">
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center border">
                  {/* Скриншот/гифка */}
                  <img
                    src={project.img}
                    alt="project screenshot"
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <ProjectInfo
                  title={project.title}
                  tech={project.tech}
                  bullets={project.bullets}
                  demo={project.demo}
                  github={project.github}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
