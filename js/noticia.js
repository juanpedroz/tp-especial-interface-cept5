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

  var url  = window.location.href;
  var texto = noticia.titulo;

  // Botón nativo (mobile: abre menú del sistema)
  var btnNativo = document.getElementById('btn-compartir-nativo');
  if (navigator.share) {
    btnNativo.addEventListener('click', function () {
      navigator.share({ title: texto, text: noticia.bajada, url: url });
    });
  } else {
    btnNativo.hidden = true;
  }

  // WhatsApp
  document.getElementById('btn-compartir-whatsapp').href =
    'https://wa.me/?text=' + encodeURIComponent(texto + '\n' + url);

  // Copiar enlace
  var btnCopiar = document.getElementById('btn-copiar-enlace');
  btnCopiar.addEventListener('click', function () {
    navigator.clipboard.writeText(url).then(function () {
      btnCopiar.textContent = '¡Enlace copiado!';
      setTimeout(function () { btnCopiar.textContent = 'Copiar enlace'; }, 2500);
    });
  });
}
