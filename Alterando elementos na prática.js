/*Para alterar elementos em um documento HTML usando JavaScript, você pode usar o método `querySelector()` ou `querySelectorAll()` para selecionar o elemento que deseja alterar e, em seguida, usar as propriedades do objeto retornado para fazer as alterações.

Aqui estão alguns exemplos de como alterar elementos em um documento HTML usando JavaScript com `let` e `const`:

1. Alterar o conteúdo de um elemento `<p>` com o ID "demo":

```javascript
const element = document.querySelector('#demo');
element.innerHTML = 'Novo conteúdo';
```

2. Alterar o valor de um elemento `<input>` com o ID "username":

```javascript
const element = document.querySelector('#username');
element.value = 'Novo valor';
```

3. Alterar o estilo de um elemento `<p>` com a classe "destaque":

```javascript
const elements = document.querySelectorAll('.destaque');
elements.forEach((element) => {
  element.style.color = 'red';
});
```

Espero que isso ajude! Se você tiver alguma dúvida, por favor me avise.
Alterando elementos .js com muitos exemplos  usando let e const*/ 