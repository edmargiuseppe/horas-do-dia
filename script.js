
function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora}h`;

    if(hora >= 0 && hora < 12){
        img.src ="./img/manha.jpg";
        document.body.style.background ="#F0E68C";
        

    }else if(hora >=12 && hora <= 18){
        img.src ="./img/tarde.jpg";
        document.body.style.backgroundColor = "#F5DEB3"

    }else{
        img.src ="./img/noite.jpg";
        document.body.style.backgroundColor ="#808080";
    }
}
