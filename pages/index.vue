<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-8">나의 기술 블로그</h1>

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
        <div v-else>
          <div class="divide-y divide-gray-200">
            <article
              v-for="article in paginatedArticles"
              :key="article._path"
              class="py-6 group"
            >
              <div class="flex justify-between items-start">
                <div class="flex-1">
                  <h2
                    class="text-xl font-semibold mb-2 group-hover:text-blue-600"
                  >
                    <NuxtLink :to="article._path" class="block">
                      {{ article.title }}
                    </NuxtLink>
                  </h2>
                  <p class="text-gray-600 text-sm mb-3">
                    {{ article.description }}
                  </p>
                  <div class="flex items-center gap-4 text-sm text-gray-500">
                    <time>
                      {{
                        new Date(article.date).toLocaleDateString("ko-KR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      }}
                    </time>
                    <div class="flex gap-2">
                      <span
                        v-for="tag in article.tags"
                        :key="tag"
                        class="text-gray-600 hover:text-blue-600 cursor-pointer"
                        @click.prevent="handleTagClick(tag)"
                      >
                        #{{ tag }}
                      </span>
                    </div>
                  </div>
                </div>

                <div v-if="article.thumbnail" class="ml-4 hidden sm:block">
                  <img
                    :src="article.thumbnail"
                    :alt="article.title"
                    class="w-24 h-24 object-cover rounded"
                  />
                </div>
              </div>
            </article>
          </div>

          <Pagination
            v-model="currentPage"
            :total-pages="totalPages"
            v-if="totalPages > 1"
          />
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
const currentPage = ref(1);
const itemsPerPage = 5; // 10에서 5로 변경

// queryContent 대신 API 사용
const { data: articles, pending } = await useFetch("/api/posts");

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

// 전체 페이지 수 계산
const totalPages = computed(() => {
  return Math.ceil(filteredArticles.value.length / itemsPerPage);
});

// 현재 페이지에 표시할 항목들
const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredArticles.value.slice(start, end);
});

// 검색이나 태그 필터링시 첫 페이지로 이동
watch([searchQuery, selectedTags], () => {
  currentPage.value = 1;
});

// 태그 클릭 핸들러 추가
const handleTagClick = (tag) => {
  selectedTags.value = [tag];
};
</script>

<style>
/* 호버 효과 */
.group:hover {
  @apply bg-gray-50;
}
</style>
