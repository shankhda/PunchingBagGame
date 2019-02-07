new Vue ({

    el:'#punching-bag-app',
    data:{
        health:100,
        gameEnd:false,
        battleCry: " ",
        battleCries: ['Death to the weak!',
                    'Let them feel true pain!',
                    'Leave only ashes!',
                    'Destroy everything!',
                    'Kill them all, leave no-one standing!'],
    },
    methods:{
        punch:function(){
            
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
        },

        pickBattleCry:function() {
            this.battleCry = this.battleCries[
                  Math.floor(Math.random() * this.battleCries.length)
            ];
        },
        
        regainHealth:function(){
            var self = this;
            if (this.health<100){
                setInterval(function(){
                        if(self.health>=100){
                            var lose = new Audio("sounds/lose.wav");
                            lose.play();
                        }   
                        else 
                        if(self.health>0){
                            self.health += 2;
                        }
                
                }, 1000);
            }
            
        }
    },

});
