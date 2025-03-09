<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-xl font-bold">My Tech Blog</NuxtLink>
          <div class="space-x-4">
            <NuxtLink to="/" class="hover:text-blue-600">홈</NuxtLink>
            <NuxtLink to="/about" class="hover:text-blue-600">소개</NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>

    <footer class="bg-white shadow-md mt-8">
      <div class="container mx-auto px-4 py-6 text-center text-gray-600">
        © {{ new Date().getFullYear() }} My Tech Blog. All rights reserved.
      </div>
    </footer>
  </div>
</template>
