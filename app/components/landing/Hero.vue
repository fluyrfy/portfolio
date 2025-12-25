<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { global } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()

const isImageLoaded = ref(false)
// const imgRef = ref<HTMLImageElement | null>(null)

onMounted(() => {
  const src = global.picture?.light || global.picture?.dark
  if (src) {
    const img = new Image()
    img.onload = () => {
      isImageLoaded.value = true
    }
    img.src = src
    // 處理已快取的情況
    if (img.complete) {
      isImageLoaded.value = true
    }
  }
})
</script>

<template>
  <UPageHero
    class="min-h-[calc(100vh-40px)] flex items-center justify-center"
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'text-shadow-md max-w-sm mx-auto sm:max-w-md lg:max-w-lg',
      links: 'mt-4 flex-col justify-center items-center',
      wrapper: 'py-0', // 移除原有的 py 讓 flex 居中發揮作用
      container: 'flex flex-col justify-center'
    }"
  >
    <template #headline>
      <Motion
        :initial="{ scale: 0.9, opacity: 0 }"
        :animate="{ scale: 1, opacity: 1 }"
        :transition="{ duration: 0.4, delay: 0.1 }"
      >
        <div class="relative size-18">
          <USkeleton
            v-if="!isImageLoaded"
            class="absolute inset-0 size-18 rounded-full"
            :ui="{ background: 'bg-gray-100 dark:bg-gray-800' }"
          />

          <UColorModeAvatar
            class="size-18 ring ring-default ring-offset-3 ring-offset-(--ui-bg) transition-opacity duration-300 personal-avatar"
            :class="isImageLoaded ? 'opacity-100' : 'opacity-0'"
            :light="global.picture?.light!"
            :dark="global.picture?.dark!"
            :alt="global.picture?.alt!"
          >
            <template #default="{ src, alt }">
              <img
                :src="src"
                :alt="alt"
                width="72"
                height="72"
                loading="eager"
                fetchpriority="high"
                decoding="sync"
                class="rounded-full object-cover personal-avatar"
                @load="isImageLoaded = true"
                @error="isImageLoaded = true"
              >
            </template>
          </UColorModeAvatar>
        </div>
      </Motion>
    </template>

    <template #title>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
        class="whitespace-pre-line leading-tight tracking-tight"
      >
        {{ page.title }}
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.3
        }"
      >
        {{ page.description }}
      </Motion>
    </template>

    <template #links>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.5
        }"
      >
        <div
          v-if="page.hero.links"
          class="flex items-center gap-2"
        >
          <UButton
            v-bind="page.hero.links[0]"
            target="_blank"
            rel="noopener noreferrer"
          />
          <UButton
            :color="global.available ? 'success' : 'error'"
            variant="ghost"
            class="gap-2"
            :to="global.available ? global.meetingLink : ''"
            :label="global.available ? 'Open to Work' : 'Currently Employed'"
          >
            <template #leading>
              <span class="relative flex size-2">
                <span
                  class="absolute inline-flex size-full rounded-full opacity-75"
                  :class="global.available ? 'bg-success animate-ping' : 'bg-error'"
                />
                <span
                  class="relative inline-flex size-2 scale-90 rounded-full"
                  :class="global.available ? 'bg-success' : 'bg-error'"
                />
              </span>
            </template>
          </UButton>
        </div>
      </Motion>

      <div class="flex flex-wrap justify-center gap-3 mt-12 max-w-2xl mx-auto">
        <Motion
          v-for="(skill, index) in page.hero.skills"
          :key="index"
          :initial="{ opacity: 0, y: 10 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.6 + index * 0.05 }"
        >
          <UBadge
            :label="skill.label"
            :icon="skill.icon"
            variant="subtle"
            size="md"
            class="rounded-full px-3 py-1 font-medium ring-1 ring-inset ring-gray-200 dark:ring-gray-800 transition-all hover:scale-105"
            color="neutral"
          />
        </Motion>
      </div>
      <!-- <UMarquee
      pause-on-hover
      class="py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:40s]"
    >
      <Motion
        v-for="(img, index) in page.hero.images"
        :key="index"
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: index * 0.1
        }"
      >
        <NuxtImg
          width="234"
          height="234"
          class="rounded-lg aspect-square object-cover"
          :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'"
          v-bind="img"
        />
      </Motion>
    </UMarquee> -->
    </template>
  </UPageHero>
</template>
