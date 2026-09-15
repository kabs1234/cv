/**
 * FIXTURE — follows clean-code-ts; the review hook must report zero violations.
 * Counterpart to bad-example.ts, which covers the same ground done wrong.
 */

const MILLISECONDS_PER_DAY = 86_400_000;
const ACCOUNT_LIFETIME_DAYS = 30;
const DEFAULT_PAGE_SIZE = 10;
const PROFILE_ENDPOINT = 'https://api.example.com/users';
const NOTIFY_ENDPOINT = '/api/v2/notify';

export const UserRole = {
  Admin: 'admin',
  Member: 'member',
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export type User = {
  readonly id: string;
  readonly name: string;
  readonly role: UserRole;
  readonly createdAt: number;
};

export type NewUser = Omit<User, 'createdAt'>;

export function createUser(details: NewUser): User {
  return { ...details, createdAt: Date.now() };
}

export function notifyUser(id: string): Promise<Response> {
  return fetch(NOTIFY_ENDPOINT, { method: 'POST', body: id });
}

export function isActive(user: User): boolean {
  return Date.now() - user.createdAt < MILLISECONDS_PER_DAY * ACCOUNT_LIFETIME_DAYS;
}

export function hasName(user: User): boolean {
  return user.name.trim().length > 0;
}

export function withTag(tags: ReadonlyArray<string>, tag: string): ReadonlyArray<string> {
  return [...tags, tag];
}

export function pageOfUsers(
  users: ReadonlyMap<string, User>,
  size = DEFAULT_PAGE_SIZE
): ReadonlyArray<User> {
  return [...users.values()].slice(0, size);
}

export async function fetchProfile(id: string): Promise<User> {
  const response = await fetch(`${PROFILE_ENDPOINT}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to load profile ${id}: ${response.status}`);
  }
  return parseUser(await response.json());
}

function parseUser(payload: unknown): User {
  if (!isUser(payload)) {
    throw new Error('Received a malformed user payload');
  }
  return payload;
}

function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value &&
    'createdAt' in value &&
    typeof value.id === 'string' &&
    typeof value.name === 'string' &&
    typeof value.createdAt === 'number'
  );
}
