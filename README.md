# Hogwarts API

## Endpoints

### Houses

| Method | Route         | Beskrivelse        |
| ------ | ------------- | ------------------ |
| GET    | `/houses`     | get all houses     |
| GET    | `/houses/:id` | get a single house |

### Teachers

| Method | Route           | Beskrivelse          |
| ------ | --------------- | -------------------- |
| GET    | `/teachers`     | get all teachers     |
| GET    | `/teachers/:id` | get a single teacher |
| POST   | `/teachers`     | create a new teacher |
| PUT    | `/teachers/:id` | update a teacher     |
| DELETE | `/teachers/:id` | delete a teacher     |

### Students

| Method | Route           | Beskrivelse          |
| ------ | --------------- | -------------------- |
| GET    | `/students`     | get all students     |
| GET    | `/students/:id` | get a single student |
| POST   | `/students`     | create a new student |
| PUT    | `/students/:id` | update a student     |
| DELETE | `/students/:id` | delete a student     |

### Courses

| Method | Route                              | Beskrivelse                    |
| ------ | ---------------------------------- | ------------------------------ |
| GET    | `/courses`                         | get all courses                |
| GET    | `/courses/:id`                     | get a single course            |
| POST   | `/courses`                         | create a new course            |
| PUT    | `/courses/:id`                     | update a course                |
| PUT    | `/courses/:id/teacher/:teacherId`  | change the teacher of a course |
| PUT    | `/courses/:id/students/:studentId` | add a student to a course      |
| DELETE | `/courses/:id/students/:studentId` | remove a student from a course |
| DELETE | `/courses/:id`                     | delete a course                |

## Endpoint-tests vejledning

Testene ligger i mappen `Hogwarts API-rest` og er lavet til Bruno.

1. Kør `hogwarts.sql` i en tom database, så tabellerne og eksempeldata bliver oprettet
2. Start serveren i mappen `server` med `npm run dev`
3. Åbn mappen `Hogwarts API-rest` i Bruno
4. Kør én mappe ad gangen (højreklik på mappen → Run), så requests køres i rækkefølge, og Create kører før Delete

Delete-testene sletter de rækker, som Create-testene opretter (teacher 5, student 7 og course 5). Hvis testene skal køres igen, skal databasen først genskabes med `hogwarts.sql`.
