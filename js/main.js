$(document).ready(function(){

    let pager = $('.pager a');
    
    pager.click(function(e){
        e.preventDefault();
        let targetId = $(this).attr('href');
        //more
        let more = $(targetId).find('a');
        console.log(more);
        more.click(function(e){
            e.preventDefault();
            let targetId = $(this).attr('href');
            $(targetId).addClass('visible');
            $(targetId).find('.close').click((e)=>{
                e.preventDefault();
                $(targetId).removeClass('visible');
            });
        });

        // let targetSCT = $(targetId).offset().top - 200;
        // console.log(targetId);
        // $('html,body').animate({scrollTop:targetSCT},500);
    });

    $(window).scroll(function(){
        let sct = $(this).scrollTop();
        let sections = $('.scroll');
        sections.each(function(idx){
            if(sct >= $(this).offset().top - 200){
                pager.removeClass('on');
                pager.eq(idx).addClass('on');
            }
          });
    });

    // more
    // let more = section.find('span');

    // more.click(function(e){
    //     e.preventDefault();
    //     let targetId = $(this).find('a').attr('href');
    //     $(targetId).addClass('visible');
    //     $(targetId).find('.close').click((e)=>{
    //         e.preventDefault();
    //         $(targetId).removeClass('visible');
    //     });
    // });

});//script