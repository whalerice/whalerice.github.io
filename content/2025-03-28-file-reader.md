---
title: "FileReader 사용법: JavaScript와 TypeScript에서의 구현"
date: "2025-03-28"
description: "FileReader API를 JavaScript와 TypeScript에서 사용하는 방법과 Nuxt.js에서의 구현 예시를 알아봅니다."
tags: ["JavaScript", "TypeScript", "Nuxt.js", "FileReader"]
---

FileReader는 웹 브라우저에서 파일을 읽을 수 있게 해주는 Web API입니다. 이 글에서는 JavaScript와 TypeScript에서 FileReader를 사용하는 방법과 Nuxt.js에서의 구현 예시를 살펴보겠습니다.

## JavaScript에서 FileReader 사용하기

### 기본 사용법

```javascript
const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    console.log("파일 내용:", e.target.result);
  };

  reader.onerror = (error) => {
    console.error("파일 읽기 오류:", error);
  };

  reader.readAsText(file);
});
```

### 다양한 읽기 메서드

```javascript
const reader = new FileReader();

// 텍스트 파일로 읽기
reader.readAsText(file);

// Base64 문자열로 읽기
reader.readAsDataURL(file);

// ArrayBuffer로 읽기
reader.readAsArrayBuffer(file);

// 이진 문자열로 읽기
reader.readAsBinaryString(file);
```

## TypeScript에서 FileReader 사용하기

### 타입 정의와 함께 사용

```typescript
interface FileReaderEvent extends Event {
  target: FileReader;
  result: string | ArrayBuffer | null;
}

const fileInput =
  document.querySelector<HTMLInputElement>('input[type="file"]');

fileInput?.addEventListener("change", (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e: FileReaderEvent) => {
    console.log("파일 내용:", e.target.result);
  };

  reader.onerror = (error: ProgressEvent<FileReader>) => {
    console.error("파일 읽기 오류:", error);
  };

  reader.readAsText(file);
});
```

## Nuxt.js에서 FileReader 사용하기

### 컴포넌트에서 사용하기

```vue
<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <div v-if="fileContent">
      <h3>파일 내용:</h3>
      <pre>{{ fileContent }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const fileContent = ref<string>("");

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e: ProgressEvent<FileReader>) => {
    fileContent.value = e.target?.result as string;
  };

  reader.readAsText(file);
};
</script>
```

### 파일 업로드 컴포넌트 예시

```vue
<template>
  <div class="file-upload">
    <div class="drop-zone" @dragover.prevent @drop.prevent="handleDrop">
      <p>파일을 드래그하거나 클릭하여 업로드하세요</p>
      <input
        type="file"
        ref="fileInput"
        @change="handleFileChange"
        class="hidden"
      />
    </div>

    <div v-if="preview" class="preview">
      <img v-if="isImage" :src="preview" alt="미리보기" />
      <pre v-else>{{ preview }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const fileInput = ref<HTMLInputElement | null>(null);
const preview = ref<string>("");
const isImage = ref(false);

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (!file) return;

  readFile(file);
};

const handleDrop = (event: DragEvent) => {
  const file = event.dataTransfer?.files[0];
  if (!file) return;

  readFile(file);
};

const readFile = (file: File) => {
  const reader = new FileReader();

  reader.onload = (e: ProgressEvent<FileReader>) => {
    const result = e.target?.result as string;
    preview.value = result;
    isImage.value = file.type.startsWith("image/");
  };

  if (file.type.startsWith("image/")) {
    reader.readAsDataURL(file);
  } else {
    reader.readAsText(file);
  }
};
</script>

<style scoped>
.file-upload {
  max-width: 600px;
  margin: 0 auto;
}

.drop-zone {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
}

.drop-zone:hover {
  border-color: #666;
}

.hidden {
  display: none;
}

.preview {
  margin-top: 20px;
}

.preview img {
  max-width: 100%;
  max-height: 300px;
}

.preview pre {
  background: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}
</style>
```

## 주의사항

1. FileReader는 비동기적으로 작동합니다.
2. 큰 파일을 읽을 때는 메모리 사용량에 주의해야 합니다.
3. 브라우저 호환성을 확인해야 합니다.
4. 파일 크기 제한을 설정하는 것이 좋습니다.

## 결론

FileReader API는 웹 애플리케이션에서 파일을 읽고 처리하는 강력한 도구입니다. TypeScript를 사용하면 타입 안정성을 높일 수 있으며, Nuxt.js와 함께 사용하면 파일 업로드 기능을 쉽게 구현할 수 있습니다.
