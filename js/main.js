$(document).ready(function(){
    let section = $('#fullpage section');
    let more = section.find('span');

    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: true,
        loopBottom:true,
        loopTop:true
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
