new Vue ({

    el:'#punching-bag-app',
    data:{
        health:100,
        gameEnd:false,
        gameRestart:false,
        gameLost:false,
        battleCry: " ",
        battleCries: ['Death to the weak!',
                    'Let them feel true pain!',
                    'Leave only ashes!',
                    'Destroy everything!',
                    'Kill them all, leave no-one standing!',
                    'Bring me their teeth!',
                    'Remove them from this Earth!',
                    'Leave them with nothing!',
                    'Death to the enemy!',
                    'Make them fear your name!',
                    'Bring them to their knees!',
                    'You are the apocalypse!'],
    },
    methods:{
        punch:function(){
            this.gameRestart=false;
            this.gameLost= false;
            this.health-=20;
            var punch = new Audio("sounds/punch.mp3");
            punch.play();
            if(this.health<=0)
            {
                this.gameEnd=true;
                var punch = new Audio("sounds/win.wav");
                punch.play();
            }
        },
        restart:function(){
            this.battleCry=" ";
            this.health = 100;
            this.gameEnd =false;
            this.gameRestart=true;
            this.gameLost= false;
        },

        pickBattleCry:function() {
            this.battleCry = this.battleCries[
                  Math.floor(Math.random() * this.battleCries.length)
            ];
        },
        
        regainHealth:function(){
           if((this.health<100)&(this.health>0)) 
          {
                this.health += 10;
            }
                       
            console.log('called regainHealth');
        }
            
        
    },
    watch:{
        health(){
            
            if ((this.health>=100)&(!this.gameRestart)){
                var lose = new Audio("sounds/lose.wav");
                lose.play();
                this.battleCry = "YOU LOSE!!!"
                this.gameLost=true;
            } 
        }
        
    },
    mounted(){
        
        setInterval(this.regainHealth, 1000);
    }

});
