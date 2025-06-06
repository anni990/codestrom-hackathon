
declare global {
  interface Window {
    THREE: any;
    AOS: {
      init: (options?: any) => void;
      refresh: () => void;
    };
  }
}

export {};
