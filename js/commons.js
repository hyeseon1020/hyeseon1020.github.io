$(function(){
    let menuBtn = $('header div .j-betweent a:nth-of-type(1)'),
        menuWrap = $('#menu_wrapper'),
        menu = $('#menu'),
        close = menu.find('li:last-child');
menuBtn.click(function(e){
    e.preventDefault();
    menuWrap.addClass('visible');
});
close.click((e)=>{
    e.preventDefault();
    menuWrap.removeClass('visible');
});

});//script