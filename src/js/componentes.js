import '../css/componentes.css';
//import sofifoto from '../assets/img/sofi.jpeg';  // no me esta funcionando la foto de mi sofi, quiza por la extencion que es jpeg
//import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre) => {
    console.log('creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}!`;

    document.body.append(h1);

    // img
    //console.log(webpacklogo);
    //const img = document.createElement('img');
    //img.src = webpacklogo;
    //const img1 = document.createElement('img');
    //img1.src = sofifoto;

    //document.body.append(img);
}