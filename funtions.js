/*
Uma função em JavaScript é um bloco de código projetado para executar uma tarefa específica. Uma função é executada quando algo a invoca (chama).

Aqui está um exemplo simples de uma função que calcula o produto de dois números:

```javascript
function calcularProduto(x, y) {
  return x * y;
}

const resultado = calcularProduto(5, 10);
console.log(resultado); // 50
```

Neste exemplo, definimos uma função chamada `calcularProduto` que aceita dois argumentos: `x` e `y`. A função retorna o produto desses dois números. Em seguida, chamamos a função passando os valores 5 e 10 como argumentos e armazenamos o resultado na variável `resultado`. Finalmente, exibimos o resultado no console.

Você pode definir uma função usando a palavra-chave `function`, seguida pelo nome da função, seguido por parênteses `()`. Os nomes dos parâmetros da função são listados dentro dos parênteses, separados por vírgulas. O código a ser executado pela função é colocado dentro de chaves `{}`.

```javascript
function nomeDaFuncao(parametro1, parametro2) {
  // código a ser executado pela função
}
```

Os parâmetros da função são os valores recebidos pela função quando ela é invocada. Dentro da função, os argumentos (os parâmetros) se comportam como variáveis locais.

Você pode chamar (invocar) uma função usando seu nome seguido por parênteses `()`. Se a função aceitar parâmetros, você pode passar os valores dos argumentos dentro dos parênteses, separados por vírgulas.

```javascript
nomeDaFuncao(argumento1, argumento2);
```

Aqui está outro exemplo de uma função que converte uma temperatura de Fahrenheit para Celsius:

```javascript
function fahrenheitParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5/9);
}

const celsius = fahrenheitParaCelsius(77);
console.log(celsius); // 25
```

Neste exemplo, definimos uma função chamada `fahrenheitParaCelsius` que aceita um argumento: `fahrenheit`. A função converte a temperatura de Fahrenheit para Celsius usando a fórmula `(fahrenheit - 32) * (5/9)` e retorna o resultado. Em seguida, chamamos a função passando o valor 77 como argumento e armazenamos o resultado na variável `celsius`. Finalmente, exibimos o resultado no console.

Esses são apenas alguns exemplos básicos de como definir e usar funções em JavaScript. As funções são muito poderosas e podem ser usadas de muitas maneiras diferentes para realizar tarefas complexas em seu código.

Origem: conversa com o Bing, 03/06/2023
(1) Funções - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions.
(2) JavaScript Functions - W3Schools. https://www.w3schools.com/js/js_functions.asp.
(3) Funções - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions.






*/ 