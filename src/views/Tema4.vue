<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Metodologías ágiles

    .bloque-texto-g.bg-acento-contenido-p10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las metodologías ágiles son enfoques de gestión y desarrollo que promueven el trabajo colaborativo, la adaptación continua y la entrega progresiva de resultados, aspectos esenciales en contextos complejos como la salud pública. estas metodologías permiten planificar y ejecutar proyectos de manera flexible, respondiendo a cambios en el entorno, necesidades de la comunidad y hallazgos emergentes durante la investigación. A través de ciclos cortos de trabajo, retroalimentación constante y mejora continua, las metodologías ágiles facilitan la validación temprana de soluciones, el uso eficiente de recursos y la generación de evidencia aplicable, fortaleciendo el impacto real de las iniciativas innovadoras en salud pública.

    .bg-fondo-4-1
      separador
      
      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-12
          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_4_1 4.1 Introducción y principios de las metodologías ágiles 

          .row.mb-5.justify-content-center.align-items-center

            .col-12.col-md-12.col-lg-9
              .row.justify-content-center.align-items-center.mb-4
                .col-md-8.col-lg-5(order-sm="2" order-md="2")
                  figure
                    img(src="@/assets/curso/temas/tema4/img02.png", alt="Imagen Decorativa", data-aos="zoom-in")
                .col-lg-7.col-md-12.bg-color-primario-p20(order-sm="1" order-md="1").p-5
                  p.mb-0(data-aos="fade-right") Las metodologías ágiles surgen como una respuesta crítica a la rigidez, linealidad y tiempos extensos que suelen presentarse en modelos tradicionales de gestión de proyectos, los cuales se centran en una planificación exhaustiva previa y en la ejecución secuencial de tareas.

              .row.justify-content-center.align-items-center
                .col-12.col-md-12.col-lg-12.bg-color-1.p-3.mb-3
                  .row.justify-content-center
                    .col-auto.mb-3.mb-lg-0.d-none.d-lg-block
                      figure
                        img(src="@/assets/curso/temas/tema4/img03.svg", alt="Imagen Decorativa", data-aos="zoom-in")
                    .col-lg.p-3
                      p.mb-0(data-aos="fade-right") Frente a estos esquemas, las metodologías ágiles se enfocan en la flexibilidad, la colaboración continua, la adaptabilidad al cambio y la entrega constante de valor, fomentando entornos de trabajo donde la incertidumbre se gestiona de forma iterativa y el aprendizaje se convierte en un proceso permanente.

                .col-12.col-lg-12
                  p.mb-0(data-aos="fade-right") En el campo de la investigación en salud pública, caracterizado por la complejidad, la variabilidad de contextos y la necesidad de respuestas rápidas ante problemas emergentes, la aplicación de principios ágiles ha cobrado creciente relevancia. Estos enfoques permiten que los equipos de investigación puedan ajustar objetivos, métodos y productos a medida que surgen nuevas evidencias o condiciones externas, evitando la rigidez metodológica que puede limitar la innovación.

            .col-8.col-md-6.col-lg-3
              figure
                img(src="@/assets/curso/temas/tema4/img04.png", alt="Imagen Decorativa", data-aos="zoom-in").mb-lg-0

    .row.mb-2.justify-content-center.align-items-center
      .col-12.col-md-12.col-lg-10.mb-3
        .row.align-items-center.bg-color-terciario-t5.p-4(data-aos="fade-left").icono-inferior.mb-4
          .col-12.col-md-6.col-lg-4.mb-4.mb-lg-0.mx-auto.order-md-2.order-lg-1
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img05.svg', alt='Imagen Decorativa') 
          .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0.order-md-1.order-lg-2
            p.mb-0 Se ha identificado que el uso de metodologías ágiles en proyectos de investigación y desarrollo se da generalmente en modelos híbridos, donde los principios ágiles se integran con estructuras tradicionales de planificación. Su aplicación más frecuente ocurre en las fases de planeación y ejecución, donde se logra reducir los tiempos de entrega, optimizar los recursos disponibles y fortalecer la cohesión del equipo de trabajo. Además, los proyectos de investigación se benefician de la naturaleza iterativa de estos métodos, que promueven la reflexión constante y la toma de decisiones basadas en la evidencia obtenida durante el proceso.
          
        p.mb-3 Desde una perspectiva de gestión, Highsmith (2009) resalta que la agilidad implica más que rapidez: se trata de un enfoque estratégico que combina disciplina y adaptabilidad, permitiendo a las organizaciones y equipos científicos responder de forma efectiva a la incertidumbre, mientras mantienen la visión del propósito final del proyecto. La agilidad, aplicada a la investigación, no busca eliminar la planificación, sino convertirla en un proceso flexible, abierto a la experimentación, al aprendizaje validado y al cambio continuo, lo cual es fundamental en contextos de innovación en salud.
        
        .row.justify-content-center.align-items-center
          .col-md-8.col-lg-5.mb-3(order-sm="2" order-md="2")
            figure
              img(src="@/assets/curso/temas/tema4/img06.png", alt="Imagen Decorativa", data-aos="zoom-in")
          .col-lg-7.col-md-12.mb-2.mb-md-0(order-sm="1" order-md="1")
            .row.justify-content-center.align-items-center.mb-2
              .col-auto.mb-3.mb-lg-0.order-md-1.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/tema4/img07.svg", alt="Imagen Decorativa", data-aos="zoom-in")
              .col-lg.order-md-2
                p.mb-0(data-aos="fade-right") Se ha evidenciado que los equipos de investigación que adoptan prácticas ágiles muestran mayor productividad, comunicación efectiva, aprendizaje organizacional y satisfacción de los actores involucrados. 

            p.mb-0(data-aos="fade-right") Esto se debe a que las metodologías ágiles transforman la gestión del proyecto en un proceso colaborativo, dinámico y orientado a resultados tempranos, favoreciendo el intercambio de conocimiento entre expertos técnicos, comunidades beneficiarias, y decisores en salud pública. Así, la aplicación de metodologías ágiles en investigación no solo mejora la eficiencia operativa, sino que también refuerza el enfoque participativo y el aprendizaje colectivo, aspectos esenciales para generar innovaciones sostenibles y de impacto social.

    p.mb-3(data-aos="fade-right") Dentro de los principios clave aplicados a la investigación se encuentran los siguientes:

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-md-8.col-lg-4.order-lg-2
            figure
              img(src='@/assets/curso/temas/tema4/img10.png', alt='')
          .col-lg-8.order-lg-1
            SlyderF(columnas="col-12 col-xl-6").p-4
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/temas/tema4/img08.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Entregas incrementales de conocimiento
                p.text-center Es decir que se generan resultados parciales o prototipos de conocimiento que pueden validarse tempranamente con los usuarios o con la evidencia científica disponible.

              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/temas/tema4/img09.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Retroalimentación constante
                p.text-center Donde los usuarios, comunidades o partes interesadas participan activamente en la revisión de los avances, asegurando que los resultados sean relevantes y contextualizados.

              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/temas/tema4/img11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Iteración y aprendizaje continuo
                p.text-center A través de los hallazgos parciales que retroalimentan el diseño del estudio o la intervención, permitiendo reajustar hipótesis, métodos o productos.

              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/temas/tema4/img12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Equipos interdisciplinarios autoorganizados
                p.text-center Lo cual fomenta la autonomía, la toma de decisiones compartida y la colaboración entre disciplinas diversas, potenciando la creatividad y la innovación colectiva.
          
    separador

    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-12
        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_4_2 4.2 <em>Lean Startup</em>
  
        img(src="@/assets/curso/temas/tema4/img13.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-4
          .col-lg-9(data-aos="fade-up")
            p.banner-text La metodología <em>Lean Startup</em>, propuesta por Ries (2011), fusiona principios ágiles y enfoques de validación científica para gestionar la innovación en contextos de alta incertidumbre. Su objetivo es minimizar el desperdicio de recursos y maximizar el aprendizaje validado, mediante ciclos iterativos de experimentación rápida. En el entorno de la investigación en salud pública, <em>Lean Startup</em> ayuda a probar intervenciones, herramientas o tecnologías de salud (por ejemplo, una app de monitoreo epidemiológico) de manera escalonada, antes de comprometer grandes recursos o desplegar a gran escala.

        
        .row.mb-3.justify-content-center.align-items-center
          .col-12.col-md-12.col-lg-10
            .row.justify-content-center.mb-4
              .col-auto.mb-3.mb-lg-0.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/tema4/img14.png", alt="Imagen Decorativa", data-aos="zoom-in")
              .col-lg
                p.mb-0(data-aos="fade-right") <em>Lean Startup</em> considera que muchas iniciativas fallan por asumir hipótesis no verificadas, invertir en características que no son valoradas por los usuarios o ignorar señales tempranas de insatisfacción. Al aplicar el enfoque de experimentación científica al diseño de soluciones, esta metodología promueve decisiones informadas y adaptaciones frecuentes basadas en evidencia empírica.

            .titulo-con-imagen.mb-3(data-aos="fade-right").p-0
              .titulo-con-imagen__fondo
                //- img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/bg-02.png")
                h3.titulo-con-imagen__texto Ciclo construir, medir, aprender 
                
            p.mb-3(data-aos="fade-right") El núcleo operativo de <em>Lean Startup</em> es el bucle construir, medir, aprender. Este ciclo debe recorrerse tantas veces como sea necesario para validar o refinar las hipótesis de proyecto que busque por ejemplo, convertir ideas en productos, observar las respuestas de los usuarios y aprender si perseverar o realizar cambios.  

            p.mb-4(data-aos="fade-right") A continuación, se profundiza en cada fase con ejemplos adaptados al contexto de investigación en salud: 


            .row.align-items-center.justify-content-center.mb-5
              .col-md-6.col-lg-4.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/temas/tema4/img15.png", data-aos="zoom-in")
              .col-lg-8
                AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-1")
                  .div(titulo="Construir")
                    p En esta fase se desarrolla una versión mínima del producto o la intervención, usualmente un prototipo, piloto o módulo, que permita <em>test</em>ear hipótesis específicas. Por ejemplo, un prototipo digital de vigilancia epidemiológica con funciones básicas (registro de casos, alertas). Esta versión mínima busca consumir pocos recursos, pero ser funcional para fines de prueba. En el contexto científico, muchas veces el producto puede ser también un protocolo, una encuesta piloto, un módulo de un sistema de información.
                  .div(titulo="Medir")
                    p En esta etapa se recolectan datos cuantitativos o cualitativos sobre el desempeño del prototipo o intervención. Las métricas deben ser accionables, es decir, que permitan juzgar si una hipótesis es verdadera, parcialmente válida o falsa. No basta con opiniones vagas, por lo que se deben emplear indicadores que reflejen el comportamiento real, como el uso, la aceptación, el impacto, o la retención. Por ejemplo, se puede medir cuántos usuarios ingresan datos, la tasa de abandono del sistema, la proporción de alertas, o los cambios en indicadores de salud (prevalencia, incidencia, adherencia).
                  .div(titulo="Aprender")
                    p Con los datos recolectados, el equipo analiza si las hipótesis formuladas inicialmente son válidas o no, y decide si perseverar con el rumbo actual, es decir seguir desarrollando, o cambiar algún componente. En investigación en salud, aprender puede implicar, por ejemplo, cambiar componentes como, redefinir la población objetivo, ajustar la herramienta de recolección de datos, o modificar el diseño. Este aprendizaje validado es el motor que dirige las siguientes iteraciones, por lo que el aprendizaje no solo es técnico, sino estratégico y metodológico.

            .titulo-con-imagen.mb-3(data-aos="fade-right").p-0
              .titulo-con-imagen__fondo
                //- img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/bg-02.png")
                h3.titulo-con-imagen__texto Validación de hipótesis y aprendizaje validado                
            
            .row.mb-3.justify-content-center.align-items-center
              .col-auto.mb-3.mb-lg-0.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/tema4/img16.svg", alt="Imagen Decorativa", data-aos="zoom-in")
              .col-lg
                p.mb-0(data-aos="fade-right") De acuerdo con lo establecido por la organización Solvingadhoc (2017), en el enfoque <em>Lean Startup</em>, la validación de hipótesis constituye un proceso sistemático orientado a comprobar empíricamente los supuestos más críticos de un proyecto, especialmente aquellos que sustentan su pertinencia, viabilidad y potencial de impacto. En el contexto de la investigación en salud pública, se busca determinar, por ejemplo, si un producto o servicio será adoptado, si la intervención, herramienta o tecnología propuesta genera valor real para la población objetivo, si contribuye a resolver un problema de salud o si puede sostenerse en el tiempo dentro del sistema de salud.

            .row.mb-4.justify-content-center.align-items-center
              p.mb-0(data-aos="fade-right") Las hipótesis en este tipo de proyectos suelen agruparse en dos dimensiones principales:

            .row.mb-4.justify-content-center
              
              .col-12.col-md-6.col-lg-6
                .bg-color-primario-p20.p-4.h-100.border-radius-20.img-topright.h-100
                  img(src='@/assets/curso/temas/tema4/img17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h5.mb-4.pt-lg-5.pt-xl-0.w-50 Hipótesis de valor
                  p.mb-0 Se refieren a la relevancia o utilidad percibida de la solución propuesta, es decir, si esta responde a una necesidad concreta de los usuarios o de las instituciones. Por ejemplo, si un sistema de monitoreo digital facilita efectivamente el seguimiento de pacientes con enfermedades crónicas o mejora la coordinación entre niveles de atención.

              .col-12.col-md-6.col-lg-6
                .bg-color-terciario-t10.p-4.h-100.border-radius-20.img-topright.h-100
                  img(src='@/assets/curso/temas/tema4/img18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h5.mb-4.pt-lg-5.pt-xl-0.w-50 Hipótesis de crecimiento o adopción
                  p.mb-0 Que buscan comprender cómo se amplía la cobertura o cómo la solución se integra de manera sostenible en nuevos entornos, territorios o poblaciones. Estas hipótesis examinan aspectos como la facilidad de uso, la aceptabilidad cultural o las barreras de acceso.

            .row.mb-3.justify-content-center.align-items-center
              .col-lg-7.col-md-12.mb-3(order-sm="1" order-md="1")
                p.mb-0(data-aos="fade-right") El proceso de validación implica identificar las hipótesis más arriesgadas, aquellas que, de resultar falsas, pondrían en riesgo el propósito del proyecto. En lugar de invertir recursos en desarrollar soluciones complejas desde el inicio, el enfoque Lean propone someter estos supuestos a pruebas experimentales tempranas, controladas y de bajo costo. Por ejemplo, antes de escalar una aplicación móvil para la notificación de síntomas, puede ser más útil verificar si los trabajadores de salud en zonas rurales están dispuestos a utilizar herramientas digitales, si cuentan con conectividad suficiente o si el formato de registro es comprensible. Este tipo de aprendizaje temprano evita invertir esfuerzos en productos que, aunque técnicamente viables, no serían funcionales en el contexto real.
              .col-md-8.col-lg-5(order-sm="2" order-md="2")
                figure
                  img(src="@/assets/curso/temas/tema4/img19.png", alt="Imagen Decorativa", data-aos="zoom-in")
        
        .row.mb-5.justify-content-center.align-items-center.bg-color-1.p-4.mb-5
          .col-auto.mb-3.mb-lg-0.d-none.d-lg-block
            figure
              img(src="@/assets/curso/temas/tema4/img20.svg", alt="Imagen Decorativa", data-aos="zoom-in")
          .col-lg
            p.mb-0.p-lg-4(data-aos="fade-right") Para validar estas hipótesis, se diseñan experimentos guiados por métricas accionables, es decir, indicadores que permiten generar conclusiones claras y útiles para la toma de decisiones. A diferencia de las métricas descriptivas o meramente estadísticas, las métricas accionables aportan información directa sobre el desempeño de la intervención o la herramienta y sobre su capacidad para generar valor o provocar cambios. Por ejemplo, una métrica accionable podría ser el porcentaje de profesionales que utilizan consistentemente una plataforma de seguimiento de pacientes durante un mes, o la variación en el tiempo de respuesta ante alertas clínicas después de su implementación.

        .row.mb-3.justify-content-center.align-items-center
          .bloque-texto-g.bg-color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img21.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 El análisis de los resultados conduce a la fase de aprendizaje validado, que constituye la verdadera unidad de progreso en <em>Lean Startup</em>, donde el aprendizaje validado se centra en el conocimiento adquirido a través de la evidencia empírica: qué funciona, qué no, por qué y bajo qué condiciones. Este aprendizaje puede conducir a dos decisiones estratégicas. Si los resultados confirman la hipótesis, el equipo puede perseverar, fortaleciendo o ampliando la intervención. Si los resultados la contradicen, se puede pivotar, es decir, rediseñar parte del enfoque, el público objetivo o la funcionalidad del sistema, sin perder de vista el problema principal que se busca resolver.
            
        .row.mb-4.justify-content-center.align-items-center
          .col-12.col-md-12.col-lg-10
            .row.justify-content-center.align-items-center.mb-4
              .col-auto.mb-3.mb-lg-0.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/tema4/img22.svg", alt="Imagen Decorativa", data-aos="zoom-in")
              .col-lg
                p.mb-0(data-aos="fade-right") En la práctica, validar hipótesis en proyectos de salud pública puede implicar diversas etapas de experimentación secuencial. Por ejemplo, inicialmente se podría confirmar si los usuarios comprenden y utilizan una interfaz digital para reportar síntomas; luego, evaluar si esta herramienta genera cambios observables en el comportamiento (como mayor adherencia al tratamiento o mayor reporte de casos); posteriormente, analizar si incentivos como notificaciones automáticas o recordatorios mejoran la retención de usuarios; y finalmente, valorar si la solución es escalable a otros territorios o poblaciones.

            .row.align-items-center.bg-color-2.p-4(data-aos="fade-left").icono-inferior.mb-0
              .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
                p.mb-0 Este enfoque convierte la investigación en un proceso dinámico, participativo y adaptativo, donde los individuos, comunidades y profesionales de la salud dejan de ser receptores pasivos de una innovación y se convierten en colaboradores activos del proceso de diseño y validación. A través del aprendizaje validado, la investigación se orienta hacia un ciclo continuo de generación de conocimiento aplicado, en el que cada iteración contribuye no solo a perfeccionar la intervención, sino también a fortalecer la comprensión del problema de salud pública y sus determinantes (Solvingadhoc, 2017).
              .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0.mx-auto
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img23.png', alt='Imagen Decorativa') 
          
    separador
            
    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-10
        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_4_3 4.3 <em>Scrum</em>

        
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-8.col-xl-5.mb-3.mb-lg-0
            .bg-color-5.p-5.px-lg-4.tarjeta 
              p.mb-0 <em>Scrum</em> es un marco ágil diseñado para facilitar la gestión colaborativa de proyectos complejos que requieren adaptación constante, comunicación continua y entrega incremental de resultados. Aunque su origen está en el desarrollo de software, su estructura flexible y su énfasis en el trabajo en equipo lo han convertido en una herramienta útil en múltiples ámbitos, incluyendo la investigación científica, la salud pública y la gestión hospitalaria.
          .col-md-6.col-lg-4.col-xl-4.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/temas/tema4/img24.png", data-aos="zoom-in")
          .col-xl-3.mt-3.mt-xl-0
            img.d-xl-flex.d-none(src="@/assets/curso/temas/tema4/img25.svg", style="max-width: 90px").mb-3
            p.mb-0 En estos contextos, <em>Scrum</em> permite integrar de manera efectiva a equipos multidisciplinarios, como científicos, epidemiólogos, analistas de datos, ingenieros biomédicos y gestores, promoviendo la coordinación, la transparencia y la mejora continua en cada ciclo de trabajo.
        

        .row.align-items-center.bg-color-terciario-t5.p-4(data-aos="fade-left").icono-inferior.mb-4
          .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0.mx-auto
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img26.png', alt='Imagen Decorativa') 
          .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
            p.mb-0 En instituciones de salud o investigación, la implementación de <em>Scrum</em> ayuda a organizar proyectos en fases iterativas denominadas <em>sprint</em>s, donde los equipos producen entregables parciales, revisan resultados y adaptan sus estrategias con base en la evidencia emergente. Esta metodología es especialmente valiosa en entornos caracterizados por alta incertidumbre y múltiples dependencias entre disciplinas, como ocurre en estudios de vigilancia epidemiológica, desarrollo de herramientas tecnológicas, validación de intervenciones o implementación de sistemas de información en salud (Schwaber & Sutherland, 2020).

        .titulo-con-imagen.mb-3(data-aos="fade-right").p-0
          .titulo-con-imagen__fondo
            //- img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/bg-02.png")
            h3.titulo-con-imagen__texto Roles en <em>Scrum</em> adaptados a la investigación en salud pública    

        .row.align-items-center.justify-content-center.mb-3
          p.mb-0 El marco <em>Scrum</em> se estructura en torno a tres roles fundamentales, que pueden adaptarse a los entornos institucionales y científicos sin perder su esencia colaborativa:
      
      .bg-fondo-5.tarjeta.mb-5
        .p-3.p-lg-4
          SlyderA(tipo="b").bg-color-white.p-4.tarjeta
            .row.justify-content-center.align-items-center.p-4
              .col-lg-8.mb-3
                h4 Propietario del Producto <em>(Product Owner)</em>
                p.mb-0 En un proyecto de salud pública, este rol suele corresponder a un investigador principal, coordinador de proyecto o líder técnico responsable de definir la visión y los objetivos científicos o sanitarios. Su función es priorizar las tareas según el valor que aportan al propósito del proyecto, por ejemplo, decidir si se avanza primero en la validación del algoritmo de predicción, en la recopilación de datos de campo o en el diseño de la interfaz de usuario para una herramienta de vigilancia. Además, este rol actúa como enlace entre el equipo técnico y las partes interesadas que pueden ser por ejemplo ministerios, entidades territoriales, instituciones académicas o agencias de cooperación, pues es quien asegura que los entregables parciales respondan a las necesidades que se quieren atender.
              .col-md-9.col-lg-4.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema4/img27.png', alt='Imagen de acompañamiento')

            .row.justify-content-center.align-items-center.p-4
              .col-lg-8.mb-3
                h4 Facilitador o Líder de proceso (<em>Scrum</em> Master)
                p.mb-0 Su función es garantizar que el marco <em>Scrum</em> se aplique correctamente, facilitando la comunicación, eliminando obstáculos organizativos o logísticos y promoviendo la eficiencia del equipo. En el contexto científico, este rol equivale a un gestor de proyectos de investigación y desarrollo, un coordinador metodológico o un profesional de innovación, encargado de asegurar que el equipo mantenga una dinámica ágil, cumpla los tiempos establecidos y reflexione periódicamente sobre cómo mejorar su rendimiento. Este rol no es jerárquico, sino de acompañamiento y se encarga de fomentar la autogestión y la colaboración, facilitando que los investigadores dediquen más tiempo al trabajo técnico y menos a la gestión burocrática.
              .col-md-9.col-lg-4.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema4/img28.png', alt='Imagen de acompañamiento')

            .row.justify-content-center.align-items-center.p-4
              .col-lg-8.mb-3
                h4 Equipo de trabajo interdisciplinario o equipo de desarrollo
                p.mb-0 Son el equipo de trabajo en los proyectos de investigación y salud pública este equipo puede estar conformado por investigadores de distintas áreas, epidemiólogos, bioestadísticos, tecnólogos, analistas de laboratorio, profesionales de salud, programadores o diseñadores. Su tarea es ejecutar las actividades planificadas dentro de cada <em>sprint</em>, desarrollar los productos intermedios, por ejemplo, protocolos, bases de datos depuradas, informes de resultados parciales o prototipos tecnológicos, y validar los avances obtenidos. Lo esencial es que el equipo sea autónomo, multidisciplinario y comprometido con los resultados colectivos, ya que la efectividad del <em>Scrum</em> depende de la capacidad del grupo para autoorganizarse y mantener una comunicación constante (Schwaber & Sutherland, 2020).
              .col-md-9.col-lg-4.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema4/img29.png', alt='Imagen de acompañamiento')

      .row.justify-content-center.align-items-center
        .col-12.col-md-12.col-lg-10
        
          .titulo-con-imagen.mb-3(data-aos="fade-right").p-0
            .titulo-con-imagen__fondo
              //- img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/bg-02.png")
              h3.titulo-con-imagen__texto Eventos y artefactos de <em>Scrum</em> aplicados a proyectos de salud
 
          .row.mb-5.justify-content-center.align-items-center
            .col-auto.mb-3.mb-lg-0.d-none.d-lg-block
              figure
                img(src="@/assets/curso/temas/tema4/img30.png", alt="Imagen Decorativa", data-aos="zoom-in")
            .col-lg
              p.mb-0(data-aos="fade-right") Según lo establecido por Schwaber & Sutherland (2020), el ciclo de <em>Scrum</em> se compone de eventos iterativos y artefactos documentales que estructuran el trabajo del equipo, garantizando la visibilidad de los avances y la mejora continua en cada iteración.
          
          .row.mb-5.justify-content-center.align-items-center
            h4.mb-3 Eventos principales:
            .col-lg-12.order-lg-1
              TabsA.color-acento-botones
                .tarjeta.color-acento-botones--borde.p-4(titulo="Ciclo de trabajo (<em>Sprint</em>)")
                  p.mb-0 Es el corazón de <em>Scrum</em>, consiste en un ciclo de trabajo corto, generalmente entre una y cuatro semanas, en el que se define un objetivo específico y se generan entregables concretos. En investigación en salud, un <em>sprint</em> puede enfocarse en una tarea específica como el diseño de un instrumento de recolección de datos, la limpieza de una base de datos epidemiológica, la validación de un algoritmo o el desarrollo de un módulo de visualización. Cada <em>sprint</em> debe concluir con un producto parcial funcional que aporte valor y que pueda ser revisado y mejorado.
                .tarjeta.color-acento-botones--borde.p-4(titulo="Reunión de seguimiento (diaria o semanal)")
                  p.mb-0 Es una reunión breve, de 10 a 15 minutos, en la que los miembros del equipo informan sobre lo que hicieron, lo que harán y los obstáculos que enfrentan. Este espacio favorece la sincronización, la coordinación interdisciplinaria y la detección temprana de problemas. En entornos de investigación, puede reemplazarse por reuniones semanales breves o informes de avance estructurados, dependiendo del tamaño del equipo y la carga académica.
                .tarjeta.color-acento-botones--borde.p-4(titulo="Revisión del ciclo de trabajo o <em>sprint</em>")
                  p.mb-0 Al finalizar cada ciclo, el equipo presenta los resultados obtenidos a las partes interesadas, por ejemplo, un comité científico o un área de salud pública, para recibir retroalimentación y validar el progreso. Este ejercicio fortalece la transparencia y la rendición de cuentas dentro del proceso de investigación.
                .tarjeta.color-acento-botones--borde.p-4(titulo="Retrospectiva o reunión de reflexión")
                  p.mb-0 Espacio interno del equipo para reflexionar sobre los aciertos y desafíos del <em>sprint</em>, y definir acciones de mejora. En el ámbito científico, esta práctica contribuye a consolidar una cultura de mejora continua, aprendizaje colectivo y gestión del conocimiento.
       
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-md-12.col-lg-12
          h4 Artefactos principales:

        .col-12.col-md-6.col-lg-4.mb-3
          .bg-color-terciario-t10.p-4.h-100.border-radius-20
            img(src='@/assets/curso/temas/tema4/img31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-2 Lista de trabajo general
            p.text-center Es la lista priorizada de tareas, requerimientos o hipótesis pendientes. Representa el plan general del proyecto. En salud pública, puede incluir actividades como desarrollo de instrumentos, pruebas de campo, análisis estadístico, redacción de artículos o reuniones con actores institucionales.

        .col-12.col-md-6.col-lg-4.mb-3
          .bg-color-terciario-t10.p-4.h-100.border-radius-20
            img(src='@/assets/curso/temas/tema4/img32.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-2 Lista de ciclo
            p.text-center Conjunto de tareas específicas seleccionadas, son aquellas tareas que deben completarse en el <em>sprint</em> o ciclo actual.

        .col-12.col-md-6.col-lg-4.mb-3
          .bg-color-primario-p20.p-4.h-100.border-radius-20
            img(src='@/assets/curso/temas/tema4/img33.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-2 Resultado incremental
            p.text-center Es el resultado tangible del <em>sprint</em>, es decir, el producto científico o técnico entregable, como un informe de avance, un prototipo de sistema o un análisis estadístico preliminar, que contribuye al objetivo general del proyecto.

      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-12.col-md-12.col-lg-10     
          .row.justify-content-center.align-items-center
            .col-md-10.col-lg-5.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema4/img34.png', alt='Imagen de acompañamiento')
            .col-lg-7.mb-4.mb-md-0
              p.mb-3 De acuerdo con Rojas (2022), la adaptación de <em>Scrum</em> a entornos de investigación fomenta la transparencia, la trazabilidad de los avances y la eficiencia operativa, especialmente cuando se combina con otros marcos como <em>Kanban</em>. Esta integración permite documentar de forma continua los hitos, reducir los cuellos de botella en los flujos de trabajo y fortalecer la cohesión del equipo alrededor de objetivos comunes.
              p.mb-0 Este modelo no solo mejora la productividad y la coordinación, sino que promueve la ciencia colaborativa, la documentación viva de los procesos y la transferencia efectiva de conocimiento entre los actores del sistema de salud.
          
    separador
            
    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-12
        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_4_4 4.4 <em>Kanban</em>

        .bloque-texto-g.bg-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img35.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El método <em>Kanban</em> es un sistema de gestión visual orientado a optimizar el flujo de trabajo, mejorar la comunicación y aumentar la eficiencia operativa dentro de los equipos y organizaciones. Su origen se remonta al modelo de producción de Toyota, donde se utilizaba para controlar los niveles de inventario y sincronizar los procesos industriales. Con el tiempo, este enfoque fue adaptado con éxito a los ámbitos de los servicios, la salud y la investigación, demostrando su utilidad para coordinar equipos interdisciplinarios, reducir tiempos de espera y mejorar la organización de las tareas.
        
        .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
          .col-12.col-md-12.col-lg-10
            .row.align-items-center.bg-color-1.p-4
              .col-lg-auto
                img.d-lg-flex.d-none(src="@/assets/curso/temas/tema4/img20.svg", style="max-width: 100px").mx-auto
              .col-lg.p-lg-4
                p.mb-0 En el contexto de la investigación y la salud pública, <em>Kanban</em> se ha consolidado como una herramienta que permite visualizar los procesos, identificar cuellos de botella, priorizar tareas críticas y tomar decisiones basadas en evidencia. Su aplicación resulta particularmente útil en proyectos de vigilancia epidemiológica, gestión de laboratorios, coordinación de actividades de campo o administración de proyectos de innovación, entre otros, donde la cantidad de tareas, la interacción entre áreas y la necesidad de seguimiento continuo suelen ser elevadas (Martins, 2025).

        .row.align-items-center.justify-content-center.mb-4(data-aos="fade-right")
          .titulo-con-imagen.mb-3(data-aos="fade-right").p-0
            .titulo-con-imagen__fondo
              //- img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/bg-02.png")
              h3.titulo-con-imagen__texto Principios y gestión visual del flujo de trabajo

          .col-md-8.col-lg-4.mb-3(order-sm="2" order-md="2")
            figure
              img(src="@/assets/curso/temas/tema4/img36.png", alt="Imagen Decorativa", data-aos="zoom-in")

          .col-lg-8.col-md-12.mb-4(order-sm="1" order-md="1")
            p.mb-3(data-aos="fade-right") El fundamento del método <em>Kanban</em> radica en hacer visible el trabajo para comprender cómo fluye dentro del equipo o la organización. Esto se logra mediante la elaboración de tableros visuales, físicos o digitales, que muestran las distintas etapas del proceso, desde la planificación hasta la finalización de las actividades. Cada tarea se representa mediante una tarjeta o registro, que se desplaza a lo largo de columnas que reflejan el estado del trabajo marcándolo como, por ejemplo: pendiente, en ejecución, en revisión, finalizado.
            p.mb-3(data-aos="fade-right") Esta representación permite que todos los miembros del equipo tengan una visión compartida del progreso, de las tareas en curso y de las prioridades, fortaleciendo la coordinación y la transparencia. Al observar el flujo completo, es posible detectar bloqueos o sobrecargas que dificultan el avance, y tomar medidas oportunas para resolverlos.
            p.mb-0(data-aos="fade-right") Los principios básicos de <em>Kanban</em> pueden resumirse en cuatro aspectos centrales:

        
    .bg-full-width.bg-fondo-3.mb-4
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-md-8.col-lg-4.order-lg-2
            figure
              img(src='@/assets/curso/temas/tema4/img41.png', alt='')
          .col-lg-8.order-lg-1
            SlyderF(columnas="col-12 col-xl-6").p-4
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/temas/tema4/img37.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Visualizar el flujo de trabajo
                p.text-center Mostrar de manera clara todas las actividades y su estado actual, para comprender el proceso en su conjunto y promover la colaboración.

              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/temas/tema4/img38.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Limitar el trabajo en curso
                p.text-center Establecer un número máximo de tareas que pueden desarrollarse simultáneamente, evitando la dispersión y la sobrecarga del equipo.

              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/temas/tema4/img39.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Gestionar el flujo y priorizar por valor
                p.text-center Enfocar los esfuerzos en las tareas que aportan mayor impacto al objetivo del proyecto, asegurando la continuidad y el equilibrio entre las etapas.

              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/temas/tema4/img40.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Revisar y mejorar de manera continua
                p.text-center Analizar los resultados del flujo de trabajo, identificar retrasos o cuellos de botella y ajustar los procesos con base en la evidencia obtenida.
          

    .row.align-items-center.justify-content-center.mb-3(data-aos="fade-right")
      .col-12.col-md-12.col-lg-10
        .row.align-items-center.p-4
          .col-lg-auto
            img.d-lg-flex.d-none(src="@/assets/curso/temas/tema4/img20.svg", style="max-width: 90px").mx-auto
          .col-lg.p-lg-4
            p.mb-0 En el ámbito de la salud pública, estos principios se traducen en una mayor claridad organizativa y capacidad de respuesta, especialmente cuando los equipos deben actuar con rapidez ante emergencias sanitarias o coordinar múltiples actividades de investigación en paralelo (Martins, 2025).

    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-right")
      .col-12.col-md-12.col-lg-10
      
        .titulo-con-imagen.mb-3(data-aos="fade-right").p-0
          .titulo-con-imagen__fondo
            //- img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/bg-02.png")
            h3.titulo-con-imagen__texto Implementación de tableros <em>Kanban</em> en investigación y salud

        .row.align-items-center.bg-color-primario-p20.p-4(data-aos="fade-left").icono-inferior
          .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0.mx-auto
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img42.svg', alt='Imagen Decorativa') 
          .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
            p.mb-0 De acuerdo con Martins (2025), la implementación de <em>Kanban</em> no requiere herramientas tecnológicas complejas, sino una estructura clara y el compromiso del equipo con la transparencia y la organización del trabajo. En proyectos de investigación, los tableros <em>Kanban</em> pueden utilizarse para planificar y monitorear el avance de los objetivos específicos, desde la formulación del proyecto hasta la publicación de los resultados.
          
  
    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-right")
      .col-12.col-md-12.col-lg-10
        .row.justify-content-center.align-items-center
          .col-auto.mb-3.mb-lg-0.d-none.d-lg-block
            figure
              img(src="@/assets/curso/temas/tema4/img43.png", alt="Imagen Decorativa", data-aos="zoom-in")
          .col-lg
            p.mb-0(data-aos="fade-right") Por ejemplo, en un estudio multicéntrico, el tablero puede incluir columnas que representen las fases del trabajo: diseño del protocolo, aprobación ética, recolección de datos, análisis estadístico y redacción del informe final. Cada actividad se desplaza visualmente a medida que avanza, lo que permite a los investigadores y coordinadores identificar retrasos, reasignar responsabilidades o anticipar necesidades de apoyo.


    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-md-12.col-lg-10
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-8.col-xl-6.mb-3.mb-lg-0
            .bg-color-5.p-5.px-lg-4.tarjeta 
              p.mb-0 En instituciones de salud, los tableros <em>Kanban</em> se han utilizado para mejorar la coordinación de equipos clínicos, gestionar proyectos de innovación o monitorear procesos administrativos y de calidad. Mejía (2024) señala que la aplicación de este método en hospitales permite reducir desperdicios, optimizar la utilización de recursos humanos y materiales, y mejorar la capacidad de respuesta ante cambios o demandas emergentes. En este sentido, <em>Kanban</em> no solo organiza las tareas, sino que promueve una cultura de trabajo basada en la evidencia y en la mejora continua.
          .col-xl-6
            .row.justify-content-center.align-items-center.mb-4
              .col-auto.mb-3.mb-lg-0.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/tema4/img44.svg", alt="Imagen Decorativa", data-aos="zoom-in")
              .col-lg
                p.mb-0(data-aos="fade-right") Además, su versatilidad facilita la integración con otras metodologías ágiles como <em>Scrum</em> o Lean, permitiendo que los equipos adapten su gestión de acuerdo con la naturaleza del proyecto

            p.mb-0 Mientras <em>Scrum</em> estructura el trabajo en ciclos de tiempo definidos, <em>Kanban</em> ofrece una visión continua del flujo de tareas, ideal para procesos en marcha o de larga duración, como los que suelen presentarse en la investigación en salud pública
            
      
    .row.align-items-center.justify-content-center.mb-2(data-aos="fade-right")
      .col-12.col-md-12.col-lg-10
        .row.align-items-center.bg-color-1.p-4
          .col-lg-auto
            img.d-lg-flex.d-none(src="@/assets/curso/temas/tema4/img20.svg", style="max-width: 100px").mx-auto
          .col-lg.p-lg-4
            p.mb-0 En resumen, <em>Kanban</em> aporta una estructura visual, flexible y participativa para la gestión de proyectos de investigación y programas de salud. Su aplicación fortalece la eficiencia, la comunicación y la toma de decisiones, contribuyendo a que los equipos trabajen de forma más coordinada, transparente y orientada al logro de resultados sostenibles.

    separador
            
    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-10
        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_4_5 4.5 Comparación y selección de la metodología ágil

      .row.align-items-center.justify-content-center.mb-3(data-aos="fade-right")
        .col-12.col-md-12.col-lg-10
          .row.align-items-center
            .col-lg-auto
              img.d-lg-flex.d-none(src="@/assets/curso/temas/tema4/img45.png", style="max-width: 100px").mx-auto
            .col-lg.p-lg-4
              p.mb-0 La selección de las metodologías debe basarse en el nivel de incertidumbre, el tamaño del equipo y el tipo de entrega. En contextos de investigación en salud pública, se recomienda un enfoque híbrido, combinando <em>Scrum</em> para gestión iterativa, <em>Kanban</em> para control de flujo y <em>Lean Startup</em> para validación científica (ver Tabla 4).

      .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
        .col-lg-12
          .titulo-sexto.mb-4.color-acento-contenido
            h5
              b Tabla 4.
              span Tipos de metodologías Agiles para Innovación
          .tabla-a.color-acento-contenido
            table
              caption Fuente: Adaptado SENA (2026), tomado de Martins, 2025
              thead
                tr
                  th Metodología
                  th Enfoque principal
                  th Ventajas
                  th Aplicación sugerida en salud pública
              tbody
                tr
                  td <b><em>Lean Startup</em></b>
                  td Validación rápida de hipótesis mediante la experimentación y el aprendizaje basado en evidencia.
                  td Permite reducir riesgos, optimizar recursos y obtener resultados tempranos que guían decisiones basadas en datos.
                  td Ideal para el diseño y prueba de intervenciones piloto, herramientas tecnológicas o estrategias innovadoras, antes de su implementación a gran escala.
                tr
                  td <b><em>Scrum</em></b>
                  td Gestión iterativa y colaborativa de proyectos complejos a través de ciclos de trabajo cortos.
                  td Favorece la coordinación de equipos multidisciplinarios, la transparencia y la entrega continua de productos verificables.
                  td Recomendado para equipos de investigación, vigilancia o gestión institucional que desarrollan proyectos con objetivos y entregables sucesivos.
                tr
                  td <b><em>Kanban</em></b>
                  td Visualización del flujo de trabajo y mejora continua del proceso.
                  td Incrementa la eficiencia operativa, la priorización de tareas y la comunicación interna.
                  td Adecuado para el seguimiento de proyectos, la gestión de laboratorios o la administración de programas de salud, donde es necesario mantener un control permanente del avance.
      
      .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
        .col-lg-12
          .bloque-texto-g.bg-color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img46.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 La selección de la metodología ágil más adecuada depende del contexto y de las condiciones del proyecto. En investigaciones o programas con alta incertidumbre o componentes innovadores, <em>Lean Startup</em> resulta particularmente útil para validar hipótesis tempranas y reducir el riesgo antes de invertir en desarrollos de mayor escala. Cuando el proyecto requiere una gestión estructurada y colaborativa de múltiples actores o disciplinas, <em>Scrum</em> ofrece una forma efectiva de coordinar tareas y fomentar la revisión continua. Por su parte, <em>Kanban</em> es ideal para contextos donde se necesita una visión general del flujo de trabajo, manteniendo el control operativo y optimizando los recursos en tiempo real.

      .row.mb-0.justify-content-center.align-items-center
        .col-12.col-md-12.col-lg-10
          .row.align-items-center.bg-color-terciario-t10.p-4(data-aos="fade-left").icono-inferior
            .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
              p.mb-0 No obstante, en la práctica, los equipos de salud pública y de investigación suelen beneficiarse más de un enfoque híbrido, que combine las fortalezas de las tres metodologías. Esta integración permite al equipo científico o técnico adaptarse a las condiciones cambiantes del entorno, avanzar con evidencia y mantener una visión estratégica del proyecto, equilibrando la experimentación, la coordinación y la eficiencia operativa. En definitiva, el uso combinado de metodologías ágiles promueve una gestión más efectiva, transparente y orientada a resultados en los proyectos de salud pública e investigación aplicada.
              
            .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0.mx-auto
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img47.svg', alt='Imagen Decorativa') 
            

</template>

<script>
export default {
  name: 'Tema4',
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
