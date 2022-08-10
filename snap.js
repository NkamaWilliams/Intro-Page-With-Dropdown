var drop1 = 0;
var drop2 = 0;

function toggle_dropdown(drop){
    let dropdwn = document.getElementsByClassName(drop);
    dropdwn[0].querySelector('.dropdown-list').classList.toggle('open');
    dropdwn[0].querySelector('.img1').classList.toggle('close');
    dropdwn[0].querySelector('.img2').classList.toggle('close');
}

function open_menu(){
    document.getElementsByClassName("menu-details")[0].classList.add('open');
}

function close_menu(){
    document.getElementsByClassName("menu-details")[0].classList.remove("open");
}

function toggle_dropdown2(drop){
    let dropdwn = document.getElementsByClassName(drop);
    dropdwn[1].querySelector('.dropdown-list2').classList.toggle('open');
    dropdwn[1].querySelector('.img1').classList.toggle('close');
    dropdwn[1].querySelector('.img2').classList.toggle('close');
}