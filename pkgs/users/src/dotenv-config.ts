import { existsSync } from 'fs';
import { resolve } from 'path';
import { config } from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const envs = [`.env.${env}.local`, `.env.${env}`, '.env'];

envs.forEach((file) => {
  const filePath = resolve(process.cwd(), file);
  if (existsSync(filePath)) {
    dotenvExpand(config({ path: filePath }));
  }
});
