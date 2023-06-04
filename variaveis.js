/*


// //Claro! Variáveis em JavaScript são espaços de memória do computador destinados a dados que são manipulados e alterados durante a execução de um algoritmo ⁷. Existem diferentes tipos de variáveis em JavaScript, incluindo:

// 1. **Strings** - São textos puros ¹.
// 2. **Numbers** - São os números, seja eles integer, float, double etc ¹.
// 3. **Booleans** - São os operadores booleanos (true ou false) ¹.
// 4. **Arrays** - É uma estrutura de dado para armazenar uma coleção de valores, sendo eles de qualquer tipo ¹.
// 5. **Objects** - Conjunto de atributos aninhados a uma variável denomina-se um objeto ¹.

// Aqui estão alguns exemplos de como declarar variáveis em JavaScript:

// ```javascript
// var x = 42; // Declara uma variável com a palavra-chave var  descontinuado. NÃO USAR!
// let y = 13; // Declara uma variável local de escopo do bloco
// const z = 3.14; // Declara uma constante de escopo de bloco, apenas de leitura
// ```

// Existem também muitos vídeos no YouTube que podem ajudá-lo a entender melhor as variáveis em JavaScript, como "Javascript Aula 01 - Variáveis (Conceitos Básicos)" ², "Como criar variáveis com JavaScript?" ³ e "Variáveis e Constantes - Curso Introdutório de JavaScript GRATUITO | Trybe" ⁴.

// Espero que isso ajude! Você tem alguma dúvida específica sobre variáveis em JavaScript?

// Origem: conversa com o Bing, 03/06/2023
// (1) O que são variáveis JavaScript, para que servem e como criar? - Kenzie. https://kenzie.com.br/blog/variaveis-javascript/.
// (2) Entendendo os tipos e variáveis em JavaScript - Medium. https://bing.com/search?q=vari%c3%a1veis+em+javascript.
// (3) Javascript Aula 01 - Variáveis (Conceitos Básicos). https://www.youtube.com/watch?v=Qxz5TKqYkCg.
// (4) Como criar variáveis com JavaScript ?. https://www.youtube.com/watch?v=jvkGP4CVS2g.
// (5) Variáveis e Constantes - Curso Introdutório de JavaScript GRATUITO | Trybe. https://www.youtube.com/watch?v=KG1uwe6QnSQ.
// (6) Sintaxe e tipos - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types.
// (7) Armazenando as informações que você precisa — Variáveis. https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables.
// (8) Como declarar uma variável em JavaScript – var. https://www.javascriptprogressivo.net/2014/07/como-declarar-uma-variavel-em-javascript-var.html. 





Não, `var` ainda é uma palavra-chave válida em JavaScript para declarar variáveis ¹. No entanto, com a introdução de `let` e `const` no ECMAScript 6 (ES6), o uso de `var` tornou-se menos comum. Isso porque `let` e `const` têm escopo de bloco, enquanto `var` tem escopo de função ou global ¹.

Isso significa que o valor de uma variável declarada com `let` ou `const` está disponível apenas dentro do bloco em que foi declarada, enquanto o valor de uma variável declarada com `var` está disponível em toda a função ou globalmente (se declarada fora de uma função) ¹.

Você tem alguma outra dúvida sobre isso?

Origem: conversa com o Bing, 03/06/2023
(1) var - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/var.
(2) Deprecated and obsolete features - JavaScript | MDN. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features.
(3) Quando se deve usar 'var' no JavaScript? - Stack Overflow em Português. https://pt.stackoverflow.com/questions/2513/quando-se-deve-usar-var-no-javascript.





A principal diferença entre `let` e `const` é que as variáveis declaradas com `let` podem ser atualizadas, mas não podem ser redeclaradas no mesmo escopo ⁵. Por outro lado, as variáveis declaradas com `const` não podem ser atualizadas nem redeclaradas ⁵.

Isso significa que, se você declarar uma variável com `let`, poderá alterar seu valor posteriormente:

```javascript
let x = 1;
x = 2; // Isso é permitido
```

Mas se você tentar redeclarar a variável `x` no mesmo escopo, receberá um erro:

```javascript
let x = 1;
let x = 2; // Isso gerará um erro
```

Por outro lado, se você declarar uma variável com `const`, não poderá alterar seu valor:

```javascript
const y = 1;
y = 2; // Isso gerará um erro
```

E também não poderá redeclarar a variável `y` no mesmo escopo:

```javascript
const y = 1;
const y = 2; // Isso gerará um erro
```

Espero que isso ajude a esclarecer a diferença entre `let` e `const`. Você tem alguma outra dúvida sobre isso?

Origem: conversa com o Bing, 03/06/2023
(1) Qual a diferença entre var, let e const no JavaScript? - LinkedIn Portugal. https://pt.linkedin.com/pulse/qual-diferen%C3%A7a-entre-var-let-e-const-javascript-gabriel-de-jesus.
(2) Qual a diferença entre var, let e const no JavaScript? - LinkedIn Portugal. https://bing.com/search?q=diferen%c3%a7a+entre+let+e+const.
(3) Entenda a diferença entre var, let e const no JavaScript. https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript.
(4) var, let e const – Qual é a diferença? - freeCodeCamp.org. https://www.freecodecamp.org/portuguese/news/var-let-e-const-qual-e-a-diferenca/.
(5) var, const ou let? Qual usar? - Stack Overflow em Português. https://pt.stackoverflow.com/questions/206117/var-const-ou-let-qual-usar.






























*/