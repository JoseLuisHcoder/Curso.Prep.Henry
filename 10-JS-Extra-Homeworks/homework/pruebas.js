function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    //Escribe tu código aquí
    console.log(s)
    var may = "";
    var min = "";
    for(var i=0 ; i<s.length; i++){
      if(s[i]===s[i].toUpperCase()){
          may=may + s[i];
      }else{
          min = min + s[i];
              }
          }   
    return (may + min);
      
    
  }