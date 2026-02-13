<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Principios y fases de Design Thinking y Human-Centered Design (HCD) en salud pública
  
    .bg-full-width.bg01
      .row.align-items-ceniter(data-aos="fade-left").justify-content-center.mb-4

        .col-md-12.col-lg-10
          .row.justify-content-center.align-items-center
            .col-12.col-md-6.col-lg-5
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen Decorativa')
            .col-12.col-md-12.col-lg-7.bg-color-terciario-t5
              p.mb-0.p-4 Te invitamos a ver el siguiente video introductorio sobre el Pensamiento de Diseño (Design Thinking), el Diseño Centrado en el Usuario (Human-Centered Design). Mientras observas el video, reflexiona sobre las siguientes preguntas: ¿Cómo cambia la investigación en salud cuando se trabaja con las comunidades desde el inicio?

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
                  p.mb-0 ¿Qué es Design Thinking?  Es una metodología que permite estructurar la forma en que se entiende un problema, qué se quiere solucionar y cuál es la solución que se debe crear. Este enfoque se basa en principios como la empatía con los usuarios, la creatividad y un proceso de resolución de problemas iterativo, es decir que no sigue una secuencia rígida y lineal, sino que evoluciona según los aprendizajes que surgen en cada etapa. 

        //- Col3 y Col9
        .col-12.col-md-12.col-lg-10.mx-auto.mb-4
          p.mb-3 Tradicionalmente, el Design Thinking se compone de cinco fases o etapas:

          .row.align-items-center(data-aos="fade-left").mb-3
            
            .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
              //- Linea de tiempo
              LineaTiempoD.color-secundario
                .row(numero="1" titulo="Empatizar (entender al usuario)")
                  p.mb-0 Se realiza un análisis de los procesos, recursos y actores de la cadena para identificar los puntos críticos de impacto, como el alto consumo de agua o el uso ineficiente de materiales.

                .row(numero="2" titulo="Definir (establecer el problema)")
                  p.mb-0 Son metas estratégicas y medibles (SMART) que orientan la gestión hacia la sostenibilidad, planteando reducciones en residuos, energía o fortalecimiento de buenas prácticas en proveedores.

                .row(numero="3" titulo="3 Idear (generar soluciones)")
                  p.mb-0 Comprenden las acciones específicas que impulsan la transformación sostenible de la producción, distribución y posventa, aplicando soluciones como materiales biodegradables o transporte limpio.

                .row(numero="4" titulo="Prototipar (crear modelos)")
                  p.mb-0 Define la secuencia temporal de actividades, organizadas por fases y responsables, facilitando la ejecución progresiva del plan desde el diagnóstico hasta su implementación completa.

                .row(numero="5" titulo="Indicadores (KPIs)")
                  p.mb-0 Establecen las métricas que miden el avance y desempeño del plan en los ámbitos ambiental, social y económico, reflejando mejoras en eficiencia o reducción de emisiones.
                
                .row(numero="6" titulo="Probar (validar las soluciones con los usuarios)")
                  p.mb-0 Determina los costos asociados a cada actividad y las fuentes de financiación posibles, incluyendo recursos internos, créditos verdes o alianzas de cooperación para el desarrollo sostenible.
            
            
            .col-12.col-md-5.col-lg-3.mb-4.mb-lg-0.mx-auto
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img04.png', alt='Imagen Decorativa')
          
          p.mb-4 Estas fases no deben entenderse como pasos estrictos, no es solo un proceso lineal, sino una mentalidad iterativa y un ciclo flexible que permite volver atrás cuando se identifiquen oportunidades de aprendizaje.



          //- Col3 y Col9
          .container.mb-5
            .row.align-items-center.bg-color-primario-p20.p-4(data-aos="fade-left").icono-inferior
              .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img05.png', alt='Imagen Decorativa')
              .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
                p El enfoque se apoya en valores fundamentales que guían su práctica, los principios del Design Thinking:
                ul.bullets
                  li Centrado en el ser humano: se enfoca en las necesidades, sentimientos y experiencias de los usuarios.
                  li Colaborativo: reúne a personas de diversas disciplinas para innovar.
                  li Iterativo: el proceso es flexible y permite volver a fases anteriores según se obtenga nueva información.
                  li Abrazar el fracaso: anima a probar y fracasar pronto para aprender y mejorar rápidamente. 

          p.mb-4 En salud pública, estos principios resultan especialmente valiosos ante problemas complejos, donde las soluciones efectivas requieren escuchar y trabajar con las comunidades involucradas para abordar problemas complejos, centrándose en las personas. 

      //- Col3 y Col9
      .container.mb-5
        .row.align-items-center.justify-content-center(data-aos="fade-left")
          .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0.mx-auto
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img06.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
            p Es importante tener en cuenta que más que una técnica, el Design Thinking es una mentalidad que impulsa a quienes investigan e innovan. La mentalidad de un design thinker se centra en la empatía con el usuario, el optimismo, la colaboración multidisciplinaria, la iteración constante y la aceptación del fracaso temprano como parte del proceso de aprendizaje. Se trata de un enfoque ágil y centrado en el ser humano para resolver problemas complejos a través de la creatividad, la experimentación y el pensamiento práctico. En general, se puede concretar la mentalidad del desing thinker en:

            .row.align-items-center.bg-color-terciario-t10.p-4(data-aos="fade-left").icono-inferior
              .col-12.col-md-12.col-lg-12.mb-4.mb-lg-0
                ul.bullets
                  li Empatía radical: ponerse en el lugar del otro.
                  li Pensamiento divergente y convergente: explorar muchas ideas (divergente) y luego seleccionar y refinar (convergente).
                  li Prototipado rápido y experimentación: fallar rápido, fallar barato, aprender rápido
                  li Tolerancia a la ambigüedad: estar cómodo con la incertidumbre en las primeras etapas.
                  li Optimismo: creer que siempre hay una solución creativa
                  li Soluciones más relevantes y adoptables
                  li Mayor colaboración intersectorial y multidisciplinar
                  li Reducción de riesgos al validar o probar temprano (IxDF, 2016).

      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center.mb-3
        .col-12.col-md-12.col-lg-12

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_1_2 1.2  Fases del proceso de Design Thinking

          p.mb-3 A continuación, se presenta con mayor profundidad cada una de las fases del proceso de Design Thinking (ver Figura 1): 

          TabsC.color-acento-contenido.mb-4
            .p-3.p-md-4(titulo="Empatizar")
              .row
                .col-lg-6.mb-4.mb-md-0
                  p.p-4 Se busca comprender las necesidades, deseos y frustraciones de los usuarios poniéndose en su lugar a través de la observación, entrevistas y encuestas.
              
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img07.png', alt='Texto que describa la imagen')

            .p-3.p-md-4(titulo="Definir")
              .row
                .col-lg-6.mb-4.mb-md-0
                  p.p-4 Se analiza y procesa toda la información recopilada en la fase de empatía para definir claramente el problema central y formular un "punto de vista" procesable que guiará el resto del proceso.
              
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img08.png', alt='Texto que describa la imagen')
            .p-3.p-md-4(titulo="Idear")
              .row
                .col-lg-6.mb-4.mb-md-0
                  p.p-4 Es la fase de lluvia de ideas, donde se generan tantas ideas como sea posible para resolver el problema definido. En esta etapa se fomenta la creatividad y no se descarta ninguna idea.
              
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img09.png', alt='Texto que describa la imagen')
            .p-3.p-md-4(titulo="Prototipar")
              .row
                .col-lg-6.mb-4.mb-md-0
                  p.p-4 Las ideas seleccionadas se convierten en versiones tangibles y de bajo costo. No se busca el prototipo perfecto, sino diferentes versiones para experimentar y probar diversas soluciones.
              
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')
            .p-3.p-md-4(titulo="Probar")
              .row
                .col-lg-6.mb-4.mb-md-0
                  p.p-4 Los prototipos se ponen a prueba con usuarios reales para recoger sus opiniones y comentarios. La retroalimentación obtenida se utiliza para refinar las soluciones o para iterar, volviendo a una fase anterior si es necesario, hasta llegar a la mejor versión posible (De la Peña, 2024).
              
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen')

      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-10
          //- Figura
          .mb-5(data-aos="zoom-in-down")
            .titulo-sexto.mb-4.color-acento-contenido
              h5 
                b Figura 1. 
                span Fases del Design Thinking 
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
            h2#t_1_3 1.3  Beneficios del Design Thinking en salud pública

            
          .row.align-items-center.justify-content-center.mb-3(data-aos="fade-left")
            .col-12.col-md-8.col-lg-1.mb-4.mb-lg-0.mx-auto
              figure
                img.mb-4(src='@/assets/curso/temas/tema1/img12.svg', alt='Imagen Decorativa')
            .col-12.col-md-12.col-lg-11.mb-4.mb-lg-0
              p De acuerdo con la Fundación para el Diseño y la Interacción (IxDF, 2016), hoy en día hablar de salud implica no solo es referirse a la enfermedad, sino también, y especialmente, a las personas y a sus experiencias. Aunque el sistema sanitario presenta múltiples oportunidades de mejora, las estrategias y reflexiones sobre cómo debemos fortalecer la salud, desde la gestión de servicios sanitarios hasta el desarrollo de equipos médicos o dispositivos para pacientes, deben poner el foco en las personas.


          .row.align-items-center(data-aos="fade-left").justify-content-center
            .bloque-texto-g.bg-acento-contenido-p10.p-3.p-sm-4.p-md-5.mb-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img13_1.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 Considerando los problemas actuales de nuestra sociedad (crisis sociales, recortes presupuestales, transformación política…), así como la complejidad de nuestro sistema sanitario (unido a la competencia existente en la salud privada), cualquier organización que desee consolidarse como un sistema de salud exitoso, debe ser capaz de innovar en la prestación de servicios, trascendiendo todas las fronteras geográficas, políticas o sectoriales. El Design Thinking puede aportar a los profesionales de la salud a la integración de enfoques más creativos, interdisciplinares y centrados en las personas, que ayudará en la mejora de la gestión sanitaria y en la innovación dentro del sector.
        
          .row.align-items-center(data-aos="fade-left").justify-content-center.mb-3
            //- Col3 y Col9
            .col-12.col-md-12.col-lg-10.mx-auto.mb-4
              p.mb-3 Además, el Design Thinking ofrece beneficios como mejorar la experiencia del paciente (reduciendo ansiedad, mejorando comodidad y movilidad) y optimizar la comunicación médico-paciente. También impulsa el desarrollo de soluciones ajustadas a necesidades reales, incrementa la satisfacción del personal y favorece la eficiencia de los servicios al optimizar procesos y reducir tiempos de espera. Aunque los beneficios que puede aportar la visión del Design Thinking en el ámbito sanitario son múltiples, aquellos relacionados con los pacientes probablemente sean los que provocan una mayor sensibilidad social, precisamente porque es algo que nos afecta a todos, pues en algún momento de nuestra vida pasaremos o tendremos el rol de pacientes en el sistema sanitario. 

              .row.align-items-center.bg-color-terciario-t5.p-4(data-aos="fade-left").icono-inferior
                .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
                  p Entre los beneficios que ha aportado la aplicación del Pensamiento de Diseño en salud, se destacan: la humanización en la interacción con tecnologías de diagnóstico (reducción de la ansiedad y del miedo), mejorar la comunicación profesional de salud y usuario (la comunicación médico-paciente o farmacéutico-consumidor, por ejemplo) o aumentar la comodidad y movilidad de los pacientes. Todos estos beneficios se pueden explicitar en una serie de ejemplos reales:
                .col-12.col-md-6.col-lg-3
                  figure
                    img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img14.png', alt='Imagen Decorativa')

          .col-12.col-md-12.col-lg-12.mb-4
            .row.justify-content-center.align-items-center.mb-2
              .col-12.col-md-6.col-lg-4
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img15.png', alt='Imagen Decorativa')
              .col-12.col-md-12.col-lg-8
                p.mb-0 Un referente en la aplicación del Design Thinking en salud proviene de la compañía GE Healthcare, que emplea esta metodología en el diseño de equipamiento médico y en la experiencia del paciente durante su uso. Un ejemplo es el trabajo de Doug Dietz, diseñador industrial, quien creó una máquina de resonancia magnética que representó un gran avance tecnológico. Sin embargo, descubrió que muchas personas, especialmente los niños, experimentaban miedo y ansiedad intensa al utilizarla (ver Figura 2). A partir de esta observación, propuso rediseñar la experiencia completa: desde el aspecto externo de la máquina hasta el espacio donde se realizaba el procedimiento. Transformó las salas en escenarios imaginarios, como una nave espacial o un barco pirata, lo que convirtió el examen de resonancia magnética en una aventura lúdica para los más pequeños (Saavedra, sf). 
      
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

            
          .row.justify-content-center.align-items-center.mb-4
            .col-12.col-md-6.col-lg-1
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen Decorativa').mx-auto
            .col-12.col-md-12.col-lg-10
              p.mb-0 Entre los avances logrados gracias al Design Thinking se encuentran otras que pueden parecer simples, pero que tienen un impacto significativo en la experiencia del paciente. Por ejemplo, el rediseño de un traje de paciente, los cuales solían ser bastante incómodos para los usuarios, especialmente para los más pudorosos, por lo que se diseñó un nuevo modelo tipo pijama que pudiera ser usado tanto dentro como fuera del hospital sin pasar incomodidades o vergüenza. También es muy conocido el caso de un diseño que elimina la necesidad de usar soportes para el suero, encapsulando el dispositivo en una bolsa transportable, lo que facilita la movilidad de los pacientes, especialmente con cáncer y otras enfermedades dentro del hospital. 

          p.mb-3 Así, los beneficios del Desing Thinking en salud se dan en doble vía, tanto para los pacientes como para los trabajadores del sector salud, por ejemplo: 


      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-10

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_1_4 1.4  Fundamentos del Human-Centered Design (HCD)


          .row.align-items-center(data-aos="fade-left").justify-content-center
            .col-12.col-md-12.col-lg-12
              p.mb-3 El HCD, es un enfoque que prioriza a las personas, sus necesidades y contexto en el proceso de diseño. Sus principios clave son la empatía, la observación, la colaboración, la creación de prototipos e iteración. Algunas herramientas de empatía, incluyen los mapas de actores, que ayudan a visualizar las necesidades, comportamientos y motivaciones de los usuarios para crear soluciones más efectivas. 

          .row.mb-5.justify-content-center.align-items-center
            .col-md-8.col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/temas/tema1/img18.png", data-aos="zoom-in")
            .col-lg-8.order-lg-1
              TabsA.color-acento-botones
                .tarjeta.color-acento-botones--borde.p-4(titulo="Enfoque en el usuario")
                  h4 Enfoque en el usuario
                  p.mb-0 Ambos priorizan la comprensión de las necesidades, deseos y comportamientos del usuario final, situándolo como eje central del proceso de diseño e innovación.

                .tarjeta.color-acento-botones--borde.p-4(titulo="Uso de la empatía")
                  h4 Uso de la empatía
                  p.mb-0 Ambos métodos utilizan la empatía como punto de partida para comprender profundamente a las personas, sus contextos, emociones y motivaciones.

                .tarjeta.color-acento-botones--borde.p-4(titulo="Iteración")
                  h4 Iteración
                  p.mb-0 Se desarrollan como procesos iterativos que implican probar, evaluar y refinar soluciones de manera continua hasta alcanzar resultados más efectivos.

                .tarjeta.color-acento-botones--borde.p-4(titulo="Creatividad e innovación")
                  h4 Creatividad e innovación
                  p.mb-0 Fomentan la generación de ideas creativas para encontrar soluciones innovadoras y efectivas frente a problemáticas complejas.

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

    separador

    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-10

        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_1_5 1.5 Diferencias y complementariedades entre Design Thinking y HCD


        .row.align-items-center(data-aos="fade-left").justify-content-center
          .col-12.col-md-12.col-lg-12
            p.mb-3 Aunque comparten una misma filosofía centrada en las personas, el Design Thinking (DT) y el Human-Centered Design (HCD) presentan enfoques y alcances ligeramente distintos (ver Tabla 1). El DT es un proceso general que se utiliza principalmente como una metodología estructurada para la resolución de problemas complejos, que incluye empatía, definición, ideación, prototipado y prueba, las cuales guían la generación y validación de soluciones. 



        .row.align-items-center.justify-content-center(data-aos="fade-left").mb-4
          .col-lg-9
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-2")
              div(titulo="Innovación  tecnológica")
                p.ms-5 Se orienta a la aplicación de avances científicos y tecnológicos para desarrollar nuevos productos, servicios o procesos, o mejorar de manera significativa los existentes.
              div(titulo="Innovación social")
                p.ms-5 Busca generar soluciones nuevas o mejoradas a problemáticas sociales, priorizando el bienestar colectivo, la equidad y la mejora de la calidad de vida de la población.
              div(titulo="Innovación ambiental")
                p.ms-5 Se enfoca en el desarrollo de soluciones que reduzcan el impacto ambiental, promuevan el uso eficiente de los recursos y favorezcan prácticas sostenibles y de economía circular.
    
          .col-md-8.col-lg-3.mb-3.mb-lg-0
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
                    th Design Thinking
                    th Human-Centered Design
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

        .row.justify-content-center.align-items-center.mb-4
          .col-12.col-md-12.col-lg-9
            .row.justify-content-center.align-items-center
              .col-12.col-md-6.col-lg-1
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen Decorativa').mx-auto
              .col-12.col-md-12.col-lg-11
                p.mb-0 En los años 90, cuando la gente hablaba de Innovación, en realidad se refería a Tecnología. Ahora, cuando la gente habla de Innovación en realidad quiere decir Diseño. Bruce Nussbaum, Managing Editor Businessweek Magazine (De la Peña, 2024). 


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
