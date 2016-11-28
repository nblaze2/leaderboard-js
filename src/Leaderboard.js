var TeamObject = require('./Team.js').TeamObject;
var pad = require('pad');
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
  };
  this.printLeaderboard = function() {
    console.log(pad("-", 44, "-"));
    console.log("| " + pad("Name", 10) + pad("Rank", 10) + pad("Wins", 10) + pad("Losses", 10) + " |");
    for(var i = 0; i < this.teamObjs.length; i++) {
      console.log("| " + pad(this.teamObjs[i].name, 10) + pad(String(this.teamObjs[i].rank), 10) + pad(String(this.teamObjs[i].wins), 10) + pad(String(this.teamObjs[i].losses), 10) + " |");
    }
    console.log(pad("-", 44, "-"));
  };
};

//
//   function print() {
//     var horizontal_border = "--------------------------------------------------\n";
//     console.log(
//     "#{horizontal_border}" +
//     "| Name      Rank      Total Wins    Total Losses |\n" +
//     "#{teams_to_string}" +
//     "#{horizontal_border}"
//     );
//   }
//
//   var teamsToString = function(teamObjs)
//     teamObjs.map { |team|
//       "| " +
//       team.name + filler_size(team.name) + "  " +
//       "#{team.rank}" + "         " +
//       "#{team.wins}" + "             " +
//       "#{team.losses}" + "            " +
//       "|\n"
//     }.join("")
//   end
//
//   def longest_team_name
//     team_names.max_by { |team_name| team_name.length }
//   end
//
//   def filler_size(name) # returns an empty string of varying length
//     spaces = longest_team_name.length - name.length
//     filler = ""
//     spaces.times do |i|
//       filler += " "
//     end
//     filler
//   end
// end


console.log('NFL Leaderboard');
var l = new Leaderboard(gameInfo);
l.createTeamObjs();
l.setWinsLosses();
l.rankTeams();
l.printLeaderboard();
