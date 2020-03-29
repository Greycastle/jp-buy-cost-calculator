import { Cost } from './cost';

export class FixedCost extends Cost {
  private _cost: number;

  constructor(name: string, description: string, cost: number) {
    super(name, description);
    this._cost = cost;
  }

  get cost(): number { return this._cost; }
}
