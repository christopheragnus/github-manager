// Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  authPayload: (where?: AuthPayloadWhereInput) => Promise<boolean>;
  post: (where?: PostWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  authPayload: (
    where: AuthPayloadWhereUniqueInput
  ) => AuthPayloadNullablePromise;
  authPayloads: (args?: {
    where?: AuthPayloadWhereInput;
    orderBy?: AuthPayloadOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<AuthPayload>;
  authPayloadsConnection: (args?: {
    where?: AuthPayloadWhereInput;
    orderBy?: AuthPayloadOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => AuthPayloadConnectionPromise;
  post: (where: PostWhereUniqueInput) => PostNullablePromise;
  posts: (args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Post>;
  postsConnection: (args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PostConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAuthPayload: (data: AuthPayloadCreateInput) => AuthPayloadPromise;
  updateAuthPayload: (args: {
    data: AuthPayloadUpdateInput;
    where: AuthPayloadWhereUniqueInput;
  }) => AuthPayloadPromise;
  updateManyAuthPayloads: (args: {
    data: AuthPayloadUpdateManyMutationInput;
    where?: AuthPayloadWhereInput;
  }) => BatchPayloadPromise;
  upsertAuthPayload: (args: {
    where: AuthPayloadWhereUniqueInput;
    create: AuthPayloadCreateInput;
    update: AuthPayloadUpdateInput;
  }) => AuthPayloadPromise;
  deleteAuthPayload: (where: AuthPayloadWhereUniqueInput) => AuthPayloadPromise;
  deleteManyAuthPayloads: (
    where?: AuthPayloadWhereInput
  ) => BatchPayloadPromise;
  createPost: (data: PostCreateInput) => PostPromise;
  updatePost: (args: {
    data: PostUpdateInput;
    where: PostWhereUniqueInput;
  }) => PostPromise;
  updateManyPosts: (args: {
    data: PostUpdateManyMutationInput;
    where?: PostWhereInput;
  }) => BatchPayloadPromise;
  upsertPost: (args: {
    where: PostWhereUniqueInput;
    create: PostCreateInput;
    update: PostUpdateInput;
  }) => PostPromise;
  deletePost: (where: PostWhereUniqueInput) => PostPromise;
  deleteManyPosts: (where?: PostWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  authPayload: (
    where?: AuthPayloadSubscriptionWhereInput
  ) => AuthPayloadSubscriptionPayloadSubscription;
  post: (
    where?: PostSubscriptionWhereInput
  ) => PostSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type AuthPayloadOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "token_ASC"
  | "token_DESC";

export type PostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "published_ASC"
  | "published_DESC"
  | "title_ASC"
  | "title_DESC"
  | "content_ASC"
  | "content_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "githubLogin_ASC"
  | "githubLogin_DESC"
  | "githubToken_ASC"
  | "githubToken_DESC"
  | "avatar_ASC"
  | "avatar_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type AuthPayloadWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface AuthPayloadWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  token?: Maybe<String>;
  token_not?: Maybe<String>;
  token_in?: Maybe<String[] | String>;
  token_not_in?: Maybe<String[] | String>;
  token_lt?: Maybe<String>;
  token_lte?: Maybe<String>;
  token_gt?: Maybe<String>;
  token_gte?: Maybe<String>;
  token_contains?: Maybe<String>;
  token_not_contains?: Maybe<String>;
  token_starts_with?: Maybe<String>;
  token_not_starts_with?: Maybe<String>;
  token_ends_with?: Maybe<String>;
  token_not_ends_with?: Maybe<String>;
  user?: Maybe<UserWhereInput>;
  AND?: Maybe<AuthPayloadWhereInput[] | AuthPayloadWhereInput>;
  OR?: Maybe<AuthPayloadWhereInput[] | AuthPayloadWhereInput>;
  NOT?: Maybe<AuthPayloadWhereInput[] | AuthPayloadWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  githubLogin?: Maybe<String>;
  githubLogin_not?: Maybe<String>;
  githubLogin_in?: Maybe<String[] | String>;
  githubLogin_not_in?: Maybe<String[] | String>;
  githubLogin_lt?: Maybe<String>;
  githubLogin_lte?: Maybe<String>;
  githubLogin_gt?: Maybe<String>;
  githubLogin_gte?: Maybe<String>;
  githubLogin_contains?: Maybe<String>;
  githubLogin_not_contains?: Maybe<String>;
  githubLogin_starts_with?: Maybe<String>;
  githubLogin_not_starts_with?: Maybe<String>;
  githubLogin_ends_with?: Maybe<String>;
  githubLogin_not_ends_with?: Maybe<String>;
  githubToken?: Maybe<String>;
  githubToken_not?: Maybe<String>;
  githubToken_in?: Maybe<String[] | String>;
  githubToken_not_in?: Maybe<String[] | String>;
  githubToken_lt?: Maybe<String>;
  githubToken_lte?: Maybe<String>;
  githubToken_gt?: Maybe<String>;
  githubToken_gte?: Maybe<String>;
  githubToken_contains?: Maybe<String>;
  githubToken_not_contains?: Maybe<String>;
  githubToken_starts_with?: Maybe<String>;
  githubToken_not_starts_with?: Maybe<String>;
  githubToken_ends_with?: Maybe<String>;
  githubToken_not_ends_with?: Maybe<String>;
  avatar?: Maybe<String>;
  avatar_not?: Maybe<String>;
  avatar_in?: Maybe<String[] | String>;
  avatar_not_in?: Maybe<String[] | String>;
  avatar_lt?: Maybe<String>;
  avatar_lte?: Maybe<String>;
  avatar_gt?: Maybe<String>;
  avatar_gte?: Maybe<String>;
  avatar_contains?: Maybe<String>;
  avatar_not_contains?: Maybe<String>;
  avatar_starts_with?: Maybe<String>;
  avatar_not_starts_with?: Maybe<String>;
  avatar_ends_with?: Maybe<String>;
  avatar_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type PostWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface PostWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  content?: Maybe<String>;
  content_not?: Maybe<String>;
  content_in?: Maybe<String[] | String>;
  content_not_in?: Maybe<String[] | String>;
  content_lt?: Maybe<String>;
  content_lte?: Maybe<String>;
  content_gt?: Maybe<String>;
  content_gte?: Maybe<String>;
  content_contains?: Maybe<String>;
  content_not_contains?: Maybe<String>;
  content_starts_with?: Maybe<String>;
  content_not_starts_with?: Maybe<String>;
  content_ends_with?: Maybe<String>;
  content_not_ends_with?: Maybe<String>;
  AND?: Maybe<PostWhereInput[] | PostWhereInput>;
  OR?: Maybe<PostWhereInput[] | PostWhereInput>;
  NOT?: Maybe<PostWhereInput[] | PostWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  githubLogin?: Maybe<String>;
}>;

export interface AuthPayloadCreateInput {
  id?: Maybe<ID_Input>;
  token: String;
  user: UserCreateOneInput;
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
  githubLogin?: Maybe<String>;
  githubToken?: Maybe<String>;
  avatar?: Maybe<String>;
}

export interface AuthPayloadUpdateInput {
  token?: Maybe<String>;
  user?: Maybe<UserUpdateOneRequiredInput>;
}

export interface UserUpdateOneRequiredInput {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateDataInput {
  name?: Maybe<String>;
  githubLogin?: Maybe<String>;
  githubToken?: Maybe<String>;
  avatar?: Maybe<String>;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface AuthPayloadUpdateManyMutationInput {
  token?: Maybe<String>;
}

export interface PostCreateInput {
  id?: Maybe<ID_Input>;
  published?: Maybe<Boolean>;
  title: String;
  content: String;
}

export interface PostUpdateInput {
  published?: Maybe<Boolean>;
  title?: Maybe<String>;
  content?: Maybe<String>;
}

export interface PostUpdateManyMutationInput {
  published?: Maybe<Boolean>;
  title?: Maybe<String>;
  content?: Maybe<String>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  githubLogin?: Maybe<String>;
  githubToken?: Maybe<String>;
  avatar?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  githubLogin?: Maybe<String>;
  githubToken?: Maybe<String>;
  avatar?: Maybe<String>;
}

export interface AuthPayloadSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<AuthPayloadWhereInput>;
  AND?: Maybe<
    AuthPayloadSubscriptionWhereInput[] | AuthPayloadSubscriptionWhereInput
  >;
  OR?: Maybe<
    AuthPayloadSubscriptionWhereInput[] | AuthPayloadSubscriptionWhereInput
  >;
  NOT?: Maybe<
    AuthPayloadSubscriptionWhereInput[] | AuthPayloadSubscriptionWhereInput
  >;
}

export interface PostSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PostWhereInput>;
  AND?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
  OR?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
  NOT?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface AuthPayload {
  id: ID_Output;
  token: String;
}

export interface AuthPayloadPromise extends Promise<AuthPayload>, Fragmentable {
  id: () => Promise<ID_Output>;
  token: () => Promise<String>;
  user: <T = UserPromise>() => T;
}

export interface AuthPayloadSubscription
  extends Promise<AsyncIterator<AuthPayload>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  token: () => Promise<AsyncIterator<String>>;
  user: <T = UserSubscription>() => T;
}

export interface AuthPayloadNullablePromise
  extends Promise<AuthPayload | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  token: () => Promise<String>;
  user: <T = UserPromise>() => T;
}

export interface User {
  id: ID_Output;
  name?: String;
  githubLogin?: String;
  githubToken?: String;
  avatar?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  githubLogin: () => Promise<String>;
  githubToken: () => Promise<String>;
  avatar: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  githubLogin: () => Promise<AsyncIterator<String>>;
  githubToken: () => Promise<AsyncIterator<String>>;
  avatar: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  githubLogin: () => Promise<String>;
  githubToken: () => Promise<String>;
  avatar: () => Promise<String>;
}

export interface AuthPayloadConnection {
  pageInfo: PageInfo;
  edges: AuthPayloadEdge[];
}

export interface AuthPayloadConnectionPromise
  extends Promise<AuthPayloadConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AuthPayloadEdge>>() => T;
  aggregate: <T = AggregateAuthPayloadPromise>() => T;
}

export interface AuthPayloadConnectionSubscription
  extends Promise<AsyncIterator<AuthPayloadConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AuthPayloadEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAuthPayloadSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AuthPayloadEdge {
  node: AuthPayload;
  cursor: String;
}

export interface AuthPayloadEdgePromise
  extends Promise<AuthPayloadEdge>,
    Fragmentable {
  node: <T = AuthPayloadPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AuthPayloadEdgeSubscription
  extends Promise<AsyncIterator<AuthPayloadEdge>>,
    Fragmentable {
  node: <T = AuthPayloadSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateAuthPayload {
  count: Int;
}

export interface AggregateAuthPayloadPromise
  extends Promise<AggregateAuthPayload>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAuthPayloadSubscription
  extends Promise<AsyncIterator<AggregateAuthPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Post {
  id: ID_Output;
  published: Boolean;
  title: String;
  content: String;
}

export interface PostPromise extends Promise<Post>, Fragmentable {
  id: () => Promise<ID_Output>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  content: () => Promise<String>;
}

export interface PostSubscription
  extends Promise<AsyncIterator<Post>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
  content: () => Promise<AsyncIterator<String>>;
}

export interface PostNullablePromise
  extends Promise<Post | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  content: () => Promise<String>;
}

export interface PostConnection {
  pageInfo: PageInfo;
  edges: PostEdge[];
}

export interface PostConnectionPromise
  extends Promise<PostConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PostEdge>>() => T;
  aggregate: <T = AggregatePostPromise>() => T;
}

export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PostEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePostSubscription>() => T;
}

export interface PostEdge {
  node: Post;
  cursor: String;
}

export interface PostEdgePromise extends Promise<PostEdge>, Fragmentable {
  node: <T = PostPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdge>>,
    Fragmentable {
  node: <T = PostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePost {
  count: Int;
}

export interface AggregatePostPromise
  extends Promise<AggregatePost>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePost>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AuthPayloadSubscriptionPayload {
  mutation: MutationType;
  node: AuthPayload;
  updatedFields: String[];
  previousValues: AuthPayloadPreviousValues;
}

export interface AuthPayloadSubscriptionPayloadPromise
  extends Promise<AuthPayloadSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AuthPayloadPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AuthPayloadPreviousValuesPromise>() => T;
}

export interface AuthPayloadSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AuthPayloadSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AuthPayloadSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AuthPayloadPreviousValuesSubscription>() => T;
}

export interface AuthPayloadPreviousValues {
  id: ID_Output;
  token: String;
}

export interface AuthPayloadPreviousValuesPromise
  extends Promise<AuthPayloadPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  token: () => Promise<String>;
}

export interface AuthPayloadPreviousValuesSubscription
  extends Promise<AsyncIterator<AuthPayloadPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  token: () => Promise<AsyncIterator<String>>;
}

export interface PostSubscriptionPayload {
  mutation: MutationType;
  node: Post;
  updatedFields: String[];
  previousValues: PostPreviousValues;
}

export interface PostSubscriptionPayloadPromise
  extends Promise<PostSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PostPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PostPreviousValuesPromise>() => T;
}

export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PostPreviousValuesSubscription>() => T;
}

export interface PostPreviousValues {
  id: ID_Output;
  published: Boolean;
  title: String;
  content: String;
}

export interface PostPreviousValuesPromise
  extends Promise<PostPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  content: () => Promise<String>;
}

export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
  content: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name?: String;
  githubLogin?: String;
  githubToken?: String;
  avatar?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  githubLogin: () => Promise<String>;
  githubToken: () => Promise<String>;
  avatar: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  githubLogin: () => Promise<AsyncIterator<String>>;
  githubToken: () => Promise<AsyncIterator<String>>;
  avatar: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Post",
    embedded: false
  },
  {
    name: "AuthPayload",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
