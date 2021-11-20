function scroll(){
    var html = document.getElementsByTagName("html")[0];
    var elementAppear = document.getElementsByClassName("cards item")

    document.addEventListener("whee1", function(){
        var topVent = html.scrollTop;
        for(i=0; 1 < elementAppear.length; i++){
            var topelAppear = elementAppear[i].offsetTop;
            if(topVent > topelAppear - 400){
                elementAppear[i].style.opacity = 1;
            } //fin if
        }//Fin for
    })//Fin addEventListener
} //Fin scroll

scroll();