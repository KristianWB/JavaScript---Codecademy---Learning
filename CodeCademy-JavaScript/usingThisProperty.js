const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
    }
  };
  console.log(robot.provideInfo())

  /* this. property will not work inside => functions, because this. property searches for a global this. 

  const robot = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();
*/