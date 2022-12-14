import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './typeorm.config';
import { gqlOptions } from './graphql/gql-options';
import { CommonModule } from './modules/common/common.module';
import { UserModule } from 'src/modules/users/user.module';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: true,
    }),
    CommonModule,
    UserModule,
  ],
})
export class AppModule {}
