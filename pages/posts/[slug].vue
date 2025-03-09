<template>
  <div class="container mx-auto px-4 py-8">
    <!-- 뒤로가기 버튼 추가 -->
    <NuxtLink
      to="/"
      class="inline-flex items-center mb-6 text-gray-600 hover:text-gray-900 text-sm"
    >
      <svg
        class="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      목록으로 돌아가기
    </NuxtLink>

    <div v-if="pending" class="text-center">
      <p>로딩 중...</p>
    </div>
    <div v-else-if="error">
      <p class="text-red-500">글을 불러오는데 실패했습니다.</p>
    </div>
    <article v-else class="prose max-w-none">
      <!-- 포스트 헤더 영역 -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
        <div
          class="flex items-center justify-between text-gray-600 border-b pb-4"
        >
          <div>
            <time class="block mb-2 text-sm">
              {{
                new Date(post.date).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }}
            </time>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-2 py-1 bg-gray-100 text-sm rounded-full hover:bg-gray-200 cursor-pointer"
                @click="navigateToTag(tag)"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 마크다운 컨텐츠를 HTML로 변환하여 표시 -->
      <div class="markdown-body" v-html="renderedContent"></div>
    </article>
  </div>
</template>

<script setup>
import { marked } from "marked";

const router = useRouter();
const route = useRoute();
const {
  data: post,
  pending,
  error,
} = await useFetch(`/api/posts/${route.params.slug}`);

// 마크다운을 HTML로 변환
const renderedContent = computed(() => {
  if (!post.value?.content) return "";
  return marked(post.value.content);
});

// 태그 클릭시 해당 태그로 필터링된 목록 페이지로 이동
const navigateToTag = (tag) => {
  router.push({
    path: "/",
    query: { tag },
  });
};

// SEO를 위한 메타 정보 강화
useHead(() => ({
  title: post.value?.title
    ? `${post.value.title} - 블로그 제목`
    : "블로그 제목",
  meta: [
    {
      name: "description",
      content: post.value?.description || "블로그 설명",
    },
    // Open Graph 메타 태그
    {
      property: "og:title",
      content: post.value?.title,
    },
    {
      property: "og:description",
      content: post.value?.description,
    },
    {
      property: "og:type",
      content: "article",
    },
    // Twitter 카드
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:title",
      content: post.value?.title,
    },
    {
      name: "twitter:description",
      content: post.value?.description,
    },
    // 작성일 메타데이터
    {
      property: "article:published_time",
      content: post.value?.date,
    },
    // 태그 메타데이터
    {
      property: "article:tag",
      content: post.value?.tags?.join(","),
    },
  ],
}));

// marked 옵션 설정 - 제목 수준 조정
marked.setOptions({
  headerIds: true,
  headerPrefix: "heading-",
  // h1을 h2로, h2를 h3로 등 한 단계씩 낮춤
  walkTokens: (token) => {
    if (token.type === "heading") {
      token.depth = Math.min(token.depth + 1, 6); // 최대 h6까지만
    }
  },
});
</script>

<style>
/* 마크다운 스타일링을 위해 @tailwindcss/typography 플러그인 필요 */

/* 마크다운 스타일 개선 */
.markdown-body {
  @apply max-w-none;
}

/* 제목 스타일 */
.markdown-body h2 {
  @apply text-2xl font-bold mt-8 mb-4;
}

.markdown-body h3 {
  @apply text-xl font-bold mt-6 mb-3;
}

.markdown-body h4 {
  @apply text-lg font-semibold mt-5 mb-2;
}

.markdown-body h5 {
  @apply text-base font-semibold mt-4 mb-2;
}

.markdown-body h6 {
  @apply text-sm font-semibold mt-4 mb-2;
}

/* 텍스트 스타일 */
.markdown-body p {
  @apply text-base mb-4 leading-relaxed text-gray-800;
}

.markdown-body strong {
  @apply font-bold;
}

.markdown-body em {
  @apply italic;
}

/* 링크 스타일 */
.markdown-body a {
  @apply text-blue-600 hover:text-blue-800 underline;
}

/* 코드 스타일 */
.markdown-body code {
  @apply bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800;
}

.markdown-body pre {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg my-4 overflow-x-auto;
}

.markdown-body pre code {
  @apply bg-transparent text-inherit p-0;
}

/* 리스트 스타일 */
.markdown-body ul,
.markdown-body ol {
  @apply text-base mb-4 pl-4;
}

.markdown-body li {
  @apply mb-1.5;
}

/* 인용구 스타일 */
.markdown-body blockquote {
  @apply text-base border-l-4 border-gray-300 pl-4 py-2 my-4 text-gray-600 italic;
}

/* 테이블 스타일 */
.markdown-body table {
  @apply w-full border-collapse mb-4;
}

.markdown-body th,
.markdown-body td {
  @apply text-sm px-3 py-2;
}

/* 이미지 스타일 */
.markdown-body img {
  @apply max-w-full h-auto rounded-lg my-4;
}

/* 구분선 스타일 */
.markdown-body hr {
  @apply my-8 border-t border-gray-300;
}
</style>
