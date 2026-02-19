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
        .container
          .row.justify-content-center.align-items-center
            .col-12.col-md-6.col-lg-5
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen Decorativa')
            .col-12.col-md-12.col-lg-7.bg-color-9
              p.mb-0.p-4 Te invitamos a ver el siguiente video introductorio sobre el Pensamiento de Diseño (<em>Design Thinking</em>), el Diseño Centrado en el Usuario (<em>Human-Centered Design</em>). Mientras observas el video, reflexiona sobre las siguientes preguntas: ¿Cómo cambia la investigación en salud cuando se trabaja con las comunidades desde el inicio?
    
    .bg-full-width.bg-fondo-1
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
            img(src="@/assets/curso/temas/tema1/img03.png", alt="Imagen decorativa")            
            .row.justify-content-center.align-items-center.z-2.mb-2
              .col-lg-8(data-aos="fade-up")
                p.banner-text ¿Qué es <em>Design Thinking</em>?  Es una metodología que permite estructurar la forma en que se entiende un problema, qué se quiere solucionar y cuál es la solución que se debe crear. Este enfoque se basa en principios como la empatía con los usuarios, la creatividad y un proceso de resolución de problemas iterativo, es decir que no sigue una secuencia rígida y lineal, sino que evoluciona según los aprendizajes que surgen en cada etapa. 

    .row.align-items-center(data-aos="fade-left").justify-content-center
      //- Col3 y Col9
      .col-12.col-md-12.col-lg-10.mx-auto.mb-4
        p.mb-3 Tradicionalmente, el <em>Design Thinking</em> se compone de cinco fases o etapas:

        .row.align-items-center(data-aos="fade-left").mb-4
          
          .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
            //- Linea de tiempo
            LineaTiempoD.color-secundario
              .row(numero="A" titulo="Empatizar (entender al usuario)")
                p.mb-0 Comprender en profundidad la experiencia del usuario.

              .row(numero="B" titulo="Definir (establecer el problema)")
                p.mb-0 Analizar lo aprendido para formular el problema de forma clara y precisa.

              .row(numero="C" titulo="Idear (generar soluciones)")
                p.mb-0 Generar múltiples alternativas y propuestas de solución.

              .row(numero="D" titulo="Prototipar (crear modelos)")
                p.mb-0 Materializar esas ideas en modelos, pruebas o versiones preliminares.

              .row(numero="E" titulo="Probar (validar las soluciones con los usuarios)")
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
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img05.svg', alt='Imagen Decorativa')
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
          .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0.mx-auto
            figure
              img.mb-2.mb-lg-0(src='@/assets/curso/temas/tema1/img06.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
            p Es importante tener en cuenta que más que una técnica, el <em>Design Thinking</em> es una mentalidad que impulsa a quienes investigan e innovan. La mentalidad de un <em>design thinker</em> se centra en la empatía con el usuario, el optimismo, la colaboración multidisciplinaria, la iteración constante y la aceptación del fracaso temprano como parte del proceso de aprendizaje. Se trata de un enfoque ágil y centrado en el ser humano para resolver problemas complejos a través de la creatividad, la experimentación y el pensamiento práctico. En general, se puede concretar la mentalidad del <em>design thinker</em> en:

            .container
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

    .bg-full-width.bg-fondo-1

      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center.mb-3
        .col-12.col-md-12.col-lg-12

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_1_2 1.2  Fases del proceso de <em>Design Thinking</em>

          p.mb-3 A continuación, se presenta con mayor profundidad cada una de las fases del proceso de <em>Design Thinking</em> <b></b>

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
                  p.p-4 Los prototipos se ponen a prueba con usuarios reales para recoger sus opiniones y comentarios. La retroalimentación obtenida se utiliza para refinar las soluciones o para iterar, volviendo a una fase anterior si es necesario, hasta llegar a la mejor versión posible.
              
                .col-md-9.col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen')

    separador

    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-12

        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_1_3 1.3  Beneficios del <em>Design Thinking</em> en salud pública

        .row.mb-4.justify-content-center.align-items-center
          .col-auto.mb-3.mb-lg-0.d-none.d-lg-block
            figure
              img(src="@/assets/curso/temas/tema1/img12_2.png", alt="Imagen Decorativa", data-aos="zoom-in")
          .col-lg
            p.mb-0(data-aos="fade-right") De acuerdo con la Fundación para el Diseño y la Interacción (IxDF, 2016), hoy en día hablar de salud implica no solo es referirse a la enfermedad, sino también, y especialmente, a las personas y a sus experiencias. Aunque el sistema sanitario presenta múltiples oportunidades de mejora, las estrategias y reflexiones sobre cómo debemos fortalecer la salud, desde la gestión de servicios sanitarios hasta el desarrollo de equipos médicos o dispositivos para pacientes, deben poner el foco en las personas.

        .row.align-items-center(data-aos="fade-left").justify-content-center.mb-4
          .col-12.col-md-12.col-lg-12.mx-auto
            .bloque-texto-g.bg-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img13_1.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 Considerando los problemas actuales de nuestra sociedad (crisis sociales, recortes presupuestales, transformación política), así como la complejidad de nuestro sistema sanitario (unido a la competencia existente en la salud privada), cualquier organización que desee consolidarse como un sistema de salud exitoso, debe ser capaz de innovar en la prestación de servicios, trascendiendo todas las fronteras geográficas, políticas o sectoriales. El <em>Design Thinking</em> puede aportar a los profesionales de la salud a la integración de enfoques más creativos, interdisciplinares y centrados en las personas, que ayudará en la mejora de la gestión sanitaria y en la innovación dentro del sector. Entre los principales beneficios tenemos:
      
        .bg-fondo-5.tarjeta.mb-4
          .p-3.p-lg-4
            SlyderA(tipo="b").bg-color-white.p-4.tarjeta
              .row.justify-content-center.align-items-center
                .col-lg-8.mb-4
                  h4 Experiencia del paciente
                  p.mb-0 Integra percepciones e interacciones con el sistema de salud y; aplicada a la investigación en salud pública, impulsa innovaciones centradas en las personas, mejorando la pertinencia, accesibilidad, adherencia y el impacto real de las intervenciones.
                .col-md-9.col-lg-4.mb-0.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img29.png', alt='Imagen de acompañamiento')
              .row.justify-content-center.align-items-center
                .col-lg-8.mb-4
                  h4 Optimización de la comunicación
                  p.mb-0 Es la mejora estratégica de los procesos, canales, mensajes y herramientas mediante los cuales se intercambia información entre investigadores, profesionales de salud, instituciones y comunidades. Su objetivo es lograr que la información sea clara, comprensible, oportuna, culturalmente pertinente y accionable.
                .col-md-9.col-lg-4.mb-0.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img30.png', alt='Imagen de acompañamiento')
              .row.justify-content-center.align-items-center
                .col-lg-8.mb-4
                  h4 Reducción de tiempos de espera
                  p.mb-0 Se refiere a la implementación de estrategias, procesos y soluciones innovadoras orientadas a disminuir el tiempo que las personas deben esperar para acceder a servicios, diagnósticos, tratamientos o programas de atención en salud. 
                .col-md-9.col-lg-4.mb-0.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img31.png', alt='Imagen de acompañamiento')
              .row.justify-content-center.align-items-center
                .col-lg-8.mb-4
                  h4 Interacción con tecnologías de diagnostico
                  p.mb-0 Es la forma de cómo pacientes, profesionales y comunidades usan y comprenden tecnologías de salud para la detección, monitoreo y seguimiento de condiciones, incluyendo dispositivos, aplicaciones móviles, telemedicina, inteligencia artificial y sistemas de análisis de datos.
                .col-md-9.col-lg-4.mb-0.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img32.png', alt='Imagen de acompañamiento')
        
        .row.align-items-center(data-aos="fade-left").justify-content-center.mb-2
          .col-12.col-md-12.col-lg-10.mx-auto.mb-4
            p.mb-0 Todos estos beneficios se pueden explicitar en una serie de ejemplos reales:

        .container
          .col-12.col-md-12.col-lg-10.mx-auto.mb-4
            .row.justify-content-center.align-items-center.bg-color-terciario-t5.p-4(data-aos="fade-left").icono-inferior
              .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0.order-2.order-lg-1
                p Entre los beneficios que ha aportado la aplicación del Pensamiento de Diseño en salud, se destacan: la humanización en la interacción con tecnologías de diagnóstico (reducción de la ansiedad y del miedo), mejorar la comunicación profesional de salud y usuario (la comunicación médico-paciente o farmacéutico-consumidor, por ejemplo) o aumentar la comodidad y movilidad de los pacientes. Todos estos beneficios se pueden explicitar en una serie de ejemplos reales:
              .col-12.col-md-6.col-lg-3.order-1.order-lg-2
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img14.svg', alt='Imagen Decorativa')

        .col-12.col-md-12.col-lg-12.mb-4
          .row.justify-content-center.align-items-center.mb-2
            .col-12.col-md-6.col-lg-4.order-md-2.order-lg-1
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img15.png', alt='Imagen Decorativa')
            .col-12.col-md-12.col-lg-8.order-md-1.order-lg-2.mb-3
              p.mb-0 Un referente en la aplicación del <em>Design Thinking</em> en salud proviene de la compañía GE Healthcare, que emplea esta metodología en el diseño de equipamiento médico y en la experiencia del paciente durante su uso. Un ejemplo es el trabajo de Doug Dietz, diseñador industrial, quien creó una máquina de resonancia magnética que representó un gran avance tecnológico. Sin embargo, descubrió que muchas personas, especialmente los niños, experimentaban miedo y ansiedad intensa al utilizarla. A partir de esta observación, propuso rediseñar la experiencia completa: desde el aspecto externo de la máquina hasta el espacio donde se realizaba el procedimiento. Transformó las salas en escenarios imaginarios, como una nave espacial o un barco pirata, lo que convirtió el examen de resonancia magnética en una aventura lúdica para los más pequeños (Saavedra, sf). 
    
        .row.align-items-center(data-aos="fade-left").justify-content-center
          .col-12.col-md-12.col-lg-8
            //- Figura
            .mb-5(data-aos="zoom-in-down")
              .titulo-sexto.mb-4.color-acento-contenido
                h5 
                  b Figura 1. 
                  span Imagen de equipo de resonancia magnética para niños
              figure.mb-4
                img(src='@/assets/curso/temas/tema1/img16.png', alt='').mx-auto

              figcaption 
                b Fuente: 
                | https://www.nicklauschildrens.org/tratamientos/mri-%28imagenes-por-resonancia-magnetica%29

          
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-md-12.col-lg-10
            .row.mb-4.justify-content-center.align-items-center
              .col-auto.mb-3.mb-lg-0.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/tema1/img17.svg", alt="Imagen Decorativa", data-aos="zoom-in")
              .col-lg
                p.mb-0(data-aos="fade-right") Entre los avances logrados gracias al <em>Design Thinking</em> se encuentran otras que pueden parecer simples, pero que tienen un impacto significativo en la experiencia del paciente. Por ejemplo, el rediseño de un traje de paciente, los cuales solían ser bastante incómodos para los usuarios, especialmente para los más pudorosos, por lo que se diseñó un nuevo modelo tipo pijama que pudiera ser usado tanto dentro como fuera del hospital sin pasar incomodidades o vergüenza. También es muy conocido el caso de un diseño que elimina la necesidad de usar soportes para el suero, encapsulando el dispositivo en una bolsa transportable, lo que facilita la movilidad de los pacientes, especialmente con cáncer y otras enfermedades dentro del hospital. 

        p.mb-3 Así, los beneficios del <em>Design Thinking</em> en salud se dan en doble vía, tanto para los pacientes como para los trabajadores del sector salud, por ejemplo: 

        .row.mb-4.justify-content-center
          .col-12.col-md-12.col-lg-5.mb-3
            .bg-color-primario-p20.p-4.h-100.border-radius-20.img-topright.h-100
              img(src='@/assets/curso/temas/tema1/img26.svg' alt='AvatarTop' , style="max-width: 70px").mx-auto.mb-3
              h5.mb-4.pt-lg-5.pt-xl-0.w-75 Para los pacientes
              ul.lista-ul--color
                li.mb-2 #[b Mejor experiencia:] genera, pues reduce la ansiedad y el miedo al interactuar con equipos médicos y mejora la comodidad y movilidad.
                li.mb-2 #[b Mejor comunicación:] porque fomenta una comunicación más empática y clara entre profesionales de la salud y pacientes.
                li.mb-0 #[b Soluciones personalizadas:] pues genera soluciones que responden a las necesidades específicas de los pacientes y la comunidad. 

          .col-12.col-md-12.col-lg-7.mb-3
            .bg-color-terciario-t10.p-4.h-100.border-radius-20.img-topright.h-100
              img(src='@/assets/curso/temas/tema1/img27.svg' alt='AvatarTop' , style="max-width: 70px").mx-auto.mb-3
              h5.mb-4.pt-lg-5.pt-xl-0.w-75 Hipótesis de crecimiento o adopción
              
              ul.bullets.color-adicional1
                li #[b Innovación en servicios:] permite desarrollar soluciones que aborden problemas reales desde la perspectiva del usuario, no solo la médica o tecnológica.
                li #[b Mayor eficiencia:] porque optimiza flujos de trabajo, como en el caso de urgencias, y reduce tiempos de espera en áreas como farmacia.
                li #[b Cultura de colaboración y cambio:] porque promueve la colaboración entre equipos y fomenta una cultura de mejora continua dentro de la organización.
                li  #[b Satisfacción del personal:] al aumentar el compromiso y la motivación de los equipos de salud al sentirse parte de un proceso de mejora que impacta positivamente a los usuarios.

    .bg-full-width.bg-fondo-2

      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-10

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_1_4 1.4 Fundamentos del <em>Human-Centered Design</em> (HCD)


          .row.align-items-center(data-aos="fade-left").justify-content-center.mb-4
            .col-12.col-md-12.col-lg-12
              p.mb-3 El HCD, es un enfoque que prioriza a las personas, sus necesidades y contexto en el proceso de diseño. Sus principios clave son la empatía, la observación, la colaboración, la creación de prototipos e iteración. Algunas herramientas de empatía, incluyen los mapas de actores, que ayudan a visualizar las necesidades, comportamientos y motivaciones de los usuarios para crear soluciones más efectivas. 

          .row.mb-5.justify-content-center.align-items-center
            h4.mb-4 Principios del HCD
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

          h4.mb-4 Herramientas de empatía

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.p-sm-0.px-sm-0
      .row.justify-content-center.align-items-center.p-sm-0
        .col-md-12.col-lg-8.order-lg-2.p-sm-0
          SlyderF(columnas="col-12 col-md-12 col-xl-6").mt-4.mb-4
            .bg-color-white.p-4.h-100.box-shadow
              img(src='@/assets/curso/temas/tema1/img20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
              h4.text-center.mb-4 Mapas de actores
              p.text-center Ayudan a identificar y comprender las interconexiones entre los diferentes grupos de personas (usuarios, clientes, empleados, etc.) que están involucrados en un sistema o problema.

            .bg-color-white.p-4.h-100.box-shadow
              img(src='@/assets/curso/temas/tema1/img21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
              h4.text-center.mb-4 Personas
              p.text-center Representaciones semi-ficticias de los usuarios típicos, creadas a partir de la investigación. Incluyen datos demográficos, motivaciones, objetivos y frustraciones, lo que ayuda al equipo a comprender con quién está diseñando.

            .bg-color-white.p-4.h-100.box-shadow
              img(src='@/assets/curso/temas/tema1/img22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
              h4.text-center.mb-4 Mapas de empatía
              p.text-center Una herramienta que ayuda a profundizar en el entendimiento de los usuarios. Se divide en cuatro cuadrantes: qué piensa y siente, qué ve, qué oye y qué dice y hace. Es una forma de visualizar la información recopilada para identificar oportunidades.
        .col-md-8.col-lg-4.order-lg-1
          figure
            img(src='@/assets/curso/temas/tema1/img19.png', alt='')

    .bg-full-width.bg-fondo-1-2
      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-10

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_1_5 1.5 Diferencias y complementariedades entre <em>Design Thinking</em> y HCD


          .row.align-items-center(data-aos="fade-left").justify-content-center.mb-3
            .col-12.col-md-12.col-lg-12
              p.mb-0 Aunque comparten una misma filosofía centrada en las personas, el <em>Design Thinking</em> (DT) y el <em>Human-Centered Design</em> (HCD) presentan enfoques y alcances ligeramente distintos. El DT es un proceso general que se utiliza principalmente como una metodología estructurada para la resolución de problemas complejos, que incluye empatía, definición, ideación, prototipado y prueba, las cuales guían la generación y validación de soluciones.

          .row.align-items-center(data-aos="fade-left").justify-content-center.mb-1
            .col-md-12.col-lg-12
              .row.justify-content-center.align-items-center
                .col-12.col-md-6.col-lg-2.mb-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img28_1.svg', alt='Imagen Decorativa', style="max-width: 100%")
                .col-12.col-md-12.col-lg-10.p-4.px-lg-4
                  .row.justify-content-center.bg-color-1.p-3
                    .col-auto.mb-3.mb-lg-0.d-none.d-lg-block
                      figure
                        img(src="@/assets/curso/temas/tema5/img03.svg", alt="Imagen Decorativa", data-aos="zoom-in")
                    .col-lg
                      p.mb-0(data-aos="fade-right") El HCD, por su parte, es un enfoque más amplio, considera las necesidades de los usuarios de manera integral, centrándose en la creación de productos y servicios que sean usables, accesibles y brinden valor, integrando al mismo tiempo el contexto emocional, social y el de las partes interesadas en la solución. Ambos comparten el uso de la empatía y la iteración, pero el Design Thinking  es más una metodología para resolver problemas complejos, mientras que el HCD es el resultado de poner al ser humano en el centro de todo el proceso de diseño de soluciones (Pomar, 2017).
              
          

          .row.align-items-center.justify-content-center(data-aos="fade-left").mb-4
            h4.mb-4 Similitudes
            .col-lg-9.order-lg-1
              AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-2")
                div(titulo="Enfoque en el usuario")
                  p Ambos priorizan la comprensión de las necesidades, deseos y comportamientos del usuario final, situándolo como eje central del proceso.
                div(titulo="Uso de la empatía")
                  p Utilizan la empatía como punto de partida para comprender profundamente a las personas, sus contextos, emociones y motivaciones.
                div(titulo="Iteración")
                  p Son procesos iterativos que implican probar, evaluar y refinar soluciones de manera continua hasta alcanzar mejores resultados.
                div(titulo="Creatividad e innovación")
                  p Fomentan la generación de ideas creativas para desarrollar soluciones innovadoras y efectivas frente a problemáticas complejas.
                  
            .col-md-6.col-lg-3.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/temas/tema1/img24.png", data-aos="zoom-in")
      
    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-4
      .col-lg-12
        .titulo-sexto.mb-4.color-acento-contenido
          h5 
            b Tabla 1. 
            span Comparación <em>Design thinking</em> y diseño centrado en el humano
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
          .col-auto.mb-3.mb-lg-0.d-none.d-lg-block
            figure
              img(src="@/assets/curso/temas/tema1/img25.png", alt="Imagen Decorativa", data-aos="zoom-in")
          .col-lg
            p.mb-0(data-aos="fade-right") En los años 90, cuando la gente hablaba de Innovación, en realidad se refería a Tecnología. Ahora, cuando la gente habla de Innovación en realidad quiere decir Diseño. Bruce Nussbaum, <em>Managing Editor Businessweek Magazine</em> (De la Peña, 2024). 

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
