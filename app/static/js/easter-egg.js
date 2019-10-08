var q = [];
q.add("Yo?");
q.add("What's up?");
q.add("Hi Boss?");
q.add("Yes Boss?");
q.add("Yes?");
q.add("How are you today, boss?");

function wowwowwowwowwowwowwowwowwow(){
    var c = q.length;
    var i = Math.floor(Math.random() * l);
    alert(q[i]);
}



function saoQiLai(){
    var xiaolaodi = document.getElementById("xiaolaodi");
    xiaolaodi.addEventListener("click", wowwowwowwowwowwowwowwowwow, false);
}

window.addEventListener("load", saoQiLai, false);