// main.js

// menú móvil: cierra al tocar un enlace
document.querySelectorAll('#contenido-menu .enlace-menu').forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    var menu = document.getElementById('contenido-menu');
    var instancia = bootstrap.Collapse.getInstance(menu);
    if (instancia) instancia.hide();
  });
});

// quiénes somos: detalle de cada tema
var temas = [
  {
    id: 'historia',
    titulo: 'Breve historia',
    foto: 'img/img_inicios.jpeg',
    alt: 'Vista histórica del CEPT N° 5 de Miranda',
    cuerpo: '<p>El C.E.P.T. N° 5 se creó el 24 de marzo de 1991 por iniciativa de la Junta ' +
      'Vecinal "Unión Mirandense", para promover la educación de las y los jóvenes del ' +
      'campo y evitar el desarraigo.</p>' +
      '<p>Tuvo mucho apoyo de vecinos y vecinas, de las instituciones de la comunidad y de ' +
      'la Municipalidad de Rauch. En acuerdo con el Gobierno Municipal, funcionó el primer ' +
      'año en la sala de primeros auxilios y en la Delegación Municipal.</p>' +
      '<p>Al año siguiente se mudó a la antigua casa de Antonio Picerno. Luego, el Consejo ' +
      'de Administración de la ACEPT N° 5 aportó una casita lindera que había logrado ' +
      'comprar tras una gran fiesta criolla el año anterior.</p>' +
      '<p>En 1994, el edificio de la Estación del Ferrocarril pasó a la institución. Se ' +
      'hicieron arreglos y ampliaciones: dormitorios y baños, aulas, SUM y comedor. Su ' +
      'sede sigue siendo este mismo lugar, donde hoy asisten alrededor de 100 ' +
      'estudiantes del medio rural.</p>'
  },
  {
    id: 'egresados',
    titulo: 'Perfil de egresados',
    foto: 'img/egresadosjpeg.jpeg',
    alt: 'Egresados del CEPT N° 5 de Miranda en su acto de graduación',
    cuerpo: '<p>El CEPT prepara a las y los jóvenes del medio rural para la vida adulta y la ' +
      'orientación profesional, para que asuman un rol activo en una sociedad democrática ' +
      'y participativa. La formación dura 7 años y otorga el título de ' +
      '<strong>Técnico en Producción Agropecuaria</strong>.</p>' +
      '<p>El egresado se forma en tres planos:</p>' +
      '<p><strong>Conocimientos.</strong> En lo personal, para ubicarse en la sociedad; ' +
      'en lo profesional, para elegir una profesión e iniciar su labor.</p>' +
      '<p><strong>Aptitudes.</strong> Personales: informarse e informar a su comunidad en ' +
      'lo cultural, social y político; razonar sobre su vida como ciudadano; actuar en las ' +
      'estructuras a su alcance y crear soluciones nuevas. Profesionales: comunicar ' +
      'problemas y técnicas nuevas, planificar, dirigir y ejecutar tareas, y adaptarse a ' +
      'situaciones nuevas con soluciones adecuadas.</p>' +
      '<p><strong>Actitudes.</strong> Una mirada despierta y reflexiva, compromiso y ' +
      'respeto por la verdad desde una actitud científica; aprecio por la vida y el trabajo ' +
      'solidario y en equipo; responsabilidad en lo profesional, cultural, social y ' +
      'político; y respeto por los valores de la comunidad.</p>'
  },
  {
    id: 'pedagogia',
    titulo: 'Pedagogía de la Alternancia (ACEPT · FACEPT)',
    foto: 'img/facept.jpeg',
    alt: 'Logo y actividades de ACEPT y FACEPT — Pedagogía de la Alternancia',
    cuerpo: '<p>La <strong>Pedagogía de la Alternancia</strong> es el eje organizativo y ' +
      'metodológico de la propuesta educativa de los CEPT: las y los estudiantes alternan ' +
      'períodos en la escuela con períodos en su medio familiar y rural, integrando el ' +
      'aprendizaje con la vida y el trabajo del campo.</p>' +
      '<p>El Programa CEPT responde a un modelo de desarrollo de la Producción Total, ' +
      'con cuatro propósitos:</p>' +
      '<ul>' +
      '<li>El arraigo de los habitantes del campo.</li>' +
      '<li>La organización de sus comunidades.</li>' +
      '<li>El desarrollo de la producción y la agricultura familiar.</li>' +
      '<li>El despliegue de las potencialidades sociales y culturales de las personas.</li>' +
      '</ul>' +
      '<p>El modelo de gestión que organiza estos centros se funda en tres conceptos: ' +
      '<strong>Participación</strong>, <strong>Autogestión</strong> y ' +
      '<strong>Cogestión</strong>.</p>' +
      '<p><a href="http://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/dir-de-ed-agraria/dir-de-ed-agraria/planes-de-estudio-agraria" ' +
      'target="_blank" rel="noopener noreferrer" class="enlace-externo">Planes de estudio · Educación Agraria</a></p>'
  }
];

