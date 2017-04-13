--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.3
-- Dumped by pg_dump version 9.5.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: reports; Type: TABLE; Schema: public; Owner: Guest
--

CREATE TABLE reports (
    id integer NOT NULL,
    id_user integer,
    id_train integer,
    train_capacity character varying,
    comment character varying(100),
    "timestamp" timestamp without time zone,
    id_nextstop integer
);


ALTER TABLE reports OWNER TO "Guest";

--
-- Name: reports_id_seq; Type: SEQUENCE; Schema: public; Owner: Guest
--

CREATE SEQUENCE reports_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE reports_id_seq OWNER TO "Guest";

--
-- Name: reports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Guest
--

ALTER SEQUENCE reports_id_seq OWNED BY reports.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: Guest
--

CREATE TABLE users (
    id integer NOT NULL,
    email character varying,
    username character varying,
    password character varying,
    image character varying
);


ALTER TABLE users OWNER TO "Guest";

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: Guest
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO "Guest";

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Guest
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: Guest
--

ALTER TABLE ONLY reports ALTER COLUMN id SET DEFAULT nextval('reports_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: Guest
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: reports; Type: TABLE DATA; Schema: public; Owner: Guest
--

COPY reports (id, id_user, id_train, train_capacity, comment, "timestamp", id_nextstop) FROM stdin;
6	1	100	Empty	test 1	2017-04-12 14:32:25.75668	8307
7	1	100	Full	2nd test	2017-04-12 14:32:36.325643	8307
8	1	100	Empty	3rd test	2017-04-12 14:32:48.450977	8307
9	1	200	Half	4th test	2017-04-12 14:33:24.424655	8307
10	1	100	Full	dfs	2017-04-13 13:03:45.219021	8307
11	1	100	Empty	fdsffds	2017-04-13 13:03:52.623384	8308
12	1	101	Half	test 	2017-04-13 14:28:25.250346	9848
13	2	102	Full	Yeah!!!!	2017-04-13 14:42:05.156732	8377
14	2	102	Empty	do I smell? everyone is gone...	2017-04-13 14:42:22.258684	8383
15	2	102	Full	I overslept my stops!	2017-04-13 14:42:44.059118	9848
16	3	302	Half	SCIENCE!!!!	2017-04-13 14:43:40.200018	13727
17	3	401	Empty	I need to stop at trader joes...	2017-04-13 14:44:02.406646	8373
18	3	301	Half	Nordstrom's Rack is having a sale!	2017-04-13 14:44:33.182601	7646
19	3	502	Full	Home sweet home	2017-04-13 14:45:15.844936	11501
20	3	302	Empty	ALERT:  TriMet Ticket Check Just WENT THROUGH HERE!!!	2017-04-13 14:45:51.561037	13722
\.


--
-- Name: reports_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Guest
--

SELECT pg_catalog.setval('reports_id_seq', 20, true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: Guest
--

COPY users (id, email, username, password, image) FROM stdin;
1	\N	theEvan	eb	\N
2	fun@gmail.com	Chris	fun	
3	fun@gmail.com	XX	fun	
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Guest
--

SELECT pg_catalog.setval('users_id_seq', 3, true);


--
-- Name: reports_pkey; Type: CONSTRAINT; Schema: public; Owner: Guest
--

ALTER TABLE ONLY reports
    ADD CONSTRAINT reports_pkey PRIMARY KEY (id);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: Guest
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: public; Type: ACL; Schema: -; Owner: epicodus
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM epicodus;
GRANT ALL ON SCHEMA public TO epicodus;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

