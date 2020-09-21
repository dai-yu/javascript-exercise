import Person from './person';
export default class worker extends Person {
  constructor(name, age) {
    super(name, age);
    this.name = name;
  }
  introduce() {
    return 'I am a Worker. I have a job.';
  }
}
