---
title: "React Hooks 완벽 가이드"
description: "React의 기본적인 Hook들의 사용법과 커스텀 Hook 만드는 방법을 알아봅니다."
date: "2024-03-18"
tags: ["React", "Hooks", "Frontend"]
---

## React Hooks 소개

Hook은 React 16.8에서 도입된 기능으로, 클래스 컴포넌트 없이 상태와 생명주기 기능을 사용할 수 있게 해줍니다.

### useState

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

### useEffect

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

## 커스텀 Hook 만들기

```jsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // ... 구현 내용
}
```
