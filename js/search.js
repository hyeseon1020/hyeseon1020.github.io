$(function(){
    //search
    let searchBtn = $('header .search-btn'),
        search = $('header .search');
    searchBtn.click((e)=>{
        e.preventDefault();
        if(search.hasClass('hidden')){
            $('body').css({overflow:'auto'});
        }else{
            $('body').css({overflow:'hidden'});
        }
    });

    let tabMenu = $('.tab-menu li'),
        tabResult = $('.tab-result > div'),
        result = $('.result-leng');

    tabResult.eq(0).show();

    tabMenu.click(function(e){
        e.preventDefault();
        tabMenu.find('a').removeClass('target');
        $(this).find('a').addClass('target');
        let targetId = $(this).find('a').attr('href');
        let resultLeng = $(targetId).find('.content').length;
        console.log(resultLeng);
        result.find('b').html(`'${resultLeng}'`);
        activateTab($(this).index());
    });
    function activateTab(idx){
        tabResult.hide();
        tabResult.eq(idx).show();
    }
    
}); //ready