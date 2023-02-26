--
-- PostgreSQL database dump
--

-- Dumped from database version 11.15
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: openstreetmap; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE openstreetmap WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


\connect openstreetmap

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

--
-- Name: current_nodes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.current_nodes (
    id bigint NOT NULL,
    latitude integer NOT NULL,
    longitude integer NOT NULL,
    changeset_id bigint NOT NULL,
    visible boolean NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    tile bigint NOT NULL,
    version bigint NOT NULL
);


--
-- Name: TABLE current_nodes; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.current_nodes IS '@name nodes';


--
-- Name: current_relations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.current_relations (
    id bigint NOT NULL,
    changeset_id bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    visible boolean NOT NULL,
    version bigint NOT NULL
);


--
-- Name: TABLE current_relations; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.current_relations IS '@name relations';


--
-- Name: current_ways; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.current_ways (
    id bigint NOT NULL,
    changeset_id bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    visible boolean NOT NULL,
    version bigint NOT NULL
);


--
-- Name: TABLE current_ways; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.current_ways IS '@name ways';


--
-- Name: changeset_comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.changeset_comments (
    id integer NOT NULL,
    changeset_id bigint NOT NULL,
    author_id bigint NOT NULL,
    body text NOT NULL,
    created_at timestamp without time zone NOT NULL,
    visible boolean NOT NULL
);


--
-- Name: TABLE changeset_comments; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.changeset_comments IS '@omit all';


--
-- Name: changeset_comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.changeset_comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: changeset_comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.changeset_comments_id_seq OWNED BY public.changeset_comments.id;


--
-- Name: changeset_tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.changeset_tags (
    changeset_id bigint NOT NULL,
    k character varying DEFAULT ''::character varying NOT NULL,
    v character varying DEFAULT ''::character varying NOT NULL
);


--
-- Name: TABLE changeset_tags; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.changeset_tags IS '@omit all';


--
-- Name: changesets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.changesets (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    created_at timestamp without time zone NOT NULL,
    min_lat integer,
    max_lat integer,
    min_lon integer,
    max_lon integer,
    closed_at timestamp without time zone NOT NULL,
    num_changes integer DEFAULT 0 NOT NULL
);


--
-- Name: changesets_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.changesets_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: changesets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.changesets_id_seq OWNED BY public.changesets.id;


--
-- Name: changesets_subscribers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.changesets_subscribers (
    subscriber_id bigint NOT NULL,
    changeset_id bigint NOT NULL
);


--
-- Name: TABLE changesets_subscribers; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.changesets_subscribers IS '@omit';


--
-- Name: current_node_tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.current_node_tags (
    node_id bigint NOT NULL,
    k character varying DEFAULT ''::character varying NOT NULL,
    v character varying DEFAULT ''::character varying NOT NULL
);


--
-- Name: TABLE current_node_tags; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.current_node_tags IS '@name nodeTags';


--
-- Name: current_nodes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.current_nodes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: current_nodes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.current_nodes_id_seq OWNED BY public.current_nodes.id;


--
-- Name: current_relation_members; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.current_relation_members (
    relation_id bigint NOT NULL,
    member_type public.nwr_enum NOT NULL,
    member_id bigint NOT NULL,
    member_role character varying NOT NULL,
    sequence_id integer DEFAULT 0 NOT NULL
);


--
-- Name: TABLE current_relation_members; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.current_relation_members IS '@omit all
@name relation_members';


--
-- Name: current_relation_tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.current_relation_tags (
    relation_id bigint NOT NULL,
    k character varying DEFAULT ''::character varying NOT NULL,
    v character varying DEFAULT ''::character varying NOT NULL
);


--
-- Name: TABLE current_relation_tags; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.current_relation_tags IS '@name relationTags
@omit all';


--
-- Name: current_relations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.current_relations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: current_relations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.current_relations_id_seq OWNED BY public.current_relations.id;


--
-- Name: current_way_nodes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.current_way_nodes (
    way_id bigint NOT NULL,
    node_id bigint NOT NULL,
    sequence_id bigint NOT NULL
);


--
-- Name: TABLE current_way_nodes; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.current_way_nodes IS '@name wayNodes
@omit all, read';


--
-- Name: current_way_tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.current_way_tags (
    way_id bigint NOT NULL,
    k character varying DEFAULT ''::character varying NOT NULL,
    v character varying DEFAULT ''::character varying NOT NULL
);


