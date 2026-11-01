--
-- PostgreSQL database dump
--

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

-- Started on 2026-11-01 14:22:25 CET

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
-- TOC entry 8 (class 2615 OID 2200)
-- Name: hogwarts; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA hogwarts;


--
-- TOC entry 3892 (class 0 OID 0)
-- Dependencies: 8
-- Name: SCHEMA hogwarts; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA hogwarts IS 'Hogwarts API';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 240 (class 1259 OID 24699)
-- Name: course_students; Type: TABLE; Schema: hogwarts; Owner: -
--

CREATE TABLE hogwarts.course_students (
    course_id integer CONSTRAINT course_students_course_id_not_null NOT NULL,
    student_id integer NOT NULL
);


--
-- TOC entry 239 (class 1259 OID 24684)
-- Name: courses; Type: TABLE; Schema: hogwarts; Owner: -
--

CREATE TABLE hogwarts.courses (
    id integer CONSTRAINT courses_id_not_null NOT NULL,
    name text CONSTRAINT courses_name_not_null NOT NULL,
    teacher_id integer
);


--
-- TOC entry 238 (class 1259 OID 24683)
-- Name: courses_id_seq; Type: SEQUENCE; Schema: hogwarts; Owner: -
--

CREATE SEQUENCE hogwarts.courses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3893 (class 0 OID 0)
-- Dependencies: 238
-- Name: courses_id_seq; Type: SEQUENCE OWNED BY; Schema: hogwarts; Owner: -
--

ALTER SEQUENCE hogwarts.courses_id_seq OWNED BY hogwarts.courses.id;


--
-- TOC entry 237 (class 1259 OID 24662)
-- Name: houses; Type: TABLE; Schema: hogwarts; Owner: -
--

CREATE TABLE hogwarts.houses (
    id integer NOT NULL,
    name text NOT NULL,
    color1 text,
    color2 text,
    founder text
);


--
-- TOC entry 236 (class 1259 OID 24661)
-- Name: houses_id_seq; Type: SEQUENCE; Schema: hogwarts; Owner: -
--

CREATE SEQUENCE hogwarts.houses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3894 (class 0 OID 0)
-- Dependencies: 236
-- Name: houses_id_seq; Type: SEQUENCE OWNED BY; Schema: hogwarts; Owner: -
--

ALTER SEQUENCE hogwarts.houses_id_seq OWNED BY hogwarts.houses.id;


--
-- TOC entry 235 (class 1259 OID 24640)
-- Name: students; Type: TABLE; Schema: hogwarts; Owner: -
--

CREATE TABLE hogwarts.students (
    id integer NOT NULL,
    name text CONSTRAINT students_name_not_null NOT NULL,
    house_id integer
);


--
-- TOC entry 234 (class 1259 OID 24639)
-- Name: students_id_seq; Type: SEQUENCE; Schema: hogwarts; Owner: -
--

CREATE SEQUENCE hogwarts.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3895 (class 0 OID 0)
-- Dependencies: 234
-- Name: students_id_seq; Type: SEQUENCE OWNED BY; Schema: hogwarts; Owner: -
--

ALTER SEQUENCE hogwarts.students_id_seq OWNED BY hogwarts.students.id;


--
-- TOC entry 233 (class 1259 OID 24629)
-- Name: teachers; Type: TABLE; Schema: hogwarts; Owner: -
--

CREATE TABLE hogwarts.teachers (
    id integer NOT NULL,
    name text NOT NULL,
    house_id integer
);


--
-- TOC entry 232 (class 1259 OID 24628)
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: hogwarts; Owner: -
--

CREATE SEQUENCE hogwarts.teachers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3896 (class 0 OID 0)
-- Dependencies: 232
-- Name: teachers_id_seq; Type: SEQUENCE OWNED BY; Schema: hogwarts; Owner: -
--

ALTER SEQUENCE hogwarts.teachers_id_seq OWNED BY hogwarts.teachers.id;


--
-- TOC entry 3715 (class 2604 OID 24687)
-- Name: courses id; Type: DEFAULT; Schema: hogwarts; Owner: -
--

ALTER TABLE ONLY hogwarts.courses ALTER COLUMN id SET DEFAULT nextval('hogwarts.courses_id_seq'::regclass);


