import { montarElemento } from "../../Functions.js";
import { infos } from "../../Infos.js";

export function Rodape() {
  var root = document.getElementById('root')
  var footer = montarElemento('footer', 'rodape')
  footer.innerHTML = `<p class="rodape__texto">Desenvolvido por ${infos.nome}</p>
  <p class="rodape__texto">2022</p>`
  root.appendChild(footer);
}