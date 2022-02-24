const cores = () => {
  var js = document.getElementById('js');
  var react = document.getElementById('react');
  var html = document.getElementById('html');
  var css = document.getElementById('css');
  var java = document.getElementById('java');
  var vba = document.getElementById('vba');
  var violao = document.getElementById('violao');
  var correr = document.getElementById('correr');
  var leitura = document.getElementById('leitura');
  var programar = document.getElementById('programar');
  var viajar = document.getElementById('viajar');
  var cantar = document.getElementById('cantar');

  return [js, react, html, css, java, vba, violao, correr, leitura, programar, cantar, viajar]
}

export const changeIconColor = (cor) => {

  const icons = cores();

  icons.map((element) => {
    element.style.fill = cor
  });

  const textCard = document.querySelectorAll('.card__cards')
  textCard.forEach((element)=>{
    element.children[1].style.color = cor;
  })
  
}

export const changeBackColor = (cor) => {

  const texto = document.querySelector('.sobre-mim');
  const texto2 = document.querySelector('.formacao');
  texto.style.background = cor;
  texto2.style.background = cor;

}

export const changeBtnColor = (cor) => {

  const btn = document.querySelectorAll('.experiencia__container--btn')

  var hex = cor;
  var red = parseInt(hex[1] + hex[2], 16);
  var green = parseInt(hex[3] + hex[4], 16);
  var blue = parseInt(hex[5] + hex[6], 16);

  btn.forEach((element) => {
    if (element.classList.contains('light')) {
      element.style.borderColor = cor;
      element.style.color = cor;
      element.addEventListener("mouseover", () => {
        element.style.background = `rgba(${red},${green}, ${blue},0.2)`;
      });
      element.addEventListener("mouseleave", () => {
        element.style.background = 'none';
      });
    }

    if (element.classList.contains('dark')) {
      element.style.background = cor;
    }
  })
}

export const changeBtnFontColor = (cor) => {

  const btn = document.querySelectorAll('.experiencia__container--btn')

  btn.forEach((element) => {
      if (element.classList.contains('dark')) {
      element.style.color = cor;;
    }
  })
}


export const changeTextColor = (cor) => {

  const texto = document.querySelectorAll('a');
  const texto1 = document.querySelectorAll('p');
  const texto2 = document.querySelectorAll('span');
  const texto3 = document.querySelectorAll('h1');
  const texto4 = document.querySelectorAll('h2');
  const texto5 = document.querySelectorAll('h3');

  const todos = [texto, texto1, texto2, texto3, texto4, texto5]

  todos.map((element) => {
    element.forEach((item) => {
      if (!item.classList.contains('block')) {
        item.style.color = cor
      }
    })
  })
}

export const changeBodyColor = (cor) => {

  const bodyColor = document.querySelector('body');

  bodyColor.style.backgroundColor = cor;
}