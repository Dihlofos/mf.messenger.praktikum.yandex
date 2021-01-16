import { Message } from '../interface';

interface StoreProps {
  token: string | null;
  userId: number | null;
  messages: {
    [key: string]: Message[]
  } | null;
}

export default class Store {
  store: StoreProps;

  static __instance: Store;

  constructor() {
    if (Store.__instance) {
      return Store.__instance;
    }
    this.store = { token: null, userId: null, messages: {} };

    Store.__instance = this;
  }

  set(newValue: Record<string, any>) {
    this.store = { ...this.store, ...newValue };
  }

  get(key: keyof StoreProps): any {
    return this.store[key] ?? null;
  }
}
