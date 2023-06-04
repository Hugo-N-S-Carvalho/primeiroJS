/*O método `getElementsByName()` é usado para selecionar todos os elementos em um documento HTML que correspondem a um determinado nome. Por exemplo, se você quiser selecionar todos os elementos `<input>` com o atributo `name="username"`, você pode usar o seguinte código:

```javascript
var elements = document.getElementsByName('username');
```

A variável `elements` agora contém uma lista de todos os elementos `<input>` com o atributo `name="username"` no documento.

Aqui estão alguns exemplos adicionais de como usar o método `getElementsByName()` em JavaScript:

1. Selecionar todos os elementos `<input>` com o atributo `name="gender"` e verificar qual deles está selecionado:

```javascript
var elements = document.getElementsByName('gender');
for (var i = 0; i < elements.length; i++) {
  if (elements[i].checked) {
    console.log(elements[i].value + ' is selected');
  }
}
```

2. Selecionar todos os elementos `<input>` com o atributo `name="interests[]"` e verificar quais deles estão selecionados:

```javascript
var elements = document.getElementsByName('interests[]');
for (var i = 0; i < elements.length; i++) {
  if (elements[i].checked) {
    console.log(elements[i].value + ' is selected');
  }
}
```

3. Selecionar todos os elementos `<select>` com o atributo `name="country"` e obter o valor selecionado:

```javascript
var elements = document.getElementsByName('country');
var selectedValue = elements[0].value;
console.log('Selected country: ' + selectedValue);
```

Espero que isso ajude! Se você tiver alguma dúvida, por favor me avise.
explique tudo sobre getElementByName .js com muitos exemplos

Origem: conversa com o Bing, 03/06/2023
(1) JavaScript getElementsByName() Explained By Practical Examples. https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbyname/.
(2) Document.getElementsByName() - APIs da Web | MDN. https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByName.
(3) HTML DOM Document getElementsByName() Method - W3Schools. https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp.*/ 