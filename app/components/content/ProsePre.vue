<template>
  <!-- Mermaid → 交給專門的 component -->
  <MermaidExcalidraw v-if="language === 'mermaid'" :code="code" />

  <!-- 一般 Code Block -->
  <pre v-else :class="$props.class"><slot /></pre>
</template>

<script setup>
defineProps({
  code: { type: String, default: '' },
  language: { type: String, default: null },
  filename: { type: String, default: null },
  highlights: { type: Array, default: () => [] },
  meta: { type: String, default: null },
  class: { type: String, default: null },
})
</script>
