<script setup lang="ts">
const dayjs = useDayjs();
const currentPage = ref(1);

const { data, refresh } = await useAsyncData("posts", async () => {
  const limit = 5;
  const [total, posts] = await Promise.all([
    queryCollection("content").count() || 0,
    queryCollection("content")
      .skip((currentPage.value - 1) * limit)
      .limit(limit)
      .all() || [],
  ]);

  return { total, posts, limit };
});

useSeoMeta({
  title: "고래밥양념",
  description: "고래밥양념 블로그",
});

watch(currentPage, async () => {
  await refresh();
});
</script>

<template>
  <UContainer>
    <h2 class="text-2xl font-bold mb-4">Posts</h2>
    <div>
      <template v-for="post in data?.posts" :key="post.id">
        <NuxtLink :to="post.path" class="flex items-center py-5">
          <nuxt-img
            v-if="post.image"
            :src="post.image"
            :alt="post.title"
            class="w-24 h-24 object-cover rounded-md mr-5"
          />
          <div class="flex-auto">
            <h4 class="text-md font-bold">{{ post.title }}</h4>
            <p class="text-sm text-gray-500">{{ post.description }}</p>
            <p class="text-xs text-gray-400 flex items-center">
              <UIcon name="i-lucide-calendar" class="size-3 mr-1" />
              {{ dayjs(post.date).format("YYYY-MM-DD") }}
            </p>

            <div class="mt-1">
              <UBadge
                v-for="tag in post.tags"
                :key="tag"
                color="neutral"
                variant="outline"
                class="rounded-full mr-1 text-xs text-gray-500"
              >
                {{ tag }}
              </UBadge>
            </div>
          </div>
        </NuxtLink>
        <USeparator />
      </template>
    </div>
    <div class="flex justify-center">
      <UPagination
        v-model:page="currentPage"
        class="mt-4"
        size="xl"
        :items-per-page="data?.limit"
        :total="data?.total"
      />
    </div>
    <!-- total: {{ data?.total }} -->
  </UContainer>
</template>
