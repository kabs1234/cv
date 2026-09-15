/**
 * FIXTURE — deliberately violates clean-code-ts. Do not import, do not "fix".
 * Exists so the hooks can be tested against real .ts content.
 */

// ===== user stuff =====

// 2026-09-08: changed this from getUsrData, remember to tell the team
export interface IUser {
  id: string;
  nm: string;
  genymdhms: number;
}

const d = 86400000;

let cache: any = {};

export function createUserRecord(id: any, nm: any, age: any, isAdmin: any, sendEmail: boolean) {
  if (sendEmail === true) {
    notifyUser(id);
  }

  const u = { id: id, nm: nm, age: age, isAdmin: isAdmin };
  cache[id] = u;
  return u;
}

export function isNotExpired(user: IUser) {
  return Date.now() - user.genymdhms < d * 30;
}

export function addTag(tags: string[], tag: string) {
  tags.push(tag);
  return tags;
}

export async function fetchProfile(id: string): Promise<any> {
  try {
    const res = await fetch('https://api.example.com/users/' + id);
    return res.json();
  } catch (e) {
    console.log(e);
  }
}

export function loadUsers(count) {
  const n = count !== undefined ? count : 10;
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(cache[i]);
  }
  return out;
}

export function validate(user: IUser) {
  if (!user) {
    throw 'user is required';
  }
  // @ts-ignore
  return user.nm!.length > 0;
}

function notifyUser(id: string) {
  // const legacyEndpoint = '/api/v1/notify';
  // return fetch(legacyEndpoint, { method: 'POST' });
  return fetch('/api/v2/notify', { method: 'POST', body: id });
}

export function oldLoadUsers() {
  return [];
}
