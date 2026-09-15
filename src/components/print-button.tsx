import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';

export default function PrintButton(): ReactElement {
  const { t } = useTranslation();

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label={t('print.hint')}
      title={t('print.hint')}
      className="font-mono text-xs"
      onClick={() => window.print()}
    >
      {t('print.label')}
    </Button>
  );
}