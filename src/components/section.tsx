import { useId, type ReactNode } from 'react';

import { formatOrdinal } from '@/lib/format';

export type NumberedSectionProps = {
  readonly number: number;
};

type SectionProps = NumberedSectionProps & {
  readonly title: string;
  readonly children: ReactNode;
};

export default function Section({
  number,
  title,
  children,
}: SectionProps): React.ReactElement {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="grid gap-3 border-t border-rule-strong pt-4 pb-10 md:grid-cols-[9.5rem_1fr] md:gap-6 print:grid-cols-[9.5rem_1fr] print:gap-4 print:pb-6"
    >
      <div className="break-after-avoid">
        <span className="font-mono text-xs text-accent-ink">
          {formatOrdinal(number)}
        </span>
        <h2
          id={headingId}
          className="mt-0.5 font-serif text-[1.625rem] leading-tight print:text-lg"
        >
          {title}
        </h2>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}