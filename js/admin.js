// admin.js

// Redirige al inicio si nadie inició sesión
if (!sessionStorage.getItem('adminLogueado')) {
  window.location.href = 'index.html';
}

// Cierra el menú móvil al tocar un enlace
document.querySelectorAll('#contenido-menu .enlace-menu').forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    var menu = bootstrap.Collapse.getInstance(document.getElementById('contenido-menu'));
    if (menu) menu.hide();
  });
});

var meses = ['enero','febrero','marzo','abril','mayo','junio',
             'julio','agosto','septiembre','octubre','noviembre','diciembre'];

function guardarNoticias() {
  localStorage.setItem('noticias', JSON.stringify(noticias));
}

function generarId() {
  return 'noticia-' + Date.now();
}

function fechaATexto(iso) {
  var p = iso.split('-');
  return parseInt(p[2], 10) + ' de ' + meses[parseInt(p[1], 10) - 1] + ' de ' + p[0];
}

// --- Formulario ---

function abrirFormulario(id) {
  document.getElementById('formulario-admin').reset();
  limpiarErrores();

  if (id) {
    var n = noticias.find(function (x) { return x.id === id; });
    document.getElementById('titulo-formulario-admin').textContent = 'Editar noticia';
    document.getElementById('admin-id').value        = n.id;
    document.getElementById('admin-titulo').value     = n.titulo;
    document.getElementById('admin-categoria').value  = n.categoria;
    document.getElementById('admin-fecha').value      = n.fecha;
    document.getElementById('admin-foto').value       = n.foto;
    document.getElementById('admin-alt').value        = n.alt;
    document.getElementById('admin-bajada').value     = n.bajada;
    document.getElementById('admin-cuerpo').value     = n.cuerpo;
  } else {
    document.getElementById('titulo-formulario-admin').textContent = 'Agregar noticia';
    document.getElementById('admin-id').value = '';
  }

  var panel = document.getElementById('panel-formulario');
  panel.classList.remove('oculto-admin');
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function cerrarFormulario() {
  document.getElementById('panel-formulario').classList.add('oculto-admin');
}

function limpiarErrores() {
  ['titulo', 'categoria', 'fecha', 'cuerpo'].forEach(function (c) {
    document.getElementById('error-admin-' + c).textContent = '';
    document.getElementById('admin-' + c).classList.remove('invalido');
  });
}

function marcarError(campo, msg) {
  document.getElementById('error-admin-' + campo).textContent = msg;
  document.getElementById('admin-' + campo).classList.add('invalido');
}

// Limpia el error de un campo cuando el usuario escribe
['admin-titulo', 'admin-categoria', 'admin-fecha', 'admin-cuerpo'].forEach(function (id) {
  document.getElementById(id).addEventListener('input', function () {
    var campo = id.replace('admin-', '');
    document.getElementById('error-admin-' + campo).textContent = '';
    this.classList.remove('invalido');
  });
});

document.getElementById('btn-agregar').addEventListener('click', function () {
  abrirFormulario(null);
});

document.getElementById('btn-cancelar').addEventListener('click', cerrarFormulario);

document.getElementById('formulario-admin').addEventListener('submit', function (e) {
  e.preventDefault();

  var id        = document.getElementById('admin-id').value;
  var titulo    = document.getElementById('admin-titulo').value.trim();
  var categoria = document.getElementById('admin-categoria').value;
  var fecha     = document.getElementById('admin-fecha').value;
  var foto      = document.getElementById('admin-foto').value.trim() || 'img/img_logo.jpeg';
  var alt       = document.getElementById('admin-alt').value.trim() || titulo;
  var bajada    = document.getElementById('admin-bajada').value.trim();
  var cuerpo    = document.getElementById('admin-cuerpo').value.trim();

  var hayError = false;
  if (!titulo)    { marcarError('titulo',    'El título es obligatorio.');    hayError = true; }
  if (!categoria) { marcarError('categoria', 'La categoría es obligatoria.'); hayError = true; }
  if (!fecha)     { marcarError('fecha',     'La fecha es obligatoria.');     hayError = true; }
  if (!cuerpo)    { marcarError('cuerpo',    'El cuerpo es obligatorio.');    hayError = true; }
  if (hayError) return;

  var noticia = {
    id:         id || generarId(),
    titulo:     titulo,
    categoria:  categoria,
    fecha:      fecha,
    fechaTexto: fechaATexto(fecha),
    foto:       foto,
    alt:        alt,
    bajada:     bajada,
    cuerpo:     cuerpo
  };

  if (id) {
    var i = noticias.findIndex(function (n) { return n.id === id; });
    noticias[i] = noticia;
  } else {
    noticias.unshift(noticia); // la más nueva va primero
  }

  guardarNoticias();
  cerrarFormulario();
  renderLista();
});

// --- Lista de noticias ---

function renderLista() {
  var cont = document.getElementById('lista-admin');

  if (!noticias.length) {
    cont.innerHTML = '<p class="admin-vacio">No hay noticias cargadas todavía.</p>';
    return;
  }

  var html = '<div class="tabla-admin">';
  noticias.forEach(function (n) {
    html +=
      '<div class="fila-admin">' +
        '<div class="fila-admin-info">' +
          '<span class="noticia-categoria">' + n.categoria + '</span>' +
          '<strong class="fila-admin-titulo">' + n.titulo + '</strong>' +
          '<span class="fila-admin-fecha">' + n.fechaTexto + '</span>' +
        '</div>' +
        '<div class="fila-admin-acciones">' +
          '<button class="btn btn-sm boton-editar" data-id="' + n.id + '">Editar</button>' +
          '<button class="btn btn-sm boton-eliminar" data-id="' + n.id + '">Eliminar</button>' +
        '</div>' +
      '</div>';
  });
  html += '</div>';
  cont.innerHTML = html;

  cont.querySelectorAll('.boton-editar').forEach(function (btn) {
    btn.addEventListener('click', function () { abrirFormulario(this.dataset.id); });
  });

  cont.querySelectorAll('.boton-eliminar').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tituloNoticia = this.closest('.fila-admin').querySelector('.fila-admin-titulo').textContent;
      if (!confirm('¿Eliminar "' + tituloNoticia + '"?')) return;
      var id = this.dataset.id;
      noticias = noticias.filter(function (n) { return n.id !== id; });
      guardarNoticias();
      renderLista();
    });
  });
}

// --- Cerrar sesión ---

document.getElementById('btn-cerrar-sesion').addEventListener('click', function () {
  sessionStorage.removeItem('adminLogueado');
  window.location.href = 'index.html';
});

// --- Restaurar noticias originales ---

document.getElementById('btn-restaurar').addEventListener('click', function () {
  if (!confirm('¿Restaurar las noticias originales? Se perderán todos los cambios.')) return;
  localStorage.removeItem('noticias');
  window.location.reload();
});

// Render inicial
renderLista();
