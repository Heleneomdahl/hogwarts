# Hogwarts API – backend

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
2. Hent name og house fra body
3. Opdatér teacheren i databasen
4. Send 404, hvis teacheren ikke findes
5. Send den opdaterede teacher tilbage som JSON
6. Send fejl 500, hvis noget går galt

###### Students

### GET students

1. Hent alle students fra databasen
2. Send dem tilbage som JSON
3. Send fejl 500, hvis noget går galt

### GET single student

1. Find id'et fra routen (request)
2. Hent den student, der har det id, fra databasen
3. Send 404, hvis studenten ikke findes
4. Send studenten tilbage som JSON
5. Send fejl 500, hvis noget går galt

### PUT student

1. Find id'et fra routen (request)
2. Hent first (fornavn) fra body
3. Opdatér studenten i databasen
4. Send 404, hvis studenten ikke findes
5. Send den opdaterede student tilbage som JSON
6. Send fejl 500, hvis noget går galt
