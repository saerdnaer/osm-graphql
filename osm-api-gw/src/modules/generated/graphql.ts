/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Datetime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  OverpassElement: { input: any; output: any; }
  RelationType: { input: any; output: any; }
  URL: { input: any; output: any; }
};

export type Area = Element & {
  __typename?: 'Area';
  /** @deprecated This field is for debugging only. Do not use in production. */
  _raw?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  version: Scalars['Int']['output'];
};

export type Claim = {
  __typename?: 'Claim';
  datatype?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  qualifiers2?: Maybe<Scalars['JSON']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type Element = {
  _raw?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
};

export type ElementUnion = GenericRelation | Node | Way;

export type Entity = {
  __typename?: 'Entity';
  name?: Maybe<Scalars['String']['output']>;
};

export type GenericRelation = Element & Relation & {
  __typename?: 'GenericRelation';
  /** @deprecated This field is for debugging only. Do not use in production. */
  _raw?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  tag?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  type?: Maybe<Scalars['RelationType']['output']>;
  uri: Scalars['URL']['output'];
  version: Scalars['Int']['output'];
};


export type GenericRelationTagArgs = {
  key: Scalars['String']['input'];
};

export type Image = {
  __typename?: 'Image';
  url: Scalars['String']['output'];
};

export type Nwr = GenericRelation | Node | Way;

export type Node = Element & {
  __typename?: 'Node';
  /** @deprecated This field is for debugging only. Do not use in production. */
  _raw?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  lat: Scalars['Float']['output'];
  lon: Scalars['Float']['output'];
  tag?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  timestamp?: Maybe<Scalars['Datetime']['output']>;
  uri: Scalars['URL']['output'];
  version?: Maybe<Scalars['Int']['output']>;
  visible?: Maybe<Scalars['Boolean']['output']>;
};


export type NodeTagArgs = {
  key: Scalars['String']['input'];
};

export type NwrEnum =
  | 'node'
  | 'relation'
  | 'way';

export type OverpassResponse = {
  __typename?: 'OverpassResponse';
  /** @deprecated This field is for debugging only. Do not use in production. */
  _raw?: Maybe<Scalars['JSON']['output']>;
  areas?: Maybe<Array<Area>>;
  /** generic OSM element, Overpass specific */
  elements?: Maybe<Array<Element>>;
  nodes?: Maybe<Array<Node>>;
  relations?: Maybe<Array<Relation>>;
  timelines?: Maybe<Array<Timeline>>;
  ways?: Maybe<Array<Way>>;
};

export type OverpassResponseFormat =
  | 'GEOJSON'
  | 'JSON'
  | 'XML';

export type Project = {
  __typename?: 'Project';
  /** @deprecated This field is for debugging only. Do not use in production. */
  _raw?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  doc_url?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Image>;
  id: Scalars['ID']['output'];
  key_entries: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  tag_entries: Scalars['Int']['output'];
  unique_keys: Scalars['Int']['output'];
  unique_tags: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
  overpass?: Maybe<OverpassResponse>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Project>>;
  taginfo: Taginfo;
};


export type QueryOverpassArgs = {
  bbox?: InputMaybe<Scalars['JSON']['input']>;
  endpoint?: InputMaybe<Scalars['URL']['input']>;
  format?: InputMaybe<OverpassResponseFormat>;
  out?: InputMaybe<Scalars['String']['input']>;
  query: Scalars['String']['input'];
  timeout?: InputMaybe<Scalars['Int']['input']>;
  verbose?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Relation = {
  id: Scalars['ID']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  type?: Maybe<Scalars['RelationType']['output']>;
  version: Scalars['Int']['output'];
};

export type RelationMember = {
  ref?: Maybe<Nwr>;
  role?: Maybe<Scalars['String']['output']>;
  sequenceId: Scalars['Int']['output'];
  type: NwrEnum;
};

export type Snak = {
  __typename?: 'Snak';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type SnakValue = {
  raw?: Maybe<Scalars['JSON']['output']>;
};

export type SnakValueEntity = {
  __typename?: 'SnakValueEntity';
  raw?: Maybe<Scalars['JSON']['output']>;
};

export type SnakValueGlobeCoordinate = {
  __typename?: 'SnakValueGlobeCoordinate';
  globe?: Maybe<Entity>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  precision?: Maybe<Scalars['Float']['output']>;
  raw?: Maybe<Scalars['JSON']['output']>;
};

export type SnakValueGlobeCoordinateValue = {
  __typename?: 'SnakValueGlobeCoordinateValue';
  raw?: Maybe<Scalars['JSON']['output']>;
};

export type SnakValueMonolingualText = {
  __typename?: 'SnakValueMonolingualText';
  raw?: Maybe<Scalars['JSON']['output']>;
};

export type SnakValueMonolingualTextValue = {
  __typename?: 'SnakValueMonolingualTextValue';
  raw?: Maybe<Scalars['JSON']['output']>;
};

export type SnakValuePage = {
  __typename?: 'SnakValuePage';
  raw?: Maybe<Scalars['JSON']['output']>;
};

export type SnakValueQuantity = {
  __typename?: 'SnakValueQuantity';
  raw?: Maybe<Scalars['JSON']['output']>;
};

export type SnakValueQuantityValue = {
  __typename?: 'SnakValueQuantityValue';
  raw?: Maybe<Scalars['JSON']['output']>;
};

export type SnakValueString = {
  __typename?: 'SnakValueString';
  raw?: Maybe<Scalars['JSON']['output']>;
};

export type SnakValueTime = {
  __typename?: 'SnakValueTime';
  after?: Maybe<Scalars['Int']['output']>;
  before?: Maybe<Scalars['Int']['output']>;
  calendarmodel?: Maybe<Entity>;
  precision?: Maybe<Scalars['Int']['output']>;
  raw?: Maybe<Scalars['JSON']['output']>;
  time?: Maybe<Scalars['Datetime']['output']>;
};

export type Taginfo = {
  __typename?: 'Taginfo';
  keys?: Maybe<Scalars['JSON']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
};


export type TaginfoKeysArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
};


export type TaginfoTagsArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
};

export type Timeline = Element & {
  __typename?: 'Timeline';
  /** @deprecated This field is for debugging only. Do not use in production. */
  _raw?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
};

export type Way = Element & {
  __typename?: 'Way';
  /** @deprecated This field is for debugging only. Do not use in production. */
  _raw?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  nodes: Array<Node>;
  tag?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  timestamp: Scalars['Datetime']['output'];
  uri: Scalars['URL']['output'];
  version: Scalars['Int']['output'];
  visible: Scalars['Boolean']['output'];
};


export type WayTagArgs = {
  key: Scalars['String']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  ElementUnion: ( GenericRelation ) | ( Node ) | ( Way );
  NWR: ( GenericRelation ) | ( Node ) | ( Way );
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Element: ( Area ) | ( GenericRelation ) | ( Node ) | ( Timeline ) | ( Way );
  Relation: ( GenericRelation );
  RelationMember: never;
  SnakValue: never;
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Area: ResolverTypeWrapper<Area>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Claim: ResolverTypeWrapper<Claim>;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']['output']>;
  Element: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Element']>;
  ElementUnion: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ElementUnion']>;
  Entity: ResolverTypeWrapper<Entity>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GenericRelation: ResolverTypeWrapper<GenericRelation>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Image: ResolverTypeWrapper<Image>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  NWR: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['NWR']>;
  Node: ResolverTypeWrapper<Node>;
  NwrEnum: NwrEnum;
  OverpassElement: ResolverTypeWrapper<Scalars['OverpassElement']['output']>;
  OverpassResponse: ResolverTypeWrapper<OverpassResponse>;
  OverpassResponseFormat: OverpassResponseFormat;
  Project: ResolverTypeWrapper<Project>;
  Query: ResolverTypeWrapper<{}>;
  Relation: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Relation']>;
  RelationMember: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['RelationMember']>;
  RelationType: ResolverTypeWrapper<Scalars['RelationType']['output']>;
  Snak: ResolverTypeWrapper<Snak>;
  SnakValue: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['SnakValue']>;
  SnakValueEntity: ResolverTypeWrapper<SnakValueEntity>;
  SnakValueGlobeCoordinate: ResolverTypeWrapper<SnakValueGlobeCoordinate>;
  SnakValueGlobeCoordinateValue: ResolverTypeWrapper<SnakValueGlobeCoordinateValue>;
  SnakValueMonolingualText: ResolverTypeWrapper<SnakValueMonolingualText>;
  SnakValueMonolingualTextValue: ResolverTypeWrapper<SnakValueMonolingualTextValue>;
  SnakValuePage: ResolverTypeWrapper<SnakValuePage>;
  SnakValueQuantity: ResolverTypeWrapper<SnakValueQuantity>;
  SnakValueQuantityValue: ResolverTypeWrapper<SnakValueQuantityValue>;
  SnakValueString: ResolverTypeWrapper<SnakValueString>;
  SnakValueTime: ResolverTypeWrapper<SnakValueTime>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Taginfo: ResolverTypeWrapper<Taginfo>;
  Timeline: ResolverTypeWrapper<Timeline>;
  URL: ResolverTypeWrapper<Scalars['URL']['output']>;
  Way: ResolverTypeWrapper<Way>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Area: Area;
  Boolean: Scalars['Boolean']['output'];
  Claim: Claim;
  Datetime: Scalars['Datetime']['output'];
  Element: ResolversInterfaceTypes<ResolversParentTypes>['Element'];
  ElementUnion: ResolversUnionTypes<ResolversParentTypes>['ElementUnion'];
  Entity: Entity;
  Float: Scalars['Float']['output'];
  GenericRelation: GenericRelation;
  ID: Scalars['ID']['output'];
  Image: Image;
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  NWR: ResolversUnionTypes<ResolversParentTypes>['NWR'];
  Node: Node;
  OverpassElement: Scalars['OverpassElement']['output'];
  OverpassResponse: OverpassResponse;
  Project: Project;
  Query: {};
  Relation: ResolversInterfaceTypes<ResolversParentTypes>['Relation'];
  RelationMember: ResolversInterfaceTypes<ResolversParentTypes>['RelationMember'];
  RelationType: Scalars['RelationType']['output'];
  Snak: Snak;
  SnakValue: ResolversInterfaceTypes<ResolversParentTypes>['SnakValue'];
  SnakValueEntity: SnakValueEntity;
  SnakValueGlobeCoordinate: SnakValueGlobeCoordinate;
  SnakValueGlobeCoordinateValue: SnakValueGlobeCoordinateValue;
  SnakValueMonolingualText: SnakValueMonolingualText;
  SnakValueMonolingualTextValue: SnakValueMonolingualTextValue;
  SnakValuePage: SnakValuePage;
  SnakValueQuantity: SnakValueQuantity;
  SnakValueQuantityValue: SnakValueQuantityValue;
  SnakValueString: SnakValueString;
  SnakValueTime: SnakValueTime;
  String: Scalars['String']['output'];
  Taginfo: Taginfo;
  Timeline: Timeline;
  URL: Scalars['URL']['output'];
  Way: Way;
};

export type AreaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Area'] = ResolversParentTypes['Area']> = {
  _raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClaimResolvers<ContextType = any, ParentType extends ResolversParentTypes['Claim'] = ResolversParentTypes['Claim']> = {
  datatype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qualifiers2?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export type ElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['Element'] = ResolversParentTypes['Element']> = {
  __resolveType: TypeResolveFn<'Area' | 'GenericRelation' | 'Node' | 'Timeline' | 'Way', ParentType, ContextType>;
  _raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
};

export type ElementUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ElementUnion'] = ResolversParentTypes['ElementUnion']> = {
  __resolveType: TypeResolveFn<'GenericRelation' | 'Node' | 'Way', ParentType, ContextType>;
};

export type EntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenericRelationResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenericRelation'] = ResolversParentTypes['GenericRelation']> = {
  _raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<GenericRelationTagArgs, 'key'>>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['RelationType']>, ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type NwrResolvers<ContextType = any, ParentType extends ResolversParentTypes['NWR'] = ResolversParentTypes['NWR']> = {
  __resolveType: TypeResolveFn<'GenericRelation' | 'Node' | 'Way', ParentType, ContextType>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  _raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lon?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<NodeTagArgs, 'key'>>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  visible?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface OverpassElementScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['OverpassElement'], any> {
  name: 'OverpassElement';
}

export type OverpassResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OverpassResponse'] = ResolversParentTypes['OverpassResponse']> = {
  _raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  areas?: Resolver<Maybe<Array<ResolversTypes['Area']>>, ParentType, ContextType>;
  elements?: Resolver<Maybe<Array<ResolversTypes['Element']>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<ResolversTypes['Node']>>, ParentType, ContextType>;
  relations?: Resolver<Maybe<Array<ResolversTypes['Relation']>>, ParentType, ContextType>;
  timelines?: Resolver<Maybe<Array<ResolversTypes['Timeline']>>, ParentType, ContextType>;
  ways?: Resolver<Maybe<Array<ResolversTypes['Way']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  _raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  doc_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key_entries?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tag_entries?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unique_keys?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unique_tags?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  overpass?: Resolver<Maybe<ResolversTypes['OverpassResponse']>, ParentType, ContextType, RequireFields<QueryOverpassArgs, 'format' | 'query' | 'verbose'>>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  projects?: Resolver<Maybe<Array<ResolversTypes['Project']>>, ParentType, ContextType>;
  taginfo?: Resolver<ResolversTypes['Taginfo'], ParentType, ContextType>;
};

export type RelationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Relation'] = ResolversParentTypes['Relation']> = {
  __resolveType: TypeResolveFn<'GenericRelation', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['RelationType']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type RelationMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['RelationMember'] = ResolversParentTypes['RelationMember']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  ref?: Resolver<Maybe<ResolversTypes['NWR']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sequenceId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['NwrEnum'], ParentType, ContextType>;
};

