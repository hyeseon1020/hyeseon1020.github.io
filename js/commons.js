$(function(){
    //select
    let btn = $('header .label'),
        rotate = $('header .fa-caret-down'),
        option = $('header .option');
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
        menuItem = menu.find('li a');

    menuBtn.click((e)=>{
        e.preventDefault();
        menuWrap.addClass('visible');
    });
    menu.find('.close a').click((e)=>{
        e.preventDefault();
        menuWrap.removeClass('visible');
    });

    menuItem.click(function(e){
        e.preventDefault();
        let targetId = $(this).attr('href');
        $(targetId).addClass('visible');
        $(targetId).find('.close').click((e)=>{
            e.preventDefault();
            $(targetId).removeClass('visible');
        });
    });
    //search
    let searchBtn = $('header .search-btn'),
        search = $('header .search');
    searchBtn.click((e)=>{
        e.preventDefault();
        if(search.hasClass('hidden')){
            search.removeClass('hidden');
        }else{
            search.addClass('hidden');
        }
    });

    //accordion
    let toggleBtn = $('.submenu li');
    console.log(toggleBtn);

    // toggleBtn.find('.submenu-pd').slideUp();
    // toggleBtn.click(function(){
    //     $(this).find('.toggle-btn').toggleClass('active');
    //     $(this).find('.submenu-pd').slideToggle();
    // });

});//script