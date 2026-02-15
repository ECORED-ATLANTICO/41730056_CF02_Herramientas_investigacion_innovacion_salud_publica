<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Casos de éxito de innovación en salud pública en Colombia y América Latina

    .row.mb-5.justify-content-center.align-items-center

      .col-12.col-md-12.col-lg-9
        .row.justify-content-center.align-items-center.mb-4
          .col-md-8.col-lg-4(order-sm="2" order-md="2")
            figure
              img(src="@/assets/curso/temas/tema5/img01.png", alt="Imagen Decorativa", data-aos="zoom-in")
          .col-lg-8.col-md-12.bg-color-primario-p20(order-sm="1" order-md="1").p-4
            p.mb-0(data-aos="fade-right") La innovación en salud pública ha evolucionado significativamente en la última década, impulsada por la necesidad de dar respuesta a problemas complejos mediante enfoques interdisciplinarios, metodologías centradas en las personas y herramientas ágiles de gestión. Tanto en Colombia como en otros países latinoamericanos, los proyectos más exitosos se caracterizan por combinar diseño centrado en el usuario y gestión iterativa, en lugar de depender exclusivamente de enfoques técnicos o administrativos. 

        .row.justify-content-center.align-items-center
          .col-12.col-md-12.col-lg-12.bg-color-1.p-3
            .row.justify-content-center
              .col-auto.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/temas/tema5/img03.svg", alt="Imagen Decorativa", data-aos="zoom-in")
              .col-lg
                p.mb-0(data-aos="fade-right") A continuación, pasaremos a explicar algunos casos exitosos, sin embargo, es importante recapitular los marcos de trabajo metodológicos vistos hasta el momento y reconocer que la innovación en salud no depende únicamente del desarrollo tecnológico, sino también de la comprensión profunda del contexto social, la colaboración entre actores institucionales y las comunidades, y la aplicación sistemática de metodologías como <em>Design Thinking</em>, HCD y las metodologías ágiles.

         
      .col-md-8.col-lg-3
        figure
          img(src="@/assets/curso/temas/tema5/img02.png", alt="Imagen Decorativa", data-aos="zoom-in").mb-lg-0

    .row.mb-3.justify-content-center.align-items-center
      .bloque-texto-g.bg-acento-contenido-p10.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img04.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-right") Es importante tener en cuenta que, en la práctica, distinguir con precisión estos enfoques o marcos de trabajo metodológicos no siempre es sencillo, especialmente en entornos como la salud pública, donde los proyectos suelen ser interdisciplinarios y adaptativos. Aunque cada metodología tiene orígenes distintos, todas comparten una base común que es poner a las personas en el centro y mejorar los resultados a través de la iteración, la colaboración y el aprendizaje continuo.

    .row.mb-5.justify-content-center.align-items-center
      .col-md-12.col-lg-10
        .row.justify-content-center.align-items-center
          .col-auto.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema5/img05.svg", alt="Imagen Decorativa", data-aos="zoom-in")
          .col-lg
            p.mb-0(data-aos="fade-right") De acuerdo con lo anterior, en proyectos reales de innovación, es habitual encontrar hibridaciones metodológicas, es decir, experiencias que inician con <em>Design Thinking</em> para explorar necesidades, continúan con HCD para adaptar soluciones al contexto local y se gestionan con marcos ágiles como <em>Scrum</em> o <em>Kanban</em> para su implementación progresiva. Es por esto por lo que más que metodologías cerradas, funcionan como principios complementarios dentro de un mismo proceso de innovación.

    .row.mb-5.justify-content-center.align-items-center
      .col-md-12.col-lg-10
        .row.align-items-center.bg-color-primario-p20.p-4(data-aos="fade-left").icono-inferior.mb-4
          .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
            p Por ejemplo, una estrategia para mejorar la adherencia a tratamientos puede comenzar con un ejercicio de empatía y mapeo de actores, según el <em>Design Thinking</em>, seguir con la co-creación de prototipos con pacientes y profesionales, según HCD, y culminar en una implementación iterativa que evalúa resultados cada semana, empleando metodologías ágiles. En este sentido, lo importante no es etiquetar la metodología, sino evidenciar el enfoque centrado en el usuario, la experimentación y la mejora continua.
          .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema5/img06.png', alt='Imagen Decorativa') 

        p.mb-0 A continuación, se presenta una tabla comparativa entre <em>Design Thinking</em>, <em>Human-Centered Design</em> y metodologías ágiles

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-4
      .col-lg-12
        .titulo-sexto.mb-4.color-acento-contenido
          h5 
            b Tabla 5. 
            span Comparativa entre <em>Design Thinking</em>, <em>Human-Centered Design</em> y metodologías ágiles
        .tabla-a.color-acento-contenido
          table
            caption Fuente: elaboración propia INS (2025)
            thead
              tr
                th Aspecto
                th <em>Design Thinking</em> 
                th <em>Human-Centered Design</em> 
                th Metodologías Ágiles
            tbody
              tr
                td Propósito principal
                td Generar soluciones creativas ante problemas complejos.
                td Diseñar productos, servicios o sistemas centrados en las necesidades y capacidades reales de las personas.
                td Gestionar equipos y proyectos de manera flexible, eficiente y adaptable.
              tr
                td Foco de aplicación
                td Exploración, ideación y prototipado de nuevas soluciones.
                td Implementación, prueba y adaptación de soluciones en contextos reales.
                td Ejecución, seguimiento y mejora continua de proyectos o productos.
              tr
                td Enfoque
                td Se centra en la creatividad y exploración.
                td Enfocado en la empatía y contexto.
                td Orientado a gestión y seguimiento.
              tr
                td Ejemplo 
                td Talleres de ideación para rediseñar la ruta de atención en salud materna.
                td Co-diseño de materiales educativos con comunidades indígenas o rurales.
                td Implementación por ciclos de un sistema de telemedicina o vigilancia epidemiológica.

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-3(order-sm="2" order-md="2")
        figure
          img(src="@/assets/curso/temas/tema5/img07.png", alt="Imagen Decorativa", data-aos="zoom-in")
      .col-lg-9.col-md-12.mb-4.mb-md-0(order-sm="1" order-md="1")
        p.mb-0(data-aos="fade-right") Conforme a lo explicado hasta aquí, lo esencial es comprender cuándo y por qué aplicar cada enfoque, por ejemplo el <em>Design Thinking</em> es más útil cuando el problema es ambiguo y se necesita comprender y redefinir la situación desde la experiencia del usuario, mientras que el HCD se aplica más cuando nuestra situación busque diseñar soluciones que respeten costumbres y realidades de las comunidades, pero que a la vez garanticen apropiación y sostenibilidad, y las metodologías ágiles son clave cuando el desafío pasa a la fase de ejecución, donde se requiere coordinación, eficiencia y adaptación constante a los resultados. Es así, la combinación de los tres enfoques permite avanzar desde la comprensión empática hasta la implementación efectiva, cerrando el ciclo de innovación con aprendizaje validado y evidencia aplicada.


    .row.justify-content-center.align-items-center
      img(src="@/assets/curso/temas/tema5/img08.png", alt="Imagen decorativa")
      
      .row.justify-content-center.align-items-center.z-2
        .col-lg-9(data-aos="fade-up")
          p.banner-text Si bien muchos proyectos de innovación en salud pública en América Latina no declaran explícitamente el uso de metodologías como <em>Design Thinking</em>, <em>Human-Centered Design</em> o Agile, sus principios están presentes en la forma en que abordan los problemas, involucran a las comunidades y mejoran sus procesos. A continuación, se presentan experiencias que reflejan la aplicación práctica de estos enfoques. 

    separador
    
    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-12
        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_5_1 5.1 Innovaciones participativas centradas en las personas impulsadas por <em>Design Thinking</em> o <em>Human-Centered Design</em> 

        .row.mb-5.justify-content-center.align-items-center
          .col-auto.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema5/img09.svg", alt="Imagen Decorativa", data-aos="zoom-in")
          .col-lg
            p.mb-0(data-aos="fade-right") A continuación, se presentan cuatro ejemplos de innovaciones impulsadas por <em>Design Thinking</em> y <em>Human-Centered Design</em>, estos casos han sido reconocidos por las lecciones en innovación social en salud pública que han dejado y han sido documentadas por la Organización Panamericana de la Salud (OPS, 2025), debido a su capacidad para co-crear soluciones pertinentes con las comunidades, mejorar la equidad en salud y generar modelos replicables basados en el diseño centrado en las personas y la comprensión profunda del contexto local.

    .row.justify-content-center.align-items-center
      .col-md-12.col-lg-10
        .row.align-items-center.justify-content-center.mb-5
          .col-lg-9.order-lg-1.order-2
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-1")
              .div(titulo="Mamás del Río")
                p.mb-0 Liderado por la Universidad Cayetano Heredia de Perú y aliados regionales de Colombia. El proyecto mejoró la atención materna en comunidades amazónicas a través de prototipos de comunicación en salud, capacitación de agentes comunitarios y pruebas piloto que se ajustaron iterativamente según los resultados. Su estructura reproduce el proceso de empatía con usuarias, definición de problemas de acceso, ideación de soluciones comunicacionales y prueba de prototipos con agentes locales antes de la expansión nacional (Social Innovation, 2020).
              .div(titulo="Niños del Zika")
                p.mb-0 Liderado por el Instituto Nacional de Salud de Colombia. Este modelo surgió durante la epidemia de Zika (2015–2016) e integró procesos de empatía y redefinición del problema pues parte de la identificación de necesidades de madres y niños afectados, empleó ideación y co-diseño de estrategias de atención integral, y <em>test</em>eo continuo con las familias mediante brigadas de salud y espacios de diálogo social. Combina el ciclo clásico de idear, prototipar, probar con el énfasis de la participación y emocional de las familias, la perspectiva de género y la contextualización territorial (Instituto Nacional de Salud, 2016).
              .div(titulo="Santiago Utz´Ruwaach")
                p.mb-0 Mitigación de riesgos durante la pandemia de COVID-19 en territorio maya tz´utujil de Guatemala. Liderado por la Universidad del Valle de Guatemala. Este proyecto implementó un sistema de vigilancia sindrómica comunitaria durante la pandemia de COVID-19 con pertinencia cultural en población maya tz’utujil. Su estructura metodológica incluyó co-creación de materiales educativos, campañas de comunicación diseñadas con líderes comunitarios y retroalimentación continua mediante investigación participativa. Las soluciones fueron codiseñadas con los usuarios finales, adaptadas a su idioma, cosmovisión y contexto territorial, respetando las prácticas culturales de salud. La OPS destaca que el proyecto no solo mejoró la vigilancia sanitaria, sino también la confianza y apropiación comunitaria (Ruwaach, 2022).
              .div(titulo="Modelo Integral de Atención en Salud para la Ruralidad de Sumapaz")
                p.mb-0 Liderado por la Subred Integrada de Servicios de Salud Sur, Secretaría Distrital de Salud de Bogotá, Colombia. El modelo se centra en diseñar servicios de salud adaptados a contextos rurales mediante participación comunitaria, diálogo intercultural y fortalecimiento de redes locales de apoyo. La OPS resalta su capacidad para integrar saberes ancestrales, medicina alternativa y determinantes ambientales, mostrando un enfoque de diseño verdaderamente centrado en las personas y en su entorno ecológico y cultural (PAHO TV, 2024).
          .col-md-8.col-lg-3.mb-3.mb-lg-0.order-lg-2.order-1
            figure
              img(src="@/assets/curso/temas/tema5/img11.png", data-aos="zoom-in")
  

    separador
    
    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-12
        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_5_2 5.2 Implementaciones adaptativas y gestión de proyectos de innovación en salud en América Latina


        .row.align-items-center.bg-color-1.p-4.mb-5
          .col-lg-auto
            img.d-lg-flex.d-none(src="@/assets/curso/temas/tema5/img12.svg", style="max-width: 90px").mx-auto
          .col-lg.px-lg-4.p-3
            p.mb-3 Uno de los ejemplos más recientes de adopción de enfoques ágiles en el ámbito de la salud pública en América Latina proviene del Centro Latinoamericano y del Caribe de Información en Ciencias de la Salud, centro especializado de la Organización Panamericana de la Salud. 
            p.mb-0 Durante 2024, la OPS/OMS consolidaron prácticas innovadoras de gestión y ejecución estratégica, incorporando metodologías ágiles de gestión y operaciones, entre ellas el enfoque <em>Scrum</em>, con el fin de aumentar la eficiencia y la colaboración en sus proyectos de transformación digital. La introducción del enfoque ágil en esta institución de salud pública representa un cambio relevante en la forma de gestionar proyectos tecnológicos y de información sanitaria. 

    .row.justify-content-center.align-items-center
      .col-md-8.col-lg-4(order-sm="2" order-md="2")
        figure
          img(src="@/assets/curso/temas/tema5/img13.png", alt="Imagen Decorativa", data-aos="zoom-in")
      .col-lg-8.col-md-12.mb-4.mb-md-0(order-sm="1" order-md="1")
        p.mb-3(data-aos="fade-right") El uso de <em>Scrum</em> permitió organizar el trabajo en ciclos cortos e iterativos, fortalecer la comunicación entre equipos técnicos, administrativos y científicos, y priorizar entregas de valor tangible, como mejoras en plataformas, servicios digitales y herramientas basadas en inteligencia artificial. Además,  la OPS/OMS complementó la metodología con la incorporación de herramientas como ChatGPT que facilitaron el desarrollo de nuevos productos informativos y la personalización de servicios, reflejando un proceso de innovación continua y adaptativa.

        .row.justify-content-center.align-items-center
          .col-auto.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema5/img14.svg", alt="Imagen Decorativa", data-aos="zoom-in")
          .col-lg
            p.mb-0(data-aos="fade-right") Este caso ilustra cómo los principios de las metodologías ágiles, flexibilidad, entrega incremental y retroalimentación constante pueden integrarse exitosamente en instituciones del sector salud. En contextos donde la información y la evidencia científica son fundamentales para la toma de decisiones, la agilidad metodológica no solo mejora la eficiencia operativa, sino que también impulsa la capacidad institucional para anticipar y responder a los desafíos emergentes de la salud pública en la región.


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
