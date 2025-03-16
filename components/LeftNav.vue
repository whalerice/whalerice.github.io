<script setup lang="ts">
const route = useRoute();
const currentPath = computed(() => route.path);
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
        <USeparator />
      </li>
      <li class="pt-4">
        <NuxtLink :to="`/about`" class="flex items-center mb-2">
          <Icon name="i-lucide-baby" class="size-4 mr-2" />
          <span>About</span>
        </NuxtLink>
        <USeparator />
      </li>
    </ul>
  </div>
</template>
