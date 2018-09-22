import {
  Rectangle,
  Vector2,
  GameObject,
  Body,
  Graphics,
  Keyboard,
} from '../engine';

export class Mazer extends Body {
  private static DEFAULT_COLOR = 'rgb(115, 195, 183)';

  private static WIDTH = 10;
  private static HEIGHT = 10;

  constructor(
    private graphics: Graphics,
    private keyboard: Keyboard,
    gameObject: GameObject
  ) {
    super(gameObject);
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
  }

  render() {
    const rect = new Rectangle(this.position.x, this.position.y, Mazer.WIDTH, Mazer.HEIGHT);

    this.graphics.setFillColor(Mazer.DEFAULT_COLOR);
    this.graphics.drawRect(rect);
  }
}
