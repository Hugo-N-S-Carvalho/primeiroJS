/*

A estrutura condicional `if...else` em JavaScript é usada para executar diferentes ações com base em diferentes condições. Com `if...else`, você pode especificar um bloco de código para ser executado se uma condição for verdadeira e outro bloco de código para ser executado se a mesma condição for falsa.

Aqui está a sintaxe básica de `if...else`:

```javascript
if (condição) {
  // código a ser executado se a condição for verdadeira
} else {
  // código a ser executado se a condição for falsa
}
```

Aqui está um exemplo simples que usa `if...else` para verificar se um número é par ou ímpar:

```javascript
const x = 5;

if (x % 2 === 0) {
  console.log('O número é par');
} else {
  console.log('O número é ímpar');
}
// Saída: O número é ímpar
```

Neste exemplo, verificamos se o resto da divisão de `x` por 2 é igual a 0. Se for verdadeiro, o número é par e o primeiro bloco de código é executado. Caso contrário, o número é ímpar e o segundo bloco de código é executado.

Você também pode usar `else if` para especificar uma nova condição para testar, caso a primeira condição seja falsa. Aqui está um exemplo que usa `else if` para verificar se um número é positivo, negativo ou zero:

```javascript
const x = 0;

if (x > 0) {
  console.log('O número é positivo');
} else if (x < 0) {
  console.log('O número é negativo');
} else {
  console.log('O número é zero');
}
// Saída: O número é zero
```

Neste exemplo, verificamos primeiro se `x` é maior que 0. Se for verdadeiro, o número é positivo e o primeiro bloco de código é executado. Caso contrário, verificamos se `x` é menor que 0 usando `else if`. Se essa condição for verdadeira, o número é negativo e o segundo bloco de código é executado. Se nenhuma dessas condições for verdadeira, o terceiro bloco de código (após o `else`) é executado e o número é zero.

Esses são apenas alguns exemplos básicos de como usar `if...else` em JavaScript. Você pode usar essa estrutura condicional para tomar decisões em seu código com base em diferentes condições.

Origem: conversa com o Bing, 03/06/2023
(1) if...else - JavaScript | MDN. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else.
(2) JavaScript if else else if - W3Schools. https://www.w3schools.com/js/js_if_else.asp.
(3) IF e ELSE em JavaScript - JavaScript Progressivo. https://www.javascriptprogressivo.net/2018/08/IF-ELSE-O-que-e-Como-usar-Para-que-serve-Exemplos-de-codigo.html.
(4) JavaScript: Estrutura condicional if - DevMedia. https://www.devmedia.com.br/javascript-estrutura-condicional-if/40611.



Claro! Aqui estão mais alguns exemplos de como usar `if...else` em JavaScript:

1. Verificar se uma pessoa é maior de idade:

```javascript
const idade = 20;

if (idade >= 18) {
  console.log('A pessoa é maior de idade');
} else {
  console.log('A pessoa é menor de idade');
}
// Saída: A pessoa é maior de idade
```

2. Verificar se uma pessoa pode se aposentar:

```javascript
const idade = 65;
const tempoDeContribuicao = 30;

if (idade >= 65 || tempoDeContribuicao >= 30) {
  console.log('A pessoa pode se aposentar');
} else {
  console.log('A pessoa ainda não pode se aposentar');
}
// Saída: A pessoa pode se aposentar
```

3. Verificar se uma pessoa passou em um teste:

```javascript
const nota = 85;
const frequencia = 90;

if (nota >= 70 && frequencia >= 75) {
  console.log('A pessoa passou no teste');
} else {
  console.log('A pessoa não passou no teste');
}
// Saída: A pessoa passou no teste
```

Esses são apenas alguns exemplos de como você pode usar `if...else` para tomar decisões em seu código com base em diferentes condições. Você pode usar essa estrutura condicional de muitas maneiras diferentes, dependendo das necessidades do seu código.





*/ 