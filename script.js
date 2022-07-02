$(document).ready(function(){
    AOS.init(); 


    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          500: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          820: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });

    

      // sub-menu
      $('.menu-bar .menu').mouseenter(function(){
        

        var result = $(this).attr('data-alt');
        $('.sub-menu').removeClass('active');

        $(`#${result}`).addClass('active');
        

        
        $('.sub-menu-box').stop().slideDown().addClass('active');
               
      });
        
      $('.sub-menu-box').mouseleave(function(){
        $(this).stop().slideUp().removeClass('active');
        $('.sub-menu').removeClass('active');
      });




      //sec4 fade-gallery
      $('.keyword').mouseenter(function(){
        
        var ch = $(this).attr('data-image');

        $('.sec4-sub-box').css({
          'background-image' : `url(${ch})`
        });
      });
      
      $('.keyword').mouseleave(function(){
        $('.sec4-sub-box').css({
          'background-image' : ''
        });
      });


      /* $('.keyword').mouseenter(function(){

        let subimg = $(this).attr('data-alt');
        $('.sub-img').removeClass('active');

        $(`#${subimg}`).addClass('active');
        

      });
      
      $('.keyword').mouseleave(function(){

        $('.sub-img').removeClass('active');
      }); */




/* 
      $(window).scroll(function(){

        const h = $(window).scrollTop();
        console.log(h);

        ///////sec4////
        // 4300-5200 투명하게
         // 1 = a * 4300 + b
        //0 = a * 5200 + b

        //a = - 1/900
       // b = 52/9

       const y = -1/900 *h + 52/9;
       $('.sec4-content-box').css('opacity',y)
        //작아지게
        const z = -1/9000 * h + 133/90;
       // a= - 1/9000
       // b=  133/90
       $('.sec4-content-box').css('transform',`scale(${z})`);


       /////sec3////
       //작아지게
       const a = -1/8000 * h + 2233/1600;
       //3165 - 3965

       //a = - 1/8000
       //b =2233/1600
       $('.sec3-content-box').css('transform',`scale(${a})`);


       //투명하게
       //a= - 1/800
       //b= 793/160
       const b = - 1/800 *h + 793/160;
       $('.sec3-content-box').css('opacity',b)

      }); */
      media()
     var ww = $(window).width();
     function media(){
    

     $(window).scroll(function(){
     if( ww >= 500){
     

        const h = $(window).scrollTop();
        console.log(h);

        ///////sec4////
        // 4300-5200 투명하게
         // 1 = a * 4300 + b
        //0 = a * 5200 + b

        //a = - 1/900
       // b = 52/9

       const y = -1/900 *h + 52/9;
       $('.sec4-content-box').css('opacity',y)
        //작아지게
        const z = -1/9000 * h + 133/90;
       // a= - 1/9000
       // b=  133/90
       $('.sec4-content-box').css('transform',`scale(${z})`);


       /////sec3////
       //작아지게
       const a = -1/8000 * h + 2233/1600;
       //3165 - 3965

       //a = - 1/8000
       //b =2233/1600
       $('.sec3-content-box').css('transform',`scale(${a})`);


       //투명하게
       //a= - 1/800
       //b= 793/160
       const b = - 1/800 *h + 793/160;
       $('.sec3-content-box').css('opacity',b)

     }else{

     }

    });

    $(window).resize(function(){
      ww =$(window).width();
      media();
    });

  }
     
           


       
}); /* end */