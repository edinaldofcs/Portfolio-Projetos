import { Header } from "./Header.js";
import { SkillsAndHobbies } from "./SkillsAndHobbies.js";

function upgradePage(){
  Header();
  SkillsAndHobbies("Skills");
  SkillsAndHobbies("Hobbies");
}

  window.addEventListener("load", upgradePage);












