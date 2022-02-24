export function montarElemento(tag,classe){
  let element = document.createElement(tag);
  element.classList.add(classe)
  return element;
}