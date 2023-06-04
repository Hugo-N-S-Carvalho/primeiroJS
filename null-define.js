/*




`null` e `undefined` são dois valores especiais em JavaScript que representam a ausência de valor ou a falta de definição ¹.

`undefined` significa que uma variável foi declarada, mas ainda não foi atribuída um valor. Por exemplo:

```javascript
let x;
console.log(x); // undefined
```

`null`, por outro lado, é um valor que representa a ausência intencional de qualquer valor de objeto ¹. É atribuído explicitamente a uma variável para indicar que ela não tem valor:

```javascript
let x = null;
console.log(x); // null
```

Embora `null` e `undefined` sejam diferentes, eles são considerados iguais em uma comparação de igualdade não estrita (`==`):

```javascript
console.log(null == undefined); // true
```

No entanto, eles não são considerados iguais em uma comparação de igualdade estrita (`===`):

```javascript
console.log(null === undefined); // false
```

Espero que isso ajude a entender a diferença entre `null` e `undefined` em JavaScript. Você tem alguma dúvida específica sobre esses valores?

Origem: conversa com o Bing, 03/06/2023
(1) null - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/null.
(2) javascript - Qual a diferença entre null e undefined? - Stack Overflow .... https://pt.stackoverflow.com/questions/2407/qual-a-diferen%C3%A7a-entre-null-e-undefined.
(3) Why does null == undefined evaluate to true? - Stack Overflow. https://stackoverflow.com/questions/38630411/why-does-null-undefined-evaluate-to-true.







*/ 