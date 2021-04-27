
(function(){

    function getEdad(){
        return 100+100+300;
    }
    const nombre   = 'Dilan';
    const apellido = 'Urióstegui';
    const edad     = 23;

    // const slaida = nombre + apellido + edad;
    // const salida = nombre + " " + apellido + " (" + edad + ") ";
    
    const salida = `
    ${nombre} 
    ${apellido} 
    ( ${getEdad()} )`;
    
    //Dilan Urióstegui (Edad 23)

    console.log(salida);
    
})();



