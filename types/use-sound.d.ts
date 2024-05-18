declare module 'use-sound' {
    const useSound: (url: string, options?: any) => [() => void, { pause: () => void, stop: () => void }];
    export default useSound;
  }
  