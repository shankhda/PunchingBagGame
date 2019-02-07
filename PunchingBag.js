new Vue ({

    el:'#punching-bag-app',
    data:{
        health:100,
        gameEnd:false
    },
    methods:{
        punch:function(){
            this.health-=10;
            if(this.health<=0)
            {
                this.gameEnd=true;
            }
        },
        restart:function(){
            this.health = 100;
            this.gameEnd =false;
        }
    }

});
