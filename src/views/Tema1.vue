<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Principios y fases de <em>Design Thinking</em> y <em>Human-Centered Design</em> (HCD) en salud pública
  
    .row.align-items-center(data-aos="fade-left").justify-content-center.mb-4

      .col-md-12.col-lg-10
        .row.justify-content-center.align-items-center
          .col-12.col-md-6.col-lg-5
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-7.bg-color-terciario-t5
            p.mb-0.p-4 Te invitamos a ver el siguiente video introductorio sobre el Pensamiento de Diseño (<em>Design Thinking</em>), el Diseño Centrado en el Usuario (<em>Human-Centered Design</em>). Mientras observas el video, reflexiona sobre las siguientes preguntas: ¿Cómo cambia la investigación en salud cuando se trabaja con las comunidades desde el inicio?
    
    .bg-fondo-1
      .row.align-items-center(data-aos="fade-left").justify-content-center.mb-3
        .col-12.col-md-12.col-lg-12
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img02.png', alt='Imagen Decorativa')

      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-12

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_1_1 1.1  Introducción y principios al pensamiento de diseño en salud pública

          //- banner con tarjeta
          .row.justify-content-center.align-items-center.mb-3.tarjeta(data-aos="fade-left")
            .col-lg-12.mb-2
              div.tarjeta-horz.mb-3
                img(src='@/assets/curso/temas/tema1/img03.png', alt='Imagen decorativa')
                div.texto-tarjeta.bg-white
                    p.mb-0 ¿Qué es <em>Design Thinking</em>?  Es una metodología que permite estructurar la forma en que se entiende un problema, qué se quiere solucionar y cuál es la solución que se debe crear. Este enfoque se basa en principios como la empatía con los usuarios, la creatividad y un proceso de resolución de problemas iterativo, es decir que no sigue una secuencia rígida y lineal, sino que evoluciona según los aprendizajes que surgen en cada etapa. 

    .row.align-items-center(data-aos="fade-left").justify-content-center
      //- Col3 y Col9
      .col-12.col-md-12.col-lg-10.mx-auto.mb-4
        p.mb-3 Tradicionalmente, el <em>Design Thinking</em> se compone de cinco fases o etapas:

        .row.align-items-center(data-aos="fade-left").mb-4
          
          .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
            //- Linea de tiempo
            LineaTiempoD.color-secundario
              .row(numero="1" titulo="Empatizar (entender al usuario)")
                p.mb-0 Comprender en profundidad la experiencia del usuario.

              .row(numero="2" titulo="Definir (establecer el problema)")
                p.mb-0 Analizar lo aprendido para formular el problema de forma clara y precisa.

              .row(numero="3" titulo="Idear (generar soluciones)")
                p.mb-0 Generar múltiples alternativas y propuestas de solución.

              .row(numero="4" titulo="Prototipar (crear modelos)")
                p.mb-0 Materializar esas ideas en modelos, pruebas o versiones preliminares.

              .row(numero="5" titulo="Probar (validar las soluciones con los usuarios)")
                p.mb-0 Validar con los usuarios qué funciona, qué no y cómo mejorar.
          
          .col-12.col-md-5.col-lg-4.mb-2.mb-lg-0.mx-auto
            figure
              img.mb-0.mb-lg-0(src='@/assets/curso/temas/tema1/img04.png', alt='Imagen Decorativa')
        
        p.mb-4 Estas fases no deben entenderse como pasos estrictos, no es solo un proceso lineal, sino una mentalidad iterativa y un ciclo flexible que permite volver atrás cuando se identifiquen oportunidades de aprendizaje.

          //- Col3 y Col9
          .container.mb-5
            .row.align-items-center.bg-color-primario-p20.p-4(data-aos="fade-left").icono-inferior
              .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0.mx-auto
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img05.png', alt='Imagen Decorativa')
              .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
                p El enfoque se apoya en valores fundamentales que guían su práctica, los principios del <em>Design Thinking</em>:
                ul.bullets.color-primario
                  li <b>Centrado en el ser humano:</b> se enfoca en las necesidades, sentimientos y experiencias de los usuarios.
                  li <b>Colaborativo:</b> reúne a personas de diversas disciplinas para innovar.
                  li <b>Iterativo:</b> el proceso es flexible y permite volver a fases anteriores según se obtenga nueva información.
                  li <b>Abrazar el fracaso:</b> anima a probar y fracasar pronto para aprender y mejorar rápidamente. 

          p.mb-3 En salud pública, estos principios resultan especialmente valiosos ante problemas complejos, donde las soluciones efectivas requieren escuchar y trabajar con las comunidades involucradas para abordar problemas complejos, centrándose en las personas. 

      //- Col3 y Col9
      .container.mb-3
        .row.align-items-center.justify-content-center(data-aos="fade-left")
          .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0.mx-auto
            figure
              img.mb-2.mb-lg-0(src='@/assets/curso/temas/tema1/img06.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
            p Es importante tener en cuenta que más que una técnica, el <em>Design Thinking</em> es una mentalidad que impulsa a quienes investigan e innovan. La mentalidad de un design thinker se centra en la empatía con el usuario, el optimismo, la colaboración multidisciplinaria, la iteración constante y la aceptación del fracaso temprano como parte del proceso de aprendizaje. Se trata de un enfoque ágil y centrado en el ser humano para resolver problemas complejos a través de la creatividad, la experimentación y el pensamiento práctico. En general, se puede concretar la mentalidad del desing thinker en:

            .row.align-items-center.bg-color-terciario-t10.p-4(data-aos="fade-left").icono-inferior
              .col-12.col-md-12.col-lg-12.mb-4.mb-lg-0
                ul.bullets.color-secundario.mb-0
                  li <b>Empatía radical:</b> ponerse en el lugar del otro.
                  li <b>Pensamiento divergente y convergente:</b> explorar muchas ideas (divergente) y luego seleccionar y refinar (convergente).
                  li <b>Prototipado rápido y experimentación:</b> fallar rápido, fallar barato, aprender rápido
                  li <b>Tolerancia a la ambigüedad:</b> estar cómodo con la incertidumbre en las primeras etapas.
                  li <b>Optimismo:</b> creer que siempre hay una solución creativa
                  li Soluciones más relevantes y adoptables
                  li Mayor colaboración intersectorial y multidisciplinar
                  li Reducción de riesgos al validar o probar temprano (IxDF, 2016).

    .bg-fondo-1

      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center.mb-3
        .col-12.col-md-12.col-lg-12

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_1_2 1.2  Fases del proceso de <em>Design Thinking</em>

          p.mb-3 A continuación, se presenta con mayor profundidad cada una de las fases del proceso de <em>Design Thinking</em> <b>(ver Figura 1)</b>: 

          TabsC.color-acento-contenido.mb-4
            .p-3.p-md-4(titulo="Empatizar")
              .row.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  p.p-4 Se busca comprender las necesidades, deseos y frustraciones de los usuarios poniéndose en su lugar a través de la observación, entrevistas y encuestas.
              
                .col-md-9.col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img07.png', alt='Texto que describa la imagen')

            .p-3.p-md-4(titulo="Definir")
              .row.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  p.p-4 Se analiza y procesa toda la información recopilada en la fase de empatía para definir claramente el problema central y formular un "punto de vista" procesable que guiará el resto del proceso.
              
                .col-md-9.col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img08.png', alt='Texto que describa la imagen')
            .p-3.p-md-4(titulo="Idear")
              .row.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  p.p-4 Es la fase de lluvia de ideas, donde se generan tantas ideas como sea posible para resolver el problema definido. En esta etapa se fomenta la creatividad y no se descarta ninguna idea.
              
                .col-md-9.col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img09.png', alt='Texto que describa la imagen')
            .p-3.p-md-4(titulo="Prototipar")
              .row.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  p.p-4 Las ideas seleccionadas se convierten en versiones tangibles y de bajo costo. No se busca el prototipo perfecto, sino diferentes versiones para experimentar y probar diversas soluciones.
              
                .col-md-9.col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')
            .p-3.p-md-4(titulo="Probar")
              .row.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  p.p-4 Los prototipos se ponen a prueba con usuarios reales para recoger sus opiniones y comentarios. La retroalimentación obtenida se utiliza para refinar las soluciones o para iterar, volviendo a una fase anterior si es necesario, hasta llegar a la mejor versión posible (De la Peña, 2024).
              
                .col-md-9.col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen')

    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-10
        //- Figura
        .mb-3(data-aos="zoom-in-down")
          .titulo-sexto.mb-4.color-acento-contenido
            h5 
              b Figura 1. 
              span Fases del <em>Design Thinking</em> 
          figure.mb-4
            img(src='@/assets/curso/temas/tema1/img12.png', alt='La figura describe las herramientas de diagnóstico para la sostenibilidad, DOFA verde, benchmarking sostenible, Análisis de Ciclo de Vida, huella de carbono y balanced scorecard verde, destacando su función en la identificación de oportunidades de mejora y en la toma de decisiones estratégicas orientadas a la sostenibilidad empresarial.').mx-auto.d-none.d-md-block
            img(src='@/assets/curso/temas/tema1/img13.png', alt='La figura describe las herramientas de diagnóstico para la sostenibilidad, DOFA verde, benchmarking sostenible, Análisis de Ciclo de Vida, huella de carbono y balanced scorecard verde, destacando su función en la identificación de oportunidades de mejora y en la toma de decisiones estratégicas orientadas a la sostenibilidad empresarial.').mx-auto.d-block.d-md-none

          figcaption 
            b Fuente: 
            | SENA, 2026.

    separador

    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-12

        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_1_3 1.3  Beneficios del <em>Design Thinking</em> en salud pública

        .row.mb-4.justify-content-center.align-items-center
          .col-auto.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/img12.svg", alt="Imagen Decorativa", data-aos="zoom-in")
          .col-lg
            p.mb-0(data-aos="fade-right") De acuerdo con la Fundación para el Diseño y la Interacción (IxDF, 2016), hoy en día hablar de salud implica no solo es referirse a la enfermedad, sino también, y especialmente, a las personas y a sus experiencias. Aunque el sistema sanitario presenta múltiples oportunidades de mejora, las estrategias y reflexiones sobre cómo debemos fortalecer la salud, desde la gestión de servicios sanitarios hasta el desarrollo de equipos médicos o dispositivos para pacientes, deben poner el foco en las personas.

        .row.align-items-center(data-aos="fade-left").justify-content-center.mb-3
          .col-12.col-md-12.col-lg-12.mx-auto
            .bloque-texto-g.bg-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img13_1.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 Considerando los problemas actuales de nuestra sociedad (crisis sociales, recortes presupuestales, transformación política…), así como la complejidad de nuestro sistema sanitario (unido a la competencia existente en la salud privada), cualquier organización que desee consolidarse como un sistema de salud exitoso, debe ser capaz de innovar en la prestación de servicios, trascendiendo todas las fronteras geográficas, políticas o sectoriales. El <em>Design Thinking</em> puede aportar a los profesionales de la salud a la integración de enfoques más creativos, interdisciplinares y centrados en las personas, que ayudará en la mejora de la gestión sanitaria y en la innovación dentro del sector.
      
        .row.align-items-center(data-aos="fade-left").justify-content-center.mb-3
          .col-12.col-md-12.col-lg-10.mx-auto.mb-4.p-0
            p.mb-3 Además, el <em>Design Thinking</em> ofrece beneficios como mejorar la experiencia del paciente (reduciendo ansiedad, mejorando comodidad y movilidad) y optimizar la comunicación médico-paciente. También impulsa el desarrollo de soluciones ajustadas a necesidades reales, incrementa la satisfacción del personal y favorece la eficiencia de los servicios al optimizar procesos y reducir tiempos de espera. Aunque los beneficios que puede aportar la visión del <em>Design Thinking</em> en el ámbito sanitario son múltiples, aquellos relacionados con los pacientes probablemente sean los que provocan una mayor sensibilidad social, precisamente porque es algo que nos afecta a todos, pues en algún momento de nuestra vida pasaremos o tendremos el rol de pacientes en el sistema sanitario. 

          .col-12.col-md-12.col-lg-10.mx-auto.mb-4
            .row.justify-content-center.align-items-center.bg-color-terciario-t5.p-4(data-aos="fade-left").icono-inferior
              .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
                p Entre los beneficios que ha aportado la aplicación del Pensamiento de Diseño en salud, se destacan: la humanización en la interacción con tecnologías de diagnóstico (reducción de la ansiedad y del miedo), mejorar la comunicación profesional de salud y usuario (la comunicación médico-paciente o farmacéutico-consumidor, por ejemplo) o aumentar la comodidad y movilidad de los pacientes. Todos estos beneficios se pueden explicitar en una serie de ejemplos reales:
              .col-12.col-md-6.col-lg-3
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img14.png', alt='Imagen Decorativa')

        .col-12.col-md-12.col-lg-12.mb-4
          .row.justify-content-center.align-items-center.mb-2
            .col-12.col-md-6.col-lg-4.order-lg-1
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img15.png', alt='Imagen Decorativa')
            .col-12.col-md-12.col-lg-8.order-lg-2
              p.mb-0 Un referente en la aplicación del <em>Design Thinking</em> en salud proviene de la compañía GE Healthcare, que emplea esta metodología en el diseño de equipamiento médico y en la experiencia del paciente durante su uso. Un ejemplo es el trabajo de Doug Dietz, diseñador industrial, quien creó una máquina de resonancia magnética que representó un gran avance tecnológico. Sin embargo, descubrió que muchas personas, especialmente los niños, experimentaban miedo y ansiedad intensa al utilizarla <b>(ver Figura 2)</b>. A partir de esta observación, propuso rediseñar la experiencia completa: desde el aspecto externo de la máquina hasta el espacio donde se realizaba el procedimiento. Transformó las salas en escenarios imaginarios, como una nave espacial o un barco pirata, lo que convirtió el examen de resonancia magnética en una aventura lúdica para los más pequeños (Saavedra, sf). 
    
        .row.align-items-center(data-aos="fade-left").justify-content-center
          .col-12.col-md-12.col-lg-8
            //- Figura
            .mb-5(data-aos="zoom-in-down")
              .titulo-sexto.mb-4.color-acento-contenido
                h5 
                  b Figura 2. 
                  span Imagen de equipo de resonancia magnética para niños 
              figure.mb-4
                img(src='@/assets/curso/temas/tema1/img16.png', alt='La figura describe las herramientas de diagnóstico para la sostenibilidad, DOFA verde, benchmarking sostenible, Análisis de Ciclo de Vida, huella de carbono y balanced scorecard verde, destacando su función en la identificación de oportunidades de mejora y en la toma de decisiones estratégicas orientadas a la sostenibilidad empresarial.').mx-auto.d-none.d-md-block

              figcaption 
                b Fuente: 
                | Open Ideo

          
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-md-12.col-lg-10
            .row.mb-2.justify-content-center.align-items-center
              .col-auto.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/temas/tema1/img17.svg", alt="Imagen Decorativa", data-aos="zoom-in")
              .col-lg
                p.mb-0(data-aos="fade-right") Entre los avances logrados gracias al <em>Design Thinking</em> se encuentran otras que pueden parecer simples, pero que tienen un impacto significativo en la experiencia del paciente. Por ejemplo, el rediseño de un traje de paciente, los cuales solían ser bastante incómodos para los usuarios, especialmente para los más pudorosos, por lo que se diseñó un nuevo modelo tipo pijama que pudiera ser usado tanto dentro como fuera del hospital sin pasar incomodidades o vergüenza. También es muy conocido el caso de un diseño que elimina la necesidad de usar soportes para el suero, encapsulando el dispositivo en una bolsa transportable, lo que facilita la movilidad de los pacientes, especialmente con cáncer y otras enfermedades dentro del hospital. 

        p.mb-2 Así, los beneficios del Desing Thinking en salud se dan en doble vía, tanto para los pacientes como para los trabajadores del sector salud, por ejemplo: 

        .row.justify-content-center.align-items-center.mb-2
          .tarjeta.col-12.col-md-6.col-lg-5.bg-color-primario-p20.p-4.h-100
            h4.mb-3 Para los pacientes
            ul.lista-ul--color
              li.mb-2 #[b Mejor experiencia:] genera, pues reduce la ansiedad y el miedo al interactuar con equipos médicos y mejora la comodidad y movilidad.
              li.mb-2 #[b Mejor comunicación:] porque fomenta una comunicación más empática y clara entre profesionales de la salud y pacientes.
              li.mb-2 #[b Soluciones personalizadas:] pues genera soluciones que responden a las necesidades específicas de los pacientes y la comunidad. 

          .tarjeta.col-12.col-md-6.col-lg-7.bg-color-terciario-t10.p-4.h-100
            h4.mb-3 Para los profesionales de salud y la organización
            ul.lista-ul--color
              li.mb-2 
                i.fas.fa-check
                | #[b Innovación en servicios:] permite desarrollar soluciones que aborden problemas reales desde la perspectiva del usuario, no solo la médica o tecnológica.
              li.mb-2 
                i.fas.fa-check
                | #[b Mayor eficiencia:] porque optimiza flujos de trabajo, como en el caso de urgencias, y reduce tiempos de espera en áreas como farmacia.
              li.mb-2 
                i.fas.fa-check
                | #[b Cultura de colaboración y cambio:] porque promueve la colaboración entre equipos y fomenta una cultura de mejora continua dentro de la organización.
              li.mb-2 
                i.fas.fa-check
                | #[b Satisfacción del personal:] al aumentar el compromiso y la motivación de los equipos de salud al sentirse parte de un proceso de mejora que impacta positivamente a los usuarios.

    .bg-fondo-2

      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-10

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_1_4 1.4  Fundamentos del <em>Human-Centered Design</em> (HCD)


          .row.align-items-center(data-aos="fade-left").justify-content-center.mb-4
            .col-12.col-md-12.col-lg-12
              p.mb-3 El HCD, es un enfoque que prioriza a las personas, sus necesidades y contexto en el proceso de diseño. Sus principios clave son la empatía, la observación, la colaboración, la creación de prototipos e iteración. Algunas herramientas de empatía, incluyen los mapas de actores, que ayudan a visualizar las necesidades, comportamientos y motivaciones de los usuarios para crear soluciones más efectivas. 

          .row.mb-5.justify-content-center.align-items-center
            h4.mb-2 Principios del HCD
            .col-md-8.col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/temas/tema1/img18.png", data-aos="zoom-in")
            .col-lg-8.order-lg-1
              TabsA.color-acento-botones
                .tarjeta.color-acento-botones--borde.p-4(titulo="Empatía")
                  p.mb-0.p-4 Ponerse en el lugar del usuario para comprender sus necesidades, emociones y experiencias. Se logra mediante la observación, la escucha activa y la participación directa en sus contextos reales.

                .tarjeta.color-acento-botones--borde.p-4(titulo="Colaboración")
                  p.mb-0.p-4 Trabajar de manera conjunta con equipos multidisciplinarios y con los usuarios finales durante todo el proceso, integrando distintas perspectivas para enriquecer las soluciones.

                .tarjeta.color-acento-botones--borde.p-4(titulo="Iteración")
                  p.mb-0.p-4 Considerar el diseño como un proceso no lineal de ensayo y error, en el cual las ideas se refinan continuamente a partir de la retroalimentación y el aprendizaje obtenido.

                .tarjeta.color-acento-botones--borde.p-4(titulo="Prototipado")
                  p.mb-0.p-4 Crear versiones preliminares y rápidas de las soluciones para probarlas, validarlas y aprender de ellas, permitiendo evaluar las ideas de manera tangible antes de su implementación final.

                .tarjeta.color-acento-botones--borde.p-4(titulo="Enfoque en las personas")
                  p.mb-0.p-4 Asegurar que el diseño final responda realmente a los problemas de los usuarios y genere valor significativo, considerando sus contextos sociales, culturales y emocionales.

          h4.mb-2 Herramientas de empatía
    .bg-full-width.bg-fondo-3
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-2
            SlyderF(columnas="col-12 col-lg-6").p-4
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/temas/tema1/img20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Mapas de actores (Stakeholder Maps)
                p.text-center Herramienta visual que permite identificar y analizar a los diferentes actores involucrados en un sistema o problema, así como sus relaciones e influencias. Facilita comprender las dinámicas de poder, intereses y niveles de impacto dentro del entorno del proyecto.

              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/temas/tema1/img21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Personas
                p.text-center Representaciones semi-ficticias de los usuarios típicos construidas a partir de datos reales obtenidos en la investigación. Incluyen información demográfica, motivaciones, objetivos y frustraciones, ayudando al equipo a diseñar soluciones centradas en el usuario.

              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/temas/tema1/img22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Mapas de empatía
                p.text-center Instrumento que permite profundizar en la comprensión del usuario a través de cuatro dimensiones: qué piensa y siente, qué ve, qué oye y qué dice y hace. Facilita la identificación de necesidades, dolores y oportunidades de mejora.
          .col-md-8.col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema1/img19.png', alt='')

    .bg-fondo-1-2
      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-10

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_1_5 1.5 Diferencias y complementariedades entre <em>Design Thinking</em> y HCD


          .row.align-items-center(data-aos="fade-left").justify-content-center.mb-3
            .col-12.col-md-12.col-lg-12
              p.mb-3 Aunque comparten una misma filosofía centrada en las personas, el <em>Design Thinking</em> (DT) y el <em>Human-Centered Design</em> (HCD) presentan enfoques y alcances ligeramente distintos (ver Tabla 1). El DT es un proceso general que se utiliza principalmente como una metodología estructurada para la resolución de problemas complejos, que incluye empatía, definición, ideación, prototipado y prueba, las cuales guían la generación y validación de soluciones. 

          .row.align-items-center.justify-content-center(data-aos="fade-left").mb-4
            h4.mb-2 Similitudes
            .col-lg-9.order-lg-1
              AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-2")
                div(titulo="Enfoque en el usuario")
                  p.ms-5 Ambos priorizan la comprensión de las necesidades, deseos y comportamientos del usuario final, situándolo como eje central del proceso.
                div(titulo="Uso de la empatía")
                  p.ms-5 Utilizan la empatía como punto de partida para comprender profundamente a las personas, sus contextos, emociones y motivaciones.
                div(titulo="Iteración")
                  p.ms-5 Son procesos iterativos que implican probar, evaluar y refinar soluciones de manera continua hasta alcanzar mejores resultados.
                div(titulo="Creatividad e innovación")
                  p.ms-5 Fomentan la generación de ideas creativas para desarrollar soluciones innovadoras y efectivas frente a problemáticas complejas.
                  
            .col-md-6.col-lg-3.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/temas/tema1/img24.png", data-aos="zoom-in")
      
    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-4
      .col-lg-12
        .titulo-sexto.mb-4.color-acento-contenido
          h5 
            b Tabla 1. 
            span Comparación Desing thinking y diseño centrado en el humano
        .tabla-a.color-acento-contenido
          table
            caption Fuente: SENA 2026
            thead
              tr
                th Característica
                th <em>Design Thinking</em>
                th <em>Human-Centered Design</em>
            tbody
              tr
                td Enfoque principal
                td Metodología estructurada para la innovación y resolución de problemas complejos.
                td Enfoque de diseño holístico que pone al ser humano y su contexto en el centro del proceso.
              tr
                td Alcance
                td Puede abordar problemas más amplios, equilibrando deseabilidad (personas), factibilidad (tecnología) y viabilidad (negocio).
                td Se enfoca específicamente en el usuario y la creación de productos y servicios con alta usabilidad, accesibilidad y valor real.
              tr
                td Fases conceptuales
                td Suele estructurarse en cinco fases: empatizar, definir, idear, prototipar y probar.
                td Suele estructurarse en tres fases: inspiración, ideación e implementación.
              tr
                td Partes interesadas
                td Involucra usuarios, pero el foco principal está en el proceso para lograr soluciones.
                td Promueve la participación activa de usuarios, equipo y demás partes interesadas en todas las decisiones clave.
              tr
                td Objetivo final
                td Generar soluciones innovadoras para problemas definidos.
                td Crear soluciones que proporcionen el mayor valor posible a los usuarios, considerando sus contextos emocionales y sociales.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-md-12.col-lg-8
        .row.mb-0.justify-content-center.align-items-center
          .col-auto.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/img25.svg", alt="Imagen Decorativa", data-aos="zoom-in")
          .col-lg
            p.mb-0(data-aos="fade-right") En los años 90, cuando la gente hablaba de Innovación, en realidad se refería a Tecnología. Ahora, cuando la gente habla de Innovación en realidad quiere decir Diseño. Bruce Nussbaum, Managing Editor Businessweek Magazine (De la Peña, 2024). 

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