--
-- Name: TABLE current_way_tags; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.current_way_tags IS '@name wayTags
@omit all';


--
-- Name: current_ways_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.current_ways_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: current_ways_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.current_ways_id_seq OWNED BY public.current_ways.id;


--
-- Name: issue_comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.issue_comments (
    id integer NOT NULL,
    issue_id integer NOT NULL,
    user_id integer NOT NULL,
    body text NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: issue_comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.issue_comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: issue_comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.issue_comments_id_seq OWNED BY public.issue_comments.id;


--
-- Name: issues; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.issues (
    id integer NOT NULL,
    reportable_type character varying NOT NULL,
    reportable_id integer NOT NULL,
    reported_user_id integer,
    status public.issue_status_enum DEFAULT 'open'::public.issue_status_enum NOT NULL,
    assigned_role public.user_role_enum NOT NULL,
    resolved_at timestamp without time zone,
    resolved_by integer,
    updated_by integer,
    reports_count integer DEFAULT 0,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: issues_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.issues_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: issues_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.issues_id_seq OWNED BY public.issues.id;


--
-- Name: languages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.languages (
    code character varying NOT NULL,
    english_name character varying NOT NULL,
    native_name character varying
);


--
-- Name: node_tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.node_tags (
    node_id bigint NOT NULL,
    version bigint NOT NULL,
    k character varying DEFAULT ''::character varying NOT NULL,
    v character varying DEFAULT ''::character varying NOT NULL
);


--
-- Name: TABLE node_tags; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.node_tags IS '@name nodeHistoryTags';


--
-- Name: nodes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.nodes (
    node_id bigint NOT NULL,
    latitude integer NOT NULL,
    longitude integer NOT NULL,
    changeset_id bigint NOT NULL,
    visible boolean NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    tile bigint NOT NULL,
    version bigint NOT NULL,
    redaction_id integer
);


--
-- Name: TABLE nodes; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.nodes IS '@name nodesHistory
@omit all';


--
-- Name: note_comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.note_comments (
    id bigint NOT NULL,
    note_id bigint NOT NULL,
    visible boolean NOT NULL,
    created_at timestamp without time zone NOT NULL,
    author_ip inet,
    author_id bigint,
    body text,
    event public.note_event_enum
);


--
-- Name: note_comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.note_comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: note_comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.note_comments_id_seq OWNED BY public.note_comments.id;


--
-- Name: notes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.notes (
    id bigint NOT NULL,
    latitude integer NOT NULL,
    longitude integer NOT NULL,
    tile bigint NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone NOT NULL,
    status public.note_status_enum NOT NULL,
    closed_at timestamp without time zone
);


--
-- Name: notes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.notes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: notes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.notes_id_seq OWNED BY public.notes.id;


--
-- Name: redactions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.redactions (
    id integer NOT NULL,
    title character varying,
    description text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    user_id bigint NOT NULL,
    description_format public.format_enum DEFAULT 'markdown'::public.format_enum NOT NULL
);


--
-- Name: redactions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.redactions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: redactions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.redactions_id_seq OWNED BY public.redactions.id;


--
-- Name: relation_members; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.relation_members (
    relation_id bigint DEFAULT 0 NOT NULL,
    member_type public.nwr_enum NOT NULL,
    member_id bigint NOT NULL,
    member_role character varying NOT NULL,
    version bigint DEFAULT 0 NOT NULL,
    sequence_id integer DEFAULT 0 NOT NULL
);


--
-- Name: TABLE relation_members; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.relation_members IS '@omit';


--
-- Name: relation_tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.relation_tags (
    relation_id bigint DEFAULT 0 NOT NULL,
    k character varying DEFAULT ''::character varying NOT NULL,
    v character varying DEFAULT ''::character varying NOT NULL,
    version bigint NOT NULL
);


--
-- Name: TABLE relation_tags; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.relation_tags IS '@omit';


--
-- Name: relations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.relations (
    relation_id bigint DEFAULT 0 NOT NULL,
    changeset_id bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    version bigint NOT NULL,
    visible boolean DEFAULT true NOT NULL,
    redaction_id integer
);


--
-- Name: TABLE relations; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.relations IS '@omit
@name realationHistory ';


--
-- Name: reports; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.reports (
    id integer NOT NULL,
    issue_id integer NOT NULL,
    user_id integer NOT NULL,
    details text NOT NULL,
    category character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: reports_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.reports_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: reports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.reports_id_seq OWNED BY public.reports.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


--
-- Name: TABLE schema_migrations; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.schema_migrations IS '@omit';


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    email character varying NOT NULL,
    id bigint NOT NULL,
    pass_crypt character varying NOT NULL,
    creation_time timestamp without time zone NOT NULL,
    display_name character varying DEFAULT ''::character varying NOT NULL,
    data_public boolean DEFAULT false NOT NULL,
    description text DEFAULT ''::text NOT NULL,
    home_lat double precision,
    home_lon double precision,
    home_zoom smallint DEFAULT 3,
    pass_salt character varying,
    email_valid boolean DEFAULT false NOT NULL,
    new_email character varying,
    creation_ip character varying,
    languages character varying,
    status public.user_status_enum DEFAULT 'pending'::public.user_status_enum NOT NULL,
    terms_agreed timestamp without time zone,
    consider_pd boolean DEFAULT false NOT NULL,
    auth_uid character varying,
    preferred_editor character varying,
    terms_seen boolean DEFAULT false NOT NULL,
    description_format public.format_enum DEFAULT 'markdown'::public.format_enum NOT NULL,
    changesets_count integer DEFAULT 0 NOT NULL,
    traces_count integer DEFAULT 0 NOT NULL,
    diary_entries_count integer DEFAULT 0 NOT NULL,
    image_use_gravatar boolean DEFAULT false NOT NULL,
    auth_provider character varying,
    home_tile bigint,
    tou_agreed timestamp without time zone
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: way_nodes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.way_nodes (
    way_id bigint NOT NULL,
    node_id bigint NOT NULL,
    version bigint NOT NULL,
    sequence_id bigint NOT NULL
);


--
-- Name: TABLE way_nodes; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.way_nodes IS '@omit';


--
-- Name: way_tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.way_tags (
    way_id bigint DEFAULT 0 NOT NULL,
    k character varying NOT NULL,
    v character varying NOT NULL,
    version bigint NOT NULL
);


--
-- Name: TABLE way_tags; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.way_tags IS '@omit';


--
-- Name: ways; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ways (
    way_id bigint DEFAULT 0 NOT NULL,
    changeset_id bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    version bigint NOT NULL,
    visible boolean DEFAULT true NOT NULL,
    redaction_id integer
);


--
-- Name: TABLE ways; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.ways IS '@omit
@name ways2';


--
-- Name: changeset_comments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.changeset_comments ALTER COLUMN id SET DEFAULT nextval('public.changeset_comments_id_seq'::regclass);


--
-- Name: changesets id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.changesets ALTER COLUMN id SET DEFAULT nextval('public.changesets_id_seq'::regclass);


--
-- Name: current_nodes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_nodes ALTER COLUMN id SET DEFAULT nextval('public.current_nodes_id_seq'::regclass);


--
-- Name: current_relations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_relations ALTER COLUMN id SET DEFAULT nextval('public.current_relations_id_seq'::regclass);


--
-- Name: current_ways id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_ways ALTER COLUMN id SET DEFAULT nextval('public.current_ways_id_seq'::regclass);


--
-- Name: issue_comments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.issue_comments ALTER COLUMN id SET DEFAULT nextval('public.issue_comments_id_seq'::regclass);


--
-- Name: issues id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.issues ALTER COLUMN id SET DEFAULT nextval('public.issues_id_seq'::regclass);


--
-- Name: note_comments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.note_comments ALTER COLUMN id SET DEFAULT nextval('public.note_comments_id_seq'::regclass);


--
-- Name: notes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notes ALTER COLUMN id SET DEFAULT nextval('public.notes_id_seq'::regclass);


--
-- Name: redactions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.redactions ALTER COLUMN id SET DEFAULT nextval('public.redactions_id_seq'::regclass);


--
-- Name: reports id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reports ALTER COLUMN id SET DEFAULT nextval('public.reports_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: changeset_comments changeset_comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.changeset_comments
    ADD CONSTRAINT changeset_comments_pkey PRIMARY KEY (id);


--
-- Name: changesets changesets_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.changesets
    ADD CONSTRAINT changesets_pkey PRIMARY KEY (id);


--
-- Name: current_node_tags current_node_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_node_tags
    ADD CONSTRAINT current_node_tags_pkey PRIMARY KEY (node_id, k);


--
-- Name: current_nodes current_nodes_pkey1; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_nodes
    ADD CONSTRAINT current_nodes_pkey1 PRIMARY KEY (id);


--
-- Name: current_relation_members current_relation_members_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_relation_members
    ADD CONSTRAINT current_relation_members_pkey PRIMARY KEY (relation_id, member_type, member_id, member_role, sequence_id);


--
-- Name: current_relation_tags current_relation_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_relation_tags
    ADD CONSTRAINT current_relation_tags_pkey PRIMARY KEY (relation_id, k);


--
-- Name: current_relations current_relations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_relations
    ADD CONSTRAINT current_relations_pkey PRIMARY KEY (id);


--
-- Name: current_way_nodes current_way_nodes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_way_nodes
    ADD CONSTRAINT current_way_nodes_pkey PRIMARY KEY (way_id, sequence_id);


--
-- Name: current_way_tags current_way_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_way_tags
    ADD CONSTRAINT current_way_tags_pkey PRIMARY KEY (way_id, k);


--
-- Name: current_ways current_ways_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_ways
    ADD CONSTRAINT current_ways_pkey PRIMARY KEY (id);


--
-- Name: issue_comments issue_comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.issue_comments
    ADD CONSTRAINT issue_comments_pkey PRIMARY KEY (id);


--
-- Name: issues issues_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.issues
    ADD CONSTRAINT issues_pkey PRIMARY KEY (id);


--
-- Name: languages languages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.languages
    ADD CONSTRAINT languages_pkey PRIMARY KEY (code);


--
-- Name: node_tags node_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.node_tags
    ADD CONSTRAINT node_tags_pkey PRIMARY KEY (node_id, version, k);


--
-- Name: nodes nodes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.nodes
    ADD CONSTRAINT nodes_pkey PRIMARY KEY (node_id, version);


--
-- Name: note_comments note_comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.note_comments
    ADD CONSTRAINT note_comments_pkey PRIMARY KEY (id);


--
-- Name: notes notes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notes
    ADD CONSTRAINT notes_pkey PRIMARY KEY (id);


--
-- Name: redactions redactions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.redactions
    ADD CONSTRAINT redactions_pkey PRIMARY KEY (id);


--
-- Name: relation_members relation_members_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.relation_members
    ADD CONSTRAINT relation_members_pkey PRIMARY KEY (relation_id, version, member_type, member_id, member_role, sequence_id);


--
-- Name: relation_tags relation_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.relation_tags
    ADD CONSTRAINT relation_tags_pkey PRIMARY KEY (relation_id, version, k);


--
-- Name: relations relations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.relations
    ADD CONSTRAINT relations_pkey PRIMARY KEY (relation_id, version);


--
-- Name: reports reports_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: way_nodes way_nodes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.way_nodes
    ADD CONSTRAINT way_nodes_pkey PRIMARY KEY (way_id, version, sequence_id);


--
-- Name: way_tags way_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.way_tags
    ADD CONSTRAINT way_tags_pkey PRIMARY KEY (way_id, version, k);


--
-- Name: ways ways_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ways
    ADD CONSTRAINT ways_pkey PRIMARY KEY (way_id, version);


--
-- Name: changeset_tags_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX changeset_tags_id_idx ON public.changeset_tags USING btree (changeset_id);


--
-- Name: changesets_bbox_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX changesets_bbox_idx ON public.changesets USING gist (min_lat, max_lat, min_lon, max_lon);


--
-- Name: changesets_closed_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX changesets_closed_at_idx ON public.changesets USING btree (closed_at);


--
-- Name: changesets_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX changesets_created_at_idx ON public.changesets USING btree (created_at);


--
-- Name: changesets_user_id_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX changesets_user_id_created_at_idx ON public.changesets USING btree (user_id, created_at);


--
-- Name: changesets_user_id_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX changesets_user_id_id_idx ON public.changesets USING btree (user_id, id);


--
-- Name: current_nodes_tile_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX current_nodes_tile_idx ON public.current_nodes USING btree (tile);


--
-- Name: current_nodes_timestamp_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX current_nodes_timestamp_idx ON public.current_nodes USING btree ("timestamp");


--
-- Name: current_relation_members_member_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX current_relation_members_member_idx ON public.current_relation_members USING btree (member_type, member_id);


--
-- Name: current_relations_timestamp_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX current_relations_timestamp_idx ON public.current_relations USING btree ("timestamp");


--
-- Name: current_way_nodes_node_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX current_way_nodes_node_idx ON public.current_way_nodes USING btree (node_id);


--
-- Name: current_ways_timestamp_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX current_ways_timestamp_idx ON public.current_ways USING btree ("timestamp");


--
-- Name: index_changeset_comments_on_created_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_changeset_comments_on_created_at ON public.changeset_comments USING btree (created_at);


--
-- Name: index_changesets_subscribers_on_changeset_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_changesets_subscribers_on_changeset_id ON public.changesets_subscribers USING btree (changeset_id);


--
-- Name: index_changesets_subscribers_on_subscriber_id_and_changeset_id; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_changesets_subscribers_on_subscriber_id_and_changeset_id ON public.changesets_subscribers USING btree (subscriber_id, changeset_id);


--
-- Name: index_issue_comments_on_issue_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_issue_comments_on_issue_id ON public.issue_comments USING btree (issue_id);


--
-- Name: index_issue_comments_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_issue_comments_on_user_id ON public.issue_comments USING btree (user_id);


--
-- Name: index_issues_on_assigned_role; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_issues_on_assigned_role ON public.issues USING btree (assigned_role);


--
-- Name: index_issues_on_reportable_type_and_reportable_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_issues_on_reportable_type_and_reportable_id ON public.issues USING btree (reportable_type, reportable_id);


--
-- Name: index_issues_on_reported_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_issues_on_reported_user_id ON public.issues USING btree (reported_user_id);


--
-- Name: index_issues_on_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_issues_on_status ON public.issues USING btree (status);


--
-- Name: index_issues_on_updated_by; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_issues_on_updated_by ON public.issues USING btree (updated_by);


--
-- Name: index_note_comments_on_body; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_note_comments_on_body ON public.note_comments USING gin (to_tsvector('english'::regconfig, body));


--
-- Name: index_note_comments_on_created_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_note_comments_on_created_at ON public.note_comments USING btree (created_at);


--
-- Name: index_reports_on_issue_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_reports_on_issue_id ON public.reports USING btree (issue_id);


--
-- Name: index_reports_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_reports_on_user_id ON public.reports USING btree (user_id);


--
-- Name: nodes_changeset_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX nodes_changeset_id_idx ON public.nodes USING btree (changeset_id);


--
-- Name: nodes_tile_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX nodes_tile_idx ON public.nodes USING btree (tile);


--
-- Name: nodes_timestamp_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX nodes_timestamp_idx ON public.nodes USING btree ("timestamp");


--
-- Name: note_comments_note_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX note_comments_note_id_idx ON public.note_comments USING btree (note_id);


--
-- Name: notes_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX notes_created_at_idx ON public.notes USING btree (created_at);


--
-- Name: notes_tile_status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX notes_tile_status_idx ON public.notes USING btree (tile, status);


--
-- Name: notes_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX notes_updated_at_idx ON public.notes USING btree (updated_at);


--
-- Name: relation_members_member_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX relation_members_member_idx ON public.relation_members USING btree (member_type, member_id);


--
-- Name: relations_changeset_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX relations_changeset_id_idx ON public.relations USING btree (changeset_id);


--
-- Name: relations_timestamp_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX relations_timestamp_idx ON public.relations USING btree ("timestamp");


--
-- Name: users_auth_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX users_auth_idx ON public.users USING btree (auth_provider, auth_uid);


--
-- Name: users_display_name_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX users_display_name_idx ON public.users USING btree (display_name);


--
-- Name: users_display_name_lower_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX users_display_name_lower_idx ON public.users USING btree (lower((display_name)::text));


--
-- Name: users_email_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX users_email_idx ON public.users USING btree (email);


--
-- Name: users_email_lower_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX users_email_lower_idx ON public.users USING btree (lower((email)::text));


--
-- Name: users_home_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX users_home_idx ON public.users USING btree (home_tile);


--
-- Name: way_nodes_node_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX way_nodes_node_idx ON public.way_nodes USING btree (node_id);


--
-- Name: ways_changeset_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX ways_changeset_id_idx ON public.ways USING btree (changeset_id);


--
-- Name: ways_timestamp_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX ways_timestamp_idx ON public.ways USING btree ("timestamp");


--
-- Name: changeset_comments changeset_comments_author_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.changeset_comments
    ADD CONSTRAINT changeset_comments_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.users(id);


--
-- Name: changeset_comments changeset_comments_changeset_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.changeset_comments
    ADD CONSTRAINT changeset_comments_changeset_id_fkey FOREIGN KEY (changeset_id) REFERENCES public.changesets(id);


--
-- Name: changeset_tags changeset_tags_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.changeset_tags
    ADD CONSTRAINT changeset_tags_id_fkey FOREIGN KEY (changeset_id) REFERENCES public.changesets(id);


--
-- Name: changesets_subscribers changesets_subscribers_changeset_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.changesets_subscribers
    ADD CONSTRAINT changesets_subscribers_changeset_id_fkey FOREIGN KEY (changeset_id) REFERENCES public.changesets(id);


--
-- Name: changesets_subscribers changesets_subscribers_subscriber_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.changesets_subscribers
    ADD CONSTRAINT changesets_subscribers_subscriber_id_fkey FOREIGN KEY (subscriber_id) REFERENCES public.users(id);


--
-- Name: changesets changesets_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.changesets
    ADD CONSTRAINT changesets_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: current_node_tags current_node_tags_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_node_tags
    ADD CONSTRAINT current_node_tags_id_fkey FOREIGN KEY (node_id) REFERENCES public.current_nodes(id);


--
-- Name: current_nodes current_nodes_changeset_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_nodes
    ADD CONSTRAINT current_nodes_changeset_id_fkey FOREIGN KEY (changeset_id) REFERENCES public.changesets(id);


--
-- Name: current_relation_members current_relation_members_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_relation_members
    ADD CONSTRAINT current_relation_members_id_fkey FOREIGN KEY (relation_id) REFERENCES public.current_relations(id);


--
-- Name: current_relation_tags current_relation_tags_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_relation_tags
    ADD CONSTRAINT current_relation_tags_id_fkey FOREIGN KEY (relation_id) REFERENCES public.current_relations(id);


--
-- Name: current_relations current_relations_changeset_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_relations
    ADD CONSTRAINT current_relations_changeset_id_fkey FOREIGN KEY (changeset_id) REFERENCES public.changesets(id);


--
-- Name: current_way_nodes current_way_nodes_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_way_nodes
    ADD CONSTRAINT current_way_nodes_id_fkey FOREIGN KEY (way_id) REFERENCES public.current_ways(id);


--
-- Name: current_way_nodes current_way_nodes_node_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_way_nodes
    ADD CONSTRAINT current_way_nodes_node_id_fkey FOREIGN KEY (node_id) REFERENCES public.current_nodes(id);


--
-- Name: current_way_tags current_way_tags_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_way_tags
    ADD CONSTRAINT current_way_tags_id_fkey FOREIGN KEY (way_id) REFERENCES public.current_ways(id);


--
-- Name: current_ways current_ways_changeset_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.current_ways
    ADD CONSTRAINT current_ways_changeset_id_fkey FOREIGN KEY (changeset_id) REFERENCES public.changesets(id);


--
-- Name: issue_comments issue_comments_issue_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.issue_comments
    ADD CONSTRAINT issue_comments_issue_id_fkey FOREIGN KEY (issue_id) REFERENCES public.issues(id);


--
-- Name: issue_comments issue_comments_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.issue_comments
    ADD CONSTRAINT issue_comments_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: issues issues_reported_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.issues
    ADD CONSTRAINT issues_reported_user_id_fkey FOREIGN KEY (reported_user_id) REFERENCES public.users(id);


--
-- Name: issues issues_resolved_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.issues
    ADD CONSTRAINT issues_resolved_by_fkey FOREIGN KEY (resolved_by) REFERENCES public.users(id);


--
-- Name: issues issues_updated_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.issues
    ADD CONSTRAINT issues_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.users(id);


--
-- Name: node_tags node_tags_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.node_tags
    ADD CONSTRAINT node_tags_id_fkey FOREIGN KEY (node_id, version) REFERENCES public.nodes(node_id, version);


--
-- Name: nodes nodes_changeset_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.nodes
    ADD CONSTRAINT nodes_changeset_id_fkey FOREIGN KEY (changeset_id) REFERENCES public.changesets(id);


--
-- Name: nodes nodes_redaction_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.nodes
    ADD CONSTRAINT nodes_redaction_id_fkey FOREIGN KEY (redaction_id) REFERENCES public.redactions(id);


--
-- Name: note_comments note_comments_author_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.note_comments
    ADD CONSTRAINT note_comments_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.users(id);


--
-- Name: note_comments note_comments_note_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.note_comments
    ADD CONSTRAINT note_comments_note_id_fkey FOREIGN KEY (note_id) REFERENCES public.notes(id);


--
-- Name: redactions redactions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.redactions
    ADD CONSTRAINT redactions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: relation_members relation_members_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.relation_members
    ADD CONSTRAINT relation_members_id_fkey FOREIGN KEY (relation_id, version) REFERENCES public.relations(relation_id, version);


--
-- Name: relation_tags relation_tags_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.relation_tags
    ADD CONSTRAINT relation_tags_id_fkey FOREIGN KEY (relation_id, version) REFERENCES public.relations(relation_id, version);


--
-- Name: relations relations_changeset_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.relations
    ADD CONSTRAINT relations_changeset_id_fkey FOREIGN KEY (changeset_id) REFERENCES public.changesets(id);


--
-- Name: relations relations_redaction_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.relations
    ADD CONSTRAINT relations_redaction_id_fkey FOREIGN KEY (redaction_id) REFERENCES public.redactions(id);


--
-- Name: reports reports_issue_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_issue_id_fkey FOREIGN KEY (issue_id) REFERENCES public.issues(id);


--
-- Name: reports reports_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: way_nodes way_nodes_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.way_nodes
    ADD CONSTRAINT way_nodes_id_fkey FOREIGN KEY (way_id, version) REFERENCES public.ways(way_id, version);


--
-- Name: way_tags way_tags_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.way_tags
    ADD CONSTRAINT way_tags_id_fkey FOREIGN KEY (way_id, version) REFERENCES public.ways(way_id, version);


--
-- Name: ways ways_changeset_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ways
    ADD CONSTRAINT ways_changeset_id_fkey FOREIGN KEY (changeset_id) REFERENCES public.changesets(id);


--
-- Name: ways ways_redaction_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ways
    ADD CONSTRAINT ways_redaction_id_fkey FOREIGN KEY (redaction_id) REFERENCES public.redactions(id);


--
-- Name: TABLE current_nodes; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.current_nodes TO osm;


--
-- Name: TABLE current_relations; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.current_relations TO osm;


--
-- Name: TABLE current_ways; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.current_ways TO osm;


--
-- Name: TABLE changeset_comments; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.changeset_comments TO osm;


--
-- Name: TABLE changeset_tags; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.changeset_tags TO osm;


--
-- Name: TABLE changesets; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.changesets TO osm;


--
-- Name: TABLE changesets_subscribers; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.changesets_subscribers TO osm;


--
-- Name: TABLE current_node_tags; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.current_node_tags TO osm;


--
-- Name: TABLE current_relation_members; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.current_relation_members TO osm;


--
-- Name: TABLE current_relation_tags; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.current_relation_tags TO osm;


--
-- Name: TABLE current_way_nodes; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.current_way_nodes TO osm;


--
-- Name: TABLE current_way_tags; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.current_way_tags TO osm;


--
-- Name: TABLE issue_comments; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.issue_comments TO osm;


--
-- Name: TABLE issues; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.issues TO osm;


--
-- Name: TABLE languages; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.languages TO osm;


--
-- Name: TABLE node_tags; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.node_tags TO osm;


--
-- Name: TABLE nodes; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.nodes TO osm;


--
-- Name: TABLE note_comments; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.note_comments TO osm;


--
-- Name: TABLE notes; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.notes TO osm;


--
-- Name: TABLE redactions; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.redactions TO osm;


--
-- Name: TABLE relation_members; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.relation_members TO osm;


--
-- Name: TABLE relation_tags; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.relation_tags TO osm;


--
-- Name: TABLE relations; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.relations TO osm;


--
-- Name: TABLE reports; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.reports TO osm;


--
-- Name: TABLE schema_migrations; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.schema_migrations TO osm;


--
-- Name: TABLE users; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.users TO osm;


--
-- Name: TABLE way_nodes; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.way_nodes TO osm;


--
-- Name: TABLE way_tags; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.way_tags TO osm;


--
-- Name: TABLE ways; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.ways TO osm;


--
-- PostgreSQL database dump complete
--

