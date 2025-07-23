PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE users (
	id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))), 
	nome TEXT NOT NULL, 
	email TEXT NOT NULL UNIQUE COLLATE NOCASE, 
	password TEXT NOT NULL,
	created TEXT NOT NULL DEFAULT (datetime('now', '-3 hours')),
	updated_at TEXT
) WITHOUT ROWID, STRICT;
INSERT INTO users VALUES('03e02fed08073d952b3daa2d20e5000c','Igor Nunes','igor@email.com','senha123','2025-07-23 12:47:52',NULL);
INSERT INTO users VALUES('38bde0cf8b3fd7d6839ca9b83b15076b','Julia Castro','julia@email.com','senha123','2025-07-23 12:47:52',NULL);
INSERT INTO users VALUES('3c7d4dd16876f003b107583b16007def','Carlos Souza','carlos@email.com','senha123','2025-07-23 12:47:52',NULL);
INSERT INTO users VALUES('673aff3c81fef573a8c1d564521c6d8b','Eduardo Melo','eduardo@email.com','senha123','2025-07-23 12:47:52',NULL);
INSERT INTO users VALUES('77e04f52776c7bbd53fad72c5ff31d31','Daniela Rocha','daniela@email.com','senha123','2025-07-23 12:47:52',NULL);
INSERT INTO users VALUES('7cc7fc6243a2bad2aa36af2dd865e5ba','Fernanda Alves','fernanda@email.com','senha123','2025-07-23 12:47:52',NULL);
INSERT INTO users VALUES('8e6162ef3c8d30deb51c34238b28c699','Gustavo Reis','gustavo@email.com','senha123','2025-07-23 12:47:52',NULL);
INSERT INTO users VALUES('c70775b9a94ed64b484d8d7db6ef1523','Ana Silva','ana@email.com','senha123','2025-07-23 12:47:52',NULL);
INSERT INTO users VALUES('cc93fc36cce534f038ad8448c2d70e22','Bruno Lima','bruno@email.com','senha123','2025-07-23 12:47:52',NULL);
INSERT INTO users VALUES('e7287db61c3f9df11d429a29758254ef','Helena Dias','helena@email.com','senha123','2025-07-23 12:47:52',NULL);
CREATE TABLE courses (
	id INTEGER PRIMARY KEY,
	slug TEXT NOT NULL UNIQUE,
	title TEXT NOT NULL,
	aulas INTEGER NOT NULL,
	horas INTEGER NOT NULL,
	created TEXT NOT NULL DEFAULT (datetime('now', '-3 hours'))
) STRICT;
INSERT INTO courses VALUES(1,'html-basico','HTML Básico',4,2,'2025-07-23 12:47:54');
INSERT INTO courses VALUES(2,'css-fundamentos','CSS Fundamentos',4,3,'2025-07-23 12:47:54');
INSERT INTO courses VALUES(3,'js-intro','JavaScript Introdução',4,4,'2025-07-23 12:47:54');
INSERT INTO courses VALUES(4,'git-github','Git e GitHub',4,2,'2025-07-23 12:47:54');
INSERT INTO courses VALUES(5,'react-basico','React Básico',4,5,'2025-07-23 12:47:54');
CREATE TABLE lessons (
	id INTEGER PRIMARY KEY,
	slug TEXT NOT NULL,
	course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE ON UPDATE CASCADE,
	title TEXT NOT NULL,
	UNIQUE (slug, course_id)
) STRICT;
INSERT INTO lessons VALUES(1,'introducao-html',1,'Introdução ao HTML');
INSERT INTO lessons VALUES(2,'tags-basicas',1,'Tags Básicas');
INSERT INTO lessons VALUES(3,'listas-e-links',1,'Listas e Links');
INSERT INTO lessons VALUES(4,'formulario-simples',1,'Formulário Simples');
INSERT INTO lessons VALUES(5,'introducao-css',2,'Introdução ao CSS');
INSERT INTO lessons VALUES(6,'cores-e-fontes',2,'Cores e Fontes');
INSERT INTO lessons VALUES(7,'box-model',2,'Box Model');
INSERT INTO lessons VALUES(8,'flexbox',2,'Flexbox');
INSERT INTO lessons VALUES(9,'sintaxe-js',3,'Sintaxe JS');
INSERT INTO lessons VALUES(10,'variaveis',3,'Variáveis');
INSERT INTO lessons VALUES(11,'condicionais',3,'Condicionais');
INSERT INTO lessons VALUES(12,'funcoes',3,'Funções');
INSERT INTO lessons VALUES(13,'git-init',4,'Git Init');
INSERT INTO lessons VALUES(14,'commits',4,'Commits');
INSERT INTO lessons VALUES(15,'branching',4,'Branching');
INSERT INTO lessons VALUES(16,'github',4,'Trabalhando com GitHub');
INSERT INTO lessons VALUES(17,'jsx',5,'JSX');
INSERT INTO lessons VALUES(18,'componentes',5,'Componentes');
INSERT INTO lessons VALUES(19,'props-state',5,'Props e State');
INSERT INTO lessons VALUES(20,'eventos',5,'Eventos');
CREATE TABLE lessons_completed (
	id INTEGER PRIMARY KEY,
	user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
	lesson_id INTEGER NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
	completed TEXT NOT NULL DEFAULT (datetime('now', '-3 hours')),
	UNIQUE(user_id, course_id, lesson_id)
) STRICT;
INSERT INTO lessons_completed VALUES(1,'cc93fc36cce534f038ad8448c2d70e22',1,1,'2025-07-23 12:53:18');
INSERT INTO lessons_completed VALUES(2,'03e02fed08073d952b3daa2d20e5000c',1,2,'2025-07-23 12:53:18');
INSERT INTO lessons_completed VALUES(3,'673aff3c81fef573a8c1d564521c6d8b',2,5,'2025-07-23 12:53:18');
CREATE TABLE certificates (
	id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
	user_id TEXT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
	course_id INTEGER NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
	completed TEXT NOT NULL DEFAULT (datetime('now', '-3 hours')),
	UNIQUE(user_id, course_id)
) WITHOUT ROWID, STRICT;
INSERT INTO certificates VALUES('08c14d483c089ce0053ff951048f1102','673aff3c81fef573a8c1d564521c6d8b',3,'2025-07-23 12:54:31');
INSERT INTO certificates VALUES('38897c45dad9c2473c195c55ae98fef9','cc93fc36cce534f038ad8448c2d70e22',1,'2025-07-23 12:54:31');
INSERT INTO certificates VALUES('dc2c9c8857bdcb37fb416ca32a477359','03e02fed08073d952b3daa2d20e5000c',2,'2025-07-23 12:54:31');
CREATE TABLE sessions (
	id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
	user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	created TEXT DEFAULT (datetime('now', '-3 hours')),
	expires_at TEXT DEFAULT (datetime('now', '-3 hours', '+1 day'))
) WITHOUT ROWID, STRICT;
INSERT INTO sessions VALUES('4b266c0cf33e9e12385c92247ebc0758','03e02fed08073d952b3daa2d20e5000c','2025-07-23 12:55:12','2025-07-24 12:55:12');
INSERT INTO sessions VALUES('9342a87299e745ca4b2ad4bd55c2d48f','673aff3c81fef573a8c1d564521c6d8b','2025-07-23 12:55:12','2025-07-24 12:55:12');
CREATE TABLE resets (
	token TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
	user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	created TEXT DEFAULT (datetime('now', '-3 hours')),
	expires_at TEXT DEFAULT (datetime('now', '-3 hours', '+1 hour'))
) STRICT;
INSERT INTO resets VALUES('08f40dada634b7958f8e537e48c51ae6','cc93fc36cce534f038ad8448c2d70e22','2025-07-23 12:56:17','2025-07-23 13:56:17');
CREATE VIEW certificates_info AS
SELECT u.nome AS nome, c.title AS course, cc.id AS certificate 
FROM certificates AS cc
INNER JOIN users AS u ON cc.user_id = u.id
INNER JOIN courses AS c ON cc.course_id = c.id;
CREATE VIEW lessons_completed_info AS
SELECT u.nome AS nome, u.email AS email, c.title AS course, l.title AS lesson 
FROM lessons_completed AS lc
INNER JOIN users AS u ON lc.user_id = u.id
INNER JOIN lessons AS l ON lc.lesson_id = l.id
INNER JOIN courses AS c ON lc.course_id = c.id;
CREATE VIEW course_lessons_by_user AS
SELECT u.id AS user_id, u.nome AS user_name, c.title AS course, (COUNT(lc.completed) || '/' || COUNT(l.id)) AS lessons_completed 
FROM courses AS c
LEFT JOIN lessons AS l ON l.course_id = c.id
LEFT JOIN lessons_completed AS lc ON lc.lesson_id = l.id AND lc.user_id = u.id
LEFT JOIN users AS u 
GROUP BY user_id, c.id;
CREATE VIEW view_lessons_completed AS
SELECT u.id AS user_id, u.nome AS user_name, u.email AS user_email, c.title AS course, (COUNT(lc.completed) || '/' || COUNT(l.id)) AS lessons_completed 
FROM courses AS c
LEFT JOIN lessons AS l ON l.course_id = c.id
LEFT JOIN users AS u ON 1=1 
LEFT JOIN lessons_completed AS lc ON lc.lesson_id = l.id AND lc.user_id = u.id
GROUP BY c.id, u.id, u.email;
CREATE VIEW view_users_lessons_completed AS
SELECT u.email AS user_email, c.title AS course, (COUNT(lc.completed) || '/' || COUNT(l.id)) AS lessons_completed 
FROM courses AS c
LEFT JOIN lessons AS l ON l.course_id = c.id
LEFT JOIN users AS u
LEFT JOIN lessons_completed AS lc ON lc.lesson_id = l.id AND lc.user_id = u.id
GROUP BY c.id, u.id;
COMMIT;
