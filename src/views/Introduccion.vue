<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.bg-color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/introduccion/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El presente módulo permite identificar las herramientas, métodos y enfoques de vanguardia necesarios para transformar los procesos tradicionales de investigación en salud pública (ISP). Ofreciendo las principales capacidades para diseñar, ejecutar y evaluar proyectos de ISP de manera más ágil, efectiva y con mayor impacto social. Incluyendo la aplicación de <em>Design Thinking</em>, la Investigación-Acción Participativa (IAP) y los Métodos Ágiles (Agile), técnicas que promueven la iteración rápida, flexible y la entrega continua de valor en entornos de incertidumbre.
        
    p.mb-0 Además, se describen herramientas de vanguardia para la gestión y el análisis tales como: el Análisis de Datos Masivos (Big Data), la Inteligencia Artificial (IA) y Aprendizaje Automático (Machine Learning - ML), Los Sistemas de Información Geográfica (SIG o GIS), herramientas esenciales para el análisis espacial de determinantes de salud y la focalización geográfica de intervenciones en salud pública.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
