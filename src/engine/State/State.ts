import { GameObject } from '../GameObject';

export enum GameState {
  INIT = 'INIT',
  START = 'START',
  PLAY = 'PLAY',
  STOP = 'STOP'
}

export class State {
  private gameState: GameState;
  private gameObjects: GameObject[];

  constructor() {
    this.gameState = GameState.INIT;
    this.gameObjects = [];
  }

  public setState(state: GameState) {
    this.gameState = state;
  }

  public getState() {
    return this.gameState;
  }

  public update() {
    this.gameObjects.forEach(object => object.update);
  }

  public getGameObjects() {
    return this.gameObjects;
  }

  public addGameObjects(...objects: GameObject[]) {
    this.gameObjects.push(...objects);
  }
}
