import { montarElemento } from "../../Functions.js";

export function Acessibilidade() {
  var root = document.getElementById('root');
  var section = montarElemento('section', 'animation');
  section.classList.add('block');
  section.setAttribute('id','animation');
  var titulos = ['fontes', 'background-geral', 'background-titulos', 'icones', 'Botões', 'Botões-fonte']

   var conteudo = `<h3 class="animation__title block" id="toggle" accessKey="g">ACESSIBILIDADE</h3>
   <div class="animation__texts block">
     <label for="fontes" class="animation__text block" accessKey="h">fontes</label>
     <label for="background-geral" class="animation__text block" accessKey="i">background-geral</label>
     <label for="background-titulos" class="animation__text block" accessKey="j">background-titulos</label>
     <label for="icones" class="animation__text block" accessKey="k">icones</label>
     <label for="fundo-botao" class="animation__text block" accessKey="l">Botões</label>
     <label for="botao-texto" class="animation__text block" accessKey="m">Botões-fonte</label>
   </div>
   <div class="animation__color block">
     <input id="fontes" type="color" class="animation__item block">
     <input id="background-geral" type="color" class="animation__item block">
     <input id="background-titulos" type="color" class="animation__item block">
     <input id="icones" type="color" class="animation__item block">
     <input id="fundo-botao" type="color" class="animation__item block">
     <input id="botao-texto" type="color" class="animation__item block">
   </div>` 
  
   section.innerHTML = conteudo
   root.appendChild(section);
}