<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<!-- <template>
  <UPageSection
    :title="page.experience.title"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-muted flex items-center text-nowrap gap-2"
        >
          <p class="text-sm">
            {{ experience.date }}
          </p>
          <USeparator />
          <ULink
            class="flex items-center gap-1"
            :to="experience.company.url"
            target="_blank"
          >
            <span class="text-sm">
              {{ experience.position }}
            </span>
            <div
              class="inline-flex items-center gap-1"
              :style="{ color: experience.company.color }"
            >
              <span class="font-medium">{{ experience.company.name }}</span>
              <UIcon :name="experience.company.logo" />
            </div>
          </ULink>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template> -->
<template>
  <UPageSection
    :title="page.experience.title"
    :ui="{
      container: '!p-0 gap-6',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-6',
    }"
  >
    <template #description>
      <div class="flex flex-col gap-8">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, x: -10 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :transition="{ delay: 0.2 * index }"
          :in-view-options="{ once: true }"
          class="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] gap-4 items-start"
        >
          <p
            class="text-xs sm:text-sm font-mono text-muted/80 pt-1 uppercase tracking-wider"
          >
            {{ experience.date }}
          </p>

          <div class="flex flex-col gap-1">
            <div class="flex flex-wrap items-baseline gap-x-2">
              <span
                class="text-sm sm:text-base font-semibold text-gray-900 dark:text-white"
              >
                {{ experience.position }}
              </span>

              <span class="text-xs text-muted/60 hidden sm:inline">@</span>

              <ULink
                class="flex items-center gap-1 group"
                :to="experience.company.url"
                target="_blank"
              >
                <span
                  class="text-sm font-medium transition-colors"
                  :style="{ color: experience.company.color }"
                >
                  {{ experience.company.name }}
                </span>
                <UIcon
                  :name="experience.company.logo"
                  class="w-4 h-4 transition-transform group-hover:scale-110"
                  :style="{ color: experience.company.color }"
                />
              </ULink>
            </div>
          </div>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped></style>
