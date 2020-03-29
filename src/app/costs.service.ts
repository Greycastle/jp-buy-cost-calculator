import { Cost } from './cost';
import { Brackets } from './brackets';

class FixedCost extends Cost {
  private _cost: number;

  constructor(name: string, description: string, cost: number) {
    super(name, description);
    this._cost = cost;
  }

  get cost(): number { return this._cost; }
}

class StampDuty extends Cost {
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

export class CostsService {
  getCosts(purchaseCost: number): Cost[] {
    const costs = new Array<Cost>();
    costs.push(new StampDuty(purchaseCost));
    costs.push(new FixedCost('Reg. tax', 'Registration and License Tax, Land', 1000));
    costs.push(new FixedCost('Reg. tax', 'Registration and License Tax, Building', 1000));
    costs.push(new FixedCost('Reg. tax', 'Morgage', 1000));
    costs.push(new FixedCost('Fees', 'Real estate agent', 1000));
    costs.push(new FixedCost('Asset tax', 'Per city', 1000));
    costs.push(new FixedCost('Consumption tax', '8%', 1000));
    costs.push(new FixedCost('Scrivener cost', 'Depends on city', 1000));
    costs.push(new FixedCost('Real estate acquisition tax', '3%', 1000));
    return costs;
  }
}
