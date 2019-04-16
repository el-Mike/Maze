import { isString } from './utils/typeGuards';

import { PARENT_ELEMENT_NOT_DEFINED } from './errors';

import {
  IGameConfig,
  GameConfig,
} from './Config/GameConfig';

import { Viewport } from './Viewport';

import { State } from './State';

import {
  Keyboard
} from './Input';

import {
  Loop
} from './Loop';

import {
  RendererFactory,
  CanvasRenderer,
} from './Renderer';

import { GameObject } from './GameObject';

import {
  Body,
  World,
} from './Physics';

export class Game {
  // DOM related properties
  private gameContainer: HTMLElement;

  // game properties
  private config: GameConfig = {} as GameConfig;

  private viewport: Viewport;
  private keyboard: Keyboard;
  private state: State;

  private loop: Loop;

  private renderer: CanvasRenderer;

  private world: World;

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
    this.state = new State();
    this.loop = new Loop(this.config.fpsLimit);

    this.world = new World();

    this.renderer = RendererFactory.getCanvasRenderer(this.viewport, this.config.rendererConfig);
  
    this.gameContainer = isString(this.config.parentElement)
    ? this.documentRef.getElementById(this.config.parentElement) as HTMLElement
    : this.config.parentElement;

    this.gameContainer.appendChild(this.viewport.getCanvas());

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

    this.renderer.setDisplayList(this.state.displayList);
  }

  private render() {
    this.renderer.render(this.loop.getFps());
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