export interface RelationTypeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RelationType'], any> {
  name: 'RelationType';
}

export type SnakResolvers<ContextType = any, ParentType extends ResolversParentTypes['Snak'] = ResolversParentTypes['Snak']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnakValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnakValue'] = ResolversParentTypes['SnakValue']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
};

export type SnakValueEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnakValueEntity'] = ResolversParentTypes['SnakValueEntity']> = {
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnakValueGlobeCoordinateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnakValueGlobeCoordinate'] = ResolversParentTypes['SnakValueGlobeCoordinate']> = {
  globe?: Resolver<Maybe<ResolversTypes['Entity']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  precision?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnakValueGlobeCoordinateValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnakValueGlobeCoordinateValue'] = ResolversParentTypes['SnakValueGlobeCoordinateValue']> = {
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnakValueMonolingualTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnakValueMonolingualText'] = ResolversParentTypes['SnakValueMonolingualText']> = {
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnakValueMonolingualTextValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnakValueMonolingualTextValue'] = ResolversParentTypes['SnakValueMonolingualTextValue']> = {
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnakValuePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnakValuePage'] = ResolversParentTypes['SnakValuePage']> = {
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnakValueQuantityResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnakValueQuantity'] = ResolversParentTypes['SnakValueQuantity']> = {
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnakValueQuantityValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnakValueQuantityValue'] = ResolversParentTypes['SnakValueQuantityValue']> = {
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnakValueStringResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnakValueString'] = ResolversParentTypes['SnakValueString']> = {
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnakValueTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnakValueTime'] = ResolversParentTypes['SnakValueTime']> = {
  after?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  before?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  calendarmodel?: Resolver<Maybe<ResolversTypes['Entity']>, ParentType, ContextType>;
  precision?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaginfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Taginfo'] = ResolversParentTypes['Taginfo']> = {
  keys?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<TaginfoKeysArgs>>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<TaginfoTagsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimelineResolvers<ContextType = any, ParentType extends ResolversParentTypes['Timeline'] = ResolversParentTypes['Timeline']> = {
  _raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type WayResolvers<ContextType = any, ParentType extends ResolversParentTypes['Way'] = ResolversParentTypes['Way']> = {
  _raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<WayTagArgs, 'key'>>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Area?: AreaResolvers<ContextType>;
  Claim?: ClaimResolvers<ContextType>;
  Datetime?: GraphQLScalarType;
  Element?: ElementResolvers<ContextType>;
  ElementUnion?: ElementUnionResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  GenericRelation?: GenericRelationResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  NWR?: NwrResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  OverpassElement?: GraphQLScalarType;
  OverpassResponse?: OverpassResponseResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Relation?: RelationResolvers<ContextType>;
  RelationMember?: RelationMemberResolvers<ContextType>;
  RelationType?: GraphQLScalarType;
  Snak?: SnakResolvers<ContextType>;
  SnakValue?: SnakValueResolvers<ContextType>;
  SnakValueEntity?: SnakValueEntityResolvers<ContextType>;
  SnakValueGlobeCoordinate?: SnakValueGlobeCoordinateResolvers<ContextType>;
  SnakValueGlobeCoordinateValue?: SnakValueGlobeCoordinateValueResolvers<ContextType>;
  SnakValueMonolingualText?: SnakValueMonolingualTextResolvers<ContextType>;
  SnakValueMonolingualTextValue?: SnakValueMonolingualTextValueResolvers<ContextType>;
  SnakValuePage?: SnakValuePageResolvers<ContextType>;
  SnakValueQuantity?: SnakValueQuantityResolvers<ContextType>;
  SnakValueQuantityValue?: SnakValueQuantityValueResolvers<ContextType>;
  SnakValueString?: SnakValueStringResolvers<ContextType>;
  SnakValueTime?: SnakValueTimeResolvers<ContextType>;
  Taginfo?: TaginfoResolvers<ContextType>;
  Timeline?: TimelineResolvers<ContextType>;
  URL?: GraphQLScalarType;
  Way?: WayResolvers<ContextType>;
};


export type Datetime = Scalars["Datetime"];
export type Json = Scalars["JSON"];
export type OverpassElement = Scalars["OverpassElement"];
export type RelationType = Scalars["RelationType"];
export type Url = Scalars["URL"];