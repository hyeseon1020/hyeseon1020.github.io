$(function(){
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
            }
        },
        messages:{
            email: {
                required: '입력하신 메일로 답변이 발송되오니 메일 주소를 정확하게 기재해주세요.',
                email: '이메일 형식에 맞춰 입력하세요 ex) abc@gmail.com'
            }
        },
        errorClass:'bad-input',
        errorElement: "span"
    });
    // close
    let nav = $('.query-nav a'),
        query = $('#query'),
        x = query.find('i');
        
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
        rotate = selec.find('i'),
        option = selec.find('.option');
    console.log(rotate);
    btn.click(()=>{
        selec.toggleClass('rotate');
    });
    option.click(function(){
        let otn = $(this).html();
        btn.html(otn);
        selec.find('span').toggleClass('rotate');
        selec.toggleClass('rotate');
    });

});