--
-- TOC entry 3714 (class 2604 OID 24665)
-- Name: houses id; Type: DEFAULT; Schema: hogwarts; Owner: -
--

ALTER TABLE ONLY hogwarts.houses ALTER COLUMN id SET DEFAULT nextval('hogwarts.houses_id_seq'::regclass);


--
-- TOC entry 3713 (class 2604 OID 24643)
-- Name: students id; Type: DEFAULT; Schema: hogwarts; Owner: -
--

ALTER TABLE ONLY hogwarts.students ALTER COLUMN id SET DEFAULT nextval('hogwarts.students_id_seq'::regclass);


--
-- TOC entry 3712 (class 2604 OID 24632)
-- Name: teachers id; Type: DEFAULT; Schema: hogwarts; Owner: -
--

ALTER TABLE ONLY hogwarts.teachers ALTER COLUMN id SET DEFAULT nextval('hogwarts.teachers_id_seq'::regclass);


--
-- TOC entry 3886 (class 0 OID 24699)
-- Dependencies: 240
-- Data for Name: course_students; Type: TABLE DATA; Schema: hogwarts; Owner: -
--

INSERT INTO hogwarts.course_students VALUES (1, 1);
INSERT INTO hogwarts.course_students VALUES (1, 2);
INSERT INTO hogwarts.course_students VALUES (1, 3);
INSERT INTO hogwarts.course_students VALUES (2, 1);
INSERT INTO hogwarts.course_students VALUES (2, 4);
INSERT INTO hogwarts.course_students VALUES (3, 5);
INSERT INTO hogwarts.course_students VALUES (4, 6);


--
-- TOC entry 3885 (class 0 OID 24684)
-- Dependencies: 239
-- Data for Name: courses; Type: TABLE DATA; Schema: hogwarts; Owner: -
--

INSERT INTO hogwarts.courses VALUES (2, 'Potions', 2);
INSERT INTO hogwarts.courses VALUES (3, 'Charms', 3);
INSERT INTO hogwarts.courses VALUES (4, 'Herbology', 4);
INSERT INTO hogwarts.courses VALUES (1, 'Transfiguration', 1);


--
-- TOC entry 3883 (class 0 OID 24662)
-- Dependencies: 237
-- Data for Name: houses; Type: TABLE DATA; Schema: hogwarts; Owner: -
--

INSERT INTO hogwarts.houses VALUES (1, 'Gryffindor', 'Scarlet', 'Gold', 'Godric Gryffindor');
INSERT INTO hogwarts.houses VALUES (2, 'Slytherin', 'Green', 'Silver', 'Salazar Slytherin');
INSERT INTO hogwarts.houses VALUES (3, 'Ravenclaw', 'Blue', 'Bronze', 'Rowena Ravenclaw');
INSERT INTO hogwarts.houses VALUES (4, 'Hufflepuff', 'Yellow', 'Black', 'Helga Hufflepuff');


--
-- TOC entry 3881 (class 0 OID 24640)
-- Dependencies: 235
-- Data for Name: students; Type: TABLE DATA; Schema: hogwarts; Owner: -
--

INSERT INTO hogwarts.students VALUES (2, 'Hermione Granger', 1);
INSERT INTO hogwarts.students VALUES (3, 'Ron Weasley', 1);
INSERT INTO hogwarts.students VALUES (4, 'Draco Malfoy', 2);
INSERT INTO hogwarts.students VALUES (5, 'Luna Lovegood', 3);
INSERT INTO hogwarts.students VALUES (6, 'Cedric Diggory', 4);
INSERT INTO hogwarts.students VALUES (1, 'Harry Potter', 1);


--
-- TOC entry 3879 (class 0 OID 24629)
-- Dependencies: 233
-- Data for Name: teachers; Type: TABLE DATA; Schema: hogwarts; Owner: -
--

INSERT INTO hogwarts.teachers VALUES (2, 'Severus Snape', 2);
INSERT INTO hogwarts.teachers VALUES (3, 'Filius Flitwick', 3);
INSERT INTO hogwarts.teachers VALUES (4, 'Pomona Sprout', 4);
INSERT INTO hogwarts.teachers VALUES (1, 'Minerva McGonagall', 1);


