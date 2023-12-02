console.log('Advanced debugging example running.')

function numPointsScored(playerName) {
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      if(teamKey === "players"){ 
        let playerObj = teamObj[teamKey]
        for (let player in playerObj) {
          if( player === playerName){
            return playerObj[player].points
          }
        }
      }
    }
  }
}

function shoeSize(playerName){
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      if(teamKey === "players"){ 
        let playerObj = teamObj[teamKey]
        for (let player in playerObj) {
          if( player === playerName){
            return playerObj[player].shoe
          }
        }
      }
    }
  }  
}

function teamColors(teamName){
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey]
      for (let teamKey in teamObj) {
        let team = teamObj[teamKey]
        if(teamName === team){
          return teamObj["colors"]
          }         
      }
  }
}

function teamNames(){
  let game = gameObject();
  let teams = []    
  for (let gameKey in game) {
    let teamObj = game[gameKey]
    teams.push(teamObj.teamName)         
  }
  return teams  
}

function playerNumbers(teamName){
  let game = gameObject();
  let jerseyNumber = []
  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      let team = teamObj[teamKey]
      if (team === teamName){
        let playerObj = teamObj["players"]
        for (let player in playerObj) {
          let playerNum = playerObj[player]["number"]
            jerseyNumber.push(playerNum)
        }
        return jerseyNumber
      }
    }
  }
} 

function playerStats(playerName){
  let game = gameObject();
  for(let gameObj in game){
    let teamObj = game[gameObj]
    for(teamKey in teamObj){
      let playerObj = teamObj[teamKey]
      for(player in playerObj){
        if(player === playerName){
        let playerStatsObj = playerObj[player]              
        return playerStatsObj
        }                
      }            
    }
  }  
} 