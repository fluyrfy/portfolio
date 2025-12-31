<template>
  <div class="mermaid-excalidraw min-h-[200px]">
    <!-- <div v-if="loading" class="flex justify-center py-8">
      <UIcon
        name="i-heroicons-arrow-path"
        class="animate-spin size-8 text-gray-400"
      />
    </div> -->
    <div v-if="loading" class="flex flex-col items-center gap-6 py-12">
      <!-- 頂部節點 -->
      <USkeleton class="h-12 w-40 rounded-lg bg-gray-200 dark:bg-gray-700" />

      <!-- 連接線 -->
      <USkeleton class="h-8 w-1 bg-gray-200 dark:bg-gray-700" />

      <!-- 中間分支 -->
      <div class="flex gap-12">
        <div class="flex flex-col items-center gap-2">
          <USkeleton
            class="h-10 w-32 rounded-lg bg-gray-200 dark:bg-gray-700"
          />
          <USkeleton class="h-6 w-1 bg-gray-200 dark:bg-gray-700" />
          <USkeleton
            class="h-10 w-28 rounded-lg bg-gray-200 dark:bg-gray-700"
          />
        </div>
        <div class="flex flex-col items-center gap-2">
          <USkeleton
            class="h-10 w-32 rounded-lg bg-gray-200 dark:bg-gray-700"
          />
          <USkeleton class="h-6 w-1 bg-gray-200 dark:bg-gray-700" />
          <USkeleton
            class="h-10 w-28 rounded-lg bg-gray-200 dark:bg-gray-700"
          />
        </div>
      </div>
    </div>
    <p v-if="error" style="color: red">
      {{ error }}
    </p>
    <div v-if="svgHtml" v-html="svgHtml" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{ code?: string }>()

const loading = ref(true)
const error = ref('')
const svgHtml = ref('')

onMounted(async () => {
  if (!props.code) {
    error.value = 'No code'
    loading.value = false
    return
  }

  try {
    const { parseMermaidToExcalidraw } =
      await import('@excalidraw/mermaid-to-excalidraw')
    const { convertToExcalidrawElements, exportToSvg } =
      await import('@excalidraw/excalidraw')

    // Step 1: Mermaid → skeleton
    const { elements: skeletonElements, files } =
      await parseMermaidToExcalidraw(props.code)

    // Step 2: skeleton → full Excalidraw elements
    const elements = convertToExcalidrawElements(skeletonElements)

    // Step 3: Export to SVG
    const svg = await exportToSvg({
      elements,
      files: files || {},
      appState: {
        exportWithDarkMode: false,
        exportBackground: false,
      },
    })

    svgHtml.value = svg.outerHTML
    loading.value = false
  } catch (e) {
    console.error('🔥 Error:', e)
    error.value = String(e)
    loading.value = false
  }
})
</script>

<style scoped>
.mermaid-excalidraw {
  display: flex;
  justify-content: center;
}
.mermaid-excalidraw :deep(svg) {
  max-width: 100%;
  height: auto;
}
</style>
