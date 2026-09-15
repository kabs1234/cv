import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, type NavLinkRenderProps } from 'react-router-dom';

import { cn } from '@/lib/utils';

import LanguageSwitcher from './language-switcher';
import PrintButton from './print-button';
import ThemeToggle from './theme-toggle';

const NAV_ITEMS = [
  { id: 'resume', to: '/' },
  { id: 'projects', to: '/projects' },
] as const;

function getNavLinkClassName({ isActive }: NavLinkRenderProps): string {
  return cn(
    'decoration-accent-ink decoration-2 underline-offset-[6px] motion-safe:transition-colors',
    isActive
      ? 'text-foreground underline'
      : 'text-muted-foreground hover:text-foreground',
  );
}

export default function TopBar(): ReactElement {
  const { t } = useTranslation();

  return (
    <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-rule-strong py-3 text-sm print:hidden">
      <Link to="/" className="font-semibold">
        <span className="hidden sm:inline">{t('header.fullName')}</span>
        <span className="sm:hidden">{t('header.shortName')}</span>
      </Link>
      <nav
        aria-label={t('nav.label')}
        className="order-last flex w-full gap-6 border-t border-border py-2 sm:order-none sm:w-auto sm:border-0 sm:py-0"
      >
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.id} to={item.to} end className={getNavLinkClassName}>
            {t(`nav.${item.id}`)}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
        <PrintButton />
      </div>
    </header>
  );
}