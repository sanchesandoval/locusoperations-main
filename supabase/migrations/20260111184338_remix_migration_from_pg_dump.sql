CREATE EXTENSION IF NOT EXISTS "pg_graphql";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "plpgsql";
CREATE EXTENSION IF NOT EXISTS "supabase_vault";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";
BEGIN;

--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 18.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



SET default_table_access_method = heap;

--
-- Name: leak_finder_submissions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.leak_finder_submissions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    score integer NOT NULL,
    tier text NOT NULL,
    answers jsonb NOT NULL,
    email text
);


--
-- Name: leak_finder_submissions leak_finder_submissions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.leak_finder_submissions
    ADD CONSTRAINT leak_finder_submissions_pkey PRIMARY KEY (id);


--
-- Name: leak_finder_submissions Allow public inserts; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public inserts" ON public.leak_finder_submissions FOR INSERT WITH CHECK (true);


--
-- Name: leak_finder_submissions; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.leak_finder_submissions ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--




COMMIT;