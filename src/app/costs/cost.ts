export abstract class Cost {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  abstract get cost(): number;
}
