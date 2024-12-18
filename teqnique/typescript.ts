

interface Character {
    name: string;
    house: string;
    playsQuidditch: boolean;
    position: string;
    quidditchYears: number[];
  }
  
  fetch("https://coderbyte.com/api/challenges/json/quidditch-list")
    .then(result => result.json())
    .then((jsonformat) => {

      const eligiblePlayers:Array<Character>=jsonformat.filter((player:Character)=>player.playsQuidditch)
      const resultArray:Arrya<string>=eligiblePlayers.map((eligible:any)=>{
        return `${eligible.name} ${eligible.house} ${eligible.position}`;
      })

      console.log(resultArray);
    });
  