var q = [];
q[0]="Yo?";
q[1]="What's up?";
q[2]="Hi Boss?";
q[3]="Yes Boss?";
q[4]="Yes?";
q[5]="How are you today, boss?";

function wowwowwowwowwowwowwowwowwow(){
    var c = q.length;
    var i = Math.floor(Math.random() * c);
    var aws = confirm(q[i]);
    console.log(aws);
    while (aws){
        i = Math.floor(Math.random() * c);
        aws = confirm(q[i]);
    }
}



function saoQiLai(){
    var xiaolaodi = document.getElementById("xiaolaodi");
    xiaolaodi.addEventListener("click", wowwowwowwowwowwowwowwowwow, false);
}

window.addEventListener("load", saoQiLai, false);