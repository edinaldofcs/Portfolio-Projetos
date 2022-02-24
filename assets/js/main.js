import { NavBar } from './pages/navBar/NavBar.js'
import { Header } from "./pages/header/Header.js";
import { SkillsAndHobbies } from "./pages/SkillsAndHobbies/SkillsAndHobbies.js";
import { Sobre } from './pages/sobre/Sobre.js';
import { Formacao } from "./pages/formacao/Formacao.js";
import { Experiencia } from "./pages/experiencia/Experiencia.js";


function app(){
  NavBar();
  Header();
  Sobre();
  SkillsAndHobbies("Skills");
  SkillsAndHobbies("Hobbies");
  Formacao();
  Experiencia();
}

window.addEventListener("load", app);

const input = document.querySelectorAll('.animation__item')  
import {changeIconColor, changeBackColor, changeBtnColor, changeTextColor, changeBodyColor, changeBtnFontColor} from "./theme.js"

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




