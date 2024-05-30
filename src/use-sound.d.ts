declare module 'use-sound' {
  interface Options {
    volume?: number;
    playbackRate?: number;
    interrupt?: boolean;
    soundEnabled?: boolean;
    sprite?: { [key: string]: [number, number] };
    onend?: () => void;
    onload?: () => void;
    onplayerror?: () => void;
    onplay?: () => void;
  }

  type PlayFunction = (options?: Options) => void;

  interface ReturnedValue {
    play: PlayFunction;
    stop: () => void;
    pause: () => void;
    isPlaying: boolean;
    sound: any;
  }

  export default function useSound(url: string, options?: Options): ReturnedValue;
}
