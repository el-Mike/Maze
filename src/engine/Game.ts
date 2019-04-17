import { PARENT_ELEMENT_NOT_DEFINED } from './errors';

import {
  IGameConfig,
  GameConfig,
} from './Config/GameConfig';

import { DOMManager } from './DOM';

import { Viewport } from './Viewport';

import { State } from './State';

import {
  Keyboard
} from './Input';

import {
  Loop
} from './Loop';

import {
  Renderer,
  RendererFactory,
} from './Renderer';

import { GameObject } from './GameObject';

import {
  Body,
  World,
} from './Physics';

export class Game {
  private config: GameConfig = {} as GameConfig;

  private domManager: DOMManager;
  private viewport: Viewport;
  private keyboard: Keyboard;
  private state: State;

  private loop: Loop;

  private renderer: Renderer;

  private world: World;

  constructor(
    gameConfig: IGameConfig,
  ) {
    if (!gameConfig.parentElement) {
      throw new Error(PARENT_ELEMENT_NOT_DEFINED);
    }
    this.config = new GameConfig(gameConfig);

    this.init();
  }

  private init() {
    this.domManager = DOMManager.getInstance();

    this.viewport = new Viewport(this.config.width, this.config.height);
    this.keyboard = new Keyboard(this.viewport);
    this.state = new State();
    this.loop = new Loop(this.config.fpsLimit);

    this.world = new World();

    this.renderer = RendererFactory.getRenderer(this.viewport, this.config);

    this.domManager.createGameContainer(this.config.parentElement, this.viewport.getCanvas());

    this.keyboard.enable();
  }

  public start() {
    this.loop.start(() => this.step());
  }

  public stop() {
    this.loop.stop();
  }

  private step() {
    this.update();
    this.render();
  }

  private update() {
    this.world.update();

    this.state.displayList
      .getAll()
      .filter(object => object.updateable)
      .forEach(object => object.update());
  }

  private render() {
    this.renderer.preRender();

    this.renderer.render(this.state.displayList);

    if (this.config.showFps) {
      this.renderer.renderFpsCount(this.loop.getFps());
    }
  }

  public addGameObjects(...objects: GameObject[]) {
    this.state.displayList.push(...objects);
  }

  public addBodies(...bodies: Body<GameObject>[]) {
    this.world.addBodies(...bodies);
    this.addGameObjects(...bodies.map(body => body.gameObject));
  }

  public getState() {
    return this.state;
  }

  public getKeyboard() {
    return this.keyboard;
  }
}
