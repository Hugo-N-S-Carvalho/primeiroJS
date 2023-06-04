/*

O método `querySelectorAll()` é usado para selecionar todos os elementos em um documento HTML que correspondem a um determinado seletor CSS. Ele retorna uma lista de nós que correspondem ao seletor especificado.

Aqui estão alguns exemplos de como usar o método `querySelectorAll()` em JavaScript com `let` e `const`:

1. Selecionar todos os elementos `<input>` com o atributo `name="gender"` e verificar qual deles está selecionado:

```javascript
const elements = document.querySelectorAll('input[name="gender"]');
elements.forEach((element) => {
  if (element.checked) {
    console.log(`${element.value} is selected`);
  }
});
```

2. Selecionar todos os elementos `<input>` com o atributo `name="interests[]"` e verificar quais deles estão selecionados:

```javascript
const elements = document.querySelectorAll('input[name="interests[]"]');
elements.forEach((element) => {
  if (element.checked) {
    console.log(`${element.value} is selected`);
  }
});
```

3. Selecionar todos os elementos `<select>` com o atributo `name="country"` e obter o valor selecionado:

```javascript
const elements = document.querySelectorAll('select[name="country"]');
const selectedValue = elements[0].value;
console.log(`Selected country: ${selectedValue}`);
```

Espero que isso ajude! Se você tiver alguma dúvida, por favor me avise.
explique tudo sobre querySelectorAll .js com muitos exemplos e utilizando somente let e const

Origem: conversa com o Bing, 03/06/2023
(1) Document.querySelectorAll() - APIs da Web | MDN. https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelectorAll.
(2) HTML DOM Document querySelectorAll() Method - W3Schools. https://www.w3schools.com/jsref/met_document_queryselectorall.asp.
(3) Document: querySelectorAll() method - Web APIs | MDN. https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll.
*/ 