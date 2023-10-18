import { Gun } from "./Gun.ts";
import { SilencerDecorator } from "./decorators/SilencerDecorator.ts";
import { TacticalSightDecorator } from "./decorators/TacticalSightDecorator.ts";
import { GunWithSilencer, GunWithSilencerAndTacticalSight } from "./without-pattern/index.ts";

//without decorator pattern

const ak117WithSilencer = new GunWithSilencer(50, -10);
ak117WithSilencer.doDamage() //returns 39

const ak117WithSilencerAndTacticalSight = new GunWithSilencerAndTacticalSight(50, -10, 5);
ak117WithSilencerAndTacticalSight.doDamage() //returns 45

//with decorator parttern

const ak47: Gun = new Gun(47);
ak47.doDamage() // returns 47

const ak47WithSilencer: SilencerDecorator = new SilencerDecorator(ak47, -10);
ak47WithSilencer.doDamage() // returns 37

const ak47WithSilencerAndTacticalSight: TacticalSightDecorator =
  new TacticalSightDecorator(ak47WithSilencer, 5);
ak47WithSilencerAndTacticalSight.doDamage() //returns 42
