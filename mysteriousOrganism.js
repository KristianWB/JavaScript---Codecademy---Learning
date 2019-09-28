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
      }
    }
  };
  
  let mutant = pAequorFactory(1 , mockUpStrand());
  console.log(mutant.specimenNum + '\n' + mutant.dna)
  
  mutant.mutate()
  console.log(mutant.specimenNum + '\n' + mutant.dna)
  
  
  // console.log(pAequorFactory(1, mockUpStrand()));
  
  
  
  