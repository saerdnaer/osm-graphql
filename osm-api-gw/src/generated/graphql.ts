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
  BBox: { input: any; output: any; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: { input: any; output: any; }
  Geometry: { input: any; output: any; }
  /** An IPv4 or IPv6 host address, and optionally its subnet. */
  InternetAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  LineString: { input: any; output: any; }
  Point: { input: any; output: any; }
  Polygon: { input: any; output: any; }
  RelationType: { input: any; output: any; }
};

export type AllRelations = Boundary | GenericRelation | Network | PublicTransport | Route | Site;

export type Area = {
  __typename?: 'Area';
  geom?: Maybe<Scalars['Polygon']['output']>;
  id: Scalars['ID']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  version: Scalars['Int']['output'];
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type Boundary = Relation & {
  __typename?: 'Boundary';
  changeset?: Maybe<Changeset>;
  changesetId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  members: Array<RelationMember>;
  relationTags: Array<Tag>;
  tags?: Maybe<Scalars['JSON']['output']>;
  timestamp: Scalars['Datetime']['output'];
  type?: Maybe<Scalars['RelationType']['output']>;
  version: Scalars['Int']['output'];
  visible: Scalars['Boolean']['output'];
};


export type BoundaryMembersArgs = {
  condition?: InputMaybe<RelationMemberCondition>;
  filter?: InputMaybe<RelationMemberFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RelationMembersOrderBy>>;
};


export type BoundaryRelationTagsArgs = {
  condition?: InputMaybe<TagCondition>;
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
};

export type Changeset = {
  __typename?: 'Changeset';
  changesetTags: Array<Tag>;
  closedAt: Scalars['Datetime']['output'];
  comments: Array<ChangesetComment>;
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['ID']['output'];
  maxLat?: Maybe<Scalars['Float']['output']>;
  maxLon?: Maybe<Scalars['Float']['output']>;
  minLat?: Maybe<Scalars['Float']['output']>;
  minLon?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Node>;
  numChanges: Scalars['Int']['output'];
  relations: Array<Relation>;
  tags?: Maybe<Scalars['JSON']['output']>;
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
  ways: Array<Way>;
};


export type ChangesetChangesetTagsArgs = {
  condition?: InputMaybe<TagCondition>;
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
};


export type ChangesetCommentsArgs = {
  condition?: InputMaybe<ChangesetCommentCondition>;
  filter?: InputMaybe<ChangesetCommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChangesetCommentsOrderBy>>;
};


export type ChangesetNodesArgs = {
  condition?: InputMaybe<NodeCondition>;
  filter?: InputMaybe<NodeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NodesOrderBy>>;
};


export type ChangesetRelationsArgs = {
  condition?: InputMaybe<RelationCondition>;
  filter?: InputMaybe<RelationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RelationsOrderBy>>;
};


export type ChangesetWaysArgs = {
  condition?: InputMaybe<WayCondition>;
  filter?: InputMaybe<WayFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WaysOrderBy>>;
};

export type ChangesetComment = {
  __typename?: 'ChangesetComment';
  author?: Maybe<User>;
  authorId: Scalars['ID']['output'];
  body: Scalars['String']['output'];
  changeset?: Maybe<Changeset>;
  changesetId: Scalars['ID']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['Int']['output'];
  visible: Scalars['Boolean']['output'];
};

/**
 * A condition to be used against `ChangesetComment` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ChangesetCommentCondition = {
  /** Checks for equality with the object’s `authorId` field. */
  authorId?: InputMaybe<Scalars['ID']['input']>;
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `changesetId` field. */
  changesetId?: InputMaybe<Scalars['ID']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `visible` field. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A filter to be used against `ChangesetComment` object types. All fields are combined with a logical ‘and.’ */
export type ChangesetCommentFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ChangesetCommentFilter>>;
  /** Filter by the object’s `authorId` field. */
  authorId?: InputMaybe<IdFilter>;
  /** Filter by the object’s `body` field. */
  body?: InputMaybe<StringFilter>;
  /** Filter by the object’s `changesetId` field. */
  changesetId?: InputMaybe<IdFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ChangesetCommentFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ChangesetCommentFilter>>;
  /** Filter by the object’s `visible` field. */
  visible?: InputMaybe<BooleanFilter>;
};

/** Methods to use when ordering `ChangesetComment`. */
export enum ChangesetCommentsOrderBy {
  AuthorIdAsc = 'AUTHOR_ID_ASC',
  AuthorIdDesc = 'AUTHOR_ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  ChangesetIdAsc = 'CHANGESET_ID_ASC',
  ChangesetIdDesc = 'CHANGESET_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  VisibleAsc = 'VISIBLE_ASC',
  VisibleDesc = 'VISIBLE_DESC'
}

/**
 * A condition to be used against `Changeset` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ChangesetCondition = {
  /** Checks for equality with the object’s `closedAt` field. */
  closedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Checks for equality with the object’s `maxLat` field. */
  maxLat?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `maxLon` field. */
  maxLon?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `minLat` field. */
  minLat?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `minLon` field. */
  minLon?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `numChanges` field. */
  numChanges?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** A filter to be used against `Changeset` object types. All fields are combined with a logical ‘and.’ */
export type ChangesetFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ChangesetFilter>>;
  /** Filter by the object’s `closedAt` field. */
  closedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IdFilter>;
  /** Filter by the object’s `maxLat` field. */
  maxLat?: InputMaybe<FloatFilter>;
  /** Filter by the object’s `maxLon` field. */
  maxLon?: InputMaybe<FloatFilter>;
  /** Filter by the object’s `minLat` field. */
  minLat?: InputMaybe<FloatFilter>;
  /** Filter by the object’s `minLon` field. */
  minLon?: InputMaybe<FloatFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ChangesetFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ChangesetFilter>>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<IdFilter>;
};

/** Methods to use when ordering `Changeset`. */
export enum ChangesetsOrderBy {
  ClosedAtAsc = 'CLOSED_AT_ASC',
  ClosedAtDesc = 'CLOSED_AT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MaxLatAsc = 'MAX_LAT_ASC',
  MaxLatDesc = 'MAX_LAT_DESC',
  MaxLonAsc = 'MAX_LON_ASC',
  MaxLonDesc = 'MAX_LON_DESC',
  MinLatAsc = 'MIN_LAT_ASC',
  MinLatDesc = 'MIN_LAT_DESC',
  MinLonAsc = 'MIN_LON_ASC',
  MinLonDesc = 'MIN_LON_DESC',
  Natural = 'NATURAL',
  NumChangesAsc = 'NUM_CHANGES_ASC',
  NumChangesDesc = 'NUM_CHANGES_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

/** A filter to be used against Float fields. All fields are combined with a logical ‘and.’ */
export type FloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Float']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Float']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Float']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export enum FormatEnum {
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Text = 'TEXT'
}

/** A filter to be used against FormatEnum fields. All fields are combined with a logical ‘and.’ */
export type FormatEnumFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<FormatEnum>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<FormatEnum>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<FormatEnum>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<FormatEnum>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<FormatEnum>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<FormatEnum>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<FormatEnum>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<FormatEnum>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<FormatEnum>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<FormatEnum>>;
};

export type GenericRelation = Relation & {
  __typename?: 'GenericRelation';
  changeset?: Maybe<Changeset>;
  changesetId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  members: Array<RelationMember>;
  relationTags: Array<Tag>;
  tag?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  timestamp: Scalars['Datetime']['output'];
  type?: Maybe<Scalars['RelationType']['output']>;
  version: Scalars['Int']['output'];
  visible: Scalars['Boolean']['output'];
};


export type GenericRelationMembersArgs = {
  condition?: InputMaybe<RelationMemberCondition>;
  filter?: InputMaybe<RelationMemberFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RelationMembersOrderBy>>;
};


export type GenericRelationRelationTagsArgs = {
  condition?: InputMaybe<TagCondition>;
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
};


export type GenericRelationTagArgs = {
  key: Scalars['String']['input'];
};

/** A filter to be used against ID fields. All fields are combined with a logical ‘and.’ */
export type IdFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['ID']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['ID']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['ID']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['ID']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['ID']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['ID']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['ID']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['ID']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** A filter to be used against InternetAddress fields. All fields are combined with a logical ‘and.’ */
export type InternetAddressFilter = {
  /** Contained by the specified internet address. */
  containedBy?: InputMaybe<Scalars['InternetAddress']['input']>;
  /** Contained by or equal to the specified internet address. */
  containedByOrEqualTo?: InputMaybe<Scalars['InternetAddress']['input']>;
  /** Contains the specified internet address. */
  contains?: InputMaybe<Scalars['InternetAddress']['input']>;
  /** Contains or contained by the specified internet address. */
  containsOrContainedBy?: InputMaybe<Scalars['InternetAddress']['input']>;
  /** Contains or equal to the specified internet address. */
  containsOrEqualTo?: InputMaybe<Scalars['InternetAddress']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['InternetAddress']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['InternetAddress']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['InternetAddress']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['InternetAddress']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['InternetAddress']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['InternetAddress']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['InternetAddress']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['InternetAddress']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['InternetAddress']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['InternetAddress']['input']>>;
};

