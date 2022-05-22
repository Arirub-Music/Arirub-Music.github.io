
onkeydown = e => {
  let tecla = e.which || e.keyCode;
  
  // Evaluar si se ha presionado la tecla Ctrl:
  if ( e.ctrlKey ) {
    // Evitar el comportamiento por defecto del nevagador:
    e.preventDefault();
    e.stopPropagation();
    
    // Mostrar el resultado de la combinación de las teclas:
    if ( tecla === 85 )
      console.log("Ha presionado las teclas Ctrl + U");
    
    if ( tecla === 83 )
      console.log("Ha presionado las teclas Ctrl + S");
  }
}

function desabilitar() {
// Combinacion de Teclas con el Control
if (event.ctrlKey) {
switch(window.event.keyCode) {
case 67: //Ctrl-C -- Copiar ---
case 86: //Ctrl-V -- Pegar ---
event.keyCode = 0;
return false;
}
}
}

// Click Derecho
/*function disableIE() {
    if (document.all) {
        return false;
    }
}
function disableNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which==2 || e.which==3) {
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = disableNS;
} 
else {
    document.onmouseup = disableNS;
    document.oncontextmenu = disableIE;
}
document.oncontextmenu=new Function("return false");*/
