document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContato");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede envio padrão

    const nome = form.elements[0].value.trim();
    const email = form.elements[1].value.trim();
    const mensagem = form.elements[2].value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Aqui você poderia futuramente integrar com um backend ou email service
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");

    form.reset();
  });
});
