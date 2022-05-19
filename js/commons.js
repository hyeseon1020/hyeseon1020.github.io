$(function(){
    //select
    let label = $('label'),
        select = $('select');
    label.click(function(){
        $(this).toggleClass('rotate');
    });
    // menu
    let menuBtn = $('header div .j-betweent a:nth-of-type(1)'),
        menuWrap = $('#menu_wrapper'),
        menu = $('#menu'),
        menuItem = menu.find('li');

    menuBtn.click((e)=>{
        e.preventDefault();
        menuWrap.addClass('visible');
    });
    menu.find('.close').click((e)=>{
        e.preventDefault();
        menuWrap.removeClass('visible');
    });

    menuItem.click(function(e){
        e.preventDefault();
        let targetId = $(this).find('a').attr('href');
        $(targetId).addClass('visible');
        $(targetId).find('.close').click((e)=>{
            e.preventDefault();
            $(targetId).removeClass('visible');
        });
    });

});//script