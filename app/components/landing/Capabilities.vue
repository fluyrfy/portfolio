<template>
  <UPageSection
    title="Core Competencies"
    description="結合 AI 實踐與穩健的系統開發經驗，提供全方位的技術解決方案。"
    :ui="{
      container: 'px-0 py-12',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <UPageCard
        v-for="(skill, index) in skills"
        :key="index"
        :title="skill.title"
        :description="skill.description"
        :icon="skill.icon"
        variant="outline"
        :ui="{
          wrapper: 'bg-elevated/30 backdrop-blur-sm transition-all hover:border-primary',
          title: 'text-base font-semibold',
          description: 'text-sm text-muted leading-relaxed'
        }"
      />
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
const skills = [
  {
    title: 'AI 產品落地',
    description: '負責 AI 產品完整開發流程，擅長將模型推理轉化為可穩定運行的商用 API 與服務。',
    icon: 'i-lucide-brain-circuit'
  },
  {

    title: '設計導向開發',
    description: '深諳設計邏輯，能將複雜的互動細節與動效精準還原，在確保技術實作性的同時，極大化使用者體驗的精緻度。',
    icon: 'i-lucide-pencil-ruler'
  },
  {
    title: '多端實踐與交付',
    description: '熟悉 Web、App 多端技術開發流程，能根據產品階段選擇最合適的技術棧，實現從零到一的快速上線。',
    icon: 'i-lucide-layout-template'

  }
]
</script>
