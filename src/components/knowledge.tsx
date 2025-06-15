import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Globe } from 'lucide-react';

export default function Knowledge() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Образование */}
        <section className="space-y-4">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 text-lg bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full text-white font-semibold shadow-md">
              <GraduationCap className="w-5 h-5" />
              Образование
            </div>
          </div>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-gray-900 text-lg">
                  Карагандинский технический университет им. А. Сагинова
                </h3>
                <p className="text-gray-600 font-medium">Бакалавр ИКТ</p>
                <p className="text-sm text-gray-500">2021 – 2025</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Языки */}
        <section className="space-y-4">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 text-lg bg-gradient-to-r from-rose-500 to-pink-600 rounded-full text-white font-semibold shadow-md">
              <Globe className="w-5 h-5" />
              Языки
            </div>
          </div>

          <div className="space-y-4">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">EN</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Английский</p>
                    <p className="text-sm text-gray-500">
                      B2 (чтение документации)
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-blue-500 rounded-full"
                    ></div>
                  ))}
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">RU</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Русский</p>
                    <p className="text-sm text-gray-500">Свободный</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-red-500 rounded-full"
                    ></div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">KZ</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Казахский</p>
                    <p className="text-sm text-gray-500">Родной</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-green-500 rounded-full"
                    ></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
