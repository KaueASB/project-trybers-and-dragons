import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Necromancer extends Archetypes {
  private _energyType: EnergyType = 'mana';
  static instance = 0;

  constructor(name: string) {
    super(name);
    Necromancer.instance += 1;
  }

  get energyType(): EnergyType { return this._energyType; }
  
  static createdArchetypeInstances():number { return this.instance; }
}