--
-- TOC entry 3897 (class 0 OID 0)
-- Dependencies: 238
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: hogwarts; Owner: -
--

SELECT pg_catalog.setval('hogwarts.courses_id_seq', 4, true);


--
-- TOC entry 3898 (class 0 OID 0)
-- Dependencies: 236
-- Name: houses_id_seq; Type: SEQUENCE SET; Schema: hogwarts; Owner: -
--

SELECT pg_catalog.setval('hogwarts.houses_id_seq', 4, true);


--
-- TOC entry 3899 (class 0 OID 0)
-- Dependencies: 234
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: hogwarts; Owner: -
--

SELECT pg_catalog.setval('hogwarts.students_id_seq', 6, true);


--
-- TOC entry 3900 (class 0 OID 0)
-- Dependencies: 232
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: hogwarts; Owner: -
--

SELECT pg_catalog.setval('hogwarts.teachers_id_seq', 4, true);


--
-- TOC entry 3725 (class 2606 OID 24705)
-- Name: course_students course_students_pkey; Type: CONSTRAINT; Schema: hogwarts; Owner: -
--

ALTER TABLE ONLY hogwarts.course_students
    ADD CONSTRAINT course_students_pkey PRIMARY KEY (course_id, student_id);


--
-- TOC entry 3723 (class 2606 OID 24693)
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: hogwarts; Owner: -
--

ALTER TABLE ONLY hogwarts.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- TOC entry 3721 (class 2606 OID 24671)
-- Name: houses houses_pkey; Type: CONSTRAINT; Schema: hogwarts; Owner: -
--

ALTER TABLE ONLY hogwarts.houses
    ADD CONSTRAINT houses_pkey PRIMARY KEY (id);


--
-- TOC entry 3719 (class 2606 OID 24649)
-- Name: students students_pkey; Type: CONSTRAINT; Schema: hogwarts; Owner: -
--

ALTER TABLE ONLY hogwarts.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- TOC entry 3717 (class 2606 OID 24638)
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: hogwarts; Owner: -
--

ALTER TABLE ONLY hogwarts.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


--
-- TOC entry 3729 (class 2606 OID 24706)
-- Name: course_students course_students_course_id_fkey; Type: FK CONSTRAINT; Schema: hogwarts; Owner: -
--

ALTER TABLE ONLY hogwarts.course_students
    ADD CONSTRAINT course_students_course_id_fkey FOREIGN KEY (course_id) REFERENCES hogwarts.courses(id) ON DELETE CASCADE;


--
-- TOC entry 3730 (class 2606 OID 24711)
-- Name: course_students course_students_student_id_fkey; Type: FK CONSTRAINT; Schema: hogwarts; Owner: -
--

ALTER TABLE ONLY hogwarts.course_students
    ADD CONSTRAINT course_students_student_id_fkey FOREIGN KEY (student_id) REFERENCES hogwarts.students(id) ON DELETE CASCADE;


--
-- TOC entry 3728 (class 2606 OID 24694)
-- Name: courses courses_teacher_id_fkey; Type: FK CONSTRAINT; Schema: hogwarts; Owner: -
--

ALTER TABLE ONLY hogwarts.courses
    ADD CONSTRAINT courses_teacher_id_fkey FOREIGN KEY (teacher_id) REFERENCES hogwarts.teachers(id);


--
-- TOC entry 3727 (class 2606 OID 24678)
-- Name: students students_house_id_fkey; Type: FK CONSTRAINT; Schema: hogwarts; Owner: -
--

ALTER TABLE ONLY hogwarts.students
    ADD CONSTRAINT students_house_id_fkey FOREIGN KEY (house_id) REFERENCES hogwarts.houses(id);


--
-- TOC entry 3726 (class 2606 OID 24673)
-- Name: teachers teachers_house_id_fkey; Type: FK CONSTRAINT; Schema: hogwarts; Owner: -
--

ALTER TABLE ONLY hogwarts.teachers
    ADD CONSTRAINT teachers_house_id_fkey FOREIGN KEY (house_id) REFERENCES hogwarts.houses(id);


-- Completed on 2026-11-01 14:22:26 CET

--
-- PostgreSQL database dump complete
--