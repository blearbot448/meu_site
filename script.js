// Formulário
const form = document.getElementById("formContato");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Mensagem enviada com sucesso! 🚀");
  form.reset();
});

// Scroll suave nas âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Animação do Banner
window.addEventListener("load", () => {
  const bannerImg = document.querySelector("#banner img");
  bannerImg.classList.add("show");
});
