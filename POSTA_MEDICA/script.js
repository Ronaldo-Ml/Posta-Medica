// script.js
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const toggleFormText = document.querySelector(".toggle-form");

// Alternar entre login y registro
toggleFormText.addEventListener("click", () => {
  loginForm.classList.toggle("d-none");
  registerForm.classList.toggle("d-none");
  toggleFormText.textContent = loginForm.classList.contains("d-none")
    ? "Iniciar sesión"
    : "Crea tu cuenta";
});

// Registro de usuario 
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("registerUser").value.trim();
  const pass = document.getElementById("registerPass").value.trim();

  if (user.length < 3 || pass.length < 4) {
    alert("El usuario debe tener al menos 3 caracteres y la contraseña al menos 4.");
    return;
  }

  localStorage.setItem("usuario", user);
  localStorage.setItem("clave", pass);

  alert("Cuenta creada con éxito. Ahora puedes iniciar sesión.");
  registerForm.classList.add("d-none");
  loginForm.classList.remove("d-none");
  toggleFormText.textContent = "Crea tu cuenta";
});

// Validación de login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();
  const regUser = localStorage.getItem("usuario");
  const regPass = localStorage.getItem("clave");

  if (user === regUser && pass === regPass) {
    alert("Bienvenido " + user);
    window.location.href = "index.html";
  } else {
    alert("ID o contraseña incorrectos o no registrados.");
  }
});

//----------------------------------------------para registro------------------------------------------------------
