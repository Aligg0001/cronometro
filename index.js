var display = document.getElementById('display');

var minutos = document.getElementById('minutos');

var segundos = document.getElementById('segundos');

var iniciar = document.getElementById('iniciar');


var cronometroSegundos;

var minutosAtual;
var segundoAtual;

var interval;


for(var i = 0; i <= 60; i++){
    minutos.innerHTML+='<option value="'+i+'"> '+i+'</option>';
}

for(var i = 1; i <= 60; i++){ 
    segundos.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

iniciar.addEventListener('click',function(){ 
  minutosAtual = minutos.value;
  segundoAtual = segundos.value;

  display.childNodes[1].innerHTML = minutosAtual + ":"+segundoAtual;

  interval = setInterval(function(){

    segundoAtual--;
    if(segundoAtual <= 0){
        if(minutosAtual > 0){
              minutosAtual--;
              segundoAtual = 59;
        }else{
            alert("Finalizado");
            document.getElementById("sound").play();
            clearinterval(interval);

  }

}
   display.childNodes[1].innerHTML = minutosAtual + ":"+segundoAtual;
  },1000);


 })