import './dotenv-config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { typeORMConfig } from './typeorm.config';

const typeormMigrationConfig: TypeOrmModuleOptions = {
  ...typeORMConfig,
  migrations: ['src/migration/**/*.ts', 'src/migration/**/*.js'],
  cli: {
    migrationsDir: 'src/migration',
  },
};

export default typeormMigrationConfig;
