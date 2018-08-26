import {
  Playable,
  Rectangle,
  Graphics,
  Keyboard,
} from '../engine';

export class Mazer extends Playable {
  private static DEFAULT_COLOR = 'rgb(115, 195, 183)';

  private static WIDTH = 10;
  private static HEIGHT = 10;
  private static MOVE_SPEED = 3;

  constructor(
    private graphics: Graphics,
    private keyboard: Keyboard,
    private x: number,
    private y: number,
    name: string
  ) {
    super(name);
    this.moveSpeed = Mazer.MOVE_SPEED;
  }

  update() {
    if (this.keyboard.pressed.left) {
      this.x -= this.moveSpeed;
    }

    if (this.keyboard.pressed.right) {
      this.x += this.moveSpeed;
    }

    if (this.keyboard.pressed.up) {
      this.y -= this.moveSpeed;
    }

    if (this.keyboard.pressed.down) {
      this.y += this.moveSpeed;
    }
  }

  render() {
    const rect = new Rectangle(this.x, this.y, Mazer.WIDTH, Mazer.HEIGHT);

    this.graphics.setFillColor(Mazer.DEFAULT_COLOR);
    this.graphics.drawRect(rect);
  }
}
