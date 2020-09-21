import Person from './person';
export default class student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.name = name;
    this.klass = klass;
  }
  introduce() {
    if (this.klass == null) {
      return super.introduce() + ` I am a Teacher. I teach No Class.`;
    }
    return super.introduce() + ` I am a Teacher. I teach Class ${this.klass}.`;
  }
}
