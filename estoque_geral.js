// btn para delizar a barra lateral
const divListaMenu = document.getElementById('divListaMenu');
document.querySelector("#hamb").addEventListener('click', evt => divListaMenu.classList.toggle('ocultar'));
//------------------------------------------------------------//

// adicionando de ocultar barra após acessar um link
[...document.querySelectorAll('#menuLista a')].map(e =>
    e.addEventListener('click', evt => divListaMenu.classList.add('ocultar')));
//------------------------------------------------------------//