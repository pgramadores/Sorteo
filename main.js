  var participantes = [
  {
    nombre: "Juan"
  },
  {
    nombre: "Agustin"
  },
  {
    nombre: "Bernardo"
  },
  {
    nombre: "Claudia"
  },
  {
    nombre: "Giannina"
  },
  {
    nombre: "Andres"
  }
]

for (i = participantes.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = participantes[i - 1];
    participantes[i - 1] = participantes[j];
    participantes[j] = x;
}

function log(participantes){
    var retirado = participantes.pop();
    if (participantes.length != 0) {
      console.log('Al agua ' + retirado.nombre);
      setTimeout(function () {log(participantes);}, 3000);
    }else{
      console.log('¡El ganador es: ' + retirado.nombre + ' felicidades!');
    }
}

log(participantes);