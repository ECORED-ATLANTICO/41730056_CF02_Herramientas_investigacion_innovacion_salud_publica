<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Metodologías ágiles y diseño centrado en el usuario',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar el grado de apropiación de los contenidos del Componente Formativo 2.<br>A continuación, se presentan una serie de preguntas, la idea es que partiendo de los materiales del Componente Formativo 2, usted las responda, según sea el caso',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Las pruebas con usuarios son una herramienta fundamental en el diseño de productos, servicios y experiencias, ya que permiten observar y analizar el comportamiento de un grupo de personas para evaluar su interacción y obtener información valiosa.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones.',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 2,
          texto:
            'El producto mínimo viable (MVP) es un prototipo que permite comprobar si el bien o servicio que está desarrollando una compañía se ajusta a las necesidades del mercado.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones.',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 3,
          texto:
            'Probar ideas, detectar problemas y perfeccionar conceptos son pasos esenciales dentro del desarrollo de un Producto Mínimo Viable (MVP).',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 4,
          texto:
            'La metodología <em>Lean Startup</em>, desarrollada por Eric Ries en 2011, combina principios ágiles con enfoques de validación científica para gestionar la innovación en contextos caracterizados por alta incertidumbre.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 5,
          texto:
            'El <em>Design Thinking</em> es una metodología orientada a resolver problemas mal definidos o desconocidos, basada en un proceso iterativo y no lineal propio del pensamiento de diseño.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 6,
          texto:
            'El objetivo principal del <em>Design Thinking</em> es garantizar que las soluciones sean deseables, factibles y viables.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 7,
          texto:
            'En el diseño de equipamiento médico, la experiencia del paciente es prioritaria. Por ello, Freud Dietz rediseñó una máquina de resonancia magnética como una nave espacial o barco pirata, convirtiéndola en una experiencia lúdica que reduce el dolor crónico, especialmente en niños.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 8,
          texto:
            'Las metodologías <em>Design Thinking</em> y <em>Human-Centered Design</em> comparten una filosofía centrada en las personas, empleando la empatía y la iteración como pilares para abordar y resolver problemas complejos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 9,
          texto:
            'El prototipado es una técnica que consiste en rediseñar un modelo existente para adaptar su funcionalidad, optimizando factores como la eficacia y la utilidad.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 10,
          texto:
            'El prototipado actúa como un puente entre la ideación y la ejecución, permitiendo recopilar retroalimentación, iterar sobre el diseño y detectar tanto problemas como oportunidades de mejora.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 11,
          texto:
            'Un prototipo se refiere a una representación temprana y funcional de un producto o sistema, diseñada para proporcionar una vista preliminar y tangible de cómo se verá y se comportará el producto final.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 12,
          texto:
            'Son representaciones simplificadas del prototipo que se enfocan en la funcionalidad principal. Generalmente se crean de manera rápida y con un nivel mínimo de detalle, formando parte de un nivel de:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Baja fidelidad', esCorrecta: true },
            { id: 'b', texto: 'Media fidelidad', esCorrecta: false },
            { id: 'c', texto: 'Alta fidelidad', esCorrecta: false },
            { id: 'd', texto: 'Mixta fidelidad', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 13,
          texto:
            'Tipo de prueba o <em>test</em> con usuarios en el que la forma más sencilla de obtener datos de los clientes, sin importar su ubicación, es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pruebas de usabilidad (investigación UX)',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Encuestas', esCorrecta: true },
            { id: 'c', texto: 'Pruebas A/B', esCorrecta: false },
            { id: 'd', texto: 'Grupos focales', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 14,
          texto:
            'Prueba utilizada para evaluar una versión del producto que aún no está lista para el usuario final, debido a que no ha sido sometida a pruebas en condiciones reales:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Prueba con usuarios beta', esCorrecta: false },
            { id: 'b', texto: 'Pruebas A/B', esCorrecta: false },
            { id: 'c', texto: 'Prueba con usuarios beta', esCorrecta: true },
            {
              id: 'd',
              texto: 'Pruebas de usabilidad (investigación UX)',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 15,
          texto:
            'Dentro de las etapas para desarrollar un MVP, la investigación y segmentación del mercado, con el fin de identificar a quién está dirigido el producto, forma parte de:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Priorizar las funcionalidades esenciales',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Construir el MVP', esCorrecta: false },
            { id: 'c', texto: 'Medir, aprender e iterar', esCorrecta: false },
            {
              id: 'd',
              texto: 'Identificar el problema y definir la solución',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 16,
          texto:
            'Es considerado un marco ágil orientado a la gestión colaborativa de proyectos complejos, que exige adaptación constante, comunicación continua y la entrega incremental de resultados:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '<em>Lean Startup</em>', esCorrecta: false },
            { id: 'b', texto: '<em>Scrum</em>', esCorrecta: true },
            { id: 'c', texto: '<em>Kanban</em>', esCorrecta: false },
            { id: 'd', texto: 'Debate', esCorrecta: false },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 17,
          texto:
            'Hace parte del Roles en <em>Scrum</em> adaptados a la investigación en salud pública, excepto:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Propietario del Producto <em>(Product Owner)</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilitador o Líder de proceso (<em>Scrum</em> Master)',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Equipo de trabajo interdisciplinario',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Eventos y artefactos', esCorrecta: true },
          ],
          mensaje_correcto: 'Muy bien, felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 18,
          texto:
            'El proceso de <em>Design Thinking</em> se desarrolla en cinco fases, las cuales son:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Empatizar, sensibilizar, definir, prototipar y probar',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Empatizar, definir, pensar, prototipar y probar',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Empatizar, definir, idear, prototipar y probar',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Empatizar, definir, idear, armar y probar',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Muy bien felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 19,
          texto:
            'El proceso de <em>Design Thinking</em>, aplicado al ámbito de la salud, ofrece los siguientes beneficios:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora la comunicación profesional – usuario',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumenta la comodidad del paciente',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumenta el costo del servicio',
              esCorrecta: false,
            },
            { id: 'd', texto: 'A y b son correctas', esCorrecta: true },
          ],
          mensaje_correcto: 'Muy bien felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 20,
          texto:
            'El procesos de <em>Design Thinking</em> combina las capacidades del pensamiento creativo y racional, enfocándose en los siguientes aspectos:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Necesidades de las personas',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Requisitos del negocio', esCorrecta: false },
            {
              id: 'c',
              texto: 'Posibilidades que ofrece la tecnología',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Todas las anteriores', esCorrecta: true },
          ],
          mensaje_correcto: 'Muy bien felicitaciones',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Le felicito, ha superado la actividad',
      mensaje_final_reprobado:
        'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica',
    },
  }),
}
</script>