export type Issue = {
  __typename?: 'Issue';
  assignedRole: UserRoleEnum;
  comments: Array<IssueComment>;
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['Int']['output'];
  reportableId: Scalars['ID']['output'];
  reportableType: Scalars['String']['output'];
  reportedUser?: Maybe<User>;
  reportsCount?: Maybe<Scalars['Int']['output']>;
  resolvedAt?: Maybe<Scalars['Datetime']['output']>;
  resolvedBy?: Maybe<User>;
  status: IssueStatusEnum;
  updatedAt: Scalars['Datetime']['output'];
  updatedBy?: Maybe<User>;
};


export type IssueCommentsArgs = {
  condition?: InputMaybe<IssueCommentCondition>;
  filter?: InputMaybe<IssueCommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IssueCommentsOrderBy>>;
};

export type IssueComment = {
  __typename?: 'IssueComment';
  author?: Maybe<User>;
  body: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['Int']['output'];
  issue?: Maybe<Issue>;
  issueId: Scalars['Int']['output'];
  updatedAt: Scalars['Datetime']['output'];
  userId: Scalars['Int']['output'];
};

/**
 * A condition to be used against `IssueComment` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type IssueCommentCondition = {
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `issueId` field. */
  issueId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** A filter to be used against `IssueComment` object types. All fields are combined with a logical ‘and.’ */
export type IssueCommentFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<IssueCommentFilter>>;
  /** Filter by the object’s `body` field. */
  body?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `issueId` field. */
  issueId?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<IssueCommentFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<IssueCommentFilter>>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<IntFilter>;
};

/** Methods to use when ordering `IssueComment`. */
export enum IssueCommentsOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IssueIdAsc = 'ISSUE_ID_ASC',
  IssueIdDesc = 'ISSUE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** A condition to be used against `Issue` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type IssueCondition = {
  /** Checks for equality with the object’s `assignedRole` field. */
  assignedRole?: InputMaybe<UserRoleEnum>;
  /** Checks for equality with the object’s `reportableId` field. */
  reportableId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `reportableType` field. */
  reportableType?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `reportedUserId` field. */
  reportedUserId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `reportsCount` field. */
  reportsCount?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `resolvedBy` field. */
  resolvedBy?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<IssueStatusEnum>;
  /** Checks for equality with the object’s `updatedBy` field. */
  updatedBy?: InputMaybe<Scalars['Int']['input']>;
};

/** A filter to be used against `Issue` object types. All fields are combined with a logical ‘and.’ */
export type IssueFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<IssueFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<IssueFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<IssueFilter>>;
  /** Filter by the object’s `reportableId` field. */
  reportableId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `reportableType` field. */
  reportableType?: InputMaybe<StringFilter>;
  /** Filter by the object’s `reportedUserId` field. */
  reportedUserId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `reportsCount` field. */
  reportsCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `resolvedAt` field. */
  resolvedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `resolvedBy` field. */
  resolvedBy?: InputMaybe<IntFilter>;
  /** Filter by the object’s `status` field. */
  status?: InputMaybe<IssueStatusEnumFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `updatedBy` field. */
  updatedBy?: InputMaybe<IntFilter>;
};

export enum IssueStatusEnum {
  Ignored = 'IGNORED',
  Open = 'OPEN',
  Resolved = 'RESOLVED'
}

/** A filter to be used against IssueStatusEnum fields. All fields are combined with a logical ‘and.’ */
export type IssueStatusEnumFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<IssueStatusEnum>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<IssueStatusEnum>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<IssueStatusEnum>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<IssueStatusEnum>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<IssueStatusEnum>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<IssueStatusEnum>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<IssueStatusEnum>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<IssueStatusEnum>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<IssueStatusEnum>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<IssueStatusEnum>>;
};

/** Methods to use when ordering `Issue`. */
export enum IssuesOrderBy {
  AssignedRoleAsc = 'ASSIGNED_ROLE_ASC',
  AssignedRoleDesc = 'ASSIGNED_ROLE_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReportableIdAsc = 'REPORTABLE_ID_ASC',
  ReportableIdDesc = 'REPORTABLE_ID_DESC',
  ReportableTypeAsc = 'REPORTABLE_TYPE_ASC',
  ReportableTypeDesc = 'REPORTABLE_TYPE_DESC',
  ReportedUserIdAsc = 'REPORTED_USER_ID_ASC',
  ReportedUserIdDesc = 'REPORTED_USER_ID_DESC',
  ReportsCountAsc = 'REPORTS_COUNT_ASC',
  ReportsCountDesc = 'REPORTS_COUNT_DESC',
  ResolvedAtAsc = 'RESOLVED_AT_ASC',
  ResolvedAtDesc = 'RESOLVED_AT_DESC',
  ResolvedByAsc = 'RESOLVED_BY_ASC',
  ResolvedByDesc = 'RESOLVED_BY_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UpdatedByAsc = 'UPDATED_BY_ASC',
  UpdatedByDesc = 'UPDATED_BY_DESC'
}

