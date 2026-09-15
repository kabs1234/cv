import { useTranslation } from 'react-i18next';

import { CURRENT_YEAR, REPOSITORY_URL } from '@/const';
import { EXTERNAL_LINK_PROPS } from '@/lib/links';

export default function SiteFooter(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <footer className="mt-4 flex flex-wrap justify-between gap-x-6 gap-y-1 border-t border-rule-strong py-4 text-xs text-muted-foreground print:hidden">
      <span>
        © {CURRENT_YEAR} {t('header.fullName')}
      </span>
      <span>
        {t('footer.builtWith')} —{' '}
        <a
          href={REPOSITORY_URL}
          className="link-ink text-foreground"
          {...EXTERNAL_LINK_PROPS}
        >
          {t('footer.source')} ↗
        </a>
      </span>
    </footer>
  );
}