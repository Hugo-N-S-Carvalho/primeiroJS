/*Para alterar o texto ou HTML de um elemento em um documento HTML usando JavaScript, você pode usar o método `querySelector()` ou `querySelectorAll()` para selecionar o elemento que deseja alterar e, em seguida, usar as propriedades do objeto retornado para fazer as alterações.

Aqui estão alguns exemplos de como alterar o texto ou HTML de um elemento em um documento HTML usando JavaScript com `let` e `const`:

1. Alterar o texto de um elemento `<p>` com o ID "demo":

```javascript
const element = document.querySelector('#demo');
element.textContent = 'Novo texto';
```

2. Alterar o HTML de um elemento `<p>` com o ID "demo":

```javascript
const element = document.querySelector('#demo');
element.innerHTML = '<strong>Novo</strong> HTML';
```

3. Alterar o texto de todos os elementos `<p>`:

```javascript
const elements = document.querySelectorAll('p');
elements.forEach((element) => {
  element.textContent = 'Novo texto';
});
```

Espero que isso ajude! Se você tiver alguma dúvida, por favor me avise.
Alterando textos & HTML .js com muitos exemplos let e const


Você tem razão! O método `innerText` também pode ser usado para alterar o texto de um elemento em um documento HTML usando JavaScript. A diferença entre `textContent` e `innerText` é que `textContent` retorna todo o texto, incluindo o texto oculto, enquanto `innerText` retorna apenas o texto visível.

Aqui está um exemplo de como usar o método `innerText` para alterar o texto de um elemento `<p>` com o ID "demo":

```javascript
const element = document.querySelector('#demo');
element.innerText = 'Novo texto';
```

Espero que isso ajude! Se você tiver alguma dúvida, por favor me avise.*/ 