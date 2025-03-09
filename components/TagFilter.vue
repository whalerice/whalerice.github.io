<template>
  <div class="mb-6 space-y-2">
    <h3 class="text-lg font-semibold">태그</h3>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="tag in tags"
        :key="tag"
        @click="toggleTag(tag)"
        :class="[
          'px-3 py-1 rounded-full text-sm',
          selectedTags.includes(tag)
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
        ]"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
});

const selectedTags = ref([]);
const emit = defineEmits(["update:selectedTags"]);

const toggleTag = (tag) => {
  const index = selectedTags.value.indexOf(tag);
  if (index === -1) {
    selectedTags.value.push(tag);
  } else {
    selectedTags.value.splice(index, 1);
  }
  emit("update:selectedTags", selectedTags.value);
};
</script>
