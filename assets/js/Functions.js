import {changeIconColor, changeBackColor, changeBtnColor, changeTextColor, changeBodyColor, changeBtnFontColor} from "./pages/acessibilidade/theme.js"

export function montarElemento(tag,classe){
  let element = document.createElement(tag);
  element.classList.add(classe)
  return element;
}

export const eventosAcessibilidade = ()=>{
  const input = document.querySelectorAll('.animation__item');
  
  input[0].addEventListener('input',()=>{
    changeTextColor(input[0].value);  
  })
  input[1].addEventListener('input',()=>{
    changeBodyColor(input[1].value);  
  })
  input[2].addEventListener('input',()=>{
    changeBackColor(input[2].value);  
  })
  input[3].addEventListener('input',()=>{
    changeIconColor(input[3].value);  
  })
  input[4].addEventListener('input',()=>{
    changeBtnColor(input[4].value);  
  })
  input[5].addEventListener('input',()=>{
    changeBtnFontColor(input[5].value);  
  })
  
  document.getElementById('toggle').addEventListener('click', ()=>{
    document.getElementById('animation').classList.toggle('show')
  })
};
