<template>
  <div class="mb-6">
    <input
      type="text"
      v-model="searchQuery"
      @input="handleSearch"
      placeholder="검색어를 입력하세요..."
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</template>

<script setup>
const searchQuery = ref("");
const emit = defineEmits(["search"]);

const handleSearch = () => {
  emit("search", searchQuery.value);
};
</script>
