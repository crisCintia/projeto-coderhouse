// Console
window.addEventListener("load", () => {
  const fieldEmail = document.getElementById('e-mail');
  const fieldPassword = document.getElementById('password');

  fieldEmail.addEventListener('focus', () => {
    console.log("funcionando campo1");
  });

  fieldPassword.addEventListener('focus', () => {
      console.log("funcionando campo2");
  });
});

// Prevent form default behaviour
const form = document.querySelector(".login__form");

form.addEventListener("submit", (e) => e.preventDefault());