import { GraduationCap, Globe, Calendar } from 'lucide-react';

export default function Knowledge() {
  const languages = [
    {
      code: 'EN',
      name: 'Английский',
      level: 'B2 (чтение документации, техническое общение)',
      proficiency: 4,
      bgColor: 'bg-blue-500',
    },
    {
      code: 'RU',
      name: 'Русский',
      level: 'свободно',
      proficiency: 5,
      bgColor: 'bg-red-500',
    },
    {
      code: 'KZ',
      name: 'Казахский',
      level: 'родной',
      proficiency: 5,
      bgColor: 'bg-green-500',
    },
  ];

  return (
    <div className="space-y-3">
      {/* Образование */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 shadow-lg mb-1">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 text-center">Образование</h2>
        </div>

        <div className="space-y-2 p-3 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="font-medium text-gray-900 text-sm leading-tight">
                Бакалавриат, Информационно-коммуникационные технологии
              </h3>
              <p className="text-indigo-700 font-normal text-xs">
                Карагандинский технический университет имени Абылкаса Сагинова
              </p>
              <div className="flex items-center gap-2 text-gray-600 text-xs">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Сентябрь 2021 – Июнь 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Языки */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 shadow-lg mb-1">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 text-center">Языки</h2>
        </div>

        <div className="space-y-2">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-7 h-7 ${lang.bgColor} rounded flex items-center justify-center shadow-md`}
                >
                  <span className="text-white font-semibold text-xs">
                    {lang.code}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-xs">{lang.name}:</p>
                  <p className="text-gray-600 text-xs">{lang.level}</p>
                </div>
              </div>

              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <div
                    key={dot}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${dot <= lang.proficiency ? `${lang.bgColor} shadow-sm` : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
