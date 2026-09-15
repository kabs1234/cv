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
    <ul className={cn('flex flex-wrap font-mono', className)}>
      {items.map((item, index) => (
        <li key={item}>
          {index > 0 && (
            <span aria-hidden="true" className="px-1.5 text-accent-ink">
              ·
            </span>
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}