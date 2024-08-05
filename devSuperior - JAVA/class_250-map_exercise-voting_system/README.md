# História de Usuário: Consolidação de Votos em uma Eleição

## Descrição

Como responsável pela contagem de votos em uma eleição, eu como usuário desejo ter um programa que
seja capaz de ler registros de votação de um arquivo no formato .csv e gerar um relatório
consolidado com os totais de votos de cada candidato. Isso é necessário para facilitar a análise e o
resultado final da eleição.

## Critérios de Aceitação

- O programa deve ser capaz de ler um arquivo no formato .csv que contém registros de votação.
- Cada registro contém o nome do candidato e a quantidade de votos que ele obteve.
- Após processar o arquivo, o sistema deve gerar um relatório consolidado mostrando o total de votos
  de cada candidato.

## Cenários de Teste

### Cenário 1: Consolidação de votos de um arquivo com registros

Dado que há um arquivo de registros de votação chamado `registros_votacao.csv`, com os seguintes
dados:

| Candidato   | Votos |
|-------------|-------|
| Alex Blue   | 15    |
| Maria Green | 22    |
| Bob Brown   | 21    |
| Alex Blue   | 30    |
| Bob Brown   | 15    |
| Maria Green | 27    |
| Maria Green | 22    |
| Bob Brown   | 25    |
| Alex Blue   | 31    |

Quando o sistema processa o arquivo `registros_votacao.csv`<br />
Então o sistema deve gerar um relatório consolidado com os totais de votos de cada candidato,
mostrando:

| Candidato   | Votos |
|-------------|-------|
| Alex Blue   | 76    |
| Maria Green | 71    |
| Bob Brown   | 61    |

### Cenário 2: Consolidação de votos de um arquivo vazio

Dado que há um arquivo de registros de votação vazio `registros_votacao.csv`, sem nenhum dado. <br/>
Quando o sistema processa o arquivo `registros_votacao.csv`<br /> Então o sistema deve
gerar um
relatório indicando que não houve registros de votação.
