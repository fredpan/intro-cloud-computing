var q = [];
q[0]="SUBMIT HERETIC!";
q[1]="EMBRACE THE ELDER GOD!";
q[2]="THERE IS NO ESCAPE!";
q[3]="EXISTENCE IS PAIN!";
q[4]="JOIN US!";
q[5]="THIS WORLD IS AN ILLUSION!";

function wowwowwowwowwowwowwowwowwow(){
    var c = q.length;
    var i = Math.floor(Math.random() * c);
    var aws = confirm(q[i]);
    console.log(aws);
    while (aws) {
        i = Math.floor(Math.random() * c);
        aws = confirm(q[i]);
    }
}



function saoQiLai(){
    var xiaolaodi = document.getElementById("xiaolaodi");
    xiaolaodi.addEventListener("click", wowwowwowwowwowwowwowwowwow, false);
}

window.addEventListener("load", saoQiLai, false);