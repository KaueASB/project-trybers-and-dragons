import { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player1: SimpleFighter,
    private _player2: SimpleFighter,
  ) {
    super(_player1);
  }

  fight(): number {
    let result = 0;
    for (let index = 0; index < 100; index += 1) {
      this._player1.attack(this._player2);
      if (this._player2.lifePoints <= 0) {
        result = 1;
      }

      this._player2.attack(this._player1);
      if (this._player1.lifePoints <= 0) {
        result = -1;
      }
    }
    return result;
  }
}
