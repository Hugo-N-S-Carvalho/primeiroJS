/*O método `querySelector()` é usado para selecionar o primeiro elemento em um documento HTML que corresponde a um determinado seletor CSS. Por exemplo, se você quiser selecionar o primeiro elemento `<p>` em um documento, você pode usar o seguinte código:

```javascript
var element = document.querySelector('p');
```

A variável `element` agora contém o primeiro elemento `<p>` no documento.

Aqui estão alguns exemplos adicionais de como usar o método `querySelector()` em JavaScript:

1. Selecionar o primeiro elemento com a classe "destaque" e alterar seu conteúdo para "Hello World!":

```javascript
var element = document.querySelector('.destaque');
element.innerHTML = 'Hello World!';
```

2. Selecionar o primeiro elemento com o atributo `href` igual a "https://www.example.com" e alterar seu conteúdo para "Link":

```javascript
var element = document.querySelector('a[href="https://www.example.com"]');
element.innerHTML = 'Link';
```

3. Selecionar o primeiro elemento com o atributo `name` igual a "username" e obter seu valor:

```javascript
var element = document.querySelector('input[name="username"]');
var value = element.value;
console.log('Username: ' + value);
```

Espero que isso ajude! Se você tiver alguma dúvida, por favor me avise.
explique tudo sobre querySelector .js com muitos exemplos

Origem: conversa com o Bing, 03/06/2023
(1) Utilizando query Selector do Javascript - Diego Brocanelli. https://www.diegobrocanelli.com.br/javascript/utilizando-queryselector-do-javascript/.
(2) Document.querySelector() - APIs da Web | MDN - MDN Web Docs. https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector.
(3) Como Utilizar querySelector e textContent no JavaScript?. https://programadorviking.com.br/queryselector-textcontent-javascript/.
(4) HTML DOM Document querySelector() Method - W3Schools. https://www.w3schools.com/jsref/met_document_queryselector.asp.*/ 