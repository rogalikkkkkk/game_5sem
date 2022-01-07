function start() {
    document.getElementById("user_nickname").innerHTML = localStorage.getItem('nickn');
    document.querySelector('.main_body').style.backgroundImage = localStorage.getItem('back_img');
    document.querySelector('.header_container_main').style.backgroundColor = localStorage.getItem('back_color');
    document.querySelector('.header_container_main').style.color = localStorage.getItem('text_color');
    document.querySelector('.user_nickname').style.color = localStorage.getItem('text_color');
    document.querySelector('.main_body a').style.color = localStorage.getItem('text_color');
    document.querySelector('.main_body a').style.backgroundColor = localStorage.getItem('back_color');
    document.querySelector('.res_container_older').style.backgroundColor = localStorage.getItem('back_color_opacity');
    document.querySelector('.result_container').style.color = localStorage.getItem('text_color');
    let ress = document.querySelector('.result_container');

    let kess = [];
    for(let i=0; i<localStorage.length; i++) {
        let key = parseInt(localStorage.key(i));
        if (!isNaN(key)) {
            kess.push(key);
        };
    }   
    kess.sort((a,b) => a-b); 

    for (var i=0; i<kess.length; i++) {
        var key = kess[i];
        var value = localStorage[key];
        ress.innerHTML += `<div class="try_number">${key}</div><div class="points">${value}</div>`;
    } 


}

function changeColors() {
    if (document.querySelector('.main_body').style.backgroundImage ==  'url("/sources/bgim_auth_w.jpg")') {
        document.querySelector('.main_body').style.backgroundImage = 'url("/sources/bgim_auth_b.jpg")';
        localStorage.setItem('back_img', 'url("/sources/bgim_auth_b.jpg")');
        localStorage.setItem('back_color', 'rgb(181, 184, 177)');
        localStorage.setItem('text_color', 'darkblue');
        localStorage.setItem('back_color_opacity', 'rgba(181, 184, 177, .95)');
    } else {
        document.querySelector('.main_body').style.backgroundImage = 'url("/sources/bgim_auth_w.jpg")';
        localStorage.setItem('back_img', 'url("/sources/bgim_auth_w.jpg")');
        localStorage.setItem('back_color', 'rgb(79, 79, 79)');
        localStorage.setItem('text_color', 'darkgrey');
        localStorage.setItem('back_color_opacity', 'rgba(79, 79, 79, .95)');
    }

    document.querySelector('.header_container_main').style.backgroundColor = localStorage.getItem('back_color');
    document.querySelector('.header_container_main').style.color = localStorage.getItem('text_color');
    document.querySelector('.user_nickname').style.color = localStorage.getItem('text_color');
    document.querySelector('.main_body a').style.color = localStorage.getItem('text_color');
    document.querySelector('.main_body a').style.backgroundColor = localStorage.getItem('back_color');
    document.querySelector('.res_container_older').style.backgroundColor = localStorage.getItem('back_color_opacity');
    document.querySelector('.result_container').style.color = localStorage.getItem('text_color');
    
}