# Considerações:

- Use STRICT.

- CURRENT_TIMESTAMP retorna a data e hora atual.

- PRIMARY KEY (id1, id2) define uma chave primária composta.

- O SLUG do curso precisa ser único
/api/javascript-basico

- O SLUG da aula precisa ser único em relação ao curso.
/api/javascript-basico/variaveis-let-const

- Se o usuário for deletado, as aulas concluídas e certificados desse usuário também devem ser removidas.

- O campo "free" na tabela de aulas deve ser um booleano.

```js
// Users
{
  "id": 42,
  "name": "André",
  "password": "senha123",
  "email": "andre@email.com",
  "created": "2049-06-14 12:34:56"
}

// Courses
{
  "id": 1,
  "slug": "javascript-basico",
  "title": "JavaScript Básico",
  "description": "Aprenda os fundamentos da linguagem JavaScript.",
  "aulas": 20,
  "horas": 5,
  "created": "2049-06-14 12:34:56"
}

// Lessons
{
  "id": 101,
  "course_id": 1,
  "slug": "variaveis-let-const",
  "title": "Variáveis: let e const",
  "materia": "Fundamentos",
  "materia_slug": "fundamentos",
  "seconds": 480,
  "video": "variaveis.mp4",
  "description": "Entenda a diferença entre let, const e var.",
  "lesson_order": 3,
  "free": 1,
  "created": "2049-06-14 12:35:10"
}

// Lesson Completed
{
  "user_id": 42,
  "course_id": 1,
  "lesson_id": 101,
  "completed": "2049-06-15 08:20:05"
}

// Certificates
{
  "id": "aq32scsqd",
  "user_id": 42,
  "course_id": 1,
  "completed": "2049-06-15 09:10:00"
}
```