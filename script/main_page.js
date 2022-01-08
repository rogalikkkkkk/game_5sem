function start() {
    document.getElementById("user_nickname").innerHTML = localStorage.getItem('nickn');
    document.querySelector('.main_body').style.backgroundImage = localStorage.getItem('back_img');
    document.querySelector('.header_container_main').style.backgroundColor = localStorage.getItem('back_color'); //181 184 177
    document.querySelector('.header_container_main').style.color = localStorage.getItem('text_color'); //darksmth
    document.querySelector('.user_nickname').style.color = localStorage.getItem('text_color');
    document.querySelectorAll('.main_body a').forEach(element => {
        element.style.backgroundColor = localStorage.getItem('back_color');
    });
    document.querySelectorAll('.main_body a').forEach(element => {
        element.style.color = localStorage.getItem('text_color');
    });
    document.querySelector('.endGame').style.backgroundColor = localStorage.getItem('back_color_opacity');
    document.querySelector('.endGame').style.color = localStorage.getItem('text_color');
    document.querySelectorAll('.on_authorization_button_container a').forEach(element => {
        element.style.color = localStorage.getItem('text_color');
        element.style.backgroundColor = localStorage.getItem('back_color');
    });
    document.querySelector('.timer').style.backgroundColor = localStorage.getItem('back_color_opacity');
    document.querySelector('.timer').style.color = localStorage.getItem('text_color');
    document.querySelector('.description_container').style.backgroundColor = localStorage.getItem('back_color_opacity');
    document.querySelector('.description_container').style.color = localStorage.getItem('text_color');
}

function changeColors() {
    if (document.querySelector('.main_body').style.backgroundImage ==  'url("sources/bgim_auth_w.jpg")') {
        document.querySelector('.main_body').style.backgroundImage = 'url("sources/bgim_auth_b.jpg")';
        localStorage.setItem('back_img', 'url("sources/bgim_auth_b.jpg")');
        localStorage.setItem('back_color', 'rgb(181, 184, 177)');
        localStorage.setItem('text_color', 'darkblue');
        localStorage.setItem('back_color_opacity', 'rgba(181, 184, 177, .95)');
    } else {
        document.querySelector('.main_body').style.backgroundImage = 'url("sources/bgim_auth_w.jpg")';
        localStorage.setItem('back_img', 'url("sources/bgim_auth_w.jpg")');
        localStorage.setItem('back_color', 'rgb(79, 79, 79)');
        localStorage.setItem('text_color', 'darkgrey');
        localStorage.setItem('back_color_opacity', 'rgba(79, 79, 79, .95)');
    }

    document.querySelector('.header_container_main').style.backgroundColor = localStorage.getItem('back_color');
    document.querySelector('.header_container_main').style.color = localStorage.getItem('text_color');
    document.querySelector('.user_nickname').style.color = localStorage.getItem('text_color');
    document.querySelectorAll('.main_body a').forEach(element => {
        element.style.backgroundColor = localStorage.getItem('back_color');
    });
    document.querySelectorAll('.main_body a').forEach(element => {
        element.style.color = localStorage.getItem('text_color');
    });
    document.querySelector('.endGame').style.backgroundColor = localStorage.getItem('back_color_opacity');
    document.querySelector('.endGame').style.color = localStorage.getItem('text_color');
    document.querySelectorAll('.on_authorization_button_container a').forEach(element => {
        element.style.color = localStorage.getItem('text_color');
        element.style.backgroundColor = localStorage.getItem('back_color');
    });
    document.querySelector('.timer').style.backgroundColor = localStorage.getItem('back_color_opacity');
    document.querySelector('.timer').style.color = localStorage.getItem('text_color');
    document.querySelector('.description_container').style.backgroundColor = localStorage.getItem('back_color_opacity');
    document.querySelector('.description_container').style.color = localStorage.getItem('text_color');
}

const smallBucket = document.querySelector('.bucket2');
const bigBucket = document.querySelector('.bucket1');
const thirdBucket = document.querySelector('.bucket3');
const draining = document.querySelector('.draining');

document.querySelector('.bucket1 img').ondragstart = function() {
    return false;
};
document.querySelector('.bucket2 img').ondragstart = function() {
    return false;
};
document.querySelector('.bucket3 img').ondragstart = function() {
    return false;
};


