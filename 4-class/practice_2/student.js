import Person from './person';

export default class student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.name = name;
    this.klass = klass;
  }

  introduce() {
    return `I am a Student. I am at Class ${this.klass}.`;
  }
}
