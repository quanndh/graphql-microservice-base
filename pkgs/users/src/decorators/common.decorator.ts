import { applyDecorators, createParamDecorator, ExecutionContext, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { GraphQLResolveInfo } from 'graphql';
import { GqlAuthGuard, GqlCookieAuthGuard } from 'src/guards/gql-auth.guard';

type GraphqlContext = {
  req: Request;
  res: Response;
};

type GraphQLExecutionContext = [any, any, GraphqlContext, GraphQLResolveInfo];

export const AcceptLang = createParamDecorator<unknown, ExecutionContext, string | Promise<string>>((_data, host) => {
  const [, , ctx] = host.getArgs<GraphQLExecutionContext>();
  return ctx?.req?.acceptsLanguages(['en', 'vi']) || 'en';
});

export const GraphQLInfo = createParamDecorator<any, ExecutionContext, GraphQLResolveInfo>((_data, host) => {
  const [, , , info] = host.getArgs<GraphQLExecutionContext>();
  return info;
});

// export const CurrentUser = createParamDecorator<keyof User, ExecutionContext, any>((field, host) => {
//   const [, , ctx] = host.getArgs<GraphQLExecutionContext>();

//   return field ? ctx?.req?.user?.[field] : ctx?.req?.user;
// });

// export const CurrentUserRest = createParamDecorator<keyof User, ExecutionContext, any>((field, ctx) => {
//   const request = ctx.switchToHttp().getRequest<Request>();
//   return request.user;
// });

export const Authenticated = () => {
  return applyDecorators(UseGuards(GqlAuthGuard));
};

export const AuthAdmin = () => {
  return applyDecorators(UseGuards(GqlCookieAuthGuard));
};
