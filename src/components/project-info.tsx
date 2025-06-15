import { Button } from '@/components/ui/button';
import { Github, MonitorPlay } from 'lucide-react';

interface ProjectInfoProps {
  title: string;
  tech: string[];
  bullets: string[];
  demo: string;
  github: string;
}

function ProjectInfo({
  title,
  tech,
  bullets,
  demo,
  github,
}: ProjectInfoProps): React.ReactElement {
  return (
    <div className="p-6 pt-0">
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 mb-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs font-medium"
          >
            {t}
          </span>
        ))}
      </div>
      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-2">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="flex gap-2 mt-auto">
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <Button className="flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <MonitorPlay className="w-4 h-4" /> Demo
          </Button>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="flex items-center gap-1 border-blue-400 text-blue-700"
          >
            <Github className="w-4 h-4" /> Code
          </Button>
        </a>
      </div>
    </div>
  );
}

export default ProjectInfo;
