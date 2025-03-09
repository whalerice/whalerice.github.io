---
title: "Docker 기초 가이드"
description: "Docker의 기본 개념과 명령어, 실제 활용 사례를 알아봅니다."
date: "2024-03-16"
tags: ["Docker", "DevOps", "컨테이너"]
---

## Docker란?

Docker는 애플리케이션을 컨테이너화하여 개발, 배포, 실행을 더 쉽게 만들어주는 도구입니다.

### 기본 명령어

```bash
# 이미지 다운로드
docker pull ubuntu:latest

# 컨테이너 실행
docker run -d -p 80:80 nginx

# 컨테이너 목록 확인
docker ps
```

## Dockerfile 작성하기

```dockerfile
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### Docker Compose 사용법

```yaml
version: "3"
services:
  web:
    build: .
    ports:
      - "3000:3000"
```
