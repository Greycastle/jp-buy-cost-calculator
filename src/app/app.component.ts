import { CostsService } from './costs.service';
import { Component } from '@angular/core';
import { Cost } from './costs/cost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jp-buy-cost-calculator';
  costs = new Array<Cost>();
  purchaseCost: 1000;

  update() {
    this.costs = new CostsService().getCosts(this.purchaseCost);
  }
}
