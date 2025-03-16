<script setup lang="ts">
const config = useAppConfig();

useSeoMeta({
  title: "고래밥양념",
  description: "고래밥양념 블로그",
});
</script>
<template>
  <UContainer>
    <UAlert
      color="neutral"
      variant="subtle"
      title="고래밥양념 블로그"
      description="개발자의 일상과 기술적 인사이트를 공유하는 공간입니다. 웹 개발, 프로그래밍 팁, 그리고 개발자로서의 성장 이야기를 담고 있습니다."
      icon="i-lucide-terminal"
      class="mb-4"
    />
    <UButton :to="config.github.url" target="_blank">
      <Icon name="i-lucide-github" />
      <span>GitHub</span>
    </UButton>
  </UContainer>
</template>
