import { Gun } from "../Gun.ts";
import { IGun } from "../GunInterface.ts";

export class GunDecorator implements IGun {
  constructor(
    protected gun: Gun,
    public damage: number,
  ) {}

  public doDamage(): number {
    return this.gun.doDamage() + this.damage;
  }
}