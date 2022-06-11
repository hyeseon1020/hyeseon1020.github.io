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

    //쿠키활용 팝업창
let popup = document.querySelector('.popup-wrapper'),
popupCheckBox = document.querySelector('#popup'),
popupClose = document.querySelector('#close');

function setCookie(name,value,day){
let date = new Date();
date.setDate(date.getDate() + day);

let cookieContent = '';
cookieContent += `${name}= ${value};`;
cookieContent += `Expires=${date.toUTCString()};`;

document.cookie = cookieContent; 
}

//쿠키 확인 함수
function getCookie(name){
let visited = false;
let cookies = document.cookie.split(';');
console.log(cookies);
for(let cookie of cookies){
    if(cookie.indexOf(name)>-1){
        visited = true;
    }
}
if(visited){
    popup.style.display = 'none';
}else{
    popup.style.display = 'block';
}
}
getCookie('portfolio1');

//쿠키 삭제 함수
function delCookie(name,value){
let date = new Date();
date.setDate(date.getDate() - 1);

let cookieContent = '';
cookieContent += `${name}= ${value};`;
cookieContent += `Expires=${date.toUTCString()};`;

document.cookie = cookieContent; 
}

popupClose.addEventListener('click',(e)=>{
e.preventDefault();
popup.style.display = 'none';
if(popupCheckBox.checked){
    setCookie('portfolio1','Main page',1);
}else{
    delCookie('portfolio1','Main page');
}
});

});//script
