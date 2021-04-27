
(()=>{
    
    const sumar = (a:number, b: number): number => a+b;

    const nombre = ():string => 'Hola Dilan';

    const obtenerSalario = ():Promise<string> => {
        return new Promise( (resolve, reject) => {
            resolve('Dilan');
        } );
    }

    obtenerSalario().then( a => console.log(a.toUpperCase()) )

})();



