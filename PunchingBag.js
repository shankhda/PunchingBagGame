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
            
            if(this.health<=0)
            {
                this.gameEnd=true;
                this.battleCry=" ";
            }
        },
        restart:function(){
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
            if ((this.health<60)){
                setTimeout(function(){
                        if(self.health>=100){
                        }   
                        else if(self.health>0){
                            self.health += 5;
                        }
                
                }, 1000);
            }
            
        }
    },

});
