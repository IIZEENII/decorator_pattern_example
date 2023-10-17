import { IGun } from "./GunInterface.ts";

export class Gun implements IGun {
  constructor(public damage: number) {}

  public doDamage(): number {
    return this.damage;
  }
}