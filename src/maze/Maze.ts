import {
  Game,
  Group,
  PhysicalObject,
} from '../engine';

import { Obstacle } from './Obstacle';
import { Mazer } from './Mazer';

interface MazeConfig {
  parentId: string;
  width?: number;
  height?: number;
}

const GAME_CONFIG = {
  backgroundColor: 'rgb(221, 221, 221)',
};

export class Maze {
  private game: Game;

  constructor(
    private config: MazeConfig,
    private documentRef: HTMLDocument = document
  ) {
    this.game = new Game({
      parentElement:  this.documentRef.getElementById(this.config.parentId) as HTMLElement,
      width: this.config.width,
      height: this.config.height,
      backgroundColor: GAME_CONFIG.backgroundColor,
      showFps: true,
    });
  }

  public startGame() {
    const state = this.game.getState();
    const graphics = this.game.getGraphics();
    const keyboard = this.game.getKeyboard();

    const obstacles = [
      new Obstacle(graphics, 300, 0, 10, 400, 'obstacle1'),
      new Obstacle(graphics, 600, this.config.height - 400, 10, 400, 'obstacle2'),
    ];

    const obstaclesGroup = new Group('Obstacles');

    const mazerObject = new PhysicalObject('mazer1');
    mazerObject.setPosition(140, 50);
    
    const mazer = new Mazer(graphics, keyboard, mazerObject);
    mazerObject.setBody(mazer);

    obstaclesGroup.add(...obstacles);

    state.addGameObjects(
      obstaclesGroup,
      mazerObject,
    );

    this.game.start();
  }
}
