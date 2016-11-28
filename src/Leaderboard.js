var TeamObject = require('./Team.js').TeamObject;

const gameInfo = [
  {
    home_team: 'Patriots',
    away_team: 'Broncos',
    home_score: 7,
    away_score: 3
  },
  {
    home_team: 'Broncos',
    away_team: 'Colts',
    home_score: 3,
    away_score: 0
  },
  {
    home_team: 'Patriots',
    away_team: 'Colts',
    home_score: 11,
    away_score: 7
  },
  {
    home_team: 'Steelers',
    away_team: 'Patriots',
    home_score: 7,
    away_score: 21
  }
]

// var teamObjs = [];
var teamNames = [];

function Leaderboard(gameInfo) {
  this.gameInfo = gameInfo;
  this.teamObjs = [];
  this.createTeamObjs = function() {
    this.gameInfo.forEach(game => { // arrow functions default to local 'this'
      if (!teamNames.includes(game['home_team'])) {
        teamNames.push(game['home_team']);
        this.teamObjs.push(new TeamObject(game['home_team']));
      } else if (!teamNames.includes(game['away_team'])) {
        teamNames.push(game['away_team']);
        this.teamObjs.push(new TeamObject(game['away_team']));
      }
    });
  }

  this.setWinsLosses = function() {
    var gameInfo = this.gameInfo;
    for (var i = 0; i < gameInfo.length; i++) {
      if (gameInfo[i].home_score > gameInfo[i].away_score) {
        this.teamObjs.find(function(x) {
          return x.name == gameInfo[i].home_team;
        }).wins += 1;
        this.teamObjs.find(x => x.name == gameInfo[i].away_team).losses += 1;
      } else if (gameInfo[i].away_score > gameInfo[i].home_score) {
        this.teamObjs.find(x => x.name == gameInfo[i].away_team).wins += 1;
        this.teamObjs.find(x => x.name == gameInfo[i].home_team).losses += 1;
      } // x => x.name is passing function as argument
    }
  };

  this.rankTeams = function(teamObjs) {
    // sorts by losing team, placing team with most losses at end
    function compare(a,b) {
      if (a.losses < b.losses) {
        return -1;  // team with fewer losses is moved left (up the rankings)
      }
      if (a.losses > b.losses) {
        return 1; // team with more losses is moved right (down the rankings)
      }
      return 0;
    };

    this.teamObjs.sort(compare);

    // assign ranks by order of appearance in the sorted array
    for (var i = 0; i < this.teamObjs.length; i++) {
      this.teamObjs[i].rank = i + 1;
    }
    this.teamObjs.forEach(function(team) {
      console.log(team);
    })
  };
};

console.log('Teams\n-----');
var l = new Leaderboard(gameInfo);
l.createTeamObjs();
l.setWinsLosses();
l.rankTeams();
