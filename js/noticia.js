// noticia.js — página de artículo individual

var params  = new URLSearchParams(window.location.search);
var id      = params.get('id');
var noticia = noticias.find(function (n) { return n.id === id; });

if (!noticia) {
  window.location.href = 'noticias.html';
} else {
  document.title = noticia.titulo + ' | CEPT N° 5 de Miranda';

  document.getElementById('articulo-foto').src = noticia.foto;
  document.getElementById('articulo-foto').alt = noticia.alt;

  document.getElementById('miga-titulo').textContent = noticia.titulo;

  var h1 = document.getElementById('articulo-titulo');
  h1.textContent = noticia.titulo;
  h1.focus();

  var fecha = document.getElementById('articulo-fecha');
  fecha.textContent = noticia.fechaTexto;
  fecha.setAttribute('datetime', noticia.fecha);

  document.getElementById('articulo-categoria').textContent = noticia.categoria;
  document.getElementById('articulo-bajada').textContent    = noticia.bajada;
  document.getElementById('articulo-cuerpo').innerHTML      = noticia.cuerpo;
}
