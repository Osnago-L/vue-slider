var app = new Vue({
    el: '#app',
    data: {
        items: {
            img: [
                'assets/img/01.jpg',
                'assets/img/02.jpg',
                'assets/img/03.jpg',
                'assets/img/04.jpg',
                'assets/img/05.jpg'
            ],  
            title: [
                'Svezia',
                'Svizzera',
                'Gran Bretagna',
                'Germania',
                'Paradise'
            ],
            text: [
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                'Lorem ipsum',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            ],
            
        },        
        activeIndex: 0,
        timer: null
    },
    methods:{
        active:function(index){
        return index == this.activeIndex ? "sy-active" :  "" 
        },
        activethumb:function(index){
            return index == this.activeIndex ? "sy-active-thumb" :  "" 
        },
        nextImage:function(){
            this.activeIndex++;
            if(this.activeIndex>4){
                this.activeIndex=0
            }
        },
        prevImage:function(){
            console.log(this.activeIndex);
            this.activeIndex--;
            if(this.activeIndex<0){
                this.activeIndex=4
            }
        },
        play:function(){
            this.timer = setInterval(this.nextImage, 3000);
        },
        stop:function(){
            clearInterval(this.timer)
        },

    },
    created: function(){
       this.play();
    }     
});
