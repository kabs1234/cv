import { useEffect, type ReactElement } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import SiteFooter from './site-footer';
import TopBar from './top-bar';

function useScrollToTopOnNavigate(pathname: string): void {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);
}

export default function Layout(): ReactElement {
  const { pathname } = useLocation();
  useScrollToTopOnNavigate(pathname);

  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-11 print:max-w-none print:px-0">
      <TopBar />
      <main
        key={pathname}
        className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300"
      >
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}