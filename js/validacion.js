// Muestra el error debajo de un campo
function mostrarError(id, mensaje) {
  document.getElementById(id).classList.add('invalido');
  document.getElementById(id).setAttribute('aria-invalid', 'true');
  document.getElementById('error-' + id).textContent = mensaje;
}

// Borra el error de un campo
function limpiarError(id) {
  document.getElementById(id).classList.remove('invalido');
  document.getElementById(id).removeAttribute('aria-invalid');
  document.getElementById('error-' + id).textContent = '';
}

// Revisa un campo y devuelve true si es válido, false si hay error
function validarCampo(id) {
  let valor = document.getElementById(id).value.trim();
  let mensaje = '';

  if (id === 'nombre' && valor === '') {
    mensaje = 'El nombre y apellido son obligatorios.';
  }

  if (id === 'email') {
    let formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valor === '') {
      mensaje = 'El correo electrónico es obligatorio.';
    } else if (!formatoEmail.test(valor)) {
      mensaje = 'Ingresá un correo electrónico válido.';
    }
  }

  if (id === 'telefono' && valor !== '') {
    // Solo permite dígitos, espacios y guiones
    let formatoTel = /^[\d\s-]+$/;
    if (!formatoTel.test(valor)) {
      mensaje = 'El teléfono solo puede contener números, espacios y guiones.';
    }
  }

  if (id === 'asunto' && valor === '') {
    mensaje = 'Seleccioná un asunto.';
  }

  if (id === 'mensaje') {
    if (valor === '') {
      mensaje = 'El mensaje es obligatorio.';
    } else if (valor.length < 10) {
      mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }
  }

  if (mensaje !== '') {
    mostrarError(id, mensaje);
    return false;
  }

  limpiarError(id);
  return true;
}

// Oculta el formulario y muestra el panel de confirmación
function mostrarExito() {
  let form         = document.getElementById('formulario');
  let confirmacion = document.getElementById('confirmacion');
  let campos       = ['nombre', 'email', 'telefono', 'asunto', 'mensaje'];

  form.reset();
  campos.forEach(function (id) { limpiarError(id); });

  form.classList.add('oculto');
  confirmacion.classList.remove('oculto');
  confirmacion.focus();
}


document.addEventListener('DOMContentLoaded', function () {
  let form   = document.getElementById('formulario');
  let campos = ['nombre', 'email', 'telefono', 'asunto', 'mensaje'];

  // Valida un campo cuando el usuario sale de él
  campos.forEach(function (id) {
    document.getElementById(id).addEventListener('blur', function () { validarCampo(id); });
  });

  // Valida todo al presionar "Enviar consulta"
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let hayErrores = false;
    campos.forEach(function (id) {
      if (!validarCampo(id)) hayErrores = true;
    });

    if (hayErrores) {
      // Mueve el foco al primer campo con error
      let primero = campos.find(function (id) {
        return document.getElementById(id).classList.contains('invalido');
      });
      if (primero) document.getElementById(primero).focus();
      return;
    }

    mostrarExito();
  });

  // Vuelve al formulario al hacer clic en "Hacer otra consulta"
  document.getElementById('btn-nueva').addEventListener('click', function () {
    document.getElementById('confirmacion').classList.add('oculto');
    form.classList.remove('oculto');
    document.getElementById('nombre').focus();
  });
});
