// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory(number , dnaSequence) {
    return {
      specimenNum: number,
      dna: [dnaSequence],
      
      mutate(){
        let randNum = Math.floor(Math.random() * this.dna.length)
        let randBase = returnRandBase()
        
        while (true) {
        if (randBase != this.dna[0][Math.floor(Math.random() * 									this.dna.length)]) {
          this.dna[0].splice(randNum, 1, randBase);
          break;
        } else {
          console.log('No mutation! \n remutating')
          randBase = returnRandBase();
            }
        }
      },
      
      compareDna(creature) {
        let count =0;
        for (let i = 0; i<this.dna[0].length; i++)
          if (this.dna[0][i] === creature.dna[0][i]) {
            count++
          }
        let percent = Math.floor(count / this.dna[0].length * 100)
          console.log(`the two DNA strings have ${percent}% in common`) 
      },
      
      willLikelySurvive(){
        let count =0;
        for (let i = 0; i<this.dna[0].length; i++){
          if (this.dna[0][i] === 'C' || this.dna[0][i] === 'G'){
            count++
          }
        }
        let percentile = count / this.dna[0].length * 100;
        if (percentile >= 60) {
         return true       
        } else 
          return false
      },
    }
  };
  
  function pAequorColonyGenerator (num){
    var pAequorColony = [];
    let count = 0;
    
      while (pAequorColony.length < num) {
        pAequorColony.push(pAequorFactory(count, mockUpStrand()))
      
      if(pAequorColony[count].willLikelySurvive() === false) {
        pAequorColony.pop()
      } else {
        count++
        console.log(count)
      }
    }
    return pAequorColony
  };
  
  var colony = pAequorColonyGenerator(30)
  
  
  console.log(colony)
  
  
  