export default {
  global: {
    Name: 'Metodologías ágiles y diseño centrado en el usuario',
    Description:
      'Este componente formativo aborda los principios del Pensamiento de Diseño (<em>Design Thinking</em>), el Diseño Centrado en el Usuario (<em>Human-Centered Design</em>) y metodologías ágiles como <em>Lean Startup</em>, <em>Scrum</em> y <em>Kanban</em>, aplicadas al desarrollo, prototipado y validación de soluciones innovadoras en investigación en salud pública, integrando el concepto de Producto Mínimo Viable y casos exitosos en América Latina.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Principios y fases de <em>Design Thinking</em> y <em>Human-Centered Design</em> (HCD) en salud pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Introducción y principios al pensamiento de diseño en salud pública',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Fases del proceso de <em>Design Thinking</em>',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Beneficios del <em>Design Thinking</em> en salud pública',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Fundamentos del <em>Human-Centered Design</em> (HCD)',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Diferencias y complementariedades entre <em>Design Thinking</em> y HCD',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Tipos de prototipado y procesos de <em>test</em>eo con usuarios en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y propósito del prototipado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Niveles de fidelidad del prototipo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Principios básicos del <em>test</em>eo con usuarios',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Recolección de retroalimentación e iteración',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Concepto de Producto Mínimo Viable (MVP) y su aplicación en proyectos de salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición del MVP y diferencias con prototipo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Etapas para desarrollar un MVP',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Metodologías ágiles: descripción, beneficios y aplicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Introducción y principios de las metodologías ágiles',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: '<em>Lean Startup</em>',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: '<em>Scrum</em>',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: '<em>Kanban</em>',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Comparación y selección de la metodología ágil',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Casos de éxito de innovación en salud pública en Colombia y América Latina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Innovaciones participativas centradas en las personas impulsadas por <em>Design Thinking</em> o <em>Human-Centered Design</em>',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Implementaciones adaptativas y gestión de proyectos de innovación en salud en América Latina',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fases del design thinking',
      referencia:
        'De la Peña, N. (2024, 24 de abril). 5 fases del design thinking: cómo aplicar esta metodología para triunfar con tus proyectos. Genially (Blog).',
      tipo: 'Blog',
      link: 'https://blog.genially.com/fases-design-thinking/',
    },
    {
      tema: 'Atención primaria en salud en Colombia',
      referencia:
        'Saludderecho. (2022, 19 de abril). Claves de éxito de los Modelos Innovadores de Atención Primaria en Salud (Video). YouTube.',
      tipo: 'Video Webinar',
      link: 'https://www.youtube.com/watch?v=uYk1HOmcMv0',
    },
    {
      tema: 'Producto mínimo viable',
      referencia:
        'CEEI, Comunidad Valenciana. Manual 51. Producto Mínimo Viable. Centro Europeo de Empresas Innovadoras de Valencia (CEEI Valencia). 2017. P45.',
      tipo: 'Manual',
      link: 'https://www.emprenemjunts.es/?op=13&n=11900',
    },
    {
      tema: 'Metodologías agiles',
      referencia:
        'Instituto de Investigación Sanitaria Galicia Sur. (2023). <em>Lean Startup</em> para científicos. Instituto de Investigación Sanitaria Galicia Sur.',
      tipo: 'Libro',
      link:
        'https://www.iisgaliciasur.es/wp-content/uploads/2023/05/Lean-Startup-para-cientificos.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Backlog',
      significado:
        'Lista ordenada y priorizada de las funcionalidades, requisitos, mejoras y correcciones que se necesitan para un producto. Es central en el marco de trabajo <em>Scrum</em>.',
    },
    {
      termino: 'Brainstormng',
      significado:
        'Técnica de generación de ideas en grupo cuyo objetivo es encontrar una conclusión o solución creativa a un problema, fomentando la libre expresión de ideas.',
    },
    {
      termino: 'Fidelidad',
      significado:
        'En prototipado, se refiere al nivel de detalle, precisión y realismo de un prototipo en comparación con el producto final.',
    },
    {
      termino: '<em>Human-Centered Design</em> (HCD)',
      significado:
        'Enfoque de diseño que pone las necesidades, capacidades y comportamientos de los seres humanos en el centro del proceso de desarrollo. Es la filosofía subyacente al <em>Design Thinking</em>.',
    },
    {
      termino: 'Iteración',
      significado:
        'Es el proceso de repetir un conjunto de instrucciones o pasos varias veces. Permite realizar la misma tarea varias veces con ligeras variaciones o modificar un fragmento de código hasta que se cumpla una condición específica.',
    },
    {
      termino: 'Prototipo',
      significado:
        'Representación temprana y funcional de un producto o sistema, diseñada para proporcionar una vista preliminar y tangible de cómo se verá y se comportará el producto final.',
    },
    {
      termino: 'Producto mínimo viable',
      significado:
        'Es un prototipo que permite comprobar si el bien o servicio que está desarrollando una compañía se ajusta a las necesidades del mercado y, de no hacerlo, los cambios que debe introducir en su diseño, funcionalidad o, incluso, precio.',
    },
    {
      termino: 'Pruebas con usuarios o <em>test</em> con usuarios',
      significado:
        'Son una herramienta en el diseño de productos, servicios y experiencias, ya que permiten utilizar la observación y el análisis para evaluar cómo un grupo de personas determinado utiliza los desarrollos para identificar errores y mejoras antes de realizar un lanzamiento oficial',
    },
    {
      termino: '<em>Sprint</em>',
      significado:
        'Periodo corto de trabajo en <em>Scrum</em> durante el cual se desarrollan entregables específicos y verificables.',
    },
    {
      termino: 'Startup',
      significado:
        'Organización o equipo en fase inicial que desarrolla una idea innovadora con alto potencial de crecimiento.',
    },
    {
      termino: 'Story Mapping (Mapa de Historias)',
      significado:
        'Herramienta utilizada para visualizar el backlog y el flujo de trabajo de un producto desde la perspectiva del usuario, ayudando a priorizar el desarrollo',
    },
    {
      termino: 'Testeo con Usuarios',
      significado:
        'Proceso sistemático de validar un prototipo o MVP con usuarios reales para obtener retroalimentación, identificar fallos de usabilidad y áreas de mejora',
    },
  ],
  referencias: [
    {
      referencia:
        'Clavijo, C. (2025). Producto Mínimo Viable: qué es, características, cómo hacerlo y ejemplos. Recuperado de',
      link: 'https://blog.hubspot.es/sales/producto-minimo-viable',
    },
    {
      referencia:
        '3Dalia. Tipos de prototipado. Disponible en: https://3dalia.com/tipos-de-prototipado/. Acceso octubre 20 de 2025.',
      link: '',
    },
    {
      referencia:
        'De la Peña, N. (2024, 24 de abril). 5 fases del design thinking: cómo aplicar esta metodología para triunfar con tus proyectos. Genially (Blog).',
      link: 'https://blog.genially.com/fases-design-thinking/',
    },
    {
      referencia:
        'Highsmith, J. (2009). Gestión Ágil de Proyectos: Creación de productos innovadores. Addison-Wesley.',
      link:
        'https://books.google.com.co/books?id=VuFpkztwPaUC&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      referencia:
        'Instituto Nacional de Salud (2016, 2 de diciembre). INS de Colombia compartirá su conocimiento sobre zika al mundo.',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/boletin-prensa-ins-2-12-2016-zika.pdf',
    },
    {
      referencia:
        'IxDF - Fundación para el Diseño de Interacción. (25 de mayo de 2016). ¿Qué es el <em>Design Thinking</em>? IxDF - Fundación para el Diseño de Interacción.',
      link:
        'https://www.interaction-design.org/literature/topics/design-thinking',
    },
    {
      referencia:
        'Justinmente. (marzo 19 de 2018). ¿Qué diferencia hay entre un prototipo y un MVP? recuperado de',
      link:
        'https://www.justinmind.com/es/prototipado/que-diferencia-hay-entre-un-prototipo-y-un-mvp',
    },
    {
      referencia:
        'Martins, J. (2025, 19 de enero). ¿Qué es la metodología <em>Kanban</em> y cómo funciona? Asana (Blog).',
      link: 'https://asana.com/es/resources/what-is-kanban',
    },
    {
      referencia:
        'Mejía Flores, G. E. (2024). Metodologías ágiles aplicadas a organizaciones de salud: desafíos actuales y cómo gestionarlos. Pontificia Universidad Católica del Ecuador.',
      link:
        'https://repositorio.puce.edu.ec/items/a55af9eb-93df-4af0-a5c4-d3f8e0395e30',
    },
    {
      referencia: 'Miro (sf). Prototipos de alta fidelidad vs baja fidelidad.',
      link: 'https://miro.com/es/prototipos/baja-fidelidad-vs-alta-fidelidad/',
    },
    {
      referencia:
        'Narvaez, M. (sf). ¿Qué son las pruebas con usuarios o <em>test</em> con usuarios? Questionpro (Blog).',
      link:
        'https://www.questionpro.com/blog/es/pruebas-con-usuarios-o-<em>test</em>-con-usuarios/',
    },
    {
      referencia:
        'Organización Panamericana de la Salud & Organización Mundial de la Salud - OPS/OMS, (2025, 23 de junio). Avances e innovaciones destacan BIREME en el 2024. Boletín BIREME no 94.',
      link:
        'https://boletin.bireme.org/2025/01/23/1-avances-e-innovaciones-destacan-bireme-en-el-2024/',
    },
    {
      referencia:
        'Organización Panamericana de la Salud, & Organización Mundial de la Salud. (2025). Innovación social en salud: lecciones para avanzar hacia la equidad-Antología de experiencias en América Latina.',
      link: 'https://iris.paho.org/handle/10665.2/68812',
    },
    {
      referencia:
        'PAHO TV (2024, 28 de agosto). Un modelo innovador en salud rural en Colombia [Video]. YouTube.',
      link: 'https://youtu.be/ssluZKwCEzs?si=wQ6bYTeso-ns5Hak',
    },
    {
      referencia:
        'Pomar, P. (2017, 19 de mayo). Diferencias entre <em>Design Thinking</em> y Diseño centrado en las personas. Thinkernautas (Blog).',
      link:
        'https://thinkernautas.com/diferencias-design-thinking-human-centered-design',
    },
    {
      referencia:
        'Ries, E. (2011). The <em>Lean Startup</em>: How Today’s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses. Crown Business.',
      link:
        'https://books.google.com.co/books?id=tvfyz-4JILwC&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      referencia:
        'Rojas Otálora, A. (2022). Desafíos en la gestión de proyectos.',
      link:
        'https://es.scribd.com/document/913850916/Annotated-Desafios-en-La-Gesti-c3-93n-de-Los-Proyectos-Aplicados-a-Los-Proc-281-29-Docx',
    },
    {
      referencia:
        'Ruwaach Utz, S (2022, 13 de mayo). Unidad de Antropología Médica (UAM) [Video]. YouTube.',
      link: 'https://youtu.be/IUUofhPby-s?si=EA0-9IDQtn4CKDh3',
    },
    {
      referencia:
        'Saavedra Seoane, M. (sf). El <em>Design Thinking</em> en la salud. Designthinking.gal (Blog).',
      link: 'https://designthinking.gal/el-design-thinking-en-salud/',
    },
    {
      referencia:
        'Sarraipa, J., Artífcie, A, Jiménez, H. (2019). Metodología De Evaluación De Prototipo Innovador. Programa Erasmus, Unión Europea, Universidad Distrital Franscico José de Caldas. 2019; 1-25.',
      link: '',
    },
    {
      referencia:
        'Schwaber, K., & Sutherland, J. (2020). Guía de <em>Scrum</em>: la guía definitiva del marco de trabajo <em>Scrum</em>. Scrum.org.',
      link:
        'https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Spanish-Latin-South-American.pdf',
    },
    {
      referencia:
        'Solvingadhoc. (2017, 13 de noviembre). El aprendizaje validado en <em>Lean Startup</em>, un pilar fundamental. Solvingadhoc (Blog).',
      link:
        'https://solvingadhoc.com/aprendizaje-validado-lean-startup-pilar-fundamental/',
    },
    {
      referencia:
        'Social Innovation (2020). Programa Mamás del Río [Video]. YouTube.',
      link: 'https://youtu.be/QGHHlptCpi0?si=xgzUChOzgYx57vke',
    },
    {
      referencia:
        'UNIR La Universidad en internet, (2024, 9 de diciembre). Producto mínimo viable (MVP): ¿qué es?',
      link: 'https://www.unir.net/revista/empresa/mvp-producto-minimo-viable/',
    },
    {
      referencia:
        'Universidad Internacional de Valencia (2023, 20 de febrero). Prototipado: qué es y cómo funciona. VIU (Blog).',
      link:
        'https://www.universidadviu.com/co/actualidad/nuestros-expertos/prototipado-que-es-y-como-funciona',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Leonor Cristina Cañon Uribe',
          cargo: 'Profesional especializado',
          centro:
            'Subdirección de Innovación en salud pública - Dirección de Investigación - Instituto Nacional de Salud',
        },
        {
          nombre: 'Angelica Rocio Borbon Orjuela',
          cargo: 'Profesional especializado',
          centro:
            'Subdirección de Innovación en salud pública - Dirección de Investigación - Instituto Nacional de Salud',
        },
        {
          nombre: 'Maria Luz Gunturiz Albarracin',
          cargo: 'Profesional especializado',
          centro:
            'Subdirección de Innovación en salud pública - Dirección de Investigación - Instituto Nacional de Salud',
        },
        {
          nombre: 'Angela Navas Cáceres',
          cargo: 'Experta Técnica',
          centro:
            'Centro de Formación de Talento humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Gina Carol Villate Calderón',
          cargo: 'Experta Técnica',
          centro:
            'Centro de Formación de Talento humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Asesora Pedagógica',
          centro:
            'Centro de Formación de Talento humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leonor Cristina Cañon Uribe',
          cargo: 'Profesional especializado',
          centro:
            'Subdirección de Innovación en salud pública - Dirección de Investigación - Instituto Nacional de Salud',
        },
        {
          nombre: 'Angelica Rocio Borbon Orjuela',
          cargo: 'Profesional especializado',
          centro:
            'Subdirección de Innovación en salud pública - Dirección de Investigación - Instituto Nacional de Salud',
        },
        {
          nombre: 'Maria Luz Gunturiz Albarracin',
          cargo: 'Profesional especializado',
          centro:
            'Subdirección de Innovación en salud pública - Dirección de Investigación - Instituto Nacional de Salud',
        },
        {
          nombre: 'Angela Navas Cáceres',
          cargo: 'Expertas Técnica',
          centro:
            'Centro de Formación de Talento humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Gina Carol Villate Calderón',
          cargo: 'Expertas Técnica',
          centro:
            'Centro de Formación de Talento humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Asesora Pedagógica',
          centro:
            'Centro de Formación de Talento humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo ',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz ',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
