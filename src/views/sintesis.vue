<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .bg-fondo-sintesis
      .row.mb-5.justify-content-center.align-items-center
        .col-md-8.col-lg-3(order-sm="2" order-md="2")
          figure
            img(src="@/assets/curso/temas/sintesis.png", alt="Imagen Decorativa", data-aos="zoom-in")
        .col-lg-9.col-md-12.mb-4.mb-md-0(order-sm="1" order-md="1")
          p.mb-0(data-aos="fade-right") A lo largo del componente, el aprendiz aborda enfoques de innovación aplicados a la investigación en salud pública, integrando <em>Design Thinking</em> y <em>Human-Centered Design</em> para comprender necesidades reales y diseñar soluciones centradas en las personas. Se estudian fases, beneficios y diferencias entre ambos enfoques, junto con el prototipado, niveles de fidelidad y testeo con usuarios como herramientas clave de validación. Se profundiza en el Producto Mínimo Viable, sus etapas y su utilidad para aprender con bajo riesgo. Además, se presentan metodologías ágiles como <em>Lean Startup</em>, <em>Scrum</em> y <em>Kanban</em> para gestionar proyectos de forma iterativa. Finalmente, se analizan casos de éxito en Colombia y América Latina que evidencian el valor de la innovación participativa en salud pública.
    
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="La figura muestra la estructura del componente formativo: metodologías ágiles y diseño centrado en el usuario; presenta el uso de Design Thinking y Human-Centered Design para identificar necesidades y crear soluciones centradas en las personas, junto con prototipado, niveles de fidelidad y pruebas con usuarios. Incluye el concepto de Producto Mínimo Viable y sus etapas, así como metodologías ágiles como lo son: Lean Startup, Scrum y Kanban; para el desarrollo iterativo de proyectos. También muestra experiencias exitosas de innovación participativa en Colombia y América Latina.")
    
    .row.justify-content-center
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
