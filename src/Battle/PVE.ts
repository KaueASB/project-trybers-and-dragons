import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _monster: SimpleFighter[],
  ) {
    super(_player);
  }

  private battleMonster(indexM: number): number {
    let result = 0;

    for (let index = 0; index < 100; index += 1) {
      this._player.attack(this._monster[indexM]);
      if (this._monster[indexM].lifePoints <= 0) {
        result = 1;
      }

      this._monster[indexM].attack(this._player);
      if (this._player.lifePoints <= 0) {
        result = -1;
      }
    }
    return result;
  }

  fight(): number {
    for (let index = 0; index < this._monster.length; index += 1) {
      const battle = this.battleMonster(index);
      if (battle === 1) return 1;
    }
    return -1;
  }
}
