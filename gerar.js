
// Script para gerar o QRCODE

const input = document.querySelector("input");
const btn = document.querySelector("button");
const qrcode = document.querySelector("#qrcode");
const place = document.querySelector(".place");
const info = document.querySelector(".info").style;


btn.onclick = e => {
  if (input.value.length !== 0) {
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${input.value}`;
    place.style.display = 'none';
    const downloadLink = document.getElementById('download');

    // Define o link de download após a imagem carregar
    qrcode.onload = function() {
      downloadLink.href = qrcode.src;
      downloadLink.download = 'qrcode.png';
      downloadLink.style.display = 'block';
    };
  } else {
    info.style.display = 'block';
    input.style.border = '1px solid rgb(221, 29, 29)';
    let audio = new Audio('efeitos-sonoros/alerta.mp3');
    audio.play();
  }
}



// Script da box de alerta
const alertaOK = document.querySelector(".alertOK");

alertaOK.onclick = e =>{
  info.display='';
  input.style.border= ''
}

// Script da imagem no rodapé
const pub = document.querySelector("#pub");

function carrosel(){
  pub.style.backgroundImage= 'url(./img/pubb2.png)';
  }
setInterval (carrosel, 15000);