import { Mail, Phone, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Header(): React.ReactElement {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="relative overflow-hidden bg-white shadow-sm">
      {/* Language Switcher */}
      <div className="absolute top-4 right-6 z-20">
        <button
          className={`px-2 py-1 rounded-l border border-gray-300 bg-white ${
            i18n.language === 'ru' ? 'font-bold text-blue-600' : ''
          }`}
          onClick={() => changeLanguage('ru')}
        >
          RU
        </button>
        <button
          className={`px-2 py-1 rounded-r border border-gray-300 bg-white ${
            i18n.language === 'en' ? 'font-bold text-blue-600' : ''
          }`}
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
      </div>
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
              {t('header.description')}
            </p>
          </div>

          {/* Правая колонка - Контакты */}
          <div className="bg-white/90 p-3 rounded-lg shadow-sm border border-gray-100 h-fit">
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
                    src="./images/github-mark.svg"
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

              <a
                href="https://www.openstreetmap.org/relation/3386005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-purple-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                  />
                </svg>
                <div>
                  <p className="text-xs text-gray-500">{t('header.address')}</p>
                  <p className="text-gray-700 font-medium text-sm">
                    {t('header.city')}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