smallBucket.ondragover = allowDrop;
bigBucket.ondragover = allowDrop;
thirdBucket.ondragover = allowDrop;
draining.ondragover = allowDrop;

function allowDrop(event) {
    event.preventDefault();
}
 
smallBucket.ondragstart = drag;
bigBucket.ondragstart = drag;
thirdBucket.ondragstart = drag;
function drag(event) {
    event.dataTransfer.setData('fill', event.target.querySelectorAll('strong')[1].innerHTML);
    event.dataTransfer.setData('sourceObjectId', event.target.querySelectorAll('strong')[1].id);
    event.dataTransfer.setData('sourceObjectDiv', event.target.id);
}

if (localStorage.getItem('try') == null) {
    localStorage.setItem('try', parseInt(0));
}

let a = 5;
let b = 3;
let needed = 4;
let moves = 0;
let intervalium = 1;

do {
    b = Math.floor(Math.random() * 12) + 2;
} while (a == b);
let nod = get_nod(a, b);
do {
    needed = nod * (Math.round(Math.random() * (a + b) / nod) + 1);
} while (needed % nod != 0 || needed == a || needed == b || needed == 0);
let i = Math.round((a + b) * (Math.random() / 2 + 1));
    if (i <= needed) { i = needed + 3; };

bigBucket.ondrop = dropB;
smallBucket.ondrop = dropB;
thirdBucket.ondrop = dropB;
draining.ondrop = drainDrop;
function dropB (event) {

    if (event.target.parentElement.id != event.dataTransfer.getData('sourceObjectDiv')) {
        let destObject = event.target;
        let sourcObjectFillingId = event.dataTransfer.getData('sourceObjectId');
        let destObjectFillingId = destObject.querySelectorAll('strong')[1].id;
        let selectedFilling = parseInt(event.dataTransfer.getData('fill'));
        let destFilling = parseInt(destObject.querySelectorAll('strong')[1].innerHTML);
        let destVolume = parseInt(destObject.querySelectorAll('strong')[0].innerHTML);
        let destFillingTmp = destFilling + selectedFilling;
        if (destFillingTmp > destVolume) {
            document.getElementById(destObjectFillingId).innerHTML = destVolume;
            document.getElementById(sourcObjectFillingId).innerHTML = selectedFilling - (destVolume - destFilling);
        } else {
            document.getElementById(destObjectFillingId).innerHTML = destFillingTmp;
            document.getElementById(sourcObjectFillingId).innerHTML = parseInt(0);
        }
        moves++;
        if (destVolume == needed || selectedFilling - (destVolume - destFilling) == needed || destFillingTmp == needed) {
            success();
        }
    }

    
}

function drainDrop (event) {
    document.getElementById(event.dataTransfer.getData('sourceObjectId')).innerHTML = parseInt(0);
}

smallBucket.addEventListener("click", function (event) {
    document.getElementById("cf3").innerHTML = document.getElementById("v3").innerHTML;
});
bigBucket.addEventListener("click", function (event) {
    document.getElementById("cf5").innerHTML = document.getElementById("v5").innerHTML;
});
thirdBucket.addEventListener("click", function (event) {
    document.getElementById("cfx").innerHTML = document.getElementById("vx").innerHTML;
});


function tutorialActivate(event) {
    document.querySelector('.chose_level_container').style.display = 'none';
    document.querySelector('.task_container').style.display = 'flex';
    document.querySelector('.description_container').style.display = 'block';
    document.querySelector('.timer_container').style.display = 'none';
    document.querySelector('.upper_buttons_container').style.display = 'flex';
    document.querySelector('.endGameTextContainer2').innerHTML = 'Поздравляю, вы успешно прошли обучение';
    a = 5;
    b = 3;
    needed = 4;
    level = 1;
}

function tick() {
    sec++;
    if (sec >= 60) {
        min++;
        sec = sec - 60;
    }
    if(min > 0) {
        defeat();
    }
    if (sec < 10) {
        if (min < 10) {
            document.querySelector('.timer').innerHTML ='0' + min + ':0' + sec;
        } else {        
            document.querySelector('.timer').innerHTML = min + ':0' + sec;
        }
    } else {
        if (min < 10) {
            document.querySelector('.timer').innerHTML = '0' + min + ':' + sec;
        } else {
            document.querySelector('.timer').innerHTML = min + ':' + sec;
        }
    }
}

