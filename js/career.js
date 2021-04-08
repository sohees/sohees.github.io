(function($) {

    function loading(){

        var autoPlay = function(n){

            $('.desc:eq('+n+')').addClass('active');
            $('.active').slideDown();
            
            $('.desc').each(function(index){
                if(!$('.desc:eq('+index+')').hasClass('active')){
                    $('.desc:eq('+index+')').slideUp();
                }else{
                    $('.desc:eq('+index+')').removeClass('active')
                }
            });
        };
    
    
        var timer = (function(m){
            setTimeout(function(){
                autoPlay(m);
             }, m * 1500);
        });
    
        var f = function(){
            for(var i = 0; i < 4; i ++){
                timer(i);
            }
            setTimeout(function(){
                autoPlay(0);
             }, 6000);
        };
    
        f();

    }

    $('body').on('loading', function(e) {
        loading();
    });

  })(jQuery);
  
  