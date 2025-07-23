# Melhorar as tabelas para o LMS

## 1 - PRAGMA
    Definir as configurações PRAGMA.

## 2 - CREATE TABLE
    Tabelas: users, sessions, resets, courses, lessons, lessons_completed, certificates
    Adicionar novas colunas se necessário
    Criar indices

## 3 - INSERT
    Inserir dados fictícios

## 4 - VIEW
    Criar views para queries complexas que são geralmente efetuas
    lessons_completed com informações completas
    certificates com informações completas

## 5 - SELECT
    Realizar possíveis SELECTS
    Usuário por id
    Curso por id
    Certificado por email
    Total de aulas de um curso / total concluído

## 6 - UPDATE
    Atualizar email de um usuário
    Atualizar sessão de um usuário (adicionar tempo)

## 7 - TRIGGER
    Atualizar automaticamente updated quando um usuário for atualizado

## 8 - DELETE
    Deletar usuário por ID
    Deletar todas as sessões expiradas
