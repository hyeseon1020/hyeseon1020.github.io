$(function(){
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


});