export type Language = {
  __typename?: 'Language';
  code: Scalars['String']['output'];
  englishName: Scalars['String']['output'];
  nativeName?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `Language` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type LanguageCondition = {
  /** Checks for equality with the object’s `code` field. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `englishName` field. */
  englishName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nativeName` field. */
  nativeName?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Language` object types. All fields are combined with a logical ‘and.’ */
export type LanguageFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<LanguageFilter>>;
  /** Filter by the object’s `code` field. */
  code?: InputMaybe<StringFilter>;
  /** Filter by the object’s `englishName` field. */
  englishName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nativeName` field. */
  nativeName?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<LanguageFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<LanguageFilter>>;
};

/** Methods to use when ordering `Language`. */
export enum LanguagesOrderBy {
  CodeAsc = 'CODE_ASC',
  CodeDesc = 'CODE_DESC',
  EnglishNameAsc = 'ENGLISH_NAME_ASC',
  EnglishNameDesc = 'ENGLISH_NAME_DESC',
  NativeNameAsc = 'NATIVE_NAME_ASC',
  NativeNameDesc = 'NATIVE_NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Nw = Node | Way;

export type Nwr = GenericRelation | Node | Way;

export type Network = Relation & {
  __typename?: 'Network';
  changeset?: Maybe<Changeset>;
  changesetId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  members: Array<RelationMember>;
  relationTags: Array<Tag>;
  tags?: Maybe<Scalars['JSON']['output']>;
  timestamp: Scalars['Datetime']['output'];
  type?: Maybe<Scalars['RelationType']['output']>;
  version: Scalars['Int']['output'];
  visible: Scalars['Boolean']['output'];
};


export type NetworkMembersArgs = {
  condition?: InputMaybe<RelationMemberCondition>;
  filter?: InputMaybe<RelationMemberFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RelationMembersOrderBy>>;
};


export type NetworkRelationTagsArgs = {
  condition?: InputMaybe<TagCondition>;
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
};

export type Node = {
  __typename?: 'Node';
  changeset?: Maybe<Changeset>;
  geom?: Maybe<Scalars['Point']['output']>;
  id: Scalars['ID']['output'];
  lat: Scalars['Float']['output'];
  lon: Scalars['Float']['output'];
  nodeTags: Array<Tag>;
  tag?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  timestamp: Scalars['Datetime']['output'];
  version: Scalars['Int']['output'];
  visible: Scalars['Boolean']['output'];
  ways: Array<Way>;
};


export type NodeNodeTagsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
};


export type NodeTagArgs = {
  key: Scalars['String']['input'];
};


export type NodeWaysArgs = {
  condition?: InputMaybe<WayCondition>;
  filter?: InputMaybe<WayFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WaysOrderBy>>;
};

/** A condition to be used against `Node` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type NodeCondition = {
  access?: InputMaybe<Scalars['String']['input']>;
  admin_level?: InputMaybe<Scalars['String']['input']>;
  aerialway?: InputMaybe<Scalars['String']['input']>;
  aeroway?: InputMaybe<Scalars['String']['input']>;
  amenity?: InputMaybe<Scalars['String']['input']>;
  barrier?: InputMaybe<Scalars['String']['input']>;
  bench?: InputMaybe<Scalars['String']['input']>;
  bicycle?: InputMaybe<Scalars['String']['input']>;
  bicycle_parking?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  building?: InputMaybe<Scalars['String']['input']>;
  bus?: InputMaybe<Scalars['String']['input']>;
  capacity?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `changesetId` field. */
  changesetId?: InputMaybe<Scalars['ID']['input']>;
  colour?: InputMaybe<Scalars['String']['input']>;
  construction?: InputMaybe<Scalars['String']['input']>;
  covered?: InputMaybe<Scalars['String']['input']>;
  craft?: InputMaybe<Scalars['String']['input']>;
  crossing?: InputMaybe<Scalars['String']['input']>;
  cuisine?: InputMaybe<Scalars['String']['input']>;
  delivery?: InputMaybe<Scalars['String']['input']>;
  denomination?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  direction?: InputMaybe<Scalars['String']['input']>;
  door?: InputMaybe<Scalars['String']['input']>;
  drinking_water?: InputMaybe<Scalars['String']['input']>;
  ele?: InputMaybe<Scalars['String']['input']>;
  emergency?: InputMaybe<Scalars['String']['input']>;
  entrance?: InputMaybe<Scalars['String']['input']>;
  fee?: InputMaybe<Scalars['String']['input']>;
  fixme?: InputMaybe<Scalars['String']['input']>;
  foot?: InputMaybe<Scalars['String']['input']>;
  healthcare?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  highway?: InputMaybe<Scalars['String']['input']>;
  historic?: InputMaybe<Scalars['String']['input']>;
  horse?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ID']['input']>;
  indoor?: InputMaybe<Scalars['String']['input']>;
  information?: InputMaybe<Scalars['String']['input']>;
  inscription?: InputMaybe<Scalars['String']['input']>;
  internet_access?: InputMaybe<Scalars['String']['input']>;
  junction?: InputMaybe<Scalars['String']['input']>;
  kerb?: InputMaybe<Scalars['String']['input']>;
  landuse?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lat` field. */
  lat?: InputMaybe<Scalars['Int']['input']>;
  layer?: InputMaybe<Scalars['String']['input']>;
  leisure?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  lit?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `lon` field. */
  lon?: InputMaybe<Scalars['Int']['input']>;
  man_made?: InputMaybe<Scalars['String']['input']>;
  material?: InputMaybe<Scalars['String']['input']>;
  maxspeed?: InputMaybe<Scalars['String']['input']>;
  memorial?: InputMaybe<Scalars['String']['input']>;
  military?: InputMaybe<Scalars['String']['input']>;
  motor_vehicle?: InputMaybe<Scalars['String']['input']>;
  motorcar?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  natural?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  office?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  parking?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  power?: InputMaybe<Scalars['String']['input']>;
  public_transport?: InputMaybe<Scalars['String']['input']>;
  railway?: InputMaybe<Scalars['String']['input']>;
  recycling_type?: InputMaybe<Scalars['String']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  religion?: InputMaybe<Scalars['String']['input']>;
  shelter?: InputMaybe<Scalars['String']['input']>;
  shop?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  surface?: InputMaybe<Scalars['String']['input']>;
  tactile_paving?: InputMaybe<Scalars['String']['input']>;
  takeaway?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `timestamp` field. */
  timestamp?: InputMaybe<Scalars['Datetime']['input']>;
  tourism?: InputMaybe<Scalars['String']['input']>;
  traffic_sign?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  vending?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `version` field. */
  version?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `visible` field. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
  waterway?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  wheelchair?: InputMaybe<Scalars['String']['input']>;
  wikidata?: InputMaybe<Scalars['String']['input']>;
  wikipedia?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Node` object types. All fields are combined with a logical ‘and.’ */
export type NodeFilter = {
  access?: InputMaybe<StringFilter>;
  admin_level?: InputMaybe<StringFilter>;
  aerialway?: InputMaybe<StringFilter>;
  aeroway?: InputMaybe<StringFilter>;
  amenity?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NodeFilter>>;
  barrier?: InputMaybe<StringFilter>;
  bench?: InputMaybe<StringFilter>;
  bicycle?: InputMaybe<StringFilter>;
  bicycle_parking?: InputMaybe<StringFilter>;
  brand?: InputMaybe<StringFilter>;
  building?: InputMaybe<StringFilter>;
  bus?: InputMaybe<StringFilter>;
  capacity?: InputMaybe<StringFilter>;
  /** Filter by the object’s `changesetId` field. */
  changesetId?: InputMaybe<IdFilter>;
  colour?: InputMaybe<StringFilter>;
  construction?: InputMaybe<StringFilter>;
  covered?: InputMaybe<StringFilter>;
  craft?: InputMaybe<StringFilter>;
  crossing?: InputMaybe<StringFilter>;
  cuisine?: InputMaybe<StringFilter>;
  delivery?: InputMaybe<StringFilter>;
  denomination?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  direction?: InputMaybe<StringFilter>;
  door?: InputMaybe<StringFilter>;
  drinking_water?: InputMaybe<StringFilter>;
  ele?: InputMaybe<StringFilter>;
  emergency?: InputMaybe<StringFilter>;
  entrance?: InputMaybe<StringFilter>;
  fee?: InputMaybe<StringFilter>;
  fixme?: InputMaybe<StringFilter>;
  foot?: InputMaybe<StringFilter>;
  healthcare?: InputMaybe<StringFilter>;
  height?: InputMaybe<StringFilter>;
  highway?: InputMaybe<StringFilter>;
  historic?: InputMaybe<StringFilter>;
  horse?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IdFilter>;
  indoor?: InputMaybe<StringFilter>;
  information?: InputMaybe<StringFilter>;
  inscription?: InputMaybe<StringFilter>;
  internet_access?: InputMaybe<StringFilter>;
  junction?: InputMaybe<StringFilter>;
  kerb?: InputMaybe<StringFilter>;
  landuse?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lat` field. */
  lat?: InputMaybe<IntFilter>;
  layer?: InputMaybe<StringFilter>;
  leisure?: InputMaybe<StringFilter>;
  level?: InputMaybe<StringFilter>;
  lit?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lon` field. */
  lon?: InputMaybe<IntFilter>;
  man_made?: InputMaybe<StringFilter>;
  material?: InputMaybe<StringFilter>;
  maxspeed?: InputMaybe<StringFilter>;
  memorial?: InputMaybe<StringFilter>;
  military?: InputMaybe<StringFilter>;
  motor_vehicle?: InputMaybe<StringFilter>;
  motorcar?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  natural?: InputMaybe<StringFilter>;
  network?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<NodeFilter>;
  office?: InputMaybe<StringFilter>;
  operator?: InputMaybe<StringFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NodeFilter>>;
  parking?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  place?: InputMaybe<StringFilter>;
  power?: InputMaybe<StringFilter>;
  public_transport?: InputMaybe<StringFilter>;
  railway?: InputMaybe<StringFilter>;
  recycling_type?: InputMaybe<StringFilter>;
  ref?: InputMaybe<StringFilter>;
  religion?: InputMaybe<StringFilter>;
  shelter?: InputMaybe<StringFilter>;
  shop?: InputMaybe<StringFilter>;
  sport?: InputMaybe<StringFilter>;
  surface?: InputMaybe<StringFilter>;
  tactile_paving?: InputMaybe<StringFilter>;
  takeaway?: InputMaybe<StringFilter>;
  /** Filter by the object’s `timestamp` field. */
  timestamp?: InputMaybe<DatetimeFilter>;
  tourism?: InputMaybe<StringFilter>;
  traffic_sign?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  vending?: InputMaybe<StringFilter>;
  /** Filter by the object’s `version` field. */
  version?: InputMaybe<IntFilter>;
  /** Filter by the object’s `visible` field. */
  visible?: InputMaybe<BooleanFilter>;
  waterway?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
  wheelchair?: InputMaybe<StringFilter>;
  wikidata?: InputMaybe<StringFilter>;
  wikipedia?: InputMaybe<StringFilter>;
};

/** Methods to use when ordering `Node`. */
export enum NodesOrderBy {
  ChangesetIdAsc = 'CHANGESET_ID_ASC',
  ChangesetIdDesc = 'CHANGESET_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LatAsc = 'LAT_ASC',
  LongitudeAsc = 'LONGITUDE_ASC',
  LongitudeDesc = 'LONGITUDE_DESC',
  LonDesc = 'LON_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC',
  VisibleAsc = 'VISIBLE_ASC',
  VisibleDesc = 'VISIBLE_DESC'
}

export type Note = {
  __typename?: 'Note';
  authors: Array<User>;
  closedAt?: Maybe<Scalars['Datetime']['output']>;
  comments: Array<NoteComment>;
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['ID']['output'];
  lat: Scalars['Float']['output'];
  lon: Scalars['Float']['output'];
  status: NoteStatusEnum;
  updatedAt: Scalars['Datetime']['output'];
};


export type NoteAuthorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


export type NoteCommentsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NoteCommentsOrderBy>>;
};

export type NoteComment = {
  __typename?: 'NoteComment';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['ID']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  event?: Maybe<NoteEventEnum>;
  id: Scalars['ID']['output'];
  note?: Maybe<Note>;
  noteId: Scalars['ID']['output'];
  visible: Scalars['Boolean']['output'];
};

/**
 * A condition to be used against `NoteComment` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type NoteCommentCondition = {
  /** Checks for equality with the object’s `authorId` field. */
  authorId?: InputMaybe<Scalars['ID']['input']>;
  /** Checks for equality with the object’s `authorIp` field. */
  authorIp?: InputMaybe<Scalars['InternetAddress']['input']>;
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `event` field. */
  event?: InputMaybe<NoteEventEnum>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Checks for equality with the object’s `noteId` field. */
  noteId?: InputMaybe<Scalars['ID']['input']>;
  /** Checks for equality with the object’s `visible` field. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A filter to be used against `NoteComment` object types. All fields are combined with a logical ‘and.’ */
export type NoteCommentFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NoteCommentFilter>>;
  /** Filter by the object’s `authorId` field. */
  authorId?: InputMaybe<IdFilter>;
  /** Filter by the object’s `authorIp` field. */
  authorIp?: InputMaybe<InternetAddressFilter>;
  /** Filter by the object’s `body` field. */
  body?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `event` field. */
  event?: InputMaybe<NoteEventEnumFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IdFilter>;
  /** Negates the expression. */
  not?: InputMaybe<NoteCommentFilter>;
  /** Filter by the object’s `noteId` field. */
  noteId?: InputMaybe<IdFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NoteCommentFilter>>;
  /** Filter by the object’s `visible` field. */
  visible?: InputMaybe<BooleanFilter>;
};

/** Methods to use when ordering `NoteComment`. */
export enum NoteCommentsOrderBy {
  AuthorIdAsc = 'AUTHOR_ID_ASC',
  AuthorIdDesc = 'AUTHOR_ID_DESC',
  AuthorIpAsc = 'AUTHOR_IP_ASC',
  AuthorIpDesc = 'AUTHOR_IP_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EventAsc = 'EVENT_ASC',
  EventDesc = 'EVENT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  NoteIdAsc = 'NOTE_ID_ASC',
  NoteIdDesc = 'NOTE_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  VisibleAsc = 'VISIBLE_ASC',
  VisibleDesc = 'VISIBLE_DESC'
}

/** A condition to be used against `Note` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type NoteCondition = {
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<NoteStatusEnum>;
};

export enum NoteEventEnum {
  Closed = 'CLOSED',
  Commented = 'COMMENTED',
  Hidden = 'HIDDEN',
  Opened = 'OPENED',
  Reopened = 'REOPENED'
}

/** A filter to be used against NoteEventEnum fields. All fields are combined with a logical ‘and.’ */
export type NoteEventEnumFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<NoteEventEnum>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<NoteEventEnum>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<NoteEventEnum>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<NoteEventEnum>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<NoteEventEnum>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<NoteEventEnum>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<NoteEventEnum>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<NoteEventEnum>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<NoteEventEnum>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<NoteEventEnum>>;
};

/** A filter to be used against `Note` object types. All fields are combined with a logical ‘and.’ */
export type NoteFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NoteFilter>>;
  /** Filter by the object’s `closedAt` field. */
  closedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IdFilter>;
  /** Filter by the object’s `lat` field. */
  lat?: InputMaybe<IntFilter>;
  /** Filter by the object’s `lon` field. */
  lon?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<NoteFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NoteFilter>>;
  /** Filter by the object’s `status` field. */
  status?: InputMaybe<NoteStatusEnumFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export enum NoteStatusEnum {
  Closed = 'CLOSED',
  Hidden = 'HIDDEN',
  Open = 'OPEN'
}

/** A filter to be used against NoteStatusEnum fields. All fields are combined with a logical ‘and.’ */
export type NoteStatusEnumFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<NoteStatusEnum>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<NoteStatusEnum>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<NoteStatusEnum>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<NoteStatusEnum>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<NoteStatusEnum>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<NoteStatusEnum>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<NoteStatusEnum>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<NoteStatusEnum>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<NoteStatusEnum>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<NoteStatusEnum>>;
};

/** Methods to use when ordering `Note`. */
export enum NotesOrderBy {
  ClosedAtAsc = 'CLOSED_AT_ASC',
  ClosedAtDesc = 'CLOSED_AT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LatAsc = 'LAT_ASC',
  LatDesc = 'LAT_DESC',
  LonAsc = 'LON_ASC',
  LonDesc = 'LON_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export enum NwrEnum {
  Node = 'node',
  Relation = 'relation',
  Way = 'way'
}

/** A filter to be used against NwrEnum fields. All fields are combined with a logical ‘and.’ */
export type NwrEnumFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<NwrEnum>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<NwrEnum>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<NwrEnum>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<NwrEnum>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<NwrEnum>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<NwrEnum>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<NwrEnum>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<NwrEnum>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<NwrEnum>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<NwrEnum>>;
};

export type PublicTransport = Relation & {
  __typename?: 'PublicTransport';
  changeset?: Maybe<Changeset>;
  changesetId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  members: Array<RelationMember>;
  relationTags: Array<Tag>;
  tags?: Maybe<Scalars['JSON']['output']>;
  timestamp: Scalars['Datetime']['output'];
  type?: Maybe<Scalars['RelationType']['output']>;
  version: Scalars['Int']['output'];
  visible: Scalars['Boolean']['output'];
};


export type PublicTransportMembersArgs = {
  condition?: InputMaybe<RelationMemberCondition>;
  filter?: InputMaybe<RelationMemberFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RelationMembersOrderBy>>;
};


export type PublicTransportRelationTagsArgs = {
  condition?: InputMaybe<TagCondition>;
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
};

/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type Query = {
  __typename?: 'Query';
  area?: Maybe<Query>;
  around?: Maybe<Query>;
  bbox?: Maybe<Query>;
  changeset?: Maybe<Changeset>;
  issue?: Maybe<Issue>;
  issues?: Maybe<Array<Issue>>;
  languages?: Maybe<Array<Language>>;
  node?: Maybe<Node>;
  nodes?: Maybe<Array<Node>>;
  note?: Maybe<Note>;
  notes?: Maybe<Array<Note>>;
  point?: Maybe<Query>;
  query?: Maybe<Query>;
  relation?: Maybe<Relation>;
  relations?: Maybe<Array<Relation>>;
  thing?: Maybe<Nwr>;
  user?: Maybe<User>;
  way?: Maybe<Way>;
  ways?: Maybe<Array<Way>>;
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryAreaArgs = {
  name: Scalars['String']['input'];
  ref?: InputMaybe<Scalars['String']['input']>;
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryAroundArgs = {
  m?: InputMaybe<Scalars['Float']['input']>;
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryBboxArgs = {
  e: Scalars['Float']['input'];
  n: Scalars['Float']['input'];
  s: Scalars['Float']['input'];
  w: Scalars['Float']['input'];
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryChangesetArgs = {
  id: Scalars['ID']['input'];
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryIssueArgs = {
  id: Scalars['Int']['input'];
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryIssuesArgs = {
  condition?: InputMaybe<IssueCondition>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IssuesOrderBy>>;
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryLanguagesArgs = {
  condition?: InputMaybe<LanguageCondition>;
  filter?: InputMaybe<LanguageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>;
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryNodesArgs = {
  access?: InputMaybe<Scalars['String']['input']>;
  admin_level?: InputMaybe<Scalars['String']['input']>;
  aerialway?: InputMaybe<Scalars['String']['input']>;
  aeroway?: InputMaybe<Scalars['String']['input']>;
  amenity?: InputMaybe<Scalars['String']['input']>;
  barrier?: InputMaybe<Scalars['String']['input']>;
  bench?: InputMaybe<Scalars['String']['input']>;
  bicycle?: InputMaybe<Scalars['String']['input']>;
  bicycle_parking?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  building?: InputMaybe<Scalars['String']['input']>;
  bus?: InputMaybe<Scalars['String']['input']>;
  capacity?: InputMaybe<Scalars['String']['input']>;
  colour?: InputMaybe<Scalars['String']['input']>;
  condition?: InputMaybe<NodeCondition>;
  construction?: InputMaybe<Scalars['String']['input']>;
  covered?: InputMaybe<Scalars['String']['input']>;
  craft?: InputMaybe<Scalars['String']['input']>;
  crossing?: InputMaybe<Scalars['String']['input']>;
  cuisine?: InputMaybe<Scalars['String']['input']>;
  delivery?: InputMaybe<Scalars['String']['input']>;
  denomination?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  direction?: InputMaybe<Scalars['String']['input']>;
  door?: InputMaybe<Scalars['String']['input']>;
  drinking_water?: InputMaybe<Scalars['String']['input']>;
  ele?: InputMaybe<Scalars['String']['input']>;
  emergency?: InputMaybe<Scalars['String']['input']>;
  entrance?: InputMaybe<Scalars['String']['input']>;
  fee?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NodeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fixme?: InputMaybe<Scalars['String']['input']>;
  foot?: InputMaybe<Scalars['String']['input']>;
  healthcare?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  highway?: InputMaybe<Scalars['String']['input']>;
  historic?: InputMaybe<Scalars['String']['input']>;
  horse?: InputMaybe<Scalars['String']['input']>;
  indoor?: InputMaybe<Scalars['String']['input']>;
  information?: InputMaybe<Scalars['String']['input']>;
  inscription?: InputMaybe<Scalars['String']['input']>;
  internet_access?: InputMaybe<Scalars['String']['input']>;
  junction?: InputMaybe<Scalars['String']['input']>;
  kerb?: InputMaybe<Scalars['String']['input']>;
  landuse?: InputMaybe<Scalars['String']['input']>;
  layer?: InputMaybe<Scalars['String']['input']>;
  leisure?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  lit?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  man_made?: InputMaybe<Scalars['String']['input']>;
  material?: InputMaybe<Scalars['String']['input']>;
  maxspeed?: InputMaybe<Scalars['String']['input']>;
  memorial?: InputMaybe<Scalars['String']['input']>;
  military?: InputMaybe<Scalars['String']['input']>;
  motor_vehicle?: InputMaybe<Scalars['String']['input']>;
  motorcar?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  natural?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  office?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Array<NodesOrderBy>>;
  parking?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  place?: InputMaybe<Scalars['String']['input']>;
  power?: InputMaybe<Scalars['String']['input']>;
  public_transport?: InputMaybe<Scalars['String']['input']>;
  railway?: InputMaybe<Scalars['String']['input']>;
  recycling_type?: InputMaybe<Scalars['String']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  religion?: InputMaybe<Scalars['String']['input']>;
  shelter?: InputMaybe<Scalars['String']['input']>;
  shop?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  surface?: InputMaybe<Scalars['String']['input']>;
  tactile_paving?: InputMaybe<Scalars['String']['input']>;
  takeaway?: InputMaybe<Scalars['String']['input']>;
  tourism?: InputMaybe<Scalars['String']['input']>;
  traffic_sign?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  vending?: InputMaybe<Scalars['String']['input']>;
  waterway?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  wheelchair?: InputMaybe<Scalars['String']['input']>;
  wikidata?: InputMaybe<Scalars['String']['input']>;
  wikipedia?: InputMaybe<Scalars['String']['input']>;
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryNoteArgs = {
  id: Scalars['ID']['input'];
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryNotesArgs = {
  condition?: InputMaybe<NoteCondition>;
  filter?: InputMaybe<NoteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NotesOrderBy>>;
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryPointArgs = {
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryQueryArgs = {
  bbox?: InputMaybe<Array<Scalars['Float']['input']>>;
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryRelationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryRelationsArgs = {
  condition?: InputMaybe<RelationCondition>;
  filter?: InputMaybe<RelationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RelationsOrderBy>>;
  type?: InputMaybe<Scalars['RelationType']['input']>;
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryThingArgs = {
  uri: Scalars['ID']['input'];
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryWayArgs = {
  id: Scalars['ID']['input'];
};


/** The root query for an OSM API gateway which gives access points into the OSM universe. */
export type QueryWaysArgs = {
  condition?: InputMaybe<WayCondition>;
  filter?: InputMaybe<WayFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WaysOrderBy>>;
};

export type Redaction = {
  __typename?: 'Redaction';
  changesets: Array<Changeset>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionFormat: FormatEnum;
  id: Scalars['ID']['output'];
  nodes: Array<Node>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
};


export type RedactionChangesetsArgs = {
  condition?: InputMaybe<ChangesetCondition>;
  filter?: InputMaybe<ChangesetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChangesetsOrderBy>>;
};


export type RedactionNodesArgs = {
  condition?: InputMaybe<NodeCondition>;
  filter?: InputMaybe<NodeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NodesOrderBy>>;
};

export type Relation = {
  id: Scalars['ID']['output'];
  members: Array<RelationMember>;
  tags?: Maybe<Scalars['JSON']['output']>;
  type?: Maybe<Scalars['RelationType']['output']>;
  version: Scalars['Int']['output'];
};


export type RelationMembersArgs = {
  condition?: InputMaybe<RelationMemberCondition>;
  filter?: InputMaybe<RelationMemberFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RelationMembersOrderBy>>;
};

/**
 * A condition to be used against `Relation` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type RelationCondition = {
  /** Checks for equality with the object’s `changesetId` field. */
  changesetId?: InputMaybe<Scalars['ID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Checks for equality with the object’s `timestamp` field. */
  timestamp?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `version` field. */
  version?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `visible` field. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A filter to be used against `Relation` object types. All fields are combined with a logical ‘and.’ */
export type RelationFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RelationFilter>>;
  /** Filter by the object’s `changesetId` field. */
  changesetId?: InputMaybe<IdFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IdFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RelationFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RelationFilter>>;
  /** Filter by the object’s `timestamp` field. */
  timestamp?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `version` field. */
  version?: InputMaybe<IntFilter>;
  /** Filter by the object’s `visible` field. */
  visible?: InputMaybe<BooleanFilter>;
};

export type RelationMember = {
  memberId: Scalars['ID']['output'];
  ref?: Maybe<Nwr>;
  role?: Maybe<Scalars['String']['output']>;
  sequenceId: Scalars['Int']['output'];
  type: NwrEnum;
};

/**
 * A condition to be used against `RelationMember` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RelationMemberCondition = {
  /** Checks for equality with the object’s `memberId` field. */
  memberId?: InputMaybe<Scalars['ID']['input']>;
  /** Checks for equality with the object’s `memberRole` field. */
  memberRole?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `memberType` field. */
  memberType?: InputMaybe<NwrEnum>;
  /** Checks for equality with the object’s `relationId` field. */
  relationId?: InputMaybe<Scalars['ID']['input']>;
  /** Checks for equality with the object’s `sequenceId` field. */
  sequenceId?: InputMaybe<Scalars['Int']['input']>;
};

/** A filter to be used against `RelationMember` object types. All fields are combined with a logical ‘and.’ */
export type RelationMemberFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RelationMemberFilter>>;
  /** Filter by the object’s `memberId` field. */
  memberId?: InputMaybe<IdFilter>;
  /** Filter by the object’s `memberRole` field. */
  memberRole?: InputMaybe<StringFilter>;
  /** Filter by the object’s `memberType` field. */
  memberType?: InputMaybe<NwrEnumFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RelationMemberFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RelationMemberFilter>>;
  /** Filter by the object’s `relationId` field. */
  relationId?: InputMaybe<IdFilter>;
  /** Filter by the object’s `sequenceId` field. */
  sequenceId?: InputMaybe<IntFilter>;
};

export type RelationMemberNode = RelationMember & {
  __typename?: 'RelationMemberNode';
  memberId: Scalars['ID']['output'];
  node?: Maybe<Node>;
  ref?: Maybe<Node>;
  role?: Maybe<Scalars['String']['output']>;
  sequenceId: Scalars['Int']['output'];
  type: NwrEnum;
};

export type RelationMemberRelation = RelationMember & {
  __typename?: 'RelationMemberRelation';
  memberId: Scalars['ID']['output'];
  ref?: Maybe<GenericRelation>;
  relation?: Maybe<GenericRelation>;
  role?: Maybe<Scalars['String']['output']>;
  sequenceId: Scalars['Int']['output'];
  type: NwrEnum;
};

export type RelationMemberWay = RelationMember & {
  __typename?: 'RelationMemberWay';
  memberId: Scalars['ID']['output'];
  ref?: Maybe<Way>;
  role?: Maybe<Scalars['String']['output']>;
  sequenceId: Scalars['Int']['output'];
  type: NwrEnum;
  way?: Maybe<Way>;
};

/** Methods to use when ordering `RelationMember`. */
export enum RelationMembersOrderBy {
  MemberIdAsc = 'MEMBER_ID_ASC',
  MemberIdDesc = 'MEMBER_ID_DESC',
  MemberRoleAsc = 'MEMBER_ROLE_ASC',
  MemberRoleDesc = 'MEMBER_ROLE_DESC',
  MemberTypeAsc = 'MEMBER_TYPE_ASC',
  MemberTypeDesc = 'MEMBER_TYPE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RelationIdAsc = 'RELATION_ID_ASC',
  RelationIdDesc = 'RELATION_ID_DESC',
  SequenceIdAsc = 'SEQUENCE_ID_ASC',
  SequenceIdDesc = 'SEQUENCE_ID_DESC'
}

/** Methods to use when ordering `Relation`. */
export enum RelationsOrderBy {
  ChangesetIdAsc = 'CHANGESET_ID_ASC',
  ChangesetIdDesc = 'CHANGESET_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC',
  VisibleAsc = 'VISIBLE_ASC',
  VisibleDesc = 'VISIBLE_DESC'
}

export type Route = Relation & {
  __typename?: 'Route';
  changeset?: Maybe<Changeset>;
  changesetId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  members: Array<RelationMember>;
  relationTags: Array<Tag>;
  tags?: Maybe<Scalars['JSON']['output']>;
  timestamp: Scalars['Datetime']['output'];
  type?: Maybe<Scalars['RelationType']['output']>;
  version: Scalars['Int']['output'];
  visible: Scalars['Boolean']['output'];
};


export type RouteMembersArgs = {
  condition?: InputMaybe<RelationMemberCondition>;
  filter?: InputMaybe<RelationMemberFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RelationMembersOrderBy>>;
};


export type RouteRelationTagsArgs = {
  condition?: InputMaybe<TagCondition>;
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
};

export type Site = Relation & {
  __typename?: 'Site';
  changeset?: Maybe<Changeset>;
  changesetId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  members: Array<RelationMember>;
  relationTags: Array<Tag>;
  tags?: Maybe<Scalars['JSON']['output']>;
  timestamp: Scalars['Datetime']['output'];
  type?: Maybe<Scalars['RelationType']['output']>;
  version: Scalars['Int']['output'];
  visible: Scalars['Boolean']['output'];
};


export type SiteMembersArgs = {
  condition?: InputMaybe<RelationMemberCondition>;
  filter?: InputMaybe<RelationMemberFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RelationMembersOrderBy>>;
};


export type SiteRelationTagsArgs = {
  condition?: InputMaybe<TagCondition>;
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']['input']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']['input']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']['input']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  k: Scalars['String']['output'];
  v: Scalars['String']['output'];
  wikidata?: Maybe<WikidataEntity>;
};

export type TagCondition = {
  /** Checks for equality with the tag's key field. */
  k?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the tags’s value field. */
  v?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Tag` object types. All fields are combined with a logical ‘and.’ */
export type TagFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TagFilter>>;
  /** Filter by the object’s `k` field. */
  k?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TagFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TagFilter>>;
  /** Filter by the object’s `v` field. */
  v?: InputMaybe<StringFilter>;
};

/** Methods to use when ordering `Tag`. */
export enum TagsOrderBy {
  KAsc = 'K_ASC',
  KDesc = 'K_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  VAsc = 'V_ASC',
  VDesc = 'V_DESC'
}

export type User = {
  __typename?: 'User';
  changesets: Array<Changeset>;
  changesetsCount: Scalars['Int']['output'];
  dataPublic: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  descriptionFormat: FormatEnum;
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageUseGravatar: Scalars['Boolean']['output'];
  languages?: Maybe<Scalars['String']['output']>;
  status: UserStatusEnum;
  tracesCount: Scalars['Int']['output'];
};


export type UserChangesetsArgs = {
  condition?: InputMaybe<ChangesetCondition>;
  filter?: InputMaybe<ChangesetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChangesetsOrderBy>>;
};

export enum UserRoleEnum {
  Administrator = 'ADMINISTRATOR',
  Moderator = 'MODERATOR'
}

export enum UserStatusEnum {
  Active = 'ACTIVE',
  Confirmed = 'CONFIRMED',
  Deleted = 'DELETED',
  Pending = 'PENDING',
  Suspended = 'SUSPENDED'
}

/** A filter to be used against UserStatusEnum fields. All fields are combined with a logical ‘and.’ */
export type UserStatusEnumFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<UserStatusEnum>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<UserStatusEnum>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<UserStatusEnum>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<UserStatusEnum>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<UserStatusEnum>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<UserStatusEnum>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<UserStatusEnum>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<UserStatusEnum>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<UserStatusEnum>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<UserStatusEnum>>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  ChangesetsCountAsc = 'CHANGESETS_COUNT_ASC',
  ChangesetsCountDesc = 'CHANGESETS_COUNT_DESC',
  CreationTimeAsc = 'CREATION_TIME_ASC',
  CreationTimeDesc = 'CREATION_TIME_DESC',
  DisplayNameAsc = 'DISPLAY_NAME_ASC',
  DisplayNameDesc = 'DISPLAY_NAME_DESC',
  LanguagesAsc = 'LANGUAGES_ASC',
  LanguagesDesc = 'LANGUAGES_DESC',
  Natural = 'NATURAL',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC'
}

