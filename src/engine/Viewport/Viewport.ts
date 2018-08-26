export class Viewport {
  private _width: number;
  private _height: number;
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(
    width: number,
    height: number,
    documentRef: Document = document
  ) {
    this._width = width || 800;
    this._height = height || 600;

    const canvas = documentRef.createElement('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    const ratio = this.getPixelRatio(context);

    canvas.setAttribute('width', Math.round(this.width * ratio) + '');
    canvas.setAttribute('height', Math.round(this.height * ratio) + '');

    canvas.style.width = this.width + 'px';
    canvas.style.height = this.height + 'px';

    context.setTransform(ratio, 0, 0, ratio, 0 ,0);

    this.context = context;
    this.canvas = canvas;
  }

  public getCanvas() {
    return this.canvas;
  }

  public getContext() {
    return this.context;
  }

  private getPixelRatio(context: CanvasRenderingContext2D, windowRef: Window = window) {
    const backingStores = [
      'webkitBackingStorePixelRatio',
      'mozBackingStorePixelRatio',
      'msBackingStorePixelRatio',
      'oBackingStorePixelRatio',
      'backingStorePixelRatio'
    ];

    const deviceRatio = windowRef.devicePixelRatio;

    const backingRatio = backingStores.filter(
      backingStore => context.hasOwnProperty(backingStore)
    )[0];

    const resultRatio = backingRatio ? (context as any)[backingRatio] : 1;

    return deviceRatio / resultRatio;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }
}
