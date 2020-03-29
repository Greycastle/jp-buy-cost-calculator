import { Cost } from './cost';
import { Brackets } from '../brackets';

export class StampDuty extends Cost {
  private purchaseCost: number;
  private brackets = new Brackets();
  constructor(purchaseCost: number) {
    super('Stamp', 'stuff');
    this.purchaseCost = purchaseCost;

    this.brackets.add(1, 500);
    this.brackets.add(5, 1000);
    this.brackets.add(10, 5000);
    this.brackets.add(50, 10000);
    this.brackets.add(100, 30000);
    this.brackets.add(500, 60000);
    this.brackets.add(501, 160000);
  }

  private calculate(): number {
    const millions = this.purchaseCost / 1000000;
    return this.brackets.getValueFor(millions);
  }

  get cost(): number { return this.calculate(); }
}
