const question = document.querySelector(".click-event");
const phrase = document.querySelector("h4")

question.addEventListener('mousedown',(e) => {
    let valeur;
    let button = e.button;

    if(phrase.style.fontSize == "") {
        valeur = 1;
    }
    else{
        valeur = parseInt(phrase.style.fontSize);
    }
    //======= traitement des boutons
    if (button == 0){
        valeur += 1;

    }else if (button == 2){
        valeur-=1;
    }
    phrase.style.fontSize = valeur + "mm";
    console.log(phrase.style.fontSize);
})


