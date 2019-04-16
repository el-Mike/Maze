interface IForEachCb<T> {
  (value: T, index?: number, array?: T[]): void;
}

export class List<T = any> implements Iterable<T> {
  private _items: T[];

  constructor(from: T[] = []) {
    this._items = [...from];
  }

  public getAll() {
    return this._items;
  }

  public each(cb: IForEachCb<T>) {
    this._items.forEach(cb);
  }

  public push(...items: T[]) {
    return this._items.push(...items);
  }

  public pop() {
    return this._items.pop();
  }

  public [Symbol.iterator]() {
    let pointer = 0;
    let items = this._items;

    return {
      next: (): IteratorResult<T> => ({
        done: pointer >= items.length,
        value: items[pointer++] || null,
      })
    };
  }
}
