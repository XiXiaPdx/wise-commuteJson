--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
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
-- Name: reports; Type: TABLE; Schema: public; Owner: chris
--

CREATE TABLE reports (
    id integer NOT NULL,
    id_user integer,
    id_train integer,
    train_capacity character varying,
    comment character varying(100)
);


ALTER TABLE reports OWNER TO chris;

--
-- Name: reports_id_seq; Type: SEQUENCE; Schema: public; Owner: chris
--

CREATE SEQUENCE reports_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE reports_id_seq OWNER TO chris;

--
-- Name: reports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: chris
--

ALTER SEQUENCE reports_id_seq OWNED BY reports.id;


--
-- Name: reports id; Type: DEFAULT; Schema: public; Owner: chris
--

ALTER TABLE ONLY reports ALTER COLUMN id SET DEFAULT nextval('reports_id_seq'::regclass);


--
-- Data for Name: reports; Type: TABLE DATA; Schema: public; Owner: chris
--

COPY reports (id, id_user, id_train, train_capacity, comment) FROM stdin;
\.


--
-- Name: reports_id_seq; Type: SEQUENCE SET; Schema: public; Owner: chris
--

SELECT pg_catalog.setval('reports_id_seq', 1, false);


--
-- Name: reports reports_pkey; Type: CONSTRAINT; Schema: public; Owner: chris
--

ALTER TABLE ONLY reports
    ADD CONSTRAINT reports_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

