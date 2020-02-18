
 const splitTeamsService = {

  //This function is creating a Thue-Morse sequence based on the number of players.
  //This sequence has been determined to be the most fair pick order mathmatically.
  
  handleCreateSequence(numOfPlayers) {
    const n = Math.floor((Math.log(numOfPlayers) / Math.log(2)+1));

    const alt = [1, 0]
    let seq = [0]

    for(let i = 0; i < n; i++) {
      const newArray = []
      for(let j = 0; j < seq.length; j++) {
        newArray.push(alt[seq[j]]);
      }
      seq.push(...newArray);
    }
    return seq
  },

  shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  },

  handleCreateRandomTeams(allPlayers) {
    return this.shuffle(allPlayers);
  },

  handleCreateTeams(allPlayers) {
    let level1 = [];
    let level2 = [];
    let level3 = [];
    let level4 = [];
    let level5 = [];
    let teamOne = [];
    let teamTwo = [];

    allPlayers.forEach(player => {
      if(player.present) {
        if (player.player_skill === 1) {
          level1 = [...level1, player];
        } else if (player.player_skill === 2) {
          level2 = [...level2, player];
        } else if (player.player_skill === 3){
          level3 = [...level3, player];
        } else if (player.player_skill === 4){
          level4 = [...level4, player];
        } else {
          level5 = [...level5, player];
        }
      }
    });

    //Shuffle your Arrays to randomize teams. We randomize so it isn't just split on order players entered.
    level1 = this.shuffle(level1);
    level2 = this.shuffle(level2);
    level3 = this.shuffle(level3);
    level4 = this.shuffle(level4);
    level5 = this.shuffle(level5);
    
    const sortedPlayers = [...level5, ...level4, ...level3, ...level2, ...level1];

    const seq = this.handleCreateSequence(allPlayers.length);

    sortedPlayers.forEach((play, i) => {
      if (seq[i] === 0) {
        teamOne = [...teamOne, play];
      } else {
        teamTwo = [...teamTwo, play];
      }
    });

    teamOne = this.shuffle(teamOne);
    teamTwo = this.shuffle(teamTwo);

    return {teamOne, teamTwo};
  },
}

export default splitTeamsService;