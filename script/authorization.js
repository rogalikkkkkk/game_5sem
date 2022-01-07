function start() {
    let nick = document.getElementById("nickname").value;

    if (!nick) {
        alert("Нужно ввести имя!");
    }
    else {
        localStorage.setItem('nickn', nick);
        document.location.href = "main_page.html";
    }
}

function changeColors() {
    if (document.querySelector('.form_auth_block').style.backgroundImage ==  'url("/sources/bgim_auth_w.jpg")') {
        document.querySelector('.form_auth_block').style.backgroundImage = 'url("/sources/bgim_auth_b.jpg")';
        localStorage.setItem('back_img', 'url("/sources/bgim_auth_b.jpg")');
        localStorage.setItem('back_color', 'rgb(181, 184, 177)');
        localStorage.setItem('text_color', 'darkblue');
        localStorage.setItem('back_color_opacity', 'rgba(181, 184, 177, .95)');
    } else {
        document.querySelector('.form_auth_block').style.backgroundImage = 'url("/sources/bgim_auth_w.jpg")';
        localStorage.setItem('back_img', 'url("/sources/bgim_auth_w.jpg")');
        localStorage.setItem('back_color', 'rgb(79, 79, 79)');
        localStorage.setItem('text_color', 'darkgrey');
        localStorage.setItem('back_color_opacity', 'rgba(79, 79, 79, .95)');
    }

    document.querySelector('.header_container').style.backgroundColor = localStorage.getItem('back_color');
    document.querySelector('.header_container').style.color = localStorage.getItem('text_color');
    document.querySelector('.form_auth_block_content').style.color = localStorage.getItem('text_color');
    document.querySelector('.form_auth_block_head_text').style.background = localStorage.getItem('back_color');
    document.querySelector('.form_auth_block label').style.background = localStorage.getItem('back_color');
    document.querySelector('.form_auth_button').style.backgroundColor = localStorage.getItem('back_color');
    document.querySelector('.form_auth_button').style.color = localStorage.getItem('text_color');
}

function load() {
    if (!localStorage.getItem('back_img')) {
        localStorage.setItem('back_img', 'url("/sources/bgim_auth_w.jpg")');
    }

    if (!localStorage.getItem('back_color')) {
        localStorage.setItem('back_color', 'rgb(79, 79, 79)');
        
    }

    if (!localStorage.getItem('text_color')) {
        localStorage.setItem('text_color', 'darkgrey');
    }

    document.querySelector('.form_auth_block').style.backgroundImage = localStorage.getItem('back_img');
    document.querySelector('.header_container').style.backgroundColor = localStorage.getItem('back_color');
    document.querySelector('.header_container').style.color = localStorage.getItem('text_color');
    document.querySelector('.form_auth_block_content').style.color = localStorage.getItem('text_color');
    document.querySelector('.form_auth_block_head_text').style.background = localStorage.getItem('back_color');
    document.querySelector('.form_auth_block label').style.background = localStorage.getItem('back_color');
    document.querySelector('.form_auth_button').style.backgroundColor = localStorage.getItem('back_color');
    document.querySelector('.form_auth_button').style.color = localStorage.getItem('text_color');
}
