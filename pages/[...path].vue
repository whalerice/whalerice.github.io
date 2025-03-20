<script setup lang="ts">
const dayjs = useDayjs();
const route = useRoute();
const router = useRouter();
const { data } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});
useSeoMeta(data.value?.seo || {});
</script>
<template>
  <UContainer>
    <template v-if="data">
      <div class="mb-10">
        <UButton
          icon="i-lucide-arrow-left"
          size="lg"
          color="neutral"
          variant="outline"
          @click="router.back()"
          >뒤로가기</UButton
        >
      </div>
      <div class="mb-10">
        <h1 class="text-2xl font-bold mb-2">{{ data.title }}</h1>
        <h3 class="text-sm text-gray-500">
          {{ dayjs(data.date).format("YYYY-MM-DD") }}
        </h3>
      </div>

      <ContentRenderer :value="data" class="prose" />
    </template>
    <div v-else class="flex flex-col items-center justify-center h-full">
      <h1 class="text-2xl font-bold mb-2">Page Not Found</h1>
      <p class="text-sm text-gray-500 mb-4">
        Oops! The content you're looking for doesn't exist.
      </p>

      <UButton
        class="font-bold"
        size="lg"
        color="neutral"
        variant="outline"
        @click="router.back()"
      >
        Go back home
      </UButton>
    </div>
  </UContainer>
</template>
