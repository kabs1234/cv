import type { ReactElement } from 'react';

import { cn } from '@/lib/utils';

type MetaListProps = {
  readonly items: ReadonlyArray<string>;
  readonly className?: string;
};

export default function MetaList({
  items,
  className,
}: MetaListProps): ReactElement {
  return (
    <ul className={cn('flex flex-wrap overflow-hidden font-mono', className)}>
      {items.map((item) => (
        <li key={item} className="-ml-[1.5em] pr-[1.5em]">
          <span
            aria-hidden="true"
            className="inline-block w-[1.5em] text-center text-accent-ink"
          >
            ·
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}