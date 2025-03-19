<script setup lang="ts">
const showBanner = ref(true);
const cookieConsent = useCookie("cookie-consent", {
  maxAge: 365 * 24 * 60 * 60, // 1년
  path: "/",
  sameSite: "strict",
  secure: true,
});

onMounted(() => {
  if (cookieConsent.value) {
    showBanner.value = false;
  }
});

const acceptCookies = () => {
  cookieConsent.value = "accepted";
  showBanner.value = false;
  // Google Analytics 활성화
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "granted",
    });
  }
};

const rejectCookies = () => {
  cookieConsent.value = "rejected";
  showBanner.value = false;
  // Google Analytics 비활성화
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
    });
  }
};
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-y-full"
    enter-to-class="transform translate-y-0"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="transform translate-y-0"
    leave-to-class="transform translate-y-full"
  >
    <div
      v-if="showBanner"
      class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-100"
    >
      <div class="px-4 py-4">
        <div class="flex flex-col items-start justify-between gap-4">
          <div class="flex items-start gap-3">
            <UIcon
              name="i-lucide-shield-check"
              class="size-5 text-primary mt-0.5 flex-shrink-0"
            />
            <div class="text-sm text-gray-600">
              <p class="mb-2">
                이 웹사이트는 서비스 개선과 맞춤형 콘텐츠 제공을 위해 쿠키를
                사용합니다. Chrome의 개인정보 보호 정책 변경으로 인해 서드파티
                쿠키 사용이 제한될 수 있습니다.
              </p>
              <p class="flex items-center gap-1">
                자세한 내용은
                <NuxtLink
                  to="/privacy-policy"
                  class="text-primary hover:underline font-medium"
                >
                  개인정보처리방침
                </NuxtLink>
                을 참고해 주세요.
              </p>
            </div>
          </div>
          <div class="flex justify-end gap-2 w-full">
            <UButton color="primary" variant="solid" @click="acceptCookies">
              수락
            </UButton>
            <UButton color="neutral" variant="ghost" @click="rejectCookies">
              거절
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
