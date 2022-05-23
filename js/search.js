$(function(){
    let tabMenu = $('.tab-menu li'),
        tabResult = $('.tab-result > div');

    tabResult.eq(0).show();

    tabMenu.click(function(e){
        e.preventDefault();
        tabMenu.find('a').removeClass('target');
        $(this).find('a').addClass('target');
        activateTab($(this).index());
    });
    function activateTab(idx){
        tabResult.hide();
        tabResult.eq(idx).show();
    }
}); //ready