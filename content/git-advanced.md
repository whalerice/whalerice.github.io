---
title: "Git 고급 사용법 마스터하기"
description: "Git의 고급 기능과 실무에서 자주 사용되는 명령어들을 상세히 알아봅니다."
date: "2024-03-15"
tags: ["Git", "버전관리", "협업"]
---

## Git 고급 기능

### Rebase vs Merge

rebase와 merge의 차이점과 각각 언제 사용해야 하는지 알아봅시다.

```bash
# merge 예제
git checkout main
git merge feature

# rebase 예제
git checkout feature
git rebase main
```

## Git Flow 전략

```mermaid
graph TD
    A[main] --> B[develop]
    B --> C[feature]
    B --> D[release]
    D --> A
```

### 유용한 Git 명령어

```bash
# 특정 커밋 되돌리기
git revert <commit-hash>

# 이전 커밋 수정
git commit --amend

# 특정 파일의 변경 이력 확인
git log -p <file>
```
