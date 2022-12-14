import { Request, Response } from 'express';
import { GqlModuleOptions } from '@nestjs/graphql';
import { isProduction } from 'src/helpers/environtment';
import { GraphQLError } from 'graphql';
import { AuthenticationError } from 'apollo-server-errors';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
// import { ComplexityPlugin } from 'src/graphql/plugins/ApolloComplexityPlugin';

export const gqlOptions: ApolloFederationDriverConfig = {
  driver: ApolloFederationDriver,
  fieldResolverEnhancers: ['guards', 'interceptors'],
  useGlobalPrefix: false,
  debug: !isProduction,
  installSubscriptionHandlers: true,
  autoSchemaFile: true,
  // plugins: [new ComplexityPlugin(200)],
  // autoTransformHttpErrors: true,
  formatError: (error: GraphQLError) => {
    //@ts-ignore
    if (error.extensions['exception']['response']['message'] === 'Unauthorized' || error.message === 'Unauthorized') {
      return new AuthenticationError('Unauthorized');
    }
    return error;
  },
  context: ({ req, res, connection }: { req: Request; res: Response; connection: { context: Request } }) => {
    if (connection) {
      // check connection for metadata
      return { req: connection.context, res };
    } else {
      // check from req
      // return new GraphQLContext(req, res);
      return { req, res };
    }
  },
};