min = 0;
sec = 0;

function firstLevelActivate (event) {
    min = 0;
    sec = 0;
    moves = 0;
    intervalium = setInterval(tick, 1000);
    document.querySelector('.chose_level_container').style.display = 'none';
    document.querySelector('.timer_container').style.display = 'block';
    document.querySelector('.task_container').style.display = 'flex';
    document.querySelector('.description_container').style.display = 'block';
    document.querySelector('.bucket3').style.display = 'block';
    document.querySelector('.timer_container').style.display = 'block';
    document.querySelector('.upper_buttons_container').style.display = 'flex';
    level = 2;
    a = Math.floor(Math.random() * 10) + 2;
    do {
        b = Math.floor(Math.random() * 12) + 2;
    } while (a == b);
    nod = get_nod(a, b);
    do {
        needed = nod * (Math.round(Math.random() * (a + b) / nod) + 1);
    } while (needed % nod != 0 || needed == a || needed == b || needed == 0);
    let i = Math.round((a + b) * (Math.random() / 2 + 1));
        if (i <= needed) { i = needed + 3; };
    document.getElementById("v5").innerHTML = a;
    document.getElementById("v3").innerHTML = b;
    document.getElementById("vx").innerHTML = i;
    document.querySelector('.description_container').innerHTML = 'В этом уровне вам необходимо набрать в сумме <strong class="needed_info"></strong> литров. На выполнение даётся 1 минута';
    document.querySelector('.needed_info').innerHTML = needed;
    document.querySelector('.endGameTextContainer2').innerHTML = 'Поздравляю, вы набрали <strong class="result_points"></strong> очков</div>';
    let tryNumber = parseInt(localStorage.getItem('try')) + 1;
    localStorage.setItem('try', tryNumber++);
}

function get_nod(a, b) {
    while (a != b) {
        if (a > b) {
            tmp = a;
            a = b;
            b = tmp;
        }
        b = b - a;
    }
    return a;
}

function choseLevelActivate(event) {
    document.querySelector('.chose_level_container').style.display = 'flex';
    document.querySelector('.task_container').style.display = 'none';
    document.querySelector('.description_container').style.display = 'none';
    document.querySelector('.timer_container').style.display = 'none';
    document.querySelector('.endGameTextContainer').style.display = 'none';
}

function get_result() {
    let time = Math.round(10 * ((10 / Math.sqrt(moves + 4))) / (sec + min*60) * 50);
    return time;
}

function success (event) {
    document.querySelector('.endGame').style.display = 'flex';
    document.querySelector('.timer_container').style.display = 'none';
    document.querySelector('.task_container').style.display = 'none';
    document.querySelector('.description_container').style.display = 'none';
    if (level != 1) {
        document.querySelector('.result_points').innerHTML = get_result();
        localStorage.setItem(localStorage.getItem('try'), get_result());
    }
    document.querySelector('.upper_buttons_container').style.display = 'none';
    document.querySelector('.bucket_end').style.animation = 'success 2s infinite';
    clearInterval(intervalium);
}

function clearLocalStorage(event) {
    localStorage.setItem('try', parseInt(0));

    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        if (!isNaN(key)) {
            localStorage.removeItem(parseInt(key));
            i--;
        };
    }
}

function defeat(event) {
    document.querySelector('.endGame').style.display = 'flex';
    document.querySelector('.timer_container').style.display = 'none';
    document.querySelector('.task_container').style.display = 'none';
    document.querySelector('.description_container').style.display = 'none';
    document.querySelector('.upper_buttons_container').style.display = 'none';
    document.querySelector('.bucket_end').style.animation = 'defeat 2s infinite';
    document.querySelector('.endGameTextContainer1').innerHTML = 'Вы получили проигрыш';
    document.querySelector('.endGameTextContainer2').innerHTML = 'К сожалению, у вас закончилось время, попробуйте ещё раз';
    clearInterval(intervalium);
}