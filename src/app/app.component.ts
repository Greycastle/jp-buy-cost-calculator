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

class BracketRange {
  breakPoint: number;
  value: number;

  constructor(breakPoint: number, value: number) {
    this.breakPoint = breakPoint;
    this.value = value;
  }
}

class Brackets {
  breakPoints: Array<BracketRange>;

  constructor() {
    this.breakPoints = new Array<BracketRange>();
  }

  add(breakPoint: number, value: number): void {
    this.breakPoints.push(new BracketRange(breakPoint, value));
  }

  getValueFor(value: number) {
    for (const breakPoint of this.breakPoints) {
      if (value <= breakPoint.breakPoint) {
        return breakPoint.value;
      }
    }
    return this.breakPoints[this.breakPoints.length - 1].value;
  }
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
