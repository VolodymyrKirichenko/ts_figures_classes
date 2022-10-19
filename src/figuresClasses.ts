type Color = 'red' | 'green' | 'blue';

function rounding(area: number):number {
  return Math.floor(area * 100) / 100;
}

export interface Figure {
  shape: string,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxNum = Math.max(a, b, c);
    const sum = a + b + c;

    if (a <= 0 || b <= 0 || c <= 0 || maxNum >= sum - maxNum) {
      throw new Error('There is no mistake');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    );

    return rounding(area);
  }
}

export class Circle {
  shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('There is no mistake');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return rounding(area);
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('There is no mistake');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return rounding(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