export type Wr = Boundary | GenericRelation | Way;

export type Way = {
  __typename?: 'Way';
  changeset?: Maybe<Changeset>;
  geom?: Maybe<Scalars['LineString']['output']>;
  id: Scalars['ID']['output'];
  nodes: Array<Node>;
  tag?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  timestamp: Scalars['Datetime']['output'];
  version: Scalars['Int']['output'];
  visible: Scalars['Boolean']['output'];
  wayTags: Array<Tag>;
};


export type WayNodesArgs = {
  condition?: InputMaybe<NodeCondition>;
  filter?: InputMaybe<NodeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NodesOrderBy>>;
};


export type WayTagArgs = {
  key: Scalars['String']['input'];
};


export type WayWayTagsArgs = {
  condition?: InputMaybe<TagCondition>;
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
};

/** A condition to be used against `Way` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type WayCondition = {
  /** Checks for equality with the object’s `changesetId` field. */
  changesetId?: InputMaybe<Scalars['ID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Checks for equality with the object’s `timestamp` field. */
  timestamp?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `version` field. */
  version?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `visible` field. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A filter to be used against `Way` object types. All fields are combined with a logical ‘and.’ */
export type WayFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<WayFilter>>;
  /** Filter by the object’s `changesetId` field. */
  changesetId?: InputMaybe<IdFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IdFilter>;
  /** Negates the expression. */
  not?: InputMaybe<WayFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<WayFilter>>;
  /** Filter by the object’s `timestamp` field. */
  timestamp?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `version` field. */
  version?: InputMaybe<IntFilter>;
  /** Filter by the object’s `visible` field. */
  visible?: InputMaybe<BooleanFilter>;
};

