<script setup>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <ContentDoc>
      <template #default="{ doc }">
        <article class="prose prose-lg dark:prose-invert max-w-none">
          <div class="mb-8">
            <h1 class="text-4xl font-bold mb-4">{{ doc.title }}</h1>
            <p class="text-gray-600 mb-4">{{ doc.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in doc.tags"
                :key="tag"
                class="px-2 py-1 bg-gray-100 text-sm rounded-full text-gray-600"
              >
                {{ tag }}
              </span>
            </div>
            <time class="text-sm text-gray-500">
              {{ new Date(doc.date).toLocaleDateString() }}
            </time>
          </div>
          <ContentRenderer :value="doc" />
          <nav class="mt-8 pt-8 border-t">
            <NuxtLink to="/" class="text-blue-600 hover:underline">
              ← 목록으로 돌아가기
            </NuxtLink>
          </nav>
        </article>
      </template>
      <template #not-found>
        <div class="text-center py-8">
          <h1 class="text-4xl font-bold mb-4">페이지를 찾을 수 없습니다.</h1>
          <NuxtLink to="/" class="text-blue-600 hover:underline">
            홈으로 돌아가기
          </NuxtLink>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>
