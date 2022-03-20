import {changeIconColor, changeBackColor, changeBtnColor, changeTextColor, changeBodyColor, changeBtnFontColor} from "../acessibilidade/theme.js"

const cores = {
  fonte: `${localStorage.getItem('Colors') ? JSON.parse(localStorage.getItem('Colors')).fonte : ''}`,
  geral: `${localStorage.getItem('Colors') ? JSON.parse(localStorage.getItem('Colors')).geral : ''}`,
  icones: `${localStorage.getItem('Colors') ? JSON.parse(localStorage.getItem('Colors')).icones : ''}`,
  titulos: `${localStorage.getItem('Colors') ? JSON.parse(localStorage.getItem('Colors')).titulos : ''}`,
  botoes: `${localStorage.getItem('Colors') ? JSON.parse(localStorage.getItem('Colors')).botoes : ''}`,
  botoes_Fontes: `${localStorage.getItem('Colors') ? JSON.parse(localStorage.getItem('Colors')).botoes_Fontes : ''}`,
}

function storage() {
  if (!window.localStorage.getItem('Colors')) {
    window.localStorage.setItem('Colors', JSON.stringify(cores))
    return
  }
  carregarCoresLocalStorage()
}

function carregarCoresLocalStorage() {
  const coresSalvas = JSON.parse(localStorage.getItem('Colors'))
  if (coresSalvas.geral) {
    changeBodyColor(coresSalvas.geral, false)
  }  
  if (coresSalvas.icones) {
    changeIconColor(coresSalvas.icones, false)
  }  
  if (coresSalvas.titulos) {
    changeBackColor(coresSalvas.titulos, false)
  }
  if (coresSalvas.botoes) {
    changeBtnColor(coresSalvas.botoes, false)
  }
  if (coresSalvas.botoes_Fontes) {
    changeBtnFontColor(coresSalvas.botoes_Fontes, false)
  }
  if (coresSalvas.fonte) {
    changeTextColor(coresSalvas.fonte, false)
  }

}

function atualizarLocalStorage(target, cor) {

  switch (target) {
    case "geral":
      coresLocalStorage.cores.geral = cor;
      break;
    case "fonte":
      coresLocalStorage.cores.fonte = cor;
      break;
    case "titulos":
      coresLocalStorage.cores.titulos = cor;
      break;
    case "icones":
      coresLocalStorage.cores.icones = cor;
      break;
    case "botoes":
      coresLocalStorage.cores.botoes = cor;
      break;
    case "botoes_Fontes":
      coresLocalStorage.cores.botoes_Fontes = cor;
      break;
  }
  window.localStorage.setItem('Colors', JSON.stringify(cores))
}

export const coresLocalStorage = {
  storage,
  localStorage,
  cores,
  atualizarLocalStorage,
}