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

    // 본문
    AOS.init({
        delay: 200,
        once: true
    });
    
    // error 
    $("#queryForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            type:{
                required: true,
            }//안먹음
        },
        messages:{
            email: {
                required: '입력하신 메일로 답변이 발송되오니 메일 주소를 정확하게 기재해주세요.',
                email: '이메일 형식에 맞춰 입력하세요 ex) abc@gmail.com'
            },
            type:{
                required: '문의유형을 선택해주세요. ',
            }//안먹음
        },
        errorClass:'bad-input',
        errorElement: "span"
    });
    // close
    let nav = $('.query-nav a'),
        query = $('#query'),
        x = query.find('#close');
        
    nav.click((e)=>{
        e.preventDefault();
        query.removeClass('hidden');
        $('body').addClass('flow');
    });
    x.click(()=>{
        query.addClass('hidden');
        $('body').removeClass('flow');
    });
    // radio
    let cbinput =  $('.check-box input');

    cbinput.click(function(){
        cbinput.siblings('label').removeClass('check');
        $(this).siblings('label').addClass('check');
    });
    // select
    let selec = $('.select'),
        btn = selec.find('.label'),
        rotate = selec.find('.fa-caret-down'),
        option = selec.find('.option');
    btn.click(()=>{
        selec.toggleClass('rotate');
    });
    option.click(function(){
        let otn = $(this).html();
        btn.html(otn);
        selec.find('span').toggleClass('rotate');
        selec.toggleClass('rotate');
    });
    rotate.click((e)=>{
        e.preventDefault();
        selec.toggleClass('rotate');
    });

    let availableTags = [
        "NCC",
        "PO",
        "Asp",
        "PVC/가소제",
        "ABS",
        "아크릴/SAP",
        "고무/특수수지",
        "자동차소재",
        "디스플레이소재",
        "반도체소재",
        "배터리소재",
        "수처리소재",
        "전문의약",
        "에스테틱",
        "백신",
        "진단기기",
        "파인케미칼"
    ];
    $( "#title" ).autocomplete({
    source: availableTags
    });

});