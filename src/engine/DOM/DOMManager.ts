import { isString } from '@engine/utils';

export class DOMManager {
  /**
 * Variable for DOMManager Singleton instance.
 */
  private static _instance: DOMManager;

  private constructor(private documentRef: HTMLDocument = document) {}

  public static getInstance(documentRef: HTMLDocument = document) {
    return this._instance || (this._instance = new this(documentRef));
  }

  public createElement<T extends HTMLElement = HTMLElement>(tag: string) {
    return this.documentRef.createElement(tag) as T;
  }

  public getElementById<T extends HTMLElement = HTMLElement>(id: string) {
    return this.documentRef.getElementById(id) as T;
  }

  public addToDOM(element: HTMLElement | string, parent: HTMLElement | string = null) {
    if (isString(element)) {
      element = this.documentRef.getElementById(element);
    }

    if (!parent) {
      parent = this.documentRef.body;
    }

    if (isString(parent)) {
      parent = this.documentRef.getElementById(parent);
    }

    if (!element || !parent) {
      return element;
    }

    parent.appendChild(element);

    return element;
  }
}
