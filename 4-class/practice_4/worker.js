import Person from './person';

export default class worker extends Person {
  constructor(name, age) {
    super(name, age);
    this.name = name;
  }

  introduce() {
    return `${super.introduce()} I am a Worker. I have a job.`;
  }
}
