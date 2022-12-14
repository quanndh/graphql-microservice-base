/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly PORT: string;
    readonly NODE_ENV?: 'production' | 'development';
    readonly BASE_URL: string;
    readonly TZ?: string;
    readonly TZ_OFFSET: number;
    readonly DATABASE_PORT?: string;
    readonly DATABASE_HOST?: string;
    readonly DATABASE_USER?: string;
    readonly DATABASE_PASSWORD?: string;
    readonly DATABASE_NAME?: string;
    readonly DATABASE_ACL_NAME?: string;
    readonly DATABASE_SYNC?: 'true' | 'false';
    readonly DATABASE_LOGGING?: 'true' | 'false';
    // Sendgrid
    readonly EMAIL_SERVER_SENDER_FROM?: string;
    // Amazon
    readonly AWS_ACCESS_KEY_ID?: string;
    readonly AWS_SECRET_KEY_ACCESS?: string;
    readonly AWS_S3_BUCKET_NAME?: string;
    //Queue
    readonly REDIS_BULL_HOST: string;
    readonly REDIS_BULL_PORT: string;
    readonly REDIS_BULL_PASSWORD?: string;

    //Kong
    readonly KONG_URL: string;
    readonly KONG_FULLNODE_ROUTE_ID: string;
    readonly KONG_REDIS_HOST: string;
    readonly KONG_REDIS_PORT: number;
    readonly KONG_REDIS_PASSWORD: string;
    readonly KONG_REDIS_TIMEOUT: number;
    readonly KONG_REDIS_DATABASE: number;

    readonly ELK_URL: string;
    readonly ELK_USER: string;
    readonly ELK_PASSWORD: string;
  }
}
