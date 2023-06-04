/*O método `getElementsByTagName()` é usado para selecionar todos os elementos em um documento HTML que correspondem a uma determinada tag. Por exemplo, se você quiser selecionar todos os elementos `<p>` em um documento, você pode usar o seguinte código:

```javascript
var elements = document.getElementsByTagName('p');
```

A variável `elements` agora contém uma lista de todos os elementos `<p>` no documento.

Aqui estão alguns exemplos adicionais de como usar o método `getElementsByTagName()` em JavaScript:

1. Selecionar todos os elementos `<p>` e alterar seu conteúdo para "Hello World!":

```javascript
var elements = document.getElementsByTagName('p');
for (var i = 0; i < elements.length; i++) {
  elements[i].innerHTML = 'Hello World!';
}
```

2. Selecionar todos os elementos `<img>` e alterar seu atributo `src` para "imagem.jpg":

```javascript
var elements = document.getElementsByTagName('img');
for (var i = 0; i < elements.length; i++) {
  elements[i].src = 'imagem.jpg';
}
```

3. Selecionar todos os elementos `<a>` e adicionar um novo atributo `target="_blank"`:

```javascript
var elements = document.getElementsByTagName('a');
for (var i = 0; i < elements.length; i++) {
  elements[i].setAttribute('target', '_blank');
}
```

Espero que isso ajude! Se você tiver alguma dúvida, por favor me avise.
explique tudo sobre getElementByTagName .js com muitos exemplos

Origem: conversa com o Bing, 03/06/2023
(1) HTML DOM Document getElementsByTagName() Method - W3Schools. https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp.
(2) Element: getElementsByTagName() method - Web APIs | MDN. https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName.
(3) Document: getElementsByTagName() method - Web APIs | MDN - MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/API/document/getElementsByTagName.*/ 