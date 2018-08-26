import { Viewport } from '../Viewport';

const KEYS_CODES = {
  RIGHT_ARROW: 39,
  LEFT_ARROW: 37,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
};

interface pressedKeysMap {
  [key: number]: boolean;
}

export class Keyboard {
  private pressedKeysMap: pressedKeysMap = {};

  private onKeyDownFn: EventListenerOrEventListenerObject;
  private onKeyUpFn: EventListenerOrEventListenerObject;

  constructor(
    private viewport: Viewport,
    private documentRef = document,
  ) {}

  public enable() {
    this.onKeyDownFn = (event: KeyboardEvent) => this.onKeyDown(event);
    this.onKeyUpFn = (event: KeyboardEvent) => this.onKeyUp(event);

    this.documentRef.addEventListener(
      'keydown',
      this.onKeyDownFn
    );

    this.documentRef.addEventListener(
      'keyup',
      this.onKeyUpFn,
    );
  }

  public disable() {
    this.documentRef.removeEventListener('keydown', this.onKeyDownFn);
    this.documentRef.removeEventListener('keyup', this.onKeyUpFn);
  }

  private onKeyDown(event: KeyboardEvent) {
    this.pressedKeysMap[event.keyCode] = true;
  }

  private onKeyUp(event: KeyboardEvent) {
    this.pressedKeysMap[event.keyCode] = false;
  }

  public get pressed() {
    return {
      right: this.pressedKeysMap[KEYS_CODES.RIGHT_ARROW],
      left: this.pressedKeysMap[KEYS_CODES.LEFT_ARROW],
      up: this.pressedKeysMap[KEYS_CODES.UP_ARROW],
      down: this.pressedKeysMap[KEYS_CODES.DOWN_ARROW],
    }
  }
}
