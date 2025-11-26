# Variáveis e Tipos de Dados em JavaScript

Este repositório contém exemplos e um PoC sobre:
- `var`, `let` e `const`
- Tipagem dinâmica
- Tipos primitivos e tipos de referência
- Armadilhas comuns
- Mini-desafio para praticar

---

## 📌 Diferenças entre var, let e const

| Palavra-chave | Escopo | Pode mudar valor? | Pode redeclarar? |
|---------------|--------|-------------------|------------------|
| var | função | sim | sim |
| let | bloco | sim | não |
| const | bloco | não | não |

---

## 📌 Tipagem Dinâmica
```js
let x = 10;   // number
x = "texto";  // string
```

---

## 📌 Tipos de Dados

### Primitivos:
- string
- number
- boolean
- undefined
- null
- symbol
- bigint

### Referência:
- object
- array
- function

---

## 📌 PoC – Detector de Tipos

No arquivo `script.js` há uma função que identifica e exibe o tipo de qualquer valor no navegador.

Abra o `index.html` e teste os botões.

---

## 📌 Desafio

Crie uma função chamada `analisarValor(valor)` que:
- mostra tipo
- identifica se é primitivo ou referência
- sugere uma conversão possível (ex: number → string)

O desafio completo está no `desafio.md`.
