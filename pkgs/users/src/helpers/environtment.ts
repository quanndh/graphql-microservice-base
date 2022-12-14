export const isProduction = process.env.NODE_ENV === 'production';
export const BASE_URL = process.env.BASE_URL ?? '';
export const DATABASE_PORT = process.env.DATABASE_PORT ?? '5432';
export const DATABASE_HOST = process.env.DATABASE_HOST ?? 'localhost';
export const DATABASE_USER = process.env.DATABASE_USER ?? 'postgres';
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD ?? '';
export const DATABASE_NAME = process.env.DATABASE_NAME ?? '';
export const DATABASE_SYNC = process.env.DATABASE_SYNC ?? true;
export const DATABASE_LOGGING = process.env.DATABASE_LOGGING ?? false;

export const Env = {
  isProduction,
  BASE_URL,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_SYNC,
  DATABASE_LOGGING,
};
