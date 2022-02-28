import { infos } from '../../Infos.js'
import { montarElemento } from "../../Functions.js";

export function Contato(){
  var root = document.getElementById('root')
  var section = montarElemento('section', 'contato')  
  var conteudo =  `
  <div class="contato__img">
    ${infos.contact.imagem}
    </div>
    <form action="" class="contato__form">
    <fieldset>
    <legend class="contato__titulo">${infos.contact.titulo}</legend>
    <p class="contato__subtitulo">${infos.contact.texto1}</p>
    <p class="contato__subtitulo">${infos.contact.texto2}</p>
    <input class="contato__input contato__nome" type="text" name="nome" placeholder="digite seu nome">
    <input class="contato__input contato__email" type="text" name="email" placeholder="digite seu email">
    <input class="contato__input contato__assunto" type="text" name="assunto" placeholder="assunto">
    <textarea class="contato__input contato__texto" name="" id="" name="texto" placeholder="Mensagem"></textarea>
    <input class="experiencia__container--btn dark contato__input" type="submit" value="Enviar mensagem">
    </fieldset>
    </form>
    `
    section.innerHTML = conteudo;
    root.appendChild(section); 
  }