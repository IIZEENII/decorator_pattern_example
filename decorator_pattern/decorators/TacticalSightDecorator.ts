import { GunDecorator } from "./GunDecorator.ts";

export class TacticalSightDecorator extends GunDecorator {
  public doDamage(): number {
    return super.doDamage();
  }
}