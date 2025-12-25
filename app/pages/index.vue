<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <LandingWorkExperience :page />
    </UPageSection>
    <!-- <LandingTestimonials :page /> -->
    <div class="bg-gray-50/50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800">
      <LandingCapabilities :page />
    </div>

    <LandingBlog :page />
    <!-- <LandingFAQ :page /> -->
    <UPageSection
      class="bg-gray-50/50 dark:bg-gray-900/50 rounded-3xl my-16"
      :ui="{ container: 'py-12 sm:py-20' }"
    >
      <LandingCTA :page />
    </UPageSection>
  </UPage>
</template>
