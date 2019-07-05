
 const splitTeamsService = {

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

  handleCreateTeams(allPlayers) {
    let level1 = [];
    let level2 = [];
    let level3 = [];
    let level4 = [];
    let level5 = [];
    let teamOne = [];
    let teamTwo = [];

    allPlayers.forEach(player => {
      if (player.skill === "1") {
        level1 = [...level1, player.name];
      } else if (player.skill === "2") {
        level2 = [...level2, player.name];
      } else if (player.skill === "3"){
        level3 = [...level3, player.name];
      }
      else if (player.skill === "4"){
        level4 = [...level4, player.name];
      }
      else {
        level5 = [...level5, player.name];
      }
    });

    //Shuffle your Arrays to randomize teams
    level1 = this.shuffle(level1);
    level2 = this.shuffle(level2);
    level3 = this.shuffle(level3);
    level4 = this.shuffle(level4);
    level5 = this.shuffle(level5);
    
    //const allPlayers = [...level1, ...level2, ...level3, ...level4, ...level5];

    const seq = this.handleCreateSequence(allPlayers.length);

    allPlayers.forEach((play, i) => {
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