class Gun {
  private name: string;
  private bulletSize: number;
  private barrel: number;

  constructor(name: string, bulletSize: number, barrel: number) {
    this.bulletSize = bulletSize;
    this.name = name;
    this.barrel = barrel;
  }
}

class FlyWeight<T> {
  private intrinsicState: T;

  constructor(entity: T) {
    this.intrinsicState = entity;
  }

  serializated(extrinsicState: T) {
    const shared = JSON.stringify(this.intrinsicState);
    const unique = JSON.stringify(extrinsicState);
    return [unique, shared];
  }
}

class FlyWeightFactory<T> {
  private flyWeights: Map<string, FlyWeight<T>>[] = [];
  constructor(entities: T[]) {
    entities.forEach((entity) => {
      this.flyWeights.push(
        new Map().set(this.getKey(entity), new FlyWeight<T>(entity)),
      );
    });
  }

  getKey(entity: any): string {
    const attributes: string[] = [];
    const keys: string[] = Object.keys(entity);
    keys.forEach((key) => attributes.push(entity[key]));
    return attributes.join("_");
  }

  getFlyWeight<T>(intrinsicState: T): T {
    const key = this.getKey(intrinsicState);
    const isEntityInList = this.flyWeights.some((entity) => entity.get(key));

    if (!isEntityInList) {
      const newFlyWeight = new Map().set(key, new FlyWeight<T>(intrinsicState));
      this.flyWeights.push(newFlyWeight);
      return newFlyWeight.get(key);
    }
    return intrinsicState;
  }

  getFlyWeights() {
    return this.flyWeights;
  }
}

const gun = new Gun("ak_47", .47, 16);
const gun2 = new Gun("ak_117", .47, 17);
const gun3 = new Gun("ak_47", .48, 17);

const gunFlyWeightFactory = new FlyWeightFactory<Gun>([gun, gun2, gun3]);
console.log(gunFlyWeightFactory.getFlyWeight(gun));

const flyWeight = new FlyWeight<Gun>(gun);

console.log(flyWeight.serializated(gun));
console.log(flyWeight.serializated(gun2));
console.log(flyWeight.serializated(gun3));
console.log(gunFlyWeightFactory.getFlyWeights());

