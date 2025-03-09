<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-3xl mx-auto">
      <!-- 프로필 섹션 수정 -->
      <section class="mb-12">
        <div class="flex items-start gap-6">
          <!-- 왼쪽 프로필 이미지 -->
          <div class="flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="프로필 이미지"
              class="w-24 h-24 rounded-full object-cover"
            />
          </div>

          <!-- 오른쪽 프로필 정보 -->
          <div class="flex-grow">
            <h1 class="text-3xl font-bold mb-2">고래밥양념</h1>
            <p class="text-gray-600 mb-4">Frontend Developer</p>
          </div>
        </div>
      </section>

      <!-- 소개 섹션 -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-4">About Me</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          안녕하세요! 프론트엔드 개발자 고래밥양념입니다. 사용자 경험을 개선하고
          효율적인 웹 애플리케이션을 만드는 것에 관심이 많습니다. 현재는 Nuxt3를
          주로 사용하여 개발하고 있습니다.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
const skills = [
  {
    name: "Frontend",
    technologies: ["JavaScript", "TypeScript", "React", "Vue.js", "Nuxt.js"],
  },
  {
    name: "Backend",
    technologies: ["Node.js", "Express", "Python", "Django"],
  },
  {
    name: "Database",
    technologies: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    name: "DevOps",
    technologies: ["Git", "Docker", "AWS", "CI/CD"],
  },
  {
    name: "Tools",
    technologies: ["VS Code", "Figma", "Postman"],
  },
];

const experiences = [
  {
    company: "ABC 테크",
    period: "2022 - 현재",
    description:
      "프론트엔드 개발자로서 웹 애플리케이션 개발 및 유지보수를 담당하고 있습니다.",
  },
  {
    company: "XYZ 솔루션즈",
    period: "2020 - 2022",
    description: "풀스택 개발자로 다양한 프로젝트에 참여했습니다.",
  },
];
</script>
