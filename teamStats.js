let team = {
    _players: [{
      firstName: 'Gonzales',
      lastName: 'Escobar',
      age: 20,
    },
  {
      firstName: 'Hernandes',
      lastName: 'Escobar',
      age: 25,
    },
  {
      firstName: 'Friederico',
      lastName: 'Escobar',
      age: 30,
    }],
    
    _games: [
      {
      opponent: 'Bastards',
      teamPoints: 31,
      opponentPoints: 20
        },
          {
      opponent: 'Hooters',
      teamPoints: 41,
      opponentPoints: 49
        },
          {
      opponent: 'Tumblings',
      teamPoints: 50,
      opponentPoints: 0
        },
  ],
    get players() {
      return this._players;
    },
    get games(){
      return this._games;
    },
    
    addPlayer(firstName, lastName, age) {
      let player = {
        firstname: firstName,
        lastName: lastName,
        age: age
      };
      
      this._players.push(player)
    },
    
    addGame(opponent, teamPoints, opponentsPoints) 
    {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentsPoints,
      };
      
      this._games.push(game);
    },
  };
  
  team.addGame('Bushwaggers', 56, 12)
  
  
  console.log(team._games)
  