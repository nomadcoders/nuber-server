export type Resolver = (parent: any, args: any, context: any, info: any) => any;

export interface Resolvers {
  [key: string]: {
    [key: string]: Resolver;
  };
}
