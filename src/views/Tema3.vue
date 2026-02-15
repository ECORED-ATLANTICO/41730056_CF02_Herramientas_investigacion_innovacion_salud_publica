<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Concepto de Producto Mínimo Viable (MVP) y su aplicación en proyectos de salud

    img(src="@/assets/curso/temas/tema3/img01.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-9(data-aos="fade-up")
        p.banner-text El Producto Mínimo Viable (PMV) es una estrategia clave en los procesos de innovación, que consiste en desarrollar una versión inicial y simplificada de una solución con las funciones esenciales para resolver un problema específico y obtener retroalimentación real de los usuarios. En proyectos de salud, su aplicación permite poner a prueba intervenciones, tecnologías, servicios o estrategias educativas en contextos reales, con menor inversión de tiempo y recursos, antes de escalarlas.

    .bg-fondo-3-1
      .row.mb-3.justify-content-center.align-items-center
        .col-md-12.col-lg-9
          .row.justify-content-center.align-items-center
            .col-auto.mb-2.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/img02.svg", alt="Imagen Decorativa", data-aos="zoom-in")
            .col-lg
              p.mb-0(data-aos="fade-right") Esto facilita identificar mejoras, validar su pertinencia, evaluar la experiencia de pacientes y profesionales, y reducir riesgos asociados a implementaciones a gran escala. Así, el PMV se convierte en una herramienta fundamental para generar evidencia práctica y diseñar soluciones más efectivas, centradas en las necesidades de la población.

      separador

      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-12
          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_3_1 3.1 Definición del MVP y diferencias con prototipo

          .row.justify-content-center.align-items-center.mb-4
            .col-lg-5.col-xl-3.mb-3.mb-lg-0
              .bg-color-5.p-4.px-lg-4.tarjeta 
                p.lg-mb-4 El producto mínimo viable (MVP) es un prototipo que permite comprobar si el bien o servicio que está desarrollando una compañía se ajusta a las necesidades del mercado y, de no hacerlo, los cambios que debe introducir en su diseño, funcionalidad o, incluso, precio.
            .col-md-8.col-lg-7.col-xl-4.mb-3.mb-xl-0
              figure
                img(src="@/assets/curso/temas/tema3/img03.png", data-aos="zoom-in")
            .col-xl-5
              img.d-xl-flex.d-none(src="@/assets/curso/temas/tema3/img04.svg", style="max-width: 90px").mb-3
              p.mb-0 Las diferencias entre un prototipo y un MVP, radican en que el prototipo valida una idea o concepto, mientras que un MVP lanza una versión funcional del producto al mercado para recopilar retroalimentación real de los usuarios. El prototipo se enfoca en probar la viabilidad y el diseño, puede no ser completamente funcional y a menudo se presenta a partes interesadas internas, mientras que el MVP es un producto completo con funcionalidades clave, diseñado para ser vendido y usado por clientes reales (ver Tabla 2).  

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-12
        .titulo-sexto.mb-4.color-acento-contenido
          h5 
            b Tabla 2. 
            span Diferencias entre prototipo y MVP
        .tabla-a.color-acento-contenido
          table
            caption Fuente: Adaptado SENA (2026), Tomado de UNIR, 2024.
            thead
              tr
                th Criterios
                th Prototipo
                th Producto Mínimo Viable (MVP)
            tbody
              tr
                td Definición
                td Representación visual de alta fidelidad que muestra la experiencia del usuario.
                td Versión preliminar del producto con características principales para resolver los problemas de los usuarios.
              tr
                td Funcionalidad
                td Simula la funcionalidad del producto a través de acciones básicas.
                td Contiene características principales, funcionales, pero no completas.
              tr
                td Objetivo
                td Probar ideas, identificar problemas y perfeccionar conceptos.
                td Recopilar comentarios de los usuarios, validar la demanda del mercado y perfeccionar la funcionalidad.
              tr
                td Etapa de desarrollo
                td Desarrollo en fase temprana, previo al MVP.
                td Etapa posterior al prototipado.
              tr
                td Participación del usuario
                td Limitado, centrado en la interacción básica.
                td Más atractivo, ofrece una experiencia funcional a los primeros usuarios.
              tr
                td Inversión de tiempo y costos
                td Menos costoso y requiere menos tiempo.
                td Requiere más tiempo y recursos para su desarrollo.
              tr
                td Mitigación de riesgos
                td Ayuda a identificar problemas de forma temprana, reduciendo riesgos.
                td Valida las necesidades del mercado y reduce el riesgo de desarrollar características no deseadas.
              tr
                td Iteración y mejora
                td Facilita cambios y mejoras fáciles.
                td El objetivo es la iteración basada en los comentarios de los usuarios para obtener funciones mejoradas.

    .row.align-items-center.justify-content-center
      .col-12.col-md-12.col-lg-10
      
        .titulo-con-imagen.mb-3(data-aos="fade-right").p-0
          .titulo-con-imagen__fondo
            //- img.titulo-con-imagen__imagen(src="@/assets/curso/temas/bg/bg-02.png")
            h3.titulo-con-imagen__texto Características que debe tener un producto mínimo viable 

        p.mb-3 Al tratarse de un prototipo que debe mostrar cómo será el bien o servicio que se quiere introducir en el mercado, las características del producto mínimo viable están asociadas a los cuatro objetivos a comprobar:
        .row.justify-content-center.align-items-center.bg-color-primario-p20.p-4(data-aos="fade-left").icono-inferior.mb-4
          .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0.mx-auto
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img05.png', alt='Imagen Decorativa') 
          .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0.px-lg-5
            ul.bullets.color-primario
              li <b>Su funcionalidad:</b> para qué ha sido creado, qué soluciones ofrece a las demandas del consumidor final.
              li <b>Sus niveles de usabilidad:</b> cómo será la experiencia del público al que se dirige y si resulta fácil e intuitiva su utilización.
              li El diseño con el que se presentará.
              li Su fiabilidad y seguridad, constatando que el producto o servicio definitivo no solo responde a una necesidad, sino que también ha sido ideado y desarrollado sin que represente un riesgo para su público (UNIR, 2024)


    .row.align-items-center.justify-content-center.mb-4
      .col-12.col-md-12.col-lg-10
        .row.justify-content-center.align-items-center.mb-4
          .col-auto.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema3/img06.svg", alt="Imagen Decorativa", data-aos="zoom-in")
          .col-lg
            p.mb-0(data-aos="fade-right") De acuerdo con Clavijo (2025), Existen dos tipos principales de MVP según su nivel de desarrollo: el MVP de baja fidelidad (validación de problema con inversión de 0-500 USD y desarrollo de 1-3 semanas) y el MVP de alta fidelidad (validación de solución con inversión de 500-5000 USD y desarrollo de 4-8 semanas).

        p.mb-0 En la siguiente tabla se muestran las diferencias entre los dos tipos de MVP:

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-4
      .col-lg-12
        .titulo-sexto.mb-4.color-acento-contenido
          h5 
            b Tabla 3. 
            span Diferencias entre PMV de Baja vs PMV de alta
        .tabla-a.color-acento-contenido
          table
            caption Fuente: Clavijo, 2025.
            thead
              tr
                th Criterio
                th MVP de Baja Fidelidad
                th MVP de Alta Fidelidad
            tbody
              tr
                td Objetivo principal
                td Validar que existe un problema real.
                td Validar que tu solución funciona y la pagarían.
              tr
                td Inversión típica
                td 0-500 USD.
                td 500-5000 USD.
              tr
                td Tiempo de desarrollo
                td 1-3 semanas.
                td 4-8 semanas.
              tr
                td Herramientas típicas
                td Landing pages, entrevistas, encuestas, videos explicativos.
                td Prototipos funcionales, apps básicas, servicios piloto.
              tr
                td Equipo necesario
                td 1-3 personas sin desarrolladores.
                td 3-5 personas con al menos 1 desarrollador.
              tr
                td Tipo de datos obtenidos
                td Cualitativos principalmente.
                td Cuantitativos y cualitativos.
              tr
                td Ideal para
                td Ideas nuevas, presupuesto muy limitado, validación inicial.
                td Problema validado, disponibilidad de recursos, prueba de solución específica.

    separador

    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-12
        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_3_2 3.2 Etapas para desarrollar un MVP
      
      .row.mb-5.justify-content-center.align-items-center
        .col-md-8.col-lg-3(order-sm="2" order-md="2")
          figure
            img(src="@/assets/curso/temas/tema3/img07.png", alt="Imagen Decorativa", data-aos="zoom-in")
        .col-lg-9.col-md-12.mb-4.mb-md-0(order-sm="1" order-md="1")
          p.mb-3(data-aos="fade-right") Al pensar en cómo crear un MVP, es fundamental comprender que el principio fundamental del desarrollo de MVP es su simplicidad. Al crear un MVP, incorporamos un conjunto mínimo de las funcionalidades más importantes que permiten a los desarrolladores lanzar un producto al mercado rápidamente, probar su viabilidad y recopilar información valiosa. Esta estrategia permite a las empresas optimizar el uso de sus recursos, lo que se traduce en un tiempo de comercialización optimizado. Les permite probar sus ideas y conceptos sin comprometer recursos en exceso en una etapa temprana.
          p.mb-0(data-aos="fade-right") Las etapas para desarrollar un MVP son:

      .bg-fondo-5.tarjeta.mb-0
        .p-3.p-lg-4
          SlyderA(tipo="b").bg-color-white.p-4.tarjeta
            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-md-0.px-lg-4
                h4 Identificar el problema y definir la solución
                ul.bullets.color-secundario
                  li <b>Identifica el problema:</b> determina la necesidad o punto débil real del mercado que tu producto resolverá.
                  li <b>Define la solución:</b> esboza cómo tu producto abordará ese problema de manera efectiva.
                  li <b>Define el público objetivo:</b> investiga y segmenta el mercado para saber a quién va dirigido tu producto.
              .col-md-9.col-lg-4.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema3/img08.png', alt='Imagen de acompañamiento')
            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-md-0.px-lg-4
                h4 Priorizar las funcionalidades esenciales
                ul.bullets.color-secundario
                  li <b>Realiza un análisis de mercado:</b> investiga a la competencia y evalúa el mercado.
                  li <b>Prioriza funciones:</b> haz una lista de todas las funcionalidades posibles y utiliza métodos como el MoSCoW (Debe tener, debería tener, podría tener, no tendrá) para seleccionar las más importantes que validen tu propuesta de valor principal.
                  li <b>Diseña una interfaz simple:</b> crea un diseño básico y funcional para el MVP.
              .col-md-9.col-lg-4.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema3/img09.png', alt='Imagen de acompañamiento')
            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-md-0.px-lg-4
                h4 Construir el MVP
                ul.bullets.color-secundario
                  li <b>Desarrolla el producto:</b> crea la primera versión del producto enfocándote en las funcionalidades priorizadas.
                  li <b>Asegura la calidad básica:</b> el MVP debe ser funcional, fiable, usable y tener un buen diseño, aunque no sea perfecto.
                  li <b>Considera métodos alternativos:</b> explora opciones como el "Mago de Oz", donde las operaciones se realizan manualmente detrás de escena, para validar un concepto rápidamente y con baja inversión inicial.
              .col-md-9.col-lg-4.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema3/img10.png', alt='Imagen de acompañamiento')
            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-md-0.px-lg-4
                h4 Medir, aprender e iterar
                ul.bullets.color-secundario
                  li <b>Lanza el MVP:</b> pon el producto a disposición de los usuarios iniciales.
                  li <b>Recopila retroalimentación:</b> usa comentarios, encuestas y herramientas para entender qué les gusta y qué no a los usuarios.
                  li <b>Mide el rendimiento:</b> monitorea métricas clave como la interacción del usuario, la retención o las tasas de conversión.
                  li <b>Itera:</b> utiliza los datos y la retroalimentación para realizar mejoras y ajustar el producto en ciclos sucesivos (Clavijo, 2025). 
              .col-md-9.col-lg-4.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema3/img11.png', alt='Imagen de acompañamiento')


       
</template>

<script>
export default {
  name: 'Tema3',
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
