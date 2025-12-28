<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})

// 從 app.config 抓取全域的聯絡資訊（如 Email）
const appConfig = useAppConfig()
</script>

<template>
  <UPageCTA
    id="contact"
    :title="page.cta.title"
    :description="page.cta.description"
    align="center"
  >
    <template #links>
      <UButton
        size="lg"
        color="black"
        :label="page.cta.button.label"
        :icon="page.cta.button.icon"
        :to="appConfig.global.meetingLink"
        target="_blank"
      />
    </template>
  </UPageCTA>
</template>
