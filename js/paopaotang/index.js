

function Player(name,teamColor){
    this.enemies=[];  //敌人
    this.partners=[];  //队友
    this.name=name;
    this.teamColor=teamColor;
    this.state='live';

}
Player.prototype.win=function(){
    //kill all
    console.log(`${this.name}win`);
}
Player.prototype.lose=function(){
    console.log(`${this.name}lose`);
}
Player.prototype.die = function(){
    console.log(`${this.name}die`);
    this.state = 'die';
    let all_dead = true;
    for(var i = 0,partner;partner = this.partners[i++];){
        if(partner.state === 'live'){
            all_dead = false;
            break;
        }
    }
    if(all_dead){
        
        for(var i = 0,partner; partner=this.partners[i++];){
            partner.lose();
        }
        this.lose();
        for(var i = 0,enemy; enemy = this.enemies[i++];){
            enemy.win();
        }
    }
}
//组队  生成玩家 工厂类来负责
var players=[];
var playerFactory=function(name,teamColor){
    var newPlayer=new Player(name,teamColor);
    for(var i=0,player;player=players[i++];){
        if(player.teamColor===newPlayer.teamColor){
            player.partners.push(newPlayer);
            newPlayer.partners.push(player);
        }else{
            player.enemies.push(newPlayer);
            newPlayer.enemies.push(player);
        }

    }
    players.push(newPlayer);
    return newPlayer;
}
var player1=playerFactory('皮蛋','red');
var player2=playerFactory('小强','red');
var player3=playerFactory('小明','red');
var player4=playerFactory('小张','red');
var player5=playerFactory('黑妞','blue');
var player6=playerFactory('胖墩','blue');
var player7=playerFactory('海盗','blue');
var player8=playerFactory('打磨','blue');
player1.die();
player2.die();
player3.die();
player4.die();
// 队友是谁？ 敌人是谁？ 交给工厂去做
console.log(player1.enemies,player1.partners)