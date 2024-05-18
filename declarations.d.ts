declare module 'use-sound' {
    const useSound: (url: string, options?: {
      volume?: number;
      playbackRate?: number;
      loop?: boolean;
      soundEnabled?: boolean;
      interrupt?: boolean;
      onload?: () => void;
      onend?: () => void;
      onpause?: () => void;
      onplay?: () => void;
      format?: string[];
    }) => [() => void, { pause: () => void; stop: () => void }];
    export default useSound;
  }
  