import { NavBar } from './pages/navBar/NavBar.js'
import { Header } from "./pages/header/Header.js";
import { SkillsAndHobbies } from "./pages/SkillsAndHobbies/SkillsAndHobbies.js";
import { Sobre } from './pages/sobre/Sobre.js';
import { Formacao } from "./pages/formacao/Formacao.js";
import { Experiencia } from "./pages/experiencia/Experiencia.js";
import { Contato } from './pages/contato/Contato.js';
import { Rodape } from './pages/rodape/Rodape.js';
import { Acessibilidade } from './pages/acessibilidade/Acessibilidade.js';
import { eventosAcessibilidade } from './Functions.js';
import { validarFormulario } from './pages/contato/Form.js';
import {coresLocalStorage} from './pages/contato/storage.js';

function app(){
  Acessibilidade();
  NavBar();
  Header();
  Sobre();
  SkillsAndHobbies("Skills");
  SkillsAndHobbies("Hobbies");
  Formacao();
  Experiencia();
  Contato();
  Rodape();
  coresLocalStorage.storage();
}

window.addEventListener("load", app());
eventosAcessibilidade();

const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', validarFormulario);






