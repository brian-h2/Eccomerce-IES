## Proyecto Eccomerce de Aplicaciones Web I
### Nombre: Brian Heredia
#### Hosteado en: https://eccomerce-ies.vercel.app/
---
- Desarrollaremos una tienda interactiva con el stack de HTML,CSS Y JavaScript.

A nivel de codigo esta muy bien, pero te falto crear la card como componente. Deberias tener una carpeta "componentes" y ahi un card.js donde escribis el codigo html parametrizado de los productos asi te evitas escribir siempre el mismo codigo.

Y ya para la proxima entrega podrias 

tener un solo js para que le sirva a todos html, asi no repetis tanto codigo. Si le metes un poco mas de cabeza, te vas a ahorrar muchisimo trabajo teniendo un solo js. La idea es que puedas sacar que categoria es para posteriormete renderizar las cards de productos correspondientes, para lograr eso podes añadir un atributo al body o tener un input hidden con teniendo como valor, por ejemplo "categoria1", entonces vos en js extraes ese valor y ya sabes que categoria buscas.

 Maso menos ya lo haces con el Main.js, pero recomiendo que sea otro archivo mas para no mezclar códigos y funcionalidades. 