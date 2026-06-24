// página de listado y búsqueda de noticias

function crearTarjeta(n) {
  return '<div class="col-12 col-md-4">' +
    '<article class="noticia" data-id="' + n.id + '">' +
      '<img src="' + n.foto + '" alt="' + n.alt + '" class="noticia-foto" />' +
      '<div class="noticia-cuerpo">' +
        '<time class="noticia-fecha" datetime="' + n.fecha + '">' + n.fechaTexto + '</time>' +
        '<span class="noticia-categoria">' + n.categoria + '</span>' +
        '<h3 class="noticia-titulo">' + n.titulo + '</h3>' +
        '<a href="noticia.html?id=' + n.id + '" class="noticia-enlace">Leer más →</a>' +
      '</div>' +
    '</article>' +
  '</div>';
}

function renderizar(lista) {
  let grilla = document.getElementById('grilla-noticias');
  let vacio = document.getElementById('sin-resultados');

  if (lista.length === 0) {
    grilla.innerHTML = '';
    vacio.hidden = false;
  } else {
    grilla.innerHTML = lista.map(crearTarjeta).join('');
    vacio.hidden = true;
  }
}

function filtrar() {
  let texto = document.getElementById('campo-busqueda').value.trim().toLowerCase();
  let anio  = document.getElementById('filtro-anio').value;

  let resultado = noticias.filter(function (n) {
    let coincideTexto = !texto ||
      n.titulo.toLowerCase().indexOf(texto) !== -1 ||
      n.bajada.toLowerCase().indexOf(texto) !== -1 ||
      n.cuerpo.toLowerCase().indexOf(texto) !== -1;
    let coincideAnio = !anio || n.fecha.indexOf(anio) === 0;
    return coincideTexto && coincideAnio;
  });

  renderizar(resultado);
}

// Filtrado en tiempo real al escribir o cambiar el año
document.getElementById('campo-busqueda').addEventListener('input', filtrar);
document.getElementById('filtro-anio').addEventListener('change', filtrar);

document.getElementById('formulario-busqueda').addEventListener('submit', function (e) {
  e.preventDefault();
  filtrar();
});

// Mostrar todas las noticias al cargar
renderizar(noticias);