/** A filter to be used against `WayTag` object types. All fields are combined with a logical ‘and.’ */
export type WayTagFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<WayTagFilter>>;
  /** Filter by the object’s `k` field. */
  k?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<WayTagFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<WayTagFilter>>;
  /** Filter by the object’s `v` field. */
  v?: InputMaybe<StringFilter>;
  /** Filter by the object’s `wayId` field. */
  wayId?: InputMaybe<IdFilter>;
};

/** Methods to use when ordering `Way`. */
export enum WaysOrderBy {
  ChangesetIdAsc = 'CHANGESET_ID_ASC',
  ChangesetIdDesc = 'CHANGESET_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC',
  VisibleAsc = 'VISIBLE_ASC',
  VisibleDesc = 'VISIBLE_DESC'
}

export type WikidataEntity = {
  __typename?: 'WikidataEntity';
  uri?: Maybe<Scalars['ID']['output']>;
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
  AllRelations: ( Boundary ) | ( GenericRelation ) | ( Network ) | ( PublicTransport ) | ( Route ) | ( Site );
  NW: ( Node ) | ( Way );
  NWR: ( GenericRelation ) | ( Node ) | ( Way );
  WR: ( Boundary ) | ( GenericRelation ) | ( Way );
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Relation: ( Boundary ) | ( GenericRelation ) | ( Network ) | ( PublicTransport ) | ( Route ) | ( Site );
  RelationMember: ( RelationMemberNode ) | ( RelationMemberRelation ) | ( RelationMemberWay );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AllRelations: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AllRelations']>;
  Area: ResolverTypeWrapper<Area>;
  BBox: ResolverTypeWrapper<Scalars['BBox']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BooleanFilter: BooleanFilter;
  Boundary: ResolverTypeWrapper<Boundary>;
  Changeset: ResolverTypeWrapper<Changeset>;
  ChangesetComment: ResolverTypeWrapper<ChangesetComment>;
  ChangesetCommentCondition: ChangesetCommentCondition;
  ChangesetCommentFilter: ChangesetCommentFilter;
  ChangesetCommentsOrderBy: ChangesetCommentsOrderBy;
  ChangesetCondition: ChangesetCondition;
  ChangesetFilter: ChangesetFilter;
  ChangesetsOrderBy: ChangesetsOrderBy;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']['output']>;
  DatetimeFilter: DatetimeFilter;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FloatFilter: FloatFilter;
  FormatEnum: FormatEnum;
  FormatEnumFilter: FormatEnumFilter;
  GenericRelation: ResolverTypeWrapper<GenericRelation>;
  Geometry: ResolverTypeWrapper<Scalars['Geometry']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IDFilter: IdFilter;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntFilter: IntFilter;
  InternetAddress: ResolverTypeWrapper<Scalars['InternetAddress']['output']>;
  InternetAddressFilter: InternetAddressFilter;
  Issue: ResolverTypeWrapper<Issue>;
  IssueComment: ResolverTypeWrapper<IssueComment>;
  IssueCommentCondition: IssueCommentCondition;
  IssueCommentFilter: IssueCommentFilter;
  IssueCommentsOrderBy: IssueCommentsOrderBy;
  IssueCondition: IssueCondition;
  IssueFilter: IssueFilter;
  IssueStatusEnum: IssueStatusEnum;
  IssueStatusEnumFilter: IssueStatusEnumFilter;
  IssuesOrderBy: IssuesOrderBy;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Language: ResolverTypeWrapper<Language>;
  LanguageCondition: LanguageCondition;
  LanguageFilter: LanguageFilter;
  LanguagesOrderBy: LanguagesOrderBy;
  LineString: ResolverTypeWrapper<Scalars['LineString']['output']>;
  NW: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['NW']>;
  NWR: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['NWR']>;
  Network: ResolverTypeWrapper<Network>;
  Node: ResolverTypeWrapper<Node>;
  NodeCondition: NodeCondition;
  NodeFilter: NodeFilter;
  NodesOrderBy: NodesOrderBy;
  Note: ResolverTypeWrapper<Note>;
  NoteComment: ResolverTypeWrapper<NoteComment>;
  NoteCommentCondition: NoteCommentCondition;
  NoteCommentFilter: NoteCommentFilter;
  NoteCommentsOrderBy: NoteCommentsOrderBy;
  NoteCondition: NoteCondition;
  NoteEventEnum: NoteEventEnum;
  NoteEventEnumFilter: NoteEventEnumFilter;
  NoteFilter: NoteFilter;
  NoteStatusEnum: NoteStatusEnum;
  NoteStatusEnumFilter: NoteStatusEnumFilter;
  NotesOrderBy: NotesOrderBy;
  NwrEnum: NwrEnum;
  NwrEnumFilter: NwrEnumFilter;
  Point: ResolverTypeWrapper<Scalars['Point']['output']>;
  Polygon: ResolverTypeWrapper<Scalars['Polygon']['output']>;
  PublicTransport: ResolverTypeWrapper<PublicTransport>;
  Query: ResolverTypeWrapper<{}>;
  Redaction: ResolverTypeWrapper<Redaction>;
  Relation: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Relation']>;
  RelationCondition: RelationCondition;
  RelationFilter: RelationFilter;
  RelationMember: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['RelationMember']>;
  RelationMemberCondition: RelationMemberCondition;
  RelationMemberFilter: RelationMemberFilter;
  RelationMemberNode: ResolverTypeWrapper<RelationMemberNode>;
  RelationMemberRelation: ResolverTypeWrapper<RelationMemberRelation>;
  RelationMemberWay: ResolverTypeWrapper<RelationMemberWay>;
  RelationMembersOrderBy: RelationMembersOrderBy;
  RelationType: ResolverTypeWrapper<Scalars['RelationType']['output']>;
  RelationsOrderBy: RelationsOrderBy;
  Route: ResolverTypeWrapper<Route>;
  Site: ResolverTypeWrapper<Site>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringFilter: StringFilter;
  Tag: ResolverTypeWrapper<Tag>;
  TagCondition: TagCondition;
  TagFilter: TagFilter;
  TagsOrderBy: TagsOrderBy;
  User: ResolverTypeWrapper<User>;
  UserRoleEnum: UserRoleEnum;
  UserStatusEnum: UserStatusEnum;
  UserStatusEnumFilter: UserStatusEnumFilter;
  UsersOrderBy: UsersOrderBy;
  WR: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['WR']>;
  Way: ResolverTypeWrapper<Way>;
  WayCondition: WayCondition;
  WayFilter: WayFilter;
  WayTagFilter: WayTagFilter;
  WaysOrderBy: WaysOrderBy;
  WikidataEntity: ResolverTypeWrapper<WikidataEntity>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AllRelations: ResolversUnionTypes<ResolversParentTypes>['AllRelations'];
  Area: Area;
  BBox: Scalars['BBox']['output'];
  Boolean: Scalars['Boolean']['output'];
  BooleanFilter: BooleanFilter;
  Boundary: Boundary;
  Changeset: Changeset;
  ChangesetComment: ChangesetComment;
  ChangesetCommentCondition: ChangesetCommentCondition;
  ChangesetCommentFilter: ChangesetCommentFilter;
  ChangesetCondition: ChangesetCondition;
  ChangesetFilter: ChangesetFilter;
  Datetime: Scalars['Datetime']['output'];
  DatetimeFilter: DatetimeFilter;
  Float: Scalars['Float']['output'];
  FloatFilter: FloatFilter;
  FormatEnumFilter: FormatEnumFilter;
  GenericRelation: GenericRelation;
  Geometry: Scalars['Geometry']['output'];
  ID: Scalars['ID']['output'];
  IDFilter: IdFilter;
  Int: Scalars['Int']['output'];
  IntFilter: IntFilter;
  InternetAddress: Scalars['InternetAddress']['output'];
  InternetAddressFilter: InternetAddressFilter;
  Issue: Issue;
  IssueComment: IssueComment;
  IssueCommentCondition: IssueCommentCondition;
  IssueCommentFilter: IssueCommentFilter;
  IssueCondition: IssueCondition;
  IssueFilter: IssueFilter;
  IssueStatusEnumFilter: IssueStatusEnumFilter;
  JSON: Scalars['JSON']['output'];
  Language: Language;
  LanguageCondition: LanguageCondition;
  LanguageFilter: LanguageFilter;
  LineString: Scalars['LineString']['output'];
  NW: ResolversUnionTypes<ResolversParentTypes>['NW'];
  NWR: ResolversUnionTypes<ResolversParentTypes>['NWR'];
  Network: Network;
  Node: Node;
  NodeCondition: NodeCondition;
  NodeFilter: NodeFilter;
  Note: Note;
  NoteComment: NoteComment;
  NoteCommentCondition: NoteCommentCondition;
  NoteCommentFilter: NoteCommentFilter;
  NoteCondition: NoteCondition;
  NoteEventEnumFilter: NoteEventEnumFilter;
  NoteFilter: NoteFilter;
  NoteStatusEnumFilter: NoteStatusEnumFilter;
  NwrEnumFilter: NwrEnumFilter;
  Point: Scalars['Point']['output'];
  Polygon: Scalars['Polygon']['output'];
  PublicTransport: PublicTransport;
  Query: {};
  Redaction: Redaction;
  Relation: ResolversInterfaceTypes<ResolversParentTypes>['Relation'];
  RelationCondition: RelationCondition;
  RelationFilter: RelationFilter;
  RelationMember: ResolversInterfaceTypes<ResolversParentTypes>['RelationMember'];
  RelationMemberCondition: RelationMemberCondition;
  RelationMemberFilter: RelationMemberFilter;
  RelationMemberNode: RelationMemberNode;
  RelationMemberRelation: RelationMemberRelation;
  RelationMemberWay: RelationMemberWay;
  RelationType: Scalars['RelationType']['output'];
  Route: Route;
  Site: Site;
  String: Scalars['String']['output'];
  StringFilter: StringFilter;
  Tag: Tag;
  TagCondition: TagCondition;
  TagFilter: TagFilter;
  User: User;
  UserStatusEnumFilter: UserStatusEnumFilter;
  WR: ResolversUnionTypes<ResolversParentTypes>['WR'];
  Way: Way;
  WayCondition: WayCondition;
  WayFilter: WayFilter;
  WayTagFilter: WayTagFilter;
  WikidataEntity: WikidataEntity;
};

