<template>
  <div class="flex items-center justify-center space-x-1 my-8">
    <!-- 이전 페이지 버튼 -->
    <button
      @click="$emit('update:modelValue', currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-4 py-2 text-sm rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      이전
    </button>

    <!-- 페이지 번호들 -->
    <template v-for="page in displayedPages" :key="page">
      <button
        v-if="page !== '...'"
        @click="$emit('update:modelValue', page)"
        :class="[
          'px-4 py-2 text-sm rounded-md',
          currentPage === page ? 'bg-gray-900 text-white' : 'hover:bg-gray-100',
        ]"
      >
        {{ page }}
      </button>
      <span v-else class="px-2">{{ page }}</span>
    </template>

    <!-- 다음 페이지 버튼 -->
    <button
      @click="$emit('update:modelValue', currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 text-sm rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      다음
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: Number,
  totalPages: Number,
});

defineEmits(["update:modelValue"]);

const currentPage = computed(() => props.modelValue);

// 표시할 페이지 번호 계산
const displayedPages = computed(() => {
  const pages = [];
  const totalPages = props.totalPages;
  const current = currentPage.value;

  // 항상 표시할 페이지 수
  const delta = 2;

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 || // 첫 페이지
      i === totalPages || // 마지막 페이지
      (i >= current - delta && i <= current + delta) // 현재 페이지 주변
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return pages;
});
</script>
