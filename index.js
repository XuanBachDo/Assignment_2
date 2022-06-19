var h = [
    "⠘    Dang Phang Nhau",
    "⠰    Dang Phang Nhau",
    "⠤    Dang Phang Nhau",
    "⠆    Dang Phang Nhau",
    "⠃    Dang Phang Nhau",
    "⠉    Dang Phang Nhau",
];
var i = 0;
const loader = setInterval(() => {
    i = i > 5 ? 0 : i;
    console.clear();
    console.log(h[i]);
    i++;
}, 400);

setTimeout(() => {
    clearInterval(loader);
    console.clear();
}, 5000);

class Player {
    constructor(name, number, increaseKill, increaseDeath, increaseAssist) {
        this.name = name;
        this.attack = Math.floor(Math.random() * 301) + 200;
        this.enemyAttack = Math.floor(Math.random() * 301) + 200;
        this.blood = 100;
        this.enemyBlood = 100;
        this.number = number;
        this.increaseKill = increaseKill;
        this.enemyIncreaseKill = increaseKill;
        this.increaseDeath = increaseDeath;
        this.enemyIncreaseDeath = increaseDeath;
        this.increaseAssist = increaseAssist;
    }

    introduce() {
        console.log("abcdef");
    }

    printPlayerStatistic() {
        console.log(`   Player  
Name:${this.name}  
Atack:${this.attack}  
Blood:${this.blood} 
KDA:${this.increaseKill}/${this.increaseDeath}/${this.increaseAssist}`);
    }

    printEnemyStatistic() {
        console.log(`   Enemy
Name:${this.name}  
Atack:${this.enemyAttack}  
Blood:${this.enemyBlood} 
KDA:${this.enemyIncreaseKill}/${this.enemyIncreaseDeath}/${this.increaseAssist}`);
    }

    fight() {
        if (player.attack > enemy.enemyAttack) {
            console.log("Player Win!");
            return (
                (this.enemyBlood = this.enemyBlood - 100),
                this.increaseKill++,
                this.enemyIncreaseDeath++
            );
            // console.log(this.enemyBlood)
        } else {
            console.log("Enemy Win!");
            return (
                (this.blood = this.blood - 100),
                this.enemyIncreaseKill++,
                this.increaseDeath++
            );
        }
    }
}

const player = new Player("Daxua", 1, 0, 0, 0);
const enemy = new Player("Akali", 2, 0, 0, 0);

var myvar = setInterval(function () {
    player.fight();
    enemy.fight();
    player.printPlayerStatistic();
    enemy.printEnemyStatistic();
}, 5400);

setTimeout(() => {
    clearInterval(myvar);
}, 5400);
