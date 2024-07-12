### Funcionalidade: Contagem de alunos únicos por instrutor

Em um portal de cursos online, cada usuário possui um código único, representado por um número
inteiro. Cada instrutor do portal pode ter vários cursos, sendo que um mesmo aluno pode se
matricular em quantos cursos quiser. O número total de alunos de um instrutor não é simplesmente a
soma dos alunos de todos os cursos que ele possui, pois pode haver alunos repetidos em mais de um
curso.

#### Cenário 1: Contagem de alunos únicos para o instrutor Alex

Dado que o instrutor Alex possui três cursos A, B e C, com os seguintes alunos:

- Curso A: 101, 102, 103
- Curso B: 102, 104
- Curso C: 101, 105

Quando o sistema processa os alunos dos cursos A, B e C do instrutor Alex
Então o sistema deve retornar que o número total de alunos únicos do instrutor Alex é 5.

#### Cenário 2: Contagem de alunos únicos para outro instrutor

Dado que o instrutor João possui dois cursos X e Y, com os seguintes alunos:

- Curso X: 201, 202, 203
- Curso Y: 201, 204

Quando o sistema processa os alunos dos cursos X e Y do instrutor João
Então o sistema deve retornar que o número total de alunos únicos do instrutor João é 4.
