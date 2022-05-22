$(document).ready(function(){
    let section = $('section');
    let more = section.find('span');
    let pager = $('.pager a');

    section.eq(0).find('.container').addClass('active');
    pager.click(function(e){
        e.preventDefault();
        let targetId = $(this).attr('href');
        let targetSCT = $(targetId).offset().top - 190;
        $('html,body').animate({scrollTop:targetSCT}, 400);
        let idx = $(this).index();
        section.siblings().find('.container').removeClass('active');
        section.eq(idx).find('.container').addClass('active');
    });
    

    $(window).scroll(function(){
        let sct = $(this).scrollTop();
        let sections = $('.scroll');
        sections.each(function(idx){
            if(sct >= $(this).offset().top - 200){
                pager.removeClass('on');
                pager.eq(idx).addClass('on');
                section.siblings().find('.container').removeClass('active');
                section.eq(idx).find('.container').addClass('active');
            }
          });
    });

    more.find('a').click(function(e){
        e.preventDefault();
        let targetId = $(this).attr('href');
        $(targetId).addClass('visible');
        $(targetId).find('.close').click((e)=>{
            e.preventDefault();
            $(targetId).removeClass('visible');
        });
    });

});//script