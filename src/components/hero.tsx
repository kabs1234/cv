import { useId, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { ADDRESS_MAP_URL, CONTACTS } from '@/const';
import { EXTERNAL_LINK_PROPS, isExternalUrl } from '@/lib/links';

type ContactRowProps = {
  readonly label: string;
  readonly href: string;
  readonly children: ReactNode;
};

function ContactRow({
  label,
  href,
  children,
}: ContactRowProps): React.ReactElement {
  const linkProps = isExternalUrl(href) ? EXTERNAL_LINK_PROPS : {};

  return (
    <div className="grid grid-cols-[5.5rem_1fr] gap-2 border-t border-border py-2">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="min-w-0 font-medium break-words">
        <a href={href} className="link-quiet" {...linkProps}>
          {children}
        </a>
      </dd>
    </div>
  );
}

export default function Hero(): React.ReactElement {
  const { t } = useTranslation();
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="grid gap-10 pt-10 pb-12 lg:grid-cols-[1.7fr_1fr] lg:gap-12 print:grid-cols-[1.7fr_1fr] print:gap-8 print:pt-0 print:pb-6"
    >
      <div>
        <h1
          id={headingId}
          className="font-serif text-[2.5rem] leading-[0.98] tracking-tight sm:text-6xl lg:text-[4rem] print:text-5xl"
        >
          {t('header.fullName')
            .split(' ')
            .map((word) => (
              <span key={word} className="block">
                {word}{' '}
              </span>
            ))}
        </h1>
        <p className="mt-4 font-serif text-xl text-accent-ink italic sm:text-[1.375rem]">
          {t('header.jobTitle')}
        </p>
        <p className="mt-5 max-w-[56ch] text-[0.9375rem] leading-relaxed text-body">
          {t('header.description')}
        </p>
      </div>
      <dl className="self-end text-sm">
        {CONTACTS.map((contact) => (
          <ContactRow
            key={contact.id}
            label={t(`header.contacts.${contact.id}`)}
            href={contact.href}
          >
            {contact.value}
          </ContactRow>
        ))}
        <ContactRow label={t('header.address')} href={ADDRESS_MAP_URL}>
          {t('header.city')}
        </ContactRow>
      </dl>
    </section>
  );
}