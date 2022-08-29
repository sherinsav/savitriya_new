$('#latest-cards').owlCarousel({
     nav:true,
     dots:false,
     autoplay:true,
     loop:true,
     navText: [
        '<i class="stpl-arrow-circle-o-left"></i>','<i class="stpl-arrow-circle-o-right"></i>'
    ],
     responsive:{
         0:{
             items:1
         },
         600:{
             items:2
         },
         1000:{
             items:3
         }
     }
 });

 var owl = $('#client-card').owlCarousel({
    nav:true,
    dots:false,
    navText: [
        '<i class="stpl-arrow-circle-o-left"></i>','<i class="stpl-arrow-circle-o-right"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$(document).ready(function(){

    // OnScroll Added class animation-element and in-view
    if($(window).width() > 992){
        var $animationelement = $(".animation-element");
        var $window = $(window);

        // if($(window).width() > 992){
            
        // }

        function checkIfinView () {
            var $windowHeight = $window.height();
            var $windowTopPosition = $window.scrollTop();
            var $windowBottomPosition = ($windowTopPosition + $windowHeight);
            
            $.each($animationelement,function(){
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            if((elementBottomPosition >= $windowTopPosition) && (elementTopPosition <= $windowBottomPosition)){
                $element.addClass("in-view")
            } else {
                $element.removeClass("in-view")
            }
            });
        }

        $window.on('scroll resize',checkIfinView);
        $window.trigger('scroll');

    }
    var getIcon = $(".hidden");
    var i = 0;
    var intervalId = setInterval(function(){
        $(getIcon).removeClass("longheight");
        if(i === getIcon.length){
            clearInterval(intervalId);
        }
        $(getIcon[i]).removeClass("hidden");
        $(getIcon[i]).addClass("longheight");
        var tops =  $(getIcon[i]).css('top');
            // console.log(top);
        $(".longheight").css({position:'absolute',top:'0px'}).animate({top:tops},200);
        i++;
    },300); 

    $(".owl-nav").on('click',function(){
        var active_card = $("#client-card").find(".owl-item.active");
        var visible_review = $("#client-card").find(".owl-item.active").find(".client-review-wrapper");
        var get_card_id = $(visible_review).attr('id');
        var Create_class = "." + (get_card_id);
         // console.log($(Create_class));
    
        //add animation to images
         $(".images-design").children().removeClass("active-client");
        if($(Create_class).parents().hasClass("client-a") == true){ 
             let duplicate = $(".client-a").clone().appendTo(".images-design");        
             $(duplicate).addClass("active-client");
            setTimeout(function(){
                // $(".client-a").removeClass("active-client")
                $(duplicate).remove();
            },1000);
        } else if ($(Create_class).parents().hasClass("client-b") == true){
            let duplicate = $(".client-b").clone().appendTo(".images-design");        
             $(duplicate).addClass("active-client");
            // $(".client-b").addClass("active-client");
            setTimeout(function(){
                $(duplicate).remove();
                // $(".client-b").removeClass("active-client")
            },1000);
        } else if ($(Create_class).parents().hasClass("client-c") == true){
            let duplicate = $(".client-c").clone().appendTo(".images-design");        
             $(duplicate).addClass("active-client");
            // $(".client-c").addClass("active-client");
            setTimeout(function(){
                $(duplicate).remove();
                // $(".client-c").removeClass("active-client")
            },1000);
        } else if ($(Create_class).parents().hasClass("client-d") == true){
            let duplicate = $(".client-d").clone().appendTo(".images-design");        
             $(duplicate).addClass("active-client");
            // $(".client-d").addClass("active-client");
            setTimeout(function(){
                $(duplicate).remove();
                // $(".client-d").removeClass("active-client")
            },1000);
        } else if ($(Create_class).parents().hasClass("client-e") == true){
            let duplicate = $(".client-e").clone().appendTo(".images-design");        
             $(duplicate).addClass("active-client");
            // $(".client-e").addClass("active-client");
            setTimeout(function(){
                $(duplicate).remove();
                // $(".client-e").removeClass("active-client")
            },1000);
        } else {
            $(".images-design").children().removeClass("active-client");
        }
    
        setTimeout (function(){
        var get_matched_pic = $(Create_class).attr("src"); 
        var On_card_pic = $(".review-client-pic").attr("src");
         if($(Create_class.length = 1)){
             $(".review-client-pic").attr("src",get_matched_pic);
             $(Create_class).attr("src",On_card_pic);
         }
    
        },1000);
    }); 
    $('header .nav-item').on("mouseover",function(){
        $('.navbar .navbar-nav .dropdown-menu').removeAttr('style');
    });
    if (window.location.hash) {
        setTimeout(function () {
            id=window.location.hash;
            $('.navbar .navbar-nav .dropdown-menu').hide();
            $('html, body').animate({
                scrollTop: $(id).offset().top - 80
            }, 2000);
        }, 0);
    }
    $("[href^='#']").click(function() {
        id=$(this).attr("href");
        $('.navbar .navbar-nav .dropdown-menu').hide();
        $('html, body').animate({
            scrollTop: $(id).offset().top - 80
        }, 2000);
    });
    if($(window).width() < 667)
    {
        $('.footer .heading').click(function(){
            $(this).toggleClass('open');
            $(this).next().slideToggle();
        });
        $('header .nav-link').click(function(){
            $(this).toggleClass('open');
            $(this).next().slideToggle();
        });
    }
    else{
        $('.footer-links').removeAttr('style');
    }
});
$(window).resize(function(){
    if($(window).width() < 667)
    {
    }
    else{
        $('.footer-links').removeAttr('style');
    }
})





 





















//jelly animation  of images

var BubbleAnimationEffect = function(){
    $('.bubble-circle').animate({
        borderTopLeftRadius: String(Math.round(Math.random()*850 + 350) + 'px'),
        borderTopRightRadius:  String(Math.round(Math.random()*350 + 350) + 'px'),
        borderBottomLeftRadius:  String(Math.round(Math.random()*350 + 350) + 'px'),
        borderBottomRightRadius:  String(Math.round(Math.random()*350 + 350) + 'px'),
    },600,BubbleAnimationEffect);
};
BubbleAnimationEffect();



// var BubbleAnimationEffect = function(){
//     $('.bubble-circle').animate({
//         borderTopLeftRadius: String(Math.round(Math.random()*4000 + 350) + 'px'),
//         borderTopRightRadius:  String(Math.round(Math.random()*2000 + 350) + 'px'),
//         borderBottomLeftRadius:  String(Math.round(Math.random()*2000 + 350) + 'px'),
//         borderBottomRightRadius:  String(Math.round(Math.random()*2000 + 350) + 'px'),
//     },800,BubbleAnimationEffect);
// };
// BubbleAnimationEffect();

$(".link").on("click",function(){
         var linktext = $(this).text();
         localStorage.getId = "#" + linktext.split(" ").join("");
           localStorage.getId;
    });

// redirect and scroll to it content
 
$(window).on('load',function() {
    var x = localStorage.getItem("getId");
    console.log($(x).length); 

    function scrollToID(id, speed) {
        var offSet = 150;
        var obj = $(x);
        if(obj.length){
          var offs = obj.offset();
          var targetOffset = offs.top - offSet;
          $('html,body').animate({ scrollTop: targetOffset }, speed);
        }
    }

$(document).ready(function(){
    if(x) {
        scrollToID(x,3500);
    }
})
});


 

