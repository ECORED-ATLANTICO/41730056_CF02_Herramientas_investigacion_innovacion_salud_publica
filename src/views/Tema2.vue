<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de prototipado y procesos de <em>test</em>eo con usuarios en salud

    .bg-fondo-2-1
      .row.align-items-center(data-aos="fade-left").justify-content-center.mb-1
        .col-md-12.col-lg-10
          .row.justify-content-center.align-items-center
            .tarjeta.h-100.col-12.col-md-6.col-lg-2.bg-color-5.p-4.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/img01.png', alt='Imagen Decorativa')
            .col-12.col-md-12.col-lg-10
              p.mb-2 El prototipado y el <em>test</em>eo con usuarios constituyen etapas fundamentales dentro de los procesos de innovación aplicados a la investigación en salud pública, ya que permiten transformar ideas en soluciones tangibles y evaluarlas en contextos reales o simulados. A través de los distintos tipos de prototipado, es posible validar tempranamente hipótesis, identificar oportunidades de mejora y reducir riesgos antes de la implementación definitiva de intervenciones, servicios o herramientas en salud. 
              p.mb-0 De igual manera, los procesos de <em>test</em>eo con usuarios facilitan la incorporación de la experiencia, necesidades y expectativas de los actores involucrados, fortaleciendo la pertinencia, usabilidad y efectividad de las soluciones propuestas, en coherencia con los principios de enfoque centrado en las personas y toma de decisiones basada en evidencia.

      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-12

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_2_1 2.1  Concepto y propósito del prototipado

          .bloque-texto-g.bg-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img02.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Un prototipo se refiere a una representación temprana y funcional de un producto o sistema, diseñada para proporcionar una vista preliminar y tangible de cómo se verá y se comportará el producto final. Se trata de un modelo inicial que encapsula las características clave, funcionalidades y aspectos visuales del producto, permitiendo a los diseñadores, desarrolladores y equipos de proyecto explorar conceptos, probar ideas y recopilar retroalimentación antes de avanzar hacia la producción completa.


    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-10
        p.mb-3 Por su parte, el prototipado se define como una técnica industrial en donde se crea un modelo tomando como referencia un producto para analizar su funcionalidad una vez este materializado. Se trata de un proceso planificado en el que se toman en cuenta distintos factores para determinar la utilidad y eficacia de un artículo. Esto se efectúa antes de que llegue a la fase de producción final. Es un recurso empleado por la gran mayoría de las empresas, especialmente, cuando deciden lanzar al mercado un nuevo servicio o artículo (Universidad Internacional de Valencia, 2023).

        .row.align-items-center.bg-color-1.p-4.mb-5
          .col-lg-auto
            img.d-lg-flex.d-none(src="@/assets/curso/temas/tema2/img03.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Propósito del prototipado: el prototipado sirve como puente entre la ideación y ejecución, proporcionando una oportunidad para recopilar comentarios, iterar sobre conceptos de diseño y descubrir posibles problemas o mejoras.

        .titulo-con-imagen.mb-3(data-aos="fade-right").p-0
          .titulo-con-imagen__fondo
            //- img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/bg-02.png")
            h3.titulo-con-imagen__texto Tipos de prototipado

        p.mb-3.p-0 Los tipos de prototipado se pueden dividir en dos grandes grupos: el prototipado para productos físicos y el prototipado para productos digitales. 

        h4.mb-4 Prototipado para producto físico: 

    .bg-fondo-5.tarjeta.mb-5
      .p-3.p-lg-4
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center
            .col-lg-8.mb-4.mb-md-0
              h4 Prototipado 3D:
              p.mb-0 En los procesos de fabricación el uso de impresión 3D tiene muchas ventajas, como las mejoras tanto en precisión como en velocidad. El desarrollo de nuevas técnicas y las constantes investigaciones en materiales hacen que las posibilidades de esta tecnología sean cada vez mayores. Por esto, cada vez más empresas incorporan equipos, o cuentan con colaboradores, de impresión 3D para sus proyectos de diseño y desarrollo de producto. Sobre todo, resultan de utilidad para las fases de prototipado y <em>test</em>eo.
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img04.png', alt='Imagen de acompañamiento')
          
          .row.justify-content-center.align-items-center
            .col-lg-8.mb-4.mb-md-0
              h4 Prototipado 2D:
              p.mb-2 Aunque la impresión 3D es una de las técnicas más empleadas a la hora de prototipar, existen otras muchas técnicas y materiales para realizar un prototipo. 
              p.mb-0 En muchas ocasiones, recurrir a técnicas tradicionales nos da la posibilidad de obtener un prototipo más rápido. Una de las ventajas del prototipado es poder <em>test</em>ar y/o validar y, a veces, no se requiere de precisión para ello.  Por ejemplo, en las primeras fases del diseño y desarrollo de producto, cuando solo se necesitan validar conceptos como formas, volúmenes o ergonomía, se puede recurrir a técnicas como esculpir o modelar poliestireno entre otros materiales.

            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img05.png', alt='Imagen de acompañamiento')

    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-10
        h4.mb-4 Prototipado para producto digital:

    .bg-fondo-2-2
      .row.mb-3.justify-content-center.align-items-center
        .col-lg-12.order-lg-1
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Wireframes</em>")
              p.mb-2 Tras el <em>sketching</em> o primeros bocetos a papel donde generamos nuevas ideas y con el objetivo de crear un primer prototipo de lo que será nuestro proyecto digital, pasamos a crear <em>Wireframes</em> de nuestra idea. 
              p.mb-0 En esta fase, se pretende validar el diseño del contenido. Su distribución futura. Normalmente, se hace en blanco y negro o escala de grises.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Mockups")
              p.mb-0 Este tipo de prototipo se centra en la parte más visual del proyecto digital a desarrollar. En esta ocasión, y a diferencia del wireframe, contiene colores, tipografías, contenido como imágenes, videos, etc. Podríamos decir que, físicamente hablando, se aproximaría mucho al producto final, aunque sin contemplar las interacciones ni tipo de navegación.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Maqueta/ Prototipo de alta fidelidad")
              p.mb-2 Este sería otro tipo de prototipado digital. En este caso, el más fiel al proyecto final. Con la maqueta validaríamos si la idea o negocio funciona. Esta fase sirve para detectar problemas de navegación y usabilidad, así como el <em>feedback</em> de los usuarios/ futuros clientes.
              p.mb-0 Gracias al prototipo de alta fidelidad podrías conocer si los colores, tipografías, colores, botones… escogidos son los idóneos. Por tanto, podríamos considerarla como la fase más importante para validar la usabilidad y aceptación de un producto digital (3Dalia, 2025). 

      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-10

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_2_2 2.2  Niveles de fidelidad del prototipo

          p.mb-3 Los niveles de fidelidad de un prototipo se refieren a cuán detallado y funcional es en comparación con el producto final. En prototipado, la "fidelidad" se refiere al nivel de detalle, precisión y realismo de un prototipo en comparación con el producto final. La fidelidad se divide generalmente en tres categorías ó niveles principales: baja, media y alta.

          .row.align-items-center.justify-content-center.mb-5
            .col-lg-8.order-lg-1.order-2
              AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-1")
                .div(titulo="De baja fidelidad")
                  p.mb-3 Son representaciones simplificadas que se centran en la funcionalidad principal, a menudo creados rápidamente y con un mínimo detalle. Sirven como exploraciones en etapas iniciales, facilitando la rápida ideación e iteración (Miro, sf).
                  p.mb-3 <b>Características</b>: son representaciones sencillas, como bocetos en papel, notas adhesivas o <em>wireframes</em> básicos.
                  p.mb-3 <b>Propósito</b>: Explorar y probar muchas ideas de forma rápida en las primeras etapas del proyecto, centrándose en la funcionalidad principal y la propuesta de valor.
                  p.mb-0 <b>Ventajas</b>: rápido de crear y de bajo costo, lo que fomenta la colaboración y el intercambio de ideas.

                .div(titulo="De media fidelidad")
                  p.mb-3 Son más detallados que los de baja fidelidad, mostrando mejor la estructura y estética básica, como los mockups (maquetas visuales) o diagramas de navegación. utilizan <em>wireframes</em> para estructurar la navegación.
                  p.mb-3 <b>Características</b>: a menudo se conocen como <em>wireframes</em> digitales. Incorporan una estructura y flujo de navegación más definidos, utilizando herramientas digitales.
                  p.mb-0 <b>Propósito</b>: diseñar la arquitectura de la información y los flujos de usuarios antes de comprometerse con el diseño visual.

                .div(titulo="De alta fidelidad")
                  p.mb-3 Son más detallados y realistas, asemejándose mucho al producto final. Incorporan elementos de diseño visual, interacciones y detalles más finos, lo que los hace adecuados para pruebas de usabilidad y refinamiento de la experiencia del usuario. Entender sus distinciones sienta las bases para tomar decisiones informadas al seleccionar el enfoque adecuado según los objetivos específicos, cronograma y requisitos de un proyecto de diseño (Miro, sf).
                  p.mb-3 <b>Características</b>: son imitaciones detalladas y realistas del producto final. Incluyen elementos de interfaz de usuario (UI), contenido y, a veces, animaciones y transiciones.
                  p.mb-3 <b>Propósito</b>: demostrar el diseño casi final, permitiendo pruebas de usabilidad más precisas y recopilando comentarios sobre detalles finos y matices del producto.
                  p.mb-0 <b>Ventajas</b>: proporcionan una experiencia de usuario muy cercana a la realidad, lo que ayuda a validar el diseño final antes del desarrollo.

            .col-md-6.col-lg-4.mb-3.mb-lg-0.order-lg-2.order-1
              figure
                img(src="@/assets/curso/temas/tema2/img06.png", data-aos="zoom-in")
        
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12
        .row.align-items-center.bg-color-1.p-4
          .col-lg-auto
            img.d-lg-flex.d-none(src="@/assets/curso/temas/tema2/img07.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.p-2 Adicionalmente, las técnicas de prototipado abarcan desde representaciones rápidas y económicas como bocetos y maquetas de papel, hasta métodos avanzados como la impresión 3D (FDM, SLA, SLS), el fresado CNC y las maquetas digitales interactivas. La elección de la técnica depende del propósito, el nivel de detalle requerido, los recursos disponibles y si se necesita un prototipo físico, digital o de servicio.  

    separador

    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-12

        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_2_3 2.3  Principios básicos del <em>test</em>eo con usuarios


        img(src="@/assets/curso/temas/tema2/img08.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-3
          .col-lg-9(data-aos="fade-up")
            p.banner-text Las pruebas con usuarios o <em>test</em> con usuarios son una de las mejores herramientas en el diseño de productos, servicios y experiencias, ya que permiten utilizar la observación y el análisis para evaluar cómo un grupo de personas determinado utiliza los desarrollos para identificar errores y mejoras antes de realizar un lanzamiento oficial. El objetivo de este proceso es evaluar la usabilidad de los productos y servicios, revelar áreas de confusión, descubrir oportunidades de mejora y, en última instancia, decidir si el producto está listo para ser lanzado para usuarios reales o no.

        .row.justify-content-center.align-items-center.mb-5
          .col-md-12.col-lg-10

            h4.mb-3 ¿Por qué son importantes los <em><em>test</em>s</em> con usuarios? 
            p.mb-3 Muy a menudo, el conocimiento profundo puede cegar a los diseñadores, vendedores y propietarios de productos sobre los problemas de usabilidad de un producto o servicio. Para contar con una perspectiva más amplia, las pruebas con usuarios son realizadas por usuarios de la vida real, por lo que pueden revelar problemas que las personas familiarizadas con un su desarrollo no pueden identificar.


            .row.align-items-center.bg-color-primario-p20.p-4(data-aos="fade-left").icono-inferior.mb-4
              .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
                p Las pruebas de usabilidad se realizan para:
                ul.bullets.color-primario
                  li Encontrar errores de diseño de los productos o servicios.
                  li Descubrir oportunidades de mejora.
                  li Conocer el comportamiento de los usuarios ante tus productos
              .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0.mx-auto
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img09.png', alt='Imagen Decorativa') 

            .row.mb-2.justify-content-center.align-items-center
              .col-auto.mb-3.mb-lg-0.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/tema2/img10.svg", alt="Imagen Decorativa", data-aos="zoom-in")
              .col-lg
                p.mb-0(data-aos="fade-right") Los principios básicos del <em>test</em>eo con usuarios se centran en definir objetivos claros, seleccionar participantes representativos y crear un entorno de prueba adecuado para observar el comportamiento real del usuario al interactuar con un producto. Se debe planificar meticulosamente las tareas a realizar, documentar las observaciones y analizar los datos para identificar problemas de usabilidad y generar un informe con propuestas de mejora (Narváez, sf).   

      .bg-fondo-2-2
        .row.justify-content-center.align-items-center.mb-3
          .col-md-12.col-lg-10
            .titulo-con-imagen.mb-3(data-aos="fade-right").p-0
              .titulo-con-imagen__fondo
                //- img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/bg-02.png")
                h3.titulo-con-imagen__texto Métodos para realizar <em><em>test</em>s</em> con usuarios

            p.mb-3 Existen diferentes métodos para realizar <em><em>test</em>s</em> con usuarios, entre los que destacan:

            .row.align-items-center.justify-content-center.mb-2
              .col-md-6.col-lg-3.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/temas/tema2/img11.png", data-aos="zoom-in")
              .col-lg-9
                h4.mb-3 Prototipado para producto digital:
                AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-1")
                  .div(titulo="Pruebas con usuarios moderadas en persona")
                    p.mb-3 La forma clásica de las pruebas con usuarios es moderada en persona, en la que el moderador se sienta junto al participante en la prueba y le hace preguntas.
                    p.mb-0 Este método de la vieja escuela sigue teniendo muchas ventajas. Observar al usuario en persona y poder hacerle preguntas adicionales basadas en lo que está haciendo o diciendo en un momento determinado, puede darle una visión muy profunda de lo que realmente está mal con su desarrollo.
                  .div(titulo="<em>Test</em> con usuarios moderados a distancia")
                    p.mb-3 La mayor desventaja de las pruebas de usuario “clásicas” en persona es que los participantes de las pruebas tienen que ir a verte o tú tienes que ir a verlos, lo que equivale a una inversión considerable de tiempo y dinero.
                    p.mb-0 Los <em><em>test</em>s</em> con usuarios moderados a distancia son una excelente alternativa a las pruebas presenciales. Con las pruebas remotas, el moderador y el participante pueden estar donde quieran, siempre y cuando estén viendo o compartiendo la misma información.  Si el usuario tiene una cámara web, también se puede ver su cara e incluso medir sus reacciones a través de la toma de datos biométricos, lo que lo convierte en una buena alternativa para las pruebas de usuario moderadas en persona.
                  .div(titulo="Pruebas con usuario remotas no moderadas")
                    p.mb-3 En este tipo de pruebas con usuario no hay moderador. Hay dos variantes principales de las pruebas de usuario remotas sin moderador, en las que tiene imágenes de las acciones del participante en la prueba, así como comentarios:
                    p.mb-3 <b>Imagen y sonido grabados:</b> se pide a los usuarios que piensen en voz alta. Lo malo es que muchos de los participantes en las pruebas que se obtienen con estas herramientas suenan como si fueran usuarios de pruebas semiprofesionales. Sin embargo, también es posible hacer pruebas con un panel de usuarios propio, lo cual es definitivamente una ventaja. 
                    p.mb-0 <b>Movimientos del ratón y tiempo grabados:</b> en este método, no se ve al participante de la prueba y no se le oye. Ellos ven la tarea en la pantalla, realizan la tarea y rellenan un cuestionario online para dar <em>feedback</em> adicional después de cada tarea.

      .row.justify-content-center.align-items-center.mb-3
        .col-md-12.col-lg-12
          .row.mb-2.justify-content-center.align-items-center
            h4 Tipos de pruebas con usuarios o <em>test</em> con usuarios

          .row.mb-3.justify-content-center.align-items-center
            .col-lg-9.order-2.order-lg-1
              LineaTiempoD.color-secundario
                p(numero="1" titulo="Pruebas de usabilidad (investigación UX)") Busca medir la eficacia y la facilidad de uso de una página web o un <em>Ecommerce</em> por parte de un usuario para satisfacer sus necesidades. En las pruebas de usabilidad de un sitio web se miden varios aspectos: seguimiento ocular, mapas de calor online, mapas de clics, recorrido del usuario, etc.
                p(numero="2" titulo="Encuestas") Otro tipo de <em>test</em> de usuarios es el representado por las encuestas online, que ayudan a obtener de los clientes opiniones sobre productos e ideas que ayudarían a mejorarlo. Es una de las formas más fáciles de obtener datos de los clientes porque pueden completar las encuestas a través de cualquier lugar. <br><br> Se recomienda recurrir a las encuestas de satisfacción del cliente si quiere recibir, en poco tiempo, muchas respuestas de los clientes sobre un producto. La información recopilada ayudará al diseñador de UX a tener indicaciones claras en el proceso de diseño y en la arquitectura de la información para ofrecer un viaje de usuario perfecto para los clientes.
                p(numero="3" titulo="Pruebas A/B") Este tipo de pruebas con usuarios son una de las formas más eficaces y rápidas de aumentar el número de conversiones. Las pruebas A/B son el proceso por el cual se envían dos variantes diferentes de un material de marketing, como un correo electrónico a distintos grupos de suscriptores. <br><br> Es importante recordar que cada grupo debe recibir sólo una variante del correo electrónico, no las dos, y que deben enviarse el mismo día y a la misma hora. <br><br> A continuación, se hace un seguimiento de las reacciones de los clientes y se determina qué variante ha suscitado las reacciones que le ayudan a alcanzar los objetivos propuestos.
                p(numero="4" titulo="Grupos focales") Los grupos focales son una técnica de investigación cualitativa que consiste en establecer un debate sobre un tema determinado con un grupo formado por 8-10 participantes, normalmente durante 1 o 2 horas. <br><br> Este método permite obtener información en profundidad sobre las motivaciones y los comportamientos del público objetivo con respecto a las categorías de interés.
                p(numero="5" titulo="Prueba con usuarios beta") La prueba con usuarios beta se utiliza para evaluar una versión de un producto que aún no está lista para el usuario final debido a la falta de pruebas en condiciones reales. <br><br> Los sitios web, los sistemas operativos y las diferentes aplicaciones pueden estar en la fase de pruebas beta. Las pruebas beta pueden ser abiertas, lanzadas para cualquier persona que quiera probar la versión inestable, o cerradas, diseñadas para las pruebas en un grupo cerrado o restringido. <br><br> El objetivo de la prueba beta es terminar las pruebas de rendimiento y la necesidad de identificar los problemas que causan errores (Narvaez, sf).
            .col-md-5.col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/temas/tema2/img12.png", data-aos="zoom-in")

      .row.justify-content-center.align-items-center.mb-2
        .col-md-12.col-lg-10
          .titulo-con-imagen.mb-3(data-aos="fade-right").p-0
            .titulo-con-imagen__fondo
              //- img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/bg-02.png")
              h3.titulo-con-imagen__texto Evaluación de prototipos
              
          p.mb-3 Para la evaluación de prototipos y con un enfoque hacia el emprendimiento, se destaca la metodología creada por <em>Tamarack Institute</em> en Canadá denominada Evaluación de Prototipos, la cual se basa en los siguientes pasos, los cuales son iterativos:

        .bg-fondo-5.tarjeta.mb-2
          .p-3.p-lg-4
            SlyderA(tipo="b").bg-color-white.p-4.tarjeta
              .row.justify-content-center.align-items-center
                .col-lg-8.mb-4.mb-md-0
                  h4 Confirmación del prototipo
                  p.mb-0 En este punto se define si en efecto existe un prototipo, se determina cuáles son las partes del prototipo que se desea evaluar y de igual forma se establece la clase de prototipo frente a la que nos encontramos: si este es un prototipo rápidamente obtenible o si se requiere elaborar lentamente pues para ello se deben generar cambios culturales; si es un prototipo desechable o si es evolutivo e incremental.
                .col-md-9.col-lg-4.mb-0.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema2/img13.png', alt='Imagen de acompañamiento')
              .row.justify-content-center.align-items-center
                .col-lg-8.mb-4.mb-md-0
                  h4 Generación de preguntas
                  p.mb-0 Al respecto se elaboran preguntas, determinando cuáles serán los indicadores para probar los prototipos. Estas preguntas recaen sobre el prototipo, con miras a establecer su efectividad, viabilidad, soporte y escalabilidad, también recaen sobre el reto a superar, para lo cual se piensa en qué se está aprendiendo del reto y se analiza si el mismo se puede extender a otro contexto y, a su vez, se estudian las enseñanzas que obtiene el equipo interviniente en la generación del prototipo, en el sentido de definir si, por ejemplo, es un equipo adverso al riesgo o si tiene tolerancia a él.
                .col-md-9.col-lg-4.mb-0.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema2/img14.png', alt='Imagen de acompañamiento')
              .row.justify-content-center.align-items-center
                .col-lg-8.mb-4.mb-md-0
                  h4 Diseño del método de evaluación
                  p.mb-0 Para evaluar un prototipo se deben tener en cuenta principios tales como el de relevancia, de tal manera que se respondan preguntas que den lineamientos y permitan que el equipo que está creándolo pueda realizar ajustes; también se debe aplicar el principio de credibilidad, para que el equipo que está creando el prototipo sienta confianza y tenga en cuenta los resultados de la retroalimentación, por último, se deben aplicar los principios de oportunidad y calidad, de tal forma que los resultados se proporcionen en tiempo real y puedan realizarse ajustes sobre el prototipo y que las evaluaciones cumplan con estándares de calidad.
                .col-md-9.col-lg-4.mb-0.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema2/img15.png', alt='Imagen de acompañamiento')
              .row.justify-content-center.align-items-center
                .col-lg-8.mb-4.mb-md-0
                  h4 Implementación y adaptación
                  p.mb-0 Es importante tener en consideración que en esta etapa se pueden realizar ajustes sobre el método de evaluación, si por ejemplo se detecta que las preguntas no están profundizando sobre el prototipo o si, por ejemplo, el prototipo evoluciona.                      
                .col-md-9.col-lg-4.mb-0.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema2/img16.png', alt='Imagen de acompañamiento')
              .row.justify-content-center.align-items-center
                .col-lg-8.mb-4.mb-md-0
                  h4 Toma de decisiones
                  p.mb-0 Una vez tienen lugar las anteriores etapas, el equipo puede tomar alguna de las siguientes decisiones: descartar el prototipo (en caso de que los resultados sean desfavorables y se determine que no vale la pena continuar invirtiendo en él); evolucionar y adaptar el prototipo (adaptándolo a un nuevo contexto); pasar a una fase piloto (si se determina que el prototipo se debe probar en un contexto más global); realizar el escalamiento (en cuyo caso se desarrollará la capacidad de operar con volúmenes significativos comercialmente y costos competitivos); continuar en las pruebas si los resultados de la evaluación no permiten tomar una decisión (Sarraipa, Artífcie & Jiménez, 2019).
                .col-md-9.col-lg-4.mb-0.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema2/img17.png', alt='Imagen de acompañamiento')

    .bg-fondo-2-3
      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-12

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_2_4 2.4  Recolección de retroalimentación e iteración:

          .bloque-texto-g.bg-color-primario.p-3.p-sm-4.p-md-5.mb-0
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img18.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 La recolección de retroalimentación y la iteración son un proceso continuo para mejorar un producto o proyecto. Consiste en recopilar opiniones, usarlas para hacer ajustes y mejoras (iteración), y luego repetir el ciclo para refinar continuamente la solución. Este enfoque es fundamental para que un producto o servicio se adapte a las necesidades de los usuarios, resuelva problemas y alcance la excelencia.  

</template>

<script>
export default {
  name: 'Tema2',
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
