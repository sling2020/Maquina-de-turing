var getData = function(){    
     var cadena = document.getElementById("cadena").value; 
     var palabra = new String(cadena);
     var resultado = '';
     if(!validar(cadena)){
        alert(" Solo se puede trabajar con los caracteres 'a' y 'b' y sin espacios."); 
    }
    else{
        var contador = 0;
        while(contador < palabra.length){
            if(palabra.charAt(contador) == 'a'){
                resultado = resultado + palabra.charAt(contador);
            }else{
                resultado = resultado + 'a';
            }
            contador++;
        }
        if(resultado != '')
            alert(resultado);
       
    } 
}
function validar(cadena){
    var palabra = new String(cadena);
    var i = 0;    
    while(i < palabra.length){
        if(palabra[i] != 'a' && palabra[i] != 'b'){
            return false;
        }
        i++;
    }
    return true;
}

