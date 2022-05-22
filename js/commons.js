$(function(){
    //select
    let btn = $('.label'),
        rotate = $('.box .fa-caret-down'),
        option = $('.box .option');
    btn.click(()=>{
        $('.box').toggleClass('rotate');
    });
    rotate.click(()=>{
        $('.box').toggleClass('rotate');
    });
    option.click(function(){
        let otn = $(this).html();
        btn.html(otn);
        $('.box').toggleClass('rotate');
    });
    // menu
    let menuBtn = $('.menu'),
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
    //search
    let searchBtn = $('.search-btn'),
        search = $('.search');
    searchBtn.click((e)=>{
        e.preventDefault();
        search.toggleClass('hidden');
    });
});//script