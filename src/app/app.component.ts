import { Component } from '@angular/core';

abstract class Cost {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  abstract get cost(): number;
}

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
  constructor(purchaseCost: number) {
    super('Stamp', 'stuff');
    this.purchaseCost = purchaseCost;
  }

  private calculate(): number {
    const millions = this.purchaseCost / 1000000;
    if (millions < 1) {
      return 500;
    }
    if (millions < 5) {
      return 1000;
    }
    if (millions < 10) {
      return 5000;
    }
    if (millions < 50) {
      return 10000;
    }
    if (millions < 100) {
      return 30000;
    }
    if (millions < 500) {
      return 60000;
    }
    return 160000;
  }

  get cost(): number { return this.calculate(); }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jp-buy-cost-calculator';
  costs = new Array<Cost>();
  purchaseCost: 1000;

  constructor() {
  }

  update() {
    this.costs = new Array<Cost>();
    this.costs.push(new StampDuty(this.purchaseCost));
    this.costs.push(new FixedCost('Reg. tax', 'Registration and License Tax, Land', 1000));
    this.costs.push(new FixedCost('Reg. tax', 'Registration and License Tax, Building', 1000));
    this.costs.push(new FixedCost('Reg. tax', 'Morgage', 1000));
    this.costs.push(new FixedCost('Fees', 'Real estate agent', 1000));
    this.costs.push(new FixedCost('Asset tax', 'Per city', 1000));
    this.costs.push(new FixedCost('Consumption tax', '8%', 1000));
    this.costs.push(new FixedCost('Scrivener cost', 'Depends on city', 1000));
    this.costs.push(new FixedCost('Real estate acquisition tax', '3%', 1000));
  }
}