var temaActual = 0;

function abrirDetalle(idTema) {
  temaActual = temas.findIndex(function (t) { return t.id === idTema; });
  mostrarDetalle(temaActual);
}

function mostrarDetalle(indice) {
  var tema = temas[indice];

  document.getElementById('detalle-foto').src    = tema.foto;
  document.getElementById('detalle-foto').alt    = tema.alt;
  document.getElementById('detalle-titulo').textContent = tema.titulo;
  document.getElementById('detalle-cuerpo').innerHTML   = tema.cuerpo;
  document.getElementById('miga-actual').textContent    = tema.titulo;

  document.getElementById('boton-anterior').disabled = (indice === 0);
  document.getElementById('boton-siguiente').disabled = (indice === temas.length - 1);

  document.getElementById('indice-quienes').hidden  = true;
  document.getElementById('detalle-quienes').hidden = false;

  document.getElementById('quienes').scrollIntoView({ behavior: 'smooth' });
  document.getElementById('detalle-titulo').focus();
}

function cerrarDetalle() {
  document.getElementById('detalle-quienes').hidden = true;
  document.getElementById('indice-quienes').hidden  = false;
  document.getElementById('quienes').scrollIntoView({ behavior: 'smooth' });
}


document.querySelectorAll('.tarjeta-enlace').forEach(function (enlace) {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    abrirDetalle(this.dataset.tema);
  });
});


document.querySelectorAll('.volver-al-indice').forEach(function (el) {
  el.addEventListener('click', cerrarDetalle);
});


document.getElementById('boton-anterior').addEventListener('click', function () {
  if (temaActual > 0) { mostrarDetalle(--temaActual); }
});

document.getElementById('boton-siguiente').addEventListener('click', function () {
  if (temaActual < temas.length - 1) { mostrarDetalle(++temaActual); }
});

// el login lo maneja login.js (compartido con todas las páginas)

// noticias recientes en el inicio (las 3 más nuevas del array)
(function () {
  var contenedor = document.getElementById('noticias-inicio');
  if (!contenedor || typeof noticias === 'undefined') return;

  var recientes = noticias.slice(0, 3);
  contenedor.innerHTML = recientes.map(function (n) {
    return '<div class="col-12 col-md-4">' +
      '<article class="noticia">' +
        '<img src="' + n.foto + '" alt="' + n.alt + '" class="noticia-foto" />' +
        '<div class="noticia-cuerpo">' +
          '<time class="noticia-fecha" datetime="' + n.fecha + '">' + n.fechaTexto + '</time>' +
          '<span class="noticia-categoria">' + n.categoria + '</span>' +
          '<h3 class="noticia-titulo">' + n.titulo + '</h3>' +
          '<a href="noticia.html?id=' + n.id + '" class="noticia-enlace">Leer más →</a>' +
        '</div>' +
      '</article>' +
    '</div>';
  }).join('');
}());
