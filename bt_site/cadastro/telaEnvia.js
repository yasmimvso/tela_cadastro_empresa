const botaoEnviar = document.querySelector(".enviar");
   const modal = document.querySelector(".modal");
   const sair = document.querySelector(".fechar-modal"); //aqui pega o dado do id fexhar botao 'x', o xzinho
   
   botaoEnviar.addEventListener("click", () =>{
      modal.classList.add("aberto");
   });
   
   sair.addEventListener("click", ()=>{
       modal.classList.remove("aberto");
      });