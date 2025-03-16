

// SCRIPT DE LAS DIAPOSITIVAS -------------------------------------------------------------

var slideIndex = 1;

document.addEventListener("DOMContentLoaded", function(){
    if(document.getElementsByClassName("cover-photo").length > 0){
        showDivs(slideIndex);
    }
})

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){

    var i;

    var x = document.getElementsByClassName("cover-photo");

    if(n > x.length){
        slideIndex = 1;
    }

    if(n < 1){
        slideIndex = x.length;
    }

    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
}



// SCRIPT DE LAS PESTAÑAS -------------------------------------------------------------

function showContent(tab){
    document.querySelectorAll('.tab-contenido').forEach(content => {
        content.style.display = 'none';
    });

    document.getElementById(tab).style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function(){
    
    if(document.getElementById('credenciales')){
        showContent('credenciales');
    }

    const credencialesBtn = document.getElementById('CredencialesBT');
    const masBtn = document.getElementById('MasBT');

    if(credencialesBtn){
        credencialesBtn.addEventListener('click', function(){
            showContent('credenciales');
        });
    }

    if(masBtn){
        masBtn.addEventListener('click', function(){
            showContent('mas');
        });
    }

})