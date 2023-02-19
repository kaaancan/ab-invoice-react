export interface GraphQLRequestHook<T> {
  execute?: () => void;
  result?: T;
}
