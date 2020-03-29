import { Cost } from './costs/cost';
import { StampDuty } from './costs/stamp.duty';
import { FixedCost } from './costs/fixed.cost';

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
