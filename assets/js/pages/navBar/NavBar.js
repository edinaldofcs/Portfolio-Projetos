import { infos } from '../../Infos.js'
import { montarElemento } from "../../Functions.js";


const itens = ['Sobre', 'Skills', 'Hobbies', 'Formacao', 'Projetos', infos.email]

export function NavBar() {
  
  const section = montarElemento('section','menu-nav');

  const div = montarElemento('div','menu-left') ;
  const imagem = montarElemento('img','menu-left__img') ;
  imagem.src = 'assets/img/icon.svg'
  const paragrafo = montarElemento('p','menu-left__name') ;
  paragrafo.textContent = infos.nome

  div.appendChild(imagem) 
  div.appendChild(paragrafo)
  section.appendChild(div)

  const nav = montarElemento('nav','menu-right') 
  const ul = montarElemento('ul','menu-right__list') 

  itens.map((element, index)=>{
    const li = montarElemento('li','menu-right__item') 
    const link = montarElemento('a','menu-right__link') 
    link.innerHTML = element;
    link.href = `#${element}`
    ul.appendChild(li)
    li.appendChild(link)
  })  
  nav.appendChild(ul)

  section.appendChild(nav);

  var root = document.getElementById('root')
  root.appendChild(section);

}

 

