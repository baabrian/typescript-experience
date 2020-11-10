interface ModelAttributees {}

interface Sync {}

interface Events {
  on(eventName: string, callback: () => void);
  trigger(eventName: string): void;
}

export class Model {}
