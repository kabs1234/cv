import { Mail, Phone, Send } from 'lucide-react';

export default function Header(): React.ReactElement {
  return (
    <div className="relative overflow-hidden bg-white shadow-sm">
      {/* Оригинальный градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Левая колонка - Информация */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">
                Жашкеев Айхан
              </h1>
              <div className="relative">
                <h2 className="text-2xl text-gray-600 font-medium">
                  Junior Frontend Developer
                </h2>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Junior Frontend Developer с опытом создания SPA на React и
              TypeScript, включая авторизацию, роутинг, фильтрацию и unit-тесты.
              Уверенно владею современным стеком (RTK, Axios, Jest) и умею
              строить масштабируемую архитектуру. Готов быстро влиться в команду
              и приносить результат.
            </p>
          </div>

          {/* Правая колонка - Контакты */}
          <div className="bg-white/90 p-3 rounded-lg shadow-sm border border-gray-100 h-fit">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Контакты
            </h3>
            <div className="space-y-1">
              <a
                href="mailto:azhashkeev@gmail.com"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-gray-700 font-medium text-sm">
                    azhashkeev@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://t.me/aikhan24"
                target="_blank"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Send className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">Telegram</p>
                  <p className="text-gray-700 font-medium text-sm">@aikhan24</p>
                </div>
              </a>

              <a
                href="https://github.com/kabs1234"
                target="_blank"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-4 h-4 flex-shrink-0">
                  <img
                    src="../../public/images/github-mark.svg"
                    alt="GitHub"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Github</p>
                  <p className="text-gray-700 font-medium text-sm">kabs1234</p>
                </div>
              </a>

              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Phone className="w-4 h-4 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-gray-700 font-medium text-sm">
                    +7 707 989 69 38
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
