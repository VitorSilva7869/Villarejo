const buttons = document.querySelectorAll(".alterarBotao");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    // Remove a classe "active" de todos os botões
    buttons.forEach(btn => btn.classList.remove("active"));
    // Adiciona a classe "active" ao botão clicado
    this.classList.add("active");
  });
});


const line = document.querySelector('.line');
const line2 = document.querySelector('.line2');

const pizzaBorda = document.querySelector('.pizza-borda');
const pizzaQueijo = document.querySelector('.pizza-queijo');
const pizzaRecheio = document.querySelector('.recheiotop');

const expand80Button = document.getElementById('expand30Button');
const expand100Button = document.getElementById('expand50Button');

const recheioTop = document.querySelector('.recheio-top');

const textTop = document.getElementById('text-top');
const textLeft = document.getElementById('text-left');

// Configuração inicial: largura de 80px já definida no CSS

// Botão para manter ou retornar a linha para 80px
expand80Button.addEventListener('click', () => {
  line.style.width = '131px';
  line2.style.height = '200px';
  pizzaBorda.style.width = "170px";
  pizzaBorda.style.height = "230px";
  pizzaQueijo.style.width = "140px";
  pizzaQueijo.style.height = "200px";

  textTop.textContent = "30CM";
  textLeft.textContent = "25CM";

  recheioTop.style.marginTop = "10%";
});

// Botão para expandir a linha para 100px
expand100Button.addEventListener('click', () => {
  line.style.width = '193px';
  line2.style.height = '250px';
  pizzaBorda.style.width = "220px";
  pizzaBorda.style.height = "300px";
  pizzaQueijo.style.width = "190px";
  pizzaQueijo.style.height = "270px";

  
  
  
  textTop.textContent = "50CM";
  textLeft.textContent = "30CM";
  recheioTop.style.marginTop = "15%";
});
