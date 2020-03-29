class BracketRange {
  breakPoint: number;
  value: number;

  constructor(breakPoint: number, value: number) {
    this.breakPoint = breakPoint;
    this.value = value;
  }
}

export class Brackets {
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
