export {};

declare global {
  interface Window {
    // Google Analytics 타입 정의
    gtag: (command: string, ...args: any[]) => void;
  }
}
