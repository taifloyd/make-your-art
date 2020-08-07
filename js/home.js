window.load = slide(1); // quando recarregar, volta para a img numero 1
// window.load vai fazer algo quando a página for recarregada
var bgNumber = 1;
function slide(a){
    var allBg = 5; // quantidade de imagens
    
    // colocando as img via JS
    document.getElementById("image-background").style.backgroundImage = "url('./img/"+a+".jpg')";
}

// botões

function prev(){
    if(bgNumber>1){
        bgNumber--;
        slide(bgNumber);
    }
}

function next(){
    if(bgNumber<5){
        bgNumber++;
        slide(bgNumber);
    }
}
