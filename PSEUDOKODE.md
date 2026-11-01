# Pseudokode – Hogwarts API

###### Teachers

### GET teachers

1. Hent alle teachers fra databasen
2. Send dem tilbage som JSON
3. Send fejl 500, hvis noget går galt

### GET single teacher

1. Find id'et fra routen (request)
2. Hent den teacher, der har det id, fra databasen
3. Send 404, hvis teacheren ikke findes
4. Send teacheren tilbage som JSON
5. Send fejl 500, hvis noget går galt

### PUT teacher

1. Find id'et fra routen (request)
2. Hent name og house_id fra body
3. Opdatér teacheren i databasen
4. Send 404, hvis teacheren ikke findes
5. Send den opdaterede teacher tilbage som JSON
6. Send fejl 500, hvis noget går galt

### POST teacher

1. Hent name og house_id fra body
2. Opret teacheren i databasen
3. Send den nye teacher tilbage som JSON med status 201
4. Send fejl 500, hvis noget går galt

### DELETE teacher

1. Find id'et fra routen (request)
2. Slet teacheren i databasen
3. Send 404, hvis teacheren ikke findes
4. Send den slettede teacher tilbage som JSON
5. Send fejl 500, hvis noget går galt

###### Students

### GET students

Ligesom GET teachers

### GET single student

Ligesom GET single teacher

### PUT student

Ligesom PUT teacher

### POST student

Ligesom POST teacher

### DELETE student

Ligesom DELETE teacher. Studenten bliver også fjernet fra sine courses.

###### Houses

### GET houses

Ligesom GET teachers

### GET single house

Ligesom GET single teacher

###### Courses

### GET courses

Ligesom GET teachers

### GET single course

Ligesom GET single teacher

### POST course

Ligesom POST teacher, men hent name og teacher_id fra body.

### PUT course

Ligesom PUT teacher, men hent name og teacher_id fra body.

### PUT teacher for a course

1. Find course-id'et og teacher-id'et fra routen (request)
2. Opdatér coursens teacher i databasen
3. Send 404, hvis coursen ikke findes
4. Send den opdaterede course tilbage som JSON
5. Send fejl 500, hvis noget går galt

### PUT add student to a course

1. Find course-id'et og student-id'et fra routen (request)
2. Tilføj studenten til coursen i databasen
3. Send course-id'et og student-id'et tilbage som JSON med status 201
4. Send fejl 500, hvis noget går galt

### DELETE remove student from a course

1. Find course-id'et og student-id'et fra routen (request)
2. Fjern studenten fra coursen i databasen
3. Send 404, hvis studenten ikke er på coursen
4. Send course-id'et og student-id'et tilbage som JSON
5. Send fejl 500, hvis noget går galt

### DELETE course

Ligesom DELETE student. Studenterne bliver også fjernet fra coursen.
