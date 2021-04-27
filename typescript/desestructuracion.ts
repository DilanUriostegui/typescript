
(()=>{

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan América',
        poder: 'Droga'
    }

    const extraer = (  {nombre,poder}: any ) => {

        //const { nombre, poder } = avenger;
        console.log( nombre );
        console.log( poder );

    }

    //extraer(avenger);


    const avengers: string[] = ['Thor','Iron man', 'Spiderman'];

    const [ , , arana ] = avengers;

    // console.log(loki);
    // console.log(hombre);
    //console.log(arana);

    const extraerArr = ( [thor, ironman, spiderman]:string[] ) => {
        console.log (thor);
        console.log (ironman);
        console.log (spiderman);
    }

    extraerArr ( avengers );
    
    
})();



