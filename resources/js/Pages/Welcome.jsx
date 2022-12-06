import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (

<div>
<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6" style={{backgroundColor:"#030d1f"}}>
  <div class="flex items-center flex-shrink-0 text-white mr-6">
  <Link href="/" >
                                <img src="/imagenes/logo.jpg" height="100px" width="160px"/>
                                </Link>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menú</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">

    </div>
    <div>
    <a href={route('login')} class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Iniciar sesión</a>&nbsp;&nbsp;&nbsp;
      <a href={route('register')} class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" >Registrarse</a>
    </div>
  </div>
</nav>
<div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200"><p class="titulo">¡Bienvenido! <br></br> ¡alwa' ulel! </p>
                        <br></br>
                        <p class="negritas">El lenguaje del arte, decora con estilo.
</p>
                        <br></br>
                        <p class="texto-normal">MercaTODO es una aplicación web de comercio electrónico por medio del cual se busca elevar ventas<br></br> así como también expresar la cultura, historia y la inspiración de los grandes artesanos<br></br> que se dedican a la labor de elaborar gran variedad de artículos que identifican a la Huasteca Potosina.
 </p>
<center><img src='/imagenes/artesanias.jpg'/></center>
<p class="texto-normal">
Además de elevar las ventas se intenta crear un impacto con la sociedad para dar a conocer la calidad y belleza de los productos ofertados, fomentando así la cultura del emprendimiento.
Así como también dar la oportunidad de que estos comerciantes puedan competir en el mercado, hacer crecer el negocio y obtener tanto como clientes y ganancias para  que contribuyan económicamente es sus hogares.

</p>
<center><img src='/imagenes/artesanias1.jpg'/></center>
                        </div>
                    </div>
                </div>
            </div>
</div>

    );
}
