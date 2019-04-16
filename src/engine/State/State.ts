import {
  GameObject,
  DisplayList,
} from '@engine/GameObject';

export enum GameState {
  INIT = 'INIT',
  START = 'START',
  PLAY = 'PLAY',
  STOP = 'STOP'
}

export class State {
  private _gameState: GameState;
  private _displayList: DisplayList;

  constructor() {
    this._gameState = GameState.INIT;
    this._displayList = new DisplayList();
  }

  public setState(state: GameState) {
    this._gameState = state;
  }

  public getState() {
    return this._gameState;
  }

  public get displayList() {
    return this._displayList;
  }

  public set displayList(value: DisplayList) {
    this._displayList = value;
  }
}
