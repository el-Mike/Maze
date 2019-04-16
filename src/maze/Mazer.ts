import {
  Rectangle,
  Vector2,
  RectangleObject,
  Body,
  Keyboard,
} from '../engine';

export class Mazer extends Body<RectangleObject> {
  private static DEFAULT_COLOR = 'rgb(115, 195, 183)';

  private static WIDTH = 10;
  private static HEIGHT = 10;

  constructor(
    private keyboard: Keyboard,
    gameObject: RectangleObject
  ) {
    super(gameObject);

    this.gameObject.width = Mazer.WIDTH;
    this.gameObject.height = Mazer.HEIGHT;
    this.gameObject.color = Mazer.DEFAULT_COLOR;
    this.gameObject.geom = new Rectangle(this.gameObject.x, this.gameObject.y, this.gameObject.width, this.gameObject.height);
  }

  update() {
    this.velocity.set(0, 0);

    if (this.keyboard.pressed.left) {
      this.velocity.add(new Vector2(-3, 0));
    }

    if (this.keyboard.pressed.right) {
      this.velocity.add(new Vector2(3, 0));
    }

    if (this.keyboard.pressed.up) {
      this.velocity.add(new Vector2(0, -3));
    }

    if (this.keyboard.pressed.down) {
      this.velocity.add(new Vector2(0, 3));
    }

    this.updatePosition();
    this.gameObject.geom = new Rectangle(this.gameObject.x, this.gameObject.y, this.gameObject.width, this.gameObject.height);
  }
}
