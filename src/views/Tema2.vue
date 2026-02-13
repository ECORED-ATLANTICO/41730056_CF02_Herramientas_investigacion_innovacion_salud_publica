<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de prototipado y procesos de testeo con usuarios en salud

    
    .row.align-items-ceniter(data-aos="fade-left").justify-content-center.mb-4

      .col-md-12.col-lg-10
        .row.justify-content-center.align-items-center
          .col-12.col-md-6.col-lg-5
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-7.bg-color-terciario-t5
            p.mb-0.p-4 Te invitamos a ver el siguiente video introductorio sobre el Pensamiento de Diseño (Design Thinking), el Diseño Centrado en el Usuario (Human-Centered Design). Mientras observas el video, reflexiona sobre las siguientes preguntas: ¿Cómo cambia la investigación en salud cuando se trabaja con las comunidades desde el inicio?

    separador

    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-12

        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_2_1 2.1  Concepto y propósito del prototipado


        .row.align-items-center(data-aos="fade-left").justify-content-center
          .bloque-texto-g.bg-acento-contenido-p10.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img13_1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Considerando los problemas actuales de nuestra sociedad (crisis sociales, recortes presupuestales, transformación política…), así como la complejidad de nuestro sistema sanitario (unido a la competencia existente en la salud privada), cualquier organización que desee consolidarse como un sistema de salud exitoso, debe ser capaz de innovar en la prestación de servicios, trascendiendo todas las fronteras geográficas, políticas o sectoriales. El Design Thinking puede aportar a los profesionales de la salud a la integración de enfoques más creativos, interdisciplinares y centrados en las personas, que ayudará en la mejora de la gestión sanitaria y en la innovación dentro del sector.
      

    separador

    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-12

        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_2_2 2.2  Niveles de fidelidad del prototipo


        p.mb-3 Los niveles de fidelidad de un prototipo se refieren a cuán detallado y funcional es en comparación con el producto final. En prototipado, la "fidelidad" se refiere al nivel de detalle, precisión y realismo de un prototipo en comparación con el producto final. La fidelidad se divide generalmente en tres categorías ó niveles principales: baja, media y alta.




    separador

    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-12

        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_2_3 2.3  Principios básicos del testeo con usuarios



        //- banner con tarjeta
        .row.justify-content-center.align-items-center.mb-3.tarjeta(data-aos="fade-left")
          .col-lg-12.mb-2
            div.tarjeta-horz.mb-3
              img(src='@/assets/curso/temas/tema1/img03.png', alt='Imagen decorativa')
              div.texto-tarjeta.bg-white
                  p.mb-0 ¿Qué es Design Thinking?  Es una metodología que permite estructurar la forma en que se entiende un problema, qué se quiere solucionar y cuál es la solución que se debe crear. Este enfoque se basa en principios como la empatía con los usuarios, la creatividad y un proceso de resolución de problemas iterativo, es decir que no sigue una secuencia rígida y lineal, sino que evoluciona según los aprendizajes que surgen en cada etapa. 



    separador

    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-12

        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_2_4 2.4  Recolección de retroalimentación e iteración:




        .row.align-items-center(data-aos="fade-left").justify-content-center
          .bloque-texto-g.bg-acento-contenido-p10.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img13_1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Considerando los problemas actuales de nuestra sociedad (crisis sociales, recortes presupuestales, transformación política…), así como la complejidad de nuestro sistema sanitario (unido a la competencia existente en la salud privada), cualquier organización que desee consolidarse como un sistema de salud exitoso, debe ser capaz de innovar en la prestación de servicios, trascendiendo todas las fronteras geográficas, políticas o sectoriales. El Design Thinking puede aportar a los profesionales de la salud a la integración de enfoques más creativos, interdisciplinares y centrados en las personas, que ayudará en la mejora de la gestión sanitaria y en la innovación dentro del sector.
      





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
