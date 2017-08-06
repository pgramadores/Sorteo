var participantes = [
  {
    nombre: 'Valeska'
  },
  {
    nombre: 'Monica'
  },
  {
    nombre: 'Jocelyn'
  },
  {
    nombre: 'Maria Jose'
  },
  {
    nombre: 'Andres'
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
      let mensaje = `| Al agua ${retirado.nombre}, quedan ${participantes.length} |`
      let separador = (Array(mensaje.length + 1).join("=")).toString().replace(',','');
      console.log(separador + '\n' + mensaje + '\n' + separador)
      setTimeout(function () {
          log(participantes);
      }, 1000);
  }else{
      var mensaje = `* ¡El/la flamante ganador/a es: ${retirado.nombre.toUpperCase()} felicidades! *`
      var separador = (Array(mensaje.length + 1).join("*")).toString().replace(',','');
      console.log(separador + '\n' + mensaje + '\n' + separador)
  }
}

log(participantes);
