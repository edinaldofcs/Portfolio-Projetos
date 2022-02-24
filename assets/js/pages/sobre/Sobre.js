/* <section class="sobre-mim">
    <h2 class="sobre-mim__titulo">Sobre mim</h2>
    <p class="sobre-mim__texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem temporibus rem adipisci
      eligendi labore similique voluptas! Quam id, hic aspernatur natus numquam debitis, quae fugit nobis, quia
      doloremque animi laudantium!</p>
    <p class="sobre-mim__texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem temporibus rem adipisci
      eligendi labore similique voluptas! Quam id, hic aspernatur natus numquam debitis, quae fugit nobis, quia
      doloremque animi laudantium!</p>
    <p class="sobre-mim__texto">efcs</p>
  </section> */


import { montarElemento } from "../../Functions.js";

export function Sobre() {
  
  const section = montarElemento('section','sobre-mim');
  const h2 = montarElemento('h2','sobre-mim__titulo');
  const paragrafo1 = montarElemento('p','sobre-mim__texto');
  const paragrafo2 = montarElemento('p','sobre-mim__texto');
  const paragrafo3 = montarElemento('p','sobre-mim__texto');
  h2.textContent = 'Sobre mim'
  h2.setAttribute('id','Sobre')
  
  paragrafo1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem temporibus rem adipisci eligendi labore similique voluptas! Quam id, hic aspernatur natus numquam debitis, quae fugit nobis, quia doloremque animi laudantium!'

  paragrafo2.textContent = paragrafo1.textContent;
  paragrafo3.textContent = "EFCS"

  section.appendChild(h2)
  section.appendChild(paragrafo1)
  section.appendChild(paragrafo2)
  section.appendChild(paragrafo3)

  paragrafo2.textContent = paragrafo1.textContent
  var root = document.getElementById('root')
  root.appendChild(section);

}

 