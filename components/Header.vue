<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

const config = useAppConfig();
const isOpen = defineModel<boolean>("isOpen");
const isMobile = defineModel<boolean>("isMobile");
const { width } = useWindowSize();

defineShortcuts({
  o: () => (isOpen.value = !isOpen.value),
});
</script>
<template>
  <header
    class="header flex items-center"
    :class="isMobile ? 'justify-between' : 'justify-end'"
  >
    <UDrawer v-if="isMobile" v-model:open="isOpen" direction="left">
      <UButton
        icon="i-lucide-align-justify"
        size="xl"
        color="primary"
        variant="solid"
      />

      <template #content>
        <LeftNav />
      </template>
    </UDrawer>

    <div>
      <UButton
        :to="config.github.url"
        target="_blank"
        icon="i-lucide-github"
        size="xl"
        color="neutral"
        variant="outline"
      />
    </div>
  </header>
</template>
