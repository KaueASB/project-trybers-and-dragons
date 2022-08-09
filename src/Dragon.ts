import Monster from './Monster';
import getRandomInt from './utils';

export default class Dragon extends Monster {
  protected _lifePoints: number;
  protected _strength: number;
  constructor() {
    super();
    this._lifePoints = 999;
    this._strength = getRandomInt(150, 400);
  }
}
