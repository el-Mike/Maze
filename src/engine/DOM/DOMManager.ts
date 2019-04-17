import { isString } from '@engine/utils';

export class DOMManager {
  /**
 * Variable for DOMManager Singleton instance.
 */
  private static _instance: DOMManager;

  private _gameContainer: HTMLElement;

  private constructor(private documentRef: HTMLDocument = document) {}

  public static getInstance(documentRef: HTMLDocument = document) {
    return this._instance || (this._instance = new this(documentRef));
  }

  public createGameContainer(parent: HTMLElement | string, canvas: HTMLCanvasElement) {
    parent = parent || this.documentRef.createElement('div');

    const container = isString(parent)
      ? this.documentRef.getElementById(parent)
      : parent;

    this._gameContainer = container;

    this.addToDOM(canvas, this._gameContainer);

    return this._gameContainer;
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
