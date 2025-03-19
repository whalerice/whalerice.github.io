<script setup lang="ts">
const config = useAppConfig();

useSeoMeta({
  title: "고래밥양념",
  description: "고래밥양념 블로그",
});
const description = ref(
  `안녕하세요! 저는 프론트엔드 개발의 여정을 기록하는 블로그를 운영하고 있습니다. \n이곳은 제가 일상적으로 마주치는 기술적 도전과 해결책, 그리고 배움의 순간들을 담아내는 개인 공간입니다. \nVue, React, JavaScript, CSS 등 프론트엔드 생태계의 다양한 기술들을 탐구하며, 복잡한 문제를 해결하는 과정에서 얻은 인사이트를 기록합니다. 코드 스니펫부터 프로젝트 회고까지, 개발자로서 성장하는 과정을 솔직하게 나누고자 합니다. 완벽함보다는 꾸준한 기록과 발전에 초점을 맞추며, 미래의 제가 과거의 경험을 되돌아볼 수 있는 디지털 일지로 채워나갈 예정입니다.`
);
</script>
<template>
  <UContainer>
    <UAlert
      color="neutral"
      variant="subtle"
      title="고래밥양념 블로그"
      :description="description"
      icon="i-lucide-terminal"
      class="mb-4 whitespace-pre-line"
    />
    <UButton :to="config.github.url" target="_blank">
      <Icon name="i-lucide-github" />
      <span>GitHub</span>
    </UButton>
  </UContainer>
</template>