export type AllRelationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AllRelations'] = ResolversParentTypes['AllRelations']> = {
  __resolveType: TypeResolveFn<'Boundary' | 'GenericRelation' | 'Network' | 'PublicTransport' | 'Route' | 'Site', ParentType, ContextType>;
};

export type AreaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Area'] = ResolversParentTypes['Area']> = {
  geom?: Resolver<Maybe<ResolversTypes['Polygon']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BBoxScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BBox'], any> {
  name: 'BBox';
}

export type BoundaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Boundary'] = ResolversParentTypes['Boundary']> = {
  changeset?: Resolver<Maybe<ResolversTypes['Changeset']>, ParentType, ContextType>;
  changesetId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['RelationMember']>, ParentType, ContextType, Partial<BoundaryMembersArgs>>;
  relationTags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType, Partial<BoundaryRelationTagsArgs>>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['RelationType']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChangesetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Changeset'] = ResolversParentTypes['Changeset']> = {
  changesetTags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType, Partial<ChangesetChangesetTagsArgs>>;
  closedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['ChangesetComment']>, ParentType, ContextType, Partial<ChangesetCommentsArgs>>;
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maxLat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxLon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minLat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minLon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType, Partial<ChangesetNodesArgs>>;
  numChanges?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relations?: Resolver<Array<ResolversTypes['Relation']>, ParentType, ContextType, Partial<ChangesetRelationsArgs>>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ways?: Resolver<Array<ResolversTypes['Way']>, ParentType, ContextType, Partial<ChangesetWaysArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChangesetCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChangesetComment'] = ResolversParentTypes['ChangesetComment']> = {
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  authorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  changeset?: Resolver<Maybe<ResolversTypes['Changeset']>, ParentType, ContextType>;
  changesetId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export type GenericRelationResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenericRelation'] = ResolversParentTypes['GenericRelation']> = {
  changeset?: Resolver<Maybe<ResolversTypes['Changeset']>, ParentType, ContextType>;
  changesetId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['RelationMember']>, ParentType, ContextType, Partial<GenericRelationMembersArgs>>;
  relationTags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType, Partial<GenericRelationRelationTagsArgs>>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<GenericRelationTagArgs, 'key'>>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['RelationType']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GeometryScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Geometry'], any> {
  name: 'Geometry';
}

