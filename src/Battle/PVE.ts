import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _monster: SimpleFighter[],
  ) {
    super(_player);
  }

  fight(): number {
    let result = 0;
    for (let index = 0; index < 100; index += 1) {
      this._player.attack(this._monster[0]);
      if (this._monster[0].lifePoints <= 0) {
        result = 1;
      }

      this._monster[0].attack(this._player);
      if (this._player.lifePoints <= 0) {
        result = -1;
      }
    }
    return result;
  }
}
