new Vue ({

    el:'#punching-bag-app',
    data:{
        health:100,
        gameEnd:false,
        gameRestart:false,
        battleCry: " ",
        battleCries: ['Death to the weak!',
                    'Let them feel true pain!',
                    'Leave only ashes!',
                    'Destroy everything!',
                    'Kill them all, leave no-one standing!'],
    },
    methods:{
        punch:function(){
            this.gameRestart=false;
            this.health-=10;
            var punch = new Audio("sounds/punch.mp3");
            punch.play();
            if(this.health<=0)
            {
                this.gameEnd=true;
                this.battleCry="YOU WIN!!!";
                var punch = new Audio("sounds/win.mp3");
                punch.play();
            }
        },
        restart:function(){
            this.battleCry=" ";
            this.health = 100;
            this.gameEnd =false;
            this.gameRestart=true;
        },

        pickBattleCry:function() {
            this.battleCry = this.battleCries[
                  Math.floor(Math.random() * this.battleCries.length)
            ];
        },
        
        regainHealth:function(){
           if((this.health<100)&(this.health>0)) 
          {
                this.health += 1.5;
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
            } 
        }
        
    },
    mounted(){
        
        setInterval(this.regainHealth, 500);
    }

});
