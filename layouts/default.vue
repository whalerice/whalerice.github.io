<script setup lang="ts">
import Header from "@/components/Header.vue";
import LeftNav from "@/components/LeftNav.vue";
import { useWindowSize } from "@vueuse/core";

const route = useRoute();
const showLeftNav = ref<boolean>(false);
const { width } = useWindowSize();
const isMobile = ref(true);
const year = ref(new Date().getFullYear());

watch(width, (value) => {
  isMobile.value = value < 768;
});

watch(route, (newVal) => {
  showLeftNav.value = false;
});

onMounted(() => {
  isMobile.value = width.value < 768;
});
</script>
<template>
  <article class="layout flex">
    <section v-if="!isMobile" class="lnb flex-shrink-0">
      <LeftNav />
    </section>
    <section class="main flex-auto">
      <section class="top">
        <Header v-model:is-open="showLeftNav" v-model:is-mobile="isMobile" />
      </section>
      <section class="content">
        <slot />
      </section>
      <footer class="footer">
        <p>© {{ year }} 고래밥양념. Powered by 고래밥양념</p>
      </footer>
    </section>
    <!-- <nuxt-img
      src="/img/261574805-5af726c5-0113-4676-9ee9-c464393caee0.png"
      alt="logo"
    /> -->
    <CookieConsent />
  </article>
</template>
