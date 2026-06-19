// datos-noticias.js — array compartido entre noticias.html y noticia.html

var noticias = [
  {
    id: 'noticia-1',
    titulo: 'Jornada de siembra de trigo con alumnos de 4° año',
    categoria: 'Producción',
    fecha: '2026-05-15',
    fechaTexto: '15 de mayo de 2026',
    foto: 'img/siembra_trigo.jpg',
    alt: 'Alumnos de 4° año sembrando trigo en el campo de la escuela',
    bajada: 'Los estudiantes de cuarto año llevaron adelante la siembra anual de trigo en el predio de la escuela, aplicando las técnicas trabajadas en clase y el conocimiento de sus familias productoras.',
    cuerpo: '<p>El pasado jueves, los alumnos de 4° año realizaron la jornada de siembra de trigo en el campo experimental del CEPT N° 5. La actividad, que forma parte del plan de estudios del área de Producción Vegetal, permitió a los jóvenes poner en práctica los contenidos trabajados durante el primer cuatrimestre.</p>' +
      '<p>El docente a cargo destacó la participación activa de los estudiantes y la calidad de los saberes que trajeron desde sus hogares: "Muchos de los chicos ya sembraron con sus padres, y eso se nota. Acá lo que hacemos es ponerlo en diálogo con la teoría".</p>' +
      '<p>La cosecha está prevista para fines de noviembre y los resultados serán analizados como parte del proyecto integrador del año.</p>'
  },
  {
    id: 'noticia-2',
    titulo: 'Intercambio con escuelas agrarias de la provincia',
    categoria: 'Institucional',
    fecha: '2026-04-10',
    fechaTexto: '10 de abril de 2026',
    foto: 'img/intercambio_alumnos.jpg',
    alt: 'Estudiantes de distintas escuelas agrarias reunidos en el CEPT',
    bajada: 'El CEPT N° 5 recibió la visita de alumnos y docentes de tres escuelas agrarias de la provincia de Buenos Aires en el marco de un encuentro de intercambio organizado por la FACEPT.',
    cuerpo: '<p>Durante dos días, el CEPT N° 5 de Miranda fue sede de un encuentro interprovincial de escuelas con Pedagogía de la Alternancia. Participaron instituciones de Olavarría, Tandil y Mar del Plata, compartiendo experiencias de producción y metodologías pedagógicas.</p>' +
      '<p>Las actividades incluyeron recorridas por el predio, presentaciones de proyectos de los estudiantes y una mesa de debate sobre los desafíos de la educación rural en la actualidad.</p>' +
      '<p>"Estos encuentros nos enriquecen enormemente. Ver cómo otros resuelven los mismos problemas que nosotros nos da nuevas ideas y nos recuerda que no estamos solos", expresó la directora del establecimiento.</p>'
  },
  {
    id: 'noticia-3',
    titulo: 'Acto de colación de grados: egresados 2025',
    categoria: 'Egresados',
    fecha: '2026-03-28',
    fechaTexto: '28 de marzo de 2026',
    foto: 'img/acto_egresados.jpg',
    alt: 'Acto de colación de grados de los egresados 2025',
    bajada: 'Con la presencia de familias, docentes y autoridades locales, el CEPT N° 5 celebró la colación de grados de su promoción 2025: doce nuevos técnicos agropecuarios que se suman a la comunidad de egresados.',
    cuerpo: '<p>El sábado 28 de marzo se realizó el acto de colación de grados de la promoción 2025 del CEPT N° 5 de Miranda. Doce jóvenes recibieron su título de Técnico en Producción Agropecuaria ante una sala colmada de familias, exalumnos, docentes y autoridades municipales.</p>' +
      '<p>El discurso de los egresados estuvo a cargo de Valentina R., quien agradeció a sus compañeros, docentes y familias: "La escuela nos enseñó a mirar el campo con otros ojos, y también a querernos entre nosotros".</p>' +
      '<p>Varios de los egresados ya tienen definido su camino: algunos continuarán en la Universidad Nacional del Centro, otros se incorporarán a emprendimientos familiares y al menos tres ya tienen trabajo en el sector agropecuario de la región.</p>'
  },
  {
    id: 'noticia-4',
    titulo: 'Taller de apicultura y producción de miel',
    categoria: 'Talleres',
    fecha: '2026-02-14',
    fechaTexto: '14 de febrero de 2026',
    foto: 'img/taller_apicultura.jpg',
    alt: 'Alumnos trabajando con colmenas en el taller de apicultura',
    bajada: 'Estudiantes de segundo y tercer año participaron de un taller intensivo de apicultura a cargo de un productor local, como parte de la ampliación de la propuesta de producción diversificada de la escuela.',
    cuerpo: '<p>Durante tres jornadas, los alumnos de 2° y 3° año aprendieron los fundamentos de la apicultura: manejo de colmenas, ciclo de vida de las abejas, extracción y envasado de miel. El taller fue coordinado por el señor Marcos T., apicultor de la zona con más de veinte años de experiencia.</p>' +
      '<p>La escuela cuenta desde el año pasado con seis colmenas propias que los estudiantes mantienen con el acompañamiento del docente de Producción Animal. La miel producida se usa en el comedor escolar y parte se comercializa para financiar insumos del taller.</p>' +
      '<p>La incorporación de la apicultura responde a la demanda de los propios alumnos y sus familias, varias de las cuales tienen colmenas en sus establecimientos.</p>'
  },
  {
    id: 'noticia-5',
    titulo: 'Inicio del ciclo lectivo 2026',
    categoria: 'Institucional',
    fecha: '2026-01-20',
    fechaTexto: '20 de enero de 2026',
    foto: 'img/inicio_ciclo.jpg',
    alt: 'Acto de inicio del ciclo lectivo 2026 en el CEPT',
    bajada: 'Con un acto sencillo y emotivo, el CEPT N° 5 dio la bienvenida a los 48 alumnos que conforman la matrícula 2026, incluyendo catorce ingresantes de primer año provenientes de ocho localidades del partido de Rauch.',
    cuerpo: '<p>El lunes 20 de enero comenzó el ciclo lectivo 2026 en el CEPT N° 5 de Miranda. El acto de apertura reunió a todos los estudiantes, sus familias y el plantel docente en el patio de la escuela, bajo un sol de mañana templada.</p>' +
      '<p>La directora dio la bienvenida a los catorce alumnos ingresantes de primer año, provenientes de distintas localidades rurales del partido de Rauch, y recordó los valores que guían la institución: el trabajo, la solidaridad y el amor por el campo.</p>' +
      '<p>Para este año se incorporan dos nuevas materias electivas en el área de agroindustria y se renovó el equipamiento del laboratorio de suelos, gracias a un subsidio obtenido por la cooperadora escolar.</p>'
  },
  {
    id: 'noticia-6',
    titulo: 'Cierre del año: fiesta de la cosecha',
    categoria: 'Convivencia',
    fecha: '2025-12-12',
    fechaTexto: '12 de diciembre de 2025',
    foto: 'img/fiesta_cosecha.jpg',
    alt: 'Estudiantes y familias celebrando la fiesta de la cosecha',
    bajada: 'La tradicional fiesta de la cosecha reunió a más de doscientas personas entre alumnos, familias y exalumnos para celebrar el cierre de un año de mucho trabajo y crecimiento colectivo.',
    cuerpo: '<p>El sábado 12 de diciembre, el CEPT N° 5 vivió su tradicional fiesta de la cosecha, el evento que cada año cierra el ciclo lectivo y reúne a toda la comunidad educativa. Más de doscientas personas —alumnos, familias, docentes y exalumnos— compartieron una jornada de festejos, música y comida.</p>' +
      '<p>Los estudiantes de cada año presentaron sus proyectos productivos anuales: desde la muestra de la producción hortícola de primer año hasta el proyecto de financiamiento colaborativo de los alumnos de cuarto. También hubo presentaciones artísticas y el tradicional asado comunitario.</p>' +
      '<p>"Esta fiesta es nuestra manera de decir gracias: a las familias que confían en nosotros, a los chicos que se esfuerzan y a todo el equipo que hace posible esta escuela", dijo la directora en su discurso de cierre.</p>'
  }
];

// Si el admin guardó cambios, usar esos datos en lugar de los de arriba
if (localStorage.getItem('noticias')) {
  try { noticias = JSON.parse(localStorage.getItem('noticias')); }
  catch (e) { localStorage.removeItem('noticias'); }
}
