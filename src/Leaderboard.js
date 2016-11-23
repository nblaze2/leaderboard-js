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

function leaderboard(team) {

}

function TeamObjects(name, rank, wins, loses) {
  this.name = name;
  this.rank = null;
  this.wins = 0;
  this.loses = 0;
}

function buildTeamNames(gameInfo) {
  var teamNames = []

  gameInfo.forEach(function(game) { // use to iterate for team names
    console.log(game['home_team']);
  });
  // for (i = 0; i < gameInfo.length; i++) {
  //
  //     if team_names.include?(game_data[:home_team]) == false
  //       team_names << game_data[:home_team]
  //     elsif team_names.include?(game_data[:away_team]) == false
  //       team_names << game_data[:away_team]
  //     end
  //   end
  //   team_names
  // end
  //
  // def create_team_objects
  //   team_names.each do |team|
  //     @team_objects << Team.new(team)
  //   end
  //   @team_objects
  // end
  //
  //
  //
  //
}
console.log('Teams\n-----');
