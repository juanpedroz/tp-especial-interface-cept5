// login.js — maneja el modal de login en todas las páginas

// usuario: admin | contraseña: cept2025
document.addEventListener('DOMContentLoaded', function () {

  // Si ya hay sesión activa, el botón ADM se convierte en "Cerrar sesión"
  if (sessionStorage.getItem('adminLogueado')) {
    document.querySelectorAll('.enlace-adm').forEach(function (btn) {
      btn.textContent = 'Cerrar sesión';
      btn.removeAttribute('data-bs-toggle');
      btn.removeAttribute('data-bs-target');
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        sessionStorage.removeItem('adminLogueado');
        window.location.href = 'index.html';
      });
    });
    return;
  }

  let form         = document.getElementById('formulario-login');
  let errorDiv     = document.getElementById('error-login');
  let btnOjo       = document.getElementById('boton-ver-contrasena');
  let campo        = document.getElementById('campo-contrasena');
  let iconoOjo     = document.getElementById('icono-ojo');
  let iconoCerrado = document.getElementById('icono-ojo-cerrado');
  let modalEl      = document.getElementById('modal-login');

  // Si la página no tiene el modal, no hacer nada
  if (!form || !modalEl) return;

  // Abre el modal al hacer clic en cualquier botón ADM
  document.querySelectorAll('.enlace-adm').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      bootstrap.Modal.getOrCreateInstance(modalEl).show();
    });
  });

  // Envío del formulario: verifica credenciales
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let usuario    = document.getElementById('campo-usuario').value.trim();
    let contrasena = campo.value;

    if (usuario === 'admin' && contrasena === 'cept2025') {
      sessionStorage.setItem('adminLogueado', 'true');
      window.location.href = 'admin.html';
    } else {
      if (errorDiv) errorDiv.hidden = false;
    }
  });

  // Botón para mostrar/ocultar contraseña
  if (btnOjo) {
    btnOjo.addEventListener('click', function () {
      let mostrar = campo.type === 'password';
      campo.type = mostrar ? 'text' : 'password';
      if (iconoOjo)     iconoOjo.hidden     = mostrar;
      if (iconoCerrado) iconoCerrado.hidden = !mostrar;
      this.setAttribute('aria-label',   mostrar ? 'Ocultar contraseña' : 'Mostrar contraseña');
      this.setAttribute('aria-pressed', mostrar ? 'true' : 'false');
    });
  }

  // Limpia el formulario cada vez que se abre el modal
  modalEl.addEventListener('show.bs.modal', function () {
    form.reset();
    if (errorDiv)     errorDiv.hidden  = true;
    if (campo)        campo.type       = 'password';
    if (iconoOjo)     iconoOjo.hidden  = false;
    if (iconoCerrado) iconoCerrado.hidden = true;
  });

});
