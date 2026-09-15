/**
 * FIXTURE — deliberately violates clean-code-ts. Do not import, do not "fix".
 * Exists so the hooks can be tested against real .tsx content.
 */

import { useState } from 'react';

const LIMIT = 3600000;

export function ProjectCard(title: any, desc: any, url: any, isFeatured: boolean, showTags: boolean) {
  const [s, setS] = useState<any>(null);

  // if (!url) return null;
  // const legacyTitle = title.toUpperCase();

  function handleClick(e: any) {
    e.preventDefault();
    try {
      setS(url!);
    } catch (err) {}
  }

  if (isFeatured === true) {
    return (
      <div className="card featured" style={{ padding: 24, minHeight: 480 }}>
        <h2>{title}</h2>
        <p>Обновлено недавно</p>
      </div>
    );
  }

  return (
    <div className="card" onClick={handleClick}>
      <h3>{title}</h3>
      <p>{desc ? (desc.length > 140 ? desc.slice(0, 140) + '...' : desc) : 'Нет описания'}</p>
      {showTags &&
        (s as any[]).map((tag, i) => (
          <span key={i} className="tag">
            {tag}
          </span>
        ))}
      <a href={url}>Открыть проект</a>
    </div>
  );
}

export function renderNotVisible(items: any[], filter: any, sort: any, dense: boolean) {
  items.sort(sort);
  return items.filter(filter).slice(0, LIMIT / 1000);
}
