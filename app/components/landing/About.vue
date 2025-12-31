<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.about.title"
    :description="page.about.description"
    :ui="{
      container: '!p-0',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      // description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <template #description>
      <MDC
        :value="page.about.description"
        class="mt-4 text-left text-sm sm:text-md text-muted leading-relaxed whitespace-pre-line text-balance"
      />
    </template>
  </UPageSection>
</template>

<style scoped></style>
