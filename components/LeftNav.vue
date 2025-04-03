<script setup lang="ts">
const route = useRoute();
const currentPath = computed<string>(() => route.path);

// 태그 목록을 가져오는 함수
const getTags = async () => {
  const files = await queryCollection("content").all();
  const tags = new Set<string>();

  files.forEach((file) => {
    if (file.tags) {
      (file.tags as string[]).forEach((tag) => tags.add(tag));
    }
  });

  return Array.from(tags).sort();
};

const tags = ref<string[]>([]);

onMounted(async () => {
  tags.value = await getTags();
});
</script>
<template>
  <div class="left-nav">
    <h1 class="text-lg font-bold mb-10">고래밥양념</h1>

    <h4 class="text-sm font-bold">메뉴</h4>
    <ul>
      <li class="pt-4">
        <NuxtLink
          :to="`/`"
          class="flex items-center mb-2 w-full"
          :class="{ active: currentPath === '/' }"
        >
          <Icon name="i-lucide-list" class="size-4 mr-2" />
          <span>Posts</span>
        </NuxtLink>
        <!-- <USeparator /> -->
      </li>
      <!-- <li class="pt-4">
        <NuxtLink :to="`/about`" class="flex items-center mb-2">
          <Icon name="i-lucide-baby" class="size-4 mr-2" />
          <span>About</span>
        </NuxtLink>
        <USeparator />
      </li> -->
    </ul>

    <h4 class="text-sm font-bold mt-8 mb-4">태그</h4>
    <div>
      <UBadge
        v-for="tag in tags"
        :key="tag"
        color="neutral"
        variant="outline"
        class="rounded-full m-1 text-xs text-gray-400"
      >
        {{ tag }}
      </UBadge>
    </div>

    <!-- :to="`/tags/${tag}`"
    :class="{ active: currentPath === `/tags/${tag}` }" -->
    <div class="mt-auto">
      <NuxtLink
        to="/privacy-policy"
        class="text-xs text-gray-500 hover:text-gray-700 flex items-center"
      >
        <Icon name="i-lucide-shield-check" class="size-3 mr-1" />
        <span>개인정보처리방침</span>
      </NuxtLink>
    </div>
  </div>
</template>
