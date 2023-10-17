import { GunDecorator } from "./GunDecorator.ts";

export class SilencerDecorator extends GunDecorator {
  public doDamage(): number {
    return super.doDamage();
  }
}