export interface InternetAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['InternetAddress'], any> {
  name: 'InternetAddress';
}

export type IssueResolvers<ContextType = any, ParentType extends ResolversParentTypes['Issue'] = ResolversParentTypes['Issue']> = {
  assignedRole?: Resolver<ResolversTypes['UserRoleEnum'], ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['IssueComment']>, ParentType, ContextType, Partial<IssueCommentsArgs>>;
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reportableId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reportableType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reportedUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  reportsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  resolvedAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  resolvedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['IssueStatusEnum'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IssueCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['IssueComment'] = ResolversParentTypes['IssueComment']> = {
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  issue?: Resolver<Maybe<ResolversTypes['Issue']>, ParentType, ContextType>;
  issueId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  englishName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nativeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LineStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LineString'], any> {
  name: 'LineString';
}

export type NwResolvers<ContextType = any, ParentType extends ResolversParentTypes['NW'] = ResolversParentTypes['NW']> = {
  __resolveType: TypeResolveFn<'Node' | 'Way', ParentType, ContextType>;
};

export type NwrResolvers<ContextType = any, ParentType extends ResolversParentTypes['NWR'] = ResolversParentTypes['NWR']> = {
  __resolveType: TypeResolveFn<'GenericRelation' | 'Node' | 'Way', ParentType, ContextType>;
};

export type NetworkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Network'] = ResolversParentTypes['Network']> = {
  changeset?: Resolver<Maybe<ResolversTypes['Changeset']>, ParentType, ContextType>;
  changesetId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['RelationMember']>, ParentType, ContextType, Partial<NetworkMembersArgs>>;
  relationTags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType, Partial<NetworkRelationTagsArgs>>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['RelationType']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  changeset?: Resolver<Maybe<ResolversTypes['Changeset']>, ParentType, ContextType>;
  geom?: Resolver<Maybe<ResolversTypes['Point']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lon?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  nodeTags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType, Partial<NodeNodeTagsArgs>>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<NodeTagArgs, 'key'>>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  ways?: Resolver<Array<ResolversTypes['Way']>, ParentType, ContextType, Partial<NodeWaysArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Note'] = ResolversParentTypes['Note']> = {
  authors?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, Partial<NoteAuthorsArgs>>;
  closedAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['NoteComment']>, ParentType, ContextType, Partial<NoteCommentsArgs>>;
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lon?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['NoteStatusEnum'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NoteCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['NoteComment'] = ResolversParentTypes['NoteComment']> = {
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['NoteEventEnum']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['Note']>, ParentType, ContextType>;
  noteId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface PointScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Point'], any> {
  name: 'Point';
}

export interface PolygonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Polygon'], any> {
  name: 'Polygon';
}

export type PublicTransportResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicTransport'] = ResolversParentTypes['PublicTransport']> = {
  changeset?: Resolver<Maybe<ResolversTypes['Changeset']>, ParentType, ContextType>;
  changesetId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['RelationMember']>, ParentType, ContextType, Partial<PublicTransportMembersArgs>>;
  relationTags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType, Partial<PublicTransportRelationTagsArgs>>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['RelationType']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  area?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType, RequireFields<QueryAreaArgs, 'name'>>;
  around?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType, RequireFields<QueryAroundArgs, 'm'>>;
  bbox?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType, RequireFields<QueryBboxArgs, 'e' | 'n' | 's' | 'w'>>;
  changeset?: Resolver<Maybe<ResolversTypes['Changeset']>, ParentType, ContextType, RequireFields<QueryChangesetArgs, 'id'>>;
  issue?: Resolver<Maybe<ResolversTypes['Issue']>, ParentType, ContextType, RequireFields<QueryIssueArgs, 'id'>>;
  issues?: Resolver<Maybe<Array<ResolversTypes['Issue']>>, ParentType, ContextType, Partial<QueryIssuesArgs>>;
  languages?: Resolver<Maybe<Array<ResolversTypes['Language']>>, ParentType, ContextType, Partial<QueryLanguagesArgs>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>;
  nodes?: Resolver<Maybe<Array<ResolversTypes['Node']>>, ParentType, ContextType, Partial<QueryNodesArgs>>;
  note?: Resolver<Maybe<ResolversTypes['Note']>, ParentType, ContextType, RequireFields<QueryNoteArgs, 'id'>>;
  notes?: Resolver<Maybe<Array<ResolversTypes['Note']>>, ParentType, ContextType, Partial<QueryNotesArgs>>;
  point?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType, RequireFields<QueryPointArgs, 'lat' | 'lon'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType, Partial<QueryQueryArgs>>;
  relation?: Resolver<Maybe<ResolversTypes['Relation']>, ParentType, ContextType, Partial<QueryRelationArgs>>;
  relations?: Resolver<Maybe<Array<ResolversTypes['Relation']>>, ParentType, ContextType, Partial<QueryRelationsArgs>>;
  thing?: Resolver<Maybe<ResolversTypes['NWR']>, ParentType, ContextType, RequireFields<QueryThingArgs, 'uri'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  way?: Resolver<Maybe<ResolversTypes['Way']>, ParentType, ContextType, RequireFields<QueryWayArgs, 'id'>>;
  ways?: Resolver<Maybe<Array<ResolversTypes['Way']>>, ParentType, ContextType, Partial<QueryWaysArgs>>;
};

export type RedactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Redaction'] = ResolversParentTypes['Redaction']> = {
  changesets?: Resolver<Array<ResolversTypes['Changeset']>, ParentType, ContextType, Partial<RedactionChangesetsArgs>>;
  createdAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descriptionFormat?: Resolver<ResolversTypes['FormatEnum'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType, Partial<RedactionNodesArgs>>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RelationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Relation'] = ResolversParentTypes['Relation']> = {
  __resolveType: TypeResolveFn<'Boundary' | 'GenericRelation' | 'Network' | 'PublicTransport' | 'Route' | 'Site', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['RelationMember']>, ParentType, ContextType, Partial<RelationMembersArgs>>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['RelationType']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type RelationMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['RelationMember'] = ResolversParentTypes['RelationMember']> = {
  __resolveType: TypeResolveFn<'RelationMemberNode' | 'RelationMemberRelation' | 'RelationMemberWay', ParentType, ContextType>;
  memberId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ref?: Resolver<Maybe<ResolversTypes['NWR']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sequenceId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['NwrEnum'], ParentType, ContextType>;
};

export type RelationMemberNodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RelationMemberNode'] = ResolversParentTypes['RelationMemberNode']> = {
  memberId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  ref?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sequenceId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['NwrEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RelationMemberRelationResolvers<ContextType = any, ParentType extends ResolversParentTypes['RelationMemberRelation'] = ResolversParentTypes['RelationMemberRelation']> = {
  memberId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ref?: Resolver<Maybe<ResolversTypes['GenericRelation']>, ParentType, ContextType>;
  relation?: Resolver<Maybe<ResolversTypes['GenericRelation']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sequenceId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['NwrEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RelationMemberWayResolvers<ContextType = any, ParentType extends ResolversParentTypes['RelationMemberWay'] = ResolversParentTypes['RelationMemberWay']> = {
  memberId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ref?: Resolver<Maybe<ResolversTypes['Way']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sequenceId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['NwrEnum'], ParentType, ContextType>;
  way?: Resolver<Maybe<ResolversTypes['Way']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RelationTypeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RelationType'], any> {
  name: 'RelationType';
}

export type RouteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Route'] = ResolversParentTypes['Route']> = {
  changeset?: Resolver<Maybe<ResolversTypes['Changeset']>, ParentType, ContextType>;
  changesetId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['RelationMember']>, ParentType, ContextType, Partial<RouteMembersArgs>>;
  relationTags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType, Partial<RouteRelationTagsArgs>>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['RelationType']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Site'] = ResolversParentTypes['Site']> = {
  changeset?: Resolver<Maybe<ResolversTypes['Changeset']>, ParentType, ContextType>;
  changesetId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['RelationMember']>, ParentType, ContextType, Partial<SiteMembersArgs>>;
  relationTags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType, Partial<SiteRelationTagsArgs>>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['RelationType']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  k?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  v?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wikidata?: Resolver<Maybe<ResolversTypes['WikidataEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  changesets?: Resolver<Array<ResolversTypes['Changeset']>, ParentType, ContextType, Partial<UserChangesetsArgs>>;
  changesetsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dataPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  descriptionFormat?: Resolver<ResolversTypes['FormatEnum'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUseGravatar?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  languages?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['UserStatusEnum'], ParentType, ContextType>;
  tracesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WrResolvers<ContextType = any, ParentType extends ResolversParentTypes['WR'] = ResolversParentTypes['WR']> = {
  __resolveType: TypeResolveFn<'Boundary' | 'GenericRelation' | 'Way', ParentType, ContextType>;
};

export type WayResolvers<ContextType = any, ParentType extends ResolversParentTypes['Way'] = ResolversParentTypes['Way']> = {
  changeset?: Resolver<Maybe<ResolversTypes['Changeset']>, ParentType, ContextType>;
  geom?: Resolver<Maybe<ResolversTypes['LineString']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType, Partial<WayNodesArgs>>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<WayTagArgs, 'key'>>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wayTags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType, Partial<WayWayTagsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WikidataEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['WikidataEntity'] = ResolversParentTypes['WikidataEntity']> = {
  uri?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AllRelations?: AllRelationsResolvers<ContextType>;
  Area?: AreaResolvers<ContextType>;
  BBox?: GraphQLScalarType;
  Boundary?: BoundaryResolvers<ContextType>;
  Changeset?: ChangesetResolvers<ContextType>;
  ChangesetComment?: ChangesetCommentResolvers<ContextType>;
  Datetime?: GraphQLScalarType;
  GenericRelation?: GenericRelationResolvers<ContextType>;
  Geometry?: GraphQLScalarType;
  InternetAddress?: GraphQLScalarType;
  Issue?: IssueResolvers<ContextType>;
  IssueComment?: IssueCommentResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Language?: LanguageResolvers<ContextType>;
  LineString?: GraphQLScalarType;
  NW?: NwResolvers<ContextType>;
  NWR?: NwrResolvers<ContextType>;
  Network?: NetworkResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Note?: NoteResolvers<ContextType>;
  NoteComment?: NoteCommentResolvers<ContextType>;
  Point?: GraphQLScalarType;
  Polygon?: GraphQLScalarType;
  PublicTransport?: PublicTransportResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Redaction?: RedactionResolvers<ContextType>;
  Relation?: RelationResolvers<ContextType>;
  RelationMember?: RelationMemberResolvers<ContextType>;
  RelationMemberNode?: RelationMemberNodeResolvers<ContextType>;
  RelationMemberRelation?: RelationMemberRelationResolvers<ContextType>;
  RelationMemberWay?: RelationMemberWayResolvers<ContextType>;
  RelationType?: GraphQLScalarType;
  Route?: RouteResolvers<ContextType>;
  Site?: SiteResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  WR?: WrResolvers<ContextType>;
  Way?: WayResolvers<ContextType>;
  WikidataEntity?: WikidataEntityResolvers<ContextType>;
};

