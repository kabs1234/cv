import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Code2, MonitorPlay } from 'lucide-react';
import { PROJECTS } from '../const';

export default function Projects(): React.ReactElement {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-20 space-y-20">
      <section className="space-y-8">
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
              className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="relative p-6 flex flex-col gap-4 h-full">
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center mb-2 border">
                  {/* Скриншот/гифка */}
                  <img
                    src={project.img}
                    alt="project screenshot"
                    className="object-cover w-full h-full max-h-52"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-2">
                  {project.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="flex gap-2 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      <MonitorPlay className="w-4 h-4" /> Demo
                    </Button>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="flex items-center gap-1 border-blue-400 text-blue-700"
                    >
                      <Github className="w-4 h-4" /> Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
