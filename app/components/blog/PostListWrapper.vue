<template>
  <div>
    <div v-if="pending" class="space-y-4">
      <USkeleton v-for="i in 3" :key="i" class="h-24 w-full" />
    </div>

    <div v-else-if="!posts?.length" class="text-center py-12 text-muted">
      <Motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0],
        }"
        :transition="{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }"
      >
        <UIcon name="i-lucide-pen-line" class="size-8 mb-2" />
      </Motion>

      <Motion
        :initial="{ opacity: 0, y: 0 }"
        :animate="{
          opacity: 1,
          y: [0, -5, 0],
        }"
        :transition="{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.2,
        }"
      >
        <p class="text-sm font-medium">Coming Soon</p>
      </Motion>
    </div>

    <slot v-else :posts="posts" />
  </div>
</template>

<script setup lang="ts">
import type { BlogCollectionItem } from '@nuxt/content'

defineProps<{
  pending: boolean
  posts: BlogCollectionItem[] | null | undefined
}>()
</script>
