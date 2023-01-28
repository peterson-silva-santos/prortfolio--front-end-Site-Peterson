$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrolly > 20){
            $('.navbar').addclass("sticky");
        }
    });
});