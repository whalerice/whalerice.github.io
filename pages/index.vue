<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">나의 기술 블로그</h1>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="md:col-span-1">
        <SearchBar @search="handleSearch" />
        <TagFilter :tags="allTags" v-model:selectedTags="selectedTags" />
      </div>

      <div class="md:col-span-3">
        <div v-if="pending" class="text-center py-8">
          <p class="text-gray-600">글 목록을 불러오는 중...</p>
        </div>
        <div v-else-if="!articles?.length" class="text-center py-8">
          <p class="text-gray-600">작성된 글이 없습니다.</p>
        </div>
        <div v-else-if="filteredArticles.length === 0" class="text-center py-8">
          <p class="text-gray-600">검색 결과가 없습니다.</p>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="article in filteredArticles"
            :key="article._path"
            class="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 class="text-xl font-semibold mb-2">
              <NuxtLink :to="article._path" class="hover:text-blue-600">
                {{ article.title }}
              </NuxtLink>
            </h2>
            <p class="text-gray-600 mb-4">{{ article.description }}</p>
            <div class="flex flex-wrap gap-2 mb-3">
              <span
                v-for="tag in article.tags"
                :key="tag"
                class="px-2 py-1 bg-gray-100 text-sm rounded-full text-gray-600"
              >
                {{ tag }}
              </span>
            </div>
            <div class="text-sm text-gray-500">
              {{ new Date(article.date).toLocaleDateString() }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

definePageMeta({
  layout: "default",
});

const searchQuery = ref("");
const selectedTags = ref([]);
const allTags = ref([]);

// 모든 문서 가져오기
const { data: articles, pending } = await useAsyncData(
  "articles",
  () => {
    return queryContent().sort({ date: -1 }).find();
  },
  {
    transform: (articles) => {
      console.log("Raw articles:", articles); // 디버깅용
      return articles.filter((article) => article._type === "markdown");
    },
  }
);

// 검색 처리
const handleSearch = (query) => {
  searchQuery.value = query;
};

// 모든 태그 수집
watchEffect(() => {
  const tags = new Set();
  if (articles.value) {
    articles.value.forEach((article) => {
      if (article.tags) {
        article.tags.forEach((tag) => tags.add(tag));
      }
    });
  }
  allTags.value = Array.from(tags);
});

// 글 필터링
const filteredArticles = computed(() => {
  if (!articles.value) return [];

  return articles.value.filter((article) => {
    // 검색어 필터링
    const matchesSearch =
      searchQuery.value === "" ||
      article.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      article.description
        ?.toLowerCase()
        .includes(searchQuery.value.toLowerCase());

    // 태그 필터링
    const matchesTags =
      selectedTags.value.length === 0 ||
      (article.tags &&
        selectedTags.value.every((tag) => article.tags.includes(tag)));

    return matchesSearch && matchesTags;
  });
});
</script>
