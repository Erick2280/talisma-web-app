import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private store: Storage | null = null;
  private initialization: Promise<void>;
  private history: Array<{ value: number, time: Date }> = [];

  constructor(private storage: Storage) {
    this.initialization = this.initialize();
  }

  async initialize() {
    const store = await this.storage.create();
    const history = await store.get('history');
    if (history) {
      this.history = history;
    }
    this.store = store;
  }

  async get(key: string) {
    await this.initialization;
    return this.store!.get(key);
  }

  async set(key: string, value: unknown) {
    await this.initialization;
    return this.store!.set(key, value);
  }

  async remove(key: string) {
    await this.initialization;
    return this.store!.remove(key);
  }

  async clear() {
    await this.initialization;
    return this.store!.clear();
  }
  
  appendToArray(element: { value: number, time: Date}) {
    this.history.push(element);
    this.set('history', this.history);
  }
}
