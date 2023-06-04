/*
DOM é a sigla para **Document Object Model** (Modelo de Objeto de Documento). É uma interface de programação para documentos HTML e XML. Ele define a estrutura lógica dos documentos e o modo como um documento é acessado e manipulado ¹.

Quando uma página da web é carregada, o navegador cria um **Modelo de Objeto de Documento** da página. O modelo HTML DOM é construído como uma árvore de objetos ¹. Com o modelo de objeto, o JavaScript obtém todo o poder necessário para criar HTML dinâmico ².

O DOM é um padrão do W3C (World Wide Web Consortium) e está dividido em 3 partes diferentes: Core DOM - modelo padrão para todos os tipos de documentos; XML DOM - modelo padrão para documentos XML; HTML DOM - modelo padrão para documentos HTML ².

Você gostaria de saber mais sobre algum aspecto específico do DOM?

Origem: conversa com o Bing, 03/06/2023
(1) What is HTML DOM - W3Schools. https://www.w3schools.com/whatis/whatis_htmldom.asp.
(2) JavaScript HTML DOM - W3Schools. https://www.w3schools.com/js/js_htmldom.asp.
(3) Document Object Model (DOM) - Web APIs | MDN. https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model.





Claro! Aqui estão alguns exemplos de como você pode usar o DOM para acessar e manipular elementos HTML com JavaScript:

- **Encontrando elementos HTML por id**: O jeito mais fácil de encontrar um elemento HTML no DOM é usando o id do elemento. Este exemplo encontra o elemento com id="intro": `var myElement = document.getElementById("intro");` .

- **Encontrando elementos HTML por nome de tag**: Este exemplo encontra todos os elementos `<p>`: `var x = document.getElementsByTagName("p");` .

- **Encontrando elementos HTML por nome de classe**: Se você quiser encontrar todos os elementos HTML com o mesmo nome de classe, use `getElementsByClassName()`. Este exemplo retorna uma lista de todos os elementos com class="intro": `var x = document.getElementsByClassName("intro");` .

- **Encontrando elementos HTML por seletores CSS**: Se você quiser encontrar todos os elementos HTML que correspondem a um seletor CSS especificado (id, nomes de classe, tipos, atributos, valores de atributos etc.), use o método `querySelectorAll()`. Este exemplo retorna uma lista de todos os elementos `<p>` com class="intro": `var x = document.querySelectorAll("p.intro");` .

Esses são apenas alguns exemplos de como você pode usar o DOM para acessar e manipular elementos HTML com JavaScript. Você gostaria de saber mais sobre algum desses exemplos ou sobre outro aspecto do DOM?




Claro! Aqui estão mais alguns exemplos de como você pode usar o DOM para acessar e manipular elementos HTML com JavaScript:

- **Alterando o conteúdo de elementos HTML**: Você pode usar a propriedade `innerHTML` para alterar o conteúdo de um elemento HTML. Este exemplo altera o conteúdo do elemento com id="demo": `document.getElementById("demo").innerHTML = "Hello World!";` .

- **Alterando o estilo (CSS) de elementos HTML**: Você pode usar a propriedade `style` para alterar o estilo de um elemento HTML. Este exemplo altera a cor do texto do elemento com id="demo" para vermelho: `document.getElementById("demo").style.color = "red";` .

- **Reagindo a eventos do DOM HTML**: Você pode usar o método `addEventListener()` para adicionar um manipulador de eventos a um elemento HTML. Este exemplo adiciona um manipulador de eventos "click" ao elemento com id="myBtn": `document.getElementById("myBtn").addEventListener("click", function(){ document.getElementById("demo").innerHTML = "Hello World!"; });` .

- **Adicionando e excluindo elementos HTML**: Você pode usar os métodos `createElement()` e `appendChild()` para adicionar novos elementos HTML. Este exemplo cria um novo elemento `<p>` e o adiciona ao final do corpo da página: `var p = document.createElement("p"); var node = document.createTextNode("This is new."); p.appendChild(node); var body = document.getElementsByTagName("body")[0]; body.appendChild(p);` . Você pode usar o método `removeChild()` para excluir um elemento HTML existente. Este exemplo exclui o elemento com id="myList2": `var parent = document.getElementById("myList1"); var child = document.getElementById("myList2"); parent.removeChild(child);` .

Esses são apenas alguns exemplos de como você pode usar o DOM para acessar e manipular elementos HTML com JavaScript. Você gostaria de saber mais sobre algum desses exemplos ou sobre outro aspecto do DOM?







*/ 