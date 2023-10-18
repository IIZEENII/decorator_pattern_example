export class GunWithSilencer {
  constructor(
    private gunDamage: number,
    private silencerDamage: number,
  ) {}
  doDamage(): number {
    return this.gunDamage - this.silencerDamage;
  }
}

export class GunWithSilencerAndTacticalSight {
  constructor(
    private gunDamage: number,
    private silencerDamage: number,
    private tacticalSightDamage: number,
  ) {}
  doDamage(): number {
    return this.gunDamage - this.silencerDamage + this.tacticalSightDamage;
  }
}