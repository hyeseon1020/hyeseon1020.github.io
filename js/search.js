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
        result.find('b').html(`'${resultLeng}'`);
        console.log(resultLeng);
        activateTab($(this).index());
    });

    function activateTab(idx){
        tabResult.hide();
        tabResult.eq(idx).show();
    }

    //pagination a
    let splitPage = 8;
    let content = $('#a .content');
    let contentLeng = content.length;
    let pageCount = Math.ceil(contentLeng/splitPage);
    let numbers = $('#a .numbers');
    console.log(numbers);

    for(let i = 1; i<=pageCount; i++){
        numbers.append(`<li><a href="">${i}</a></li>`);
    }

    numbers.find('li:first-child a').addClass('active');

    function dispalyContents(idx){
        let start = idx*splitPage;
        let end = start + splitPage;

        content.hide();
        content.slice(start,end).show();
    }
    dispalyContents(0);

    let numbersLi = $('.numbers li');
    numbersLi.click(function(e){
        e.preventDefault();
        numbers.find('a').removeClass('active');
        $(this).find('a').addClass('active');
        
        
        let targetIndex = $(this).index();
        console.log(targetIndex);
        dispalyContents(targetIndex);
    });

}); //ready