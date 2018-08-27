import { isString } from './utils/typeGuards';

import { PARENT_ELEMENT_NOT_DEFINED } from './errors';

import {
  IGameConfig,
  GameConfig,
} from './Config/GameConfig';

import { Viewport } from './Viewport';

import { State } from './State';

import {
  Graphics,
} from './Graphics';

import {
  Keyboard
} from './Input';

import {
  Loop
} from './Loop';

export class Game {
  // DOM related properties
  private gameContainer: HTMLElement;

  // game properties
  private config: GameConfig = {} as GameConfig;

  private viewport: Viewport;
  private keyboard: Keyboard;
  private graphics: Graphics;
  private state: State;

  private loop: Loop;

  constructor(
    gameConfig: IGameConfig,
    private documentRef: HTMLDocument = document,
  ) {
    if (!gameConfig.parentElement) {
      throw new Error(PARENT_ELEMENT_NOT_DEFINED);
    }
    this.config = new GameConfig(gameConfig);

    this.init();
  }

  private init() {
    this.viewport = new Viewport(this.config.width, this.config.height);
    this.keyboard = new Keyboard(this.viewport);
    this.graphics = new Graphics(this.viewport);
    this.state = new State();
    this.loop = new Loop(this.config.fpsLimit);
  
    this.gameContainer = isString(this.config.parentElement)
    ? this.documentRef.getElementById(this.config.parentElement) as HTMLElement
    : this.config.parentElement;

    this.gameContainer.appendChild(this.viewport.getCanvas());

    this.keyboard.enable();
  }

  public start() {
    this.loop.start(() => {
      this.update();
      this.renderFrame();
    });
  }

  public stop() {
    this.loop.stop();
  }

  private update() {
    this.state.getUpdateable().forEach(object => object.update());
  }

  private renderFrame() {
    const context = this.viewport.getContext();
    context.clearRect(0, 0, this.config.width, this.config.height);
  
    this.renderStage(context);
    this.renderObjects(context);

    if (this.config.showFps) {
      context.fillStyle = 'rgb(0, 0, 0)';
      context.font = "20px Arial";
      context.fillText(`FPS: ${this.loop.getFps()}`, this.config.width - 150, 50);
    }
  }

  private renderStage(context: CanvasRenderingContext2D) {
    // rendering background
    context.fillStyle = this.config.backgroundColor;
    context.fillRect(0, 0, this.config.width, this.config.height);
  }

  private renderObjects(context: CanvasRenderingContext2D) {
    // rendering game objects
    this.state.getGameObjects().forEach(object => object.render(context));
  }

  public getState() {
    return this.state;
  }

  public getGraphics() {
    return this.graphics;
  }

  public getKeyboard() {
    return this.keyboard;
  }
}
