import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Warrior extends Archetypes {
  private _energyType: EnergyType = 'stamina';
  static instance = 0;

  constructor(name: string) {
    super(name);
    Warrior.instance += 1;
  }

  get energyType(): EnergyType { return this._energyType; }
  
  static createdArchetypeInstances():number { return this.instance; }
}