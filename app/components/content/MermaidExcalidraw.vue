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
    <!-- Error：友善提示 -->
    <div
      v-else-if="error"
      class="flex flex-col items-center gap-3 py-8 text-gray-400"
    >
      <UIcon name="i-heroicons-puzzle-piece" class="size-12" />
      <p class="text-sm">Oops! Diagram took a coffee break ☕</p>
    </div>
    <div v-if="svgHtml" class="mermaid-svg-wrapper" v-html="svgHtml" />
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

    const viewBox = svg.getAttribute('viewBox')
    if (viewBox) {
      const [, , w, h] = viewBox.split(' ').map(Number)
      // 設定 width 為 100%，height 根據比例自動算
      svg.setAttribute('width', '100%')
      svg.setAttribute('height', '100%')
      svg.style.maxWidth = `${w}px`
      svg.style.height = 'auto'
    }

    svgHtml.value = svg.outerHTML
    loading.value = false
  } catch (e) {
    console.error('🔥 Error:', e)
    error.value = String(e)
    loading.value = false
  }
})
</script>

<style lang="scss" scoped>
.mermaid-excalidraw {
  display: flex;
  justify-content: center;
}
.mermaid-svg-wrapper {
  max-width: 100%;
  overflow-x: auto;
}
.mermaid-excalidraw :deep(svg) {
  max-width: 100%;
  height: auto;
}
</style>
