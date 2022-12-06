import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const { product} = usePage().props
    const { card } =usePage().props
    const { direccion } =usePage().props
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Confirmacion de compra</h2>}
        >
            <Head title="Compra" />
            <div className="flex items-center justify-center mb-6">
                <br/><br/><br/>
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={'http://localhost:8000/products'}
                                >
                                    Volver
                                </Link>
                            </div>
            {direccion.map(({ id,calle,cp,numero,colonia,ciudad }) => (
            <div>
            {card.map(({ numero_c}) => (
            <div>
            {product.map(({ nombre,descripcion,precio,imagen,estado }) => (
	<div class="max-w-md w-full h-full mx-auto z-10 bg-blue-900 rounded-3xl">
		<div class="flex flex-col">
			<div class="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
				<div class="flex-none sm:flex">
					<div class=" relative h-32 w-32   sm:mb-0 mb-3 hidden">
						<img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" w-32 h-32 object-cover rounded-2xl"/>
						<a href="#"
							class="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
								class="h-4 w-4">
								<path
									d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" >
								</path>
							</svg>
						</a>
					</div>
					<div class="flex-auto justify-evenly">
						<div class="flex items-center justify-between">
							<div class="flex items-center  my-1">
								<h2 class="font-medium">{nombre}</h2>
							</div>
							<div class="ml-auto text-blue-800">{props.auth.user.name}</div>
						</div>
						<div class="border-b border-dashed border-b-2 my-5"></div>
						<div class="flex items-center">
							<div class="flex flex-col">
								<div class="flex-auto text-xs text-gray-400 my-1">

								</div>
								<div class="w-full flex-none text-lg text-blue-800 font-bold leading-none">Estado</div>
                                <div class="font-semibold">{estado}</div>

							</div>
							<div class="flex flex-col mx-auto">
								<img src={'/uploads/'+imagen}  class="w-20 p-1"/>

								</div>
								<div class="flex flex-col ">
									<div class="flex-auto text-xs text-gray-400 my-1">

									</div>
									<div class="w-full flex-none text-lg text-blue-800 font-bold leading-none">Precio</div>
                                    <div class="font-semibold">${precio}</div>

								</div>
							</div>
							<div class="border-b border-dashed border-b-2 my-5 pt-5">
								<div class="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
								<div class="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
							</div>
							<div class="flex items-center mb-5 p-5 text-sm">
								<div class="flex flex-col">
									<span class="text-sm">Calle</span>
									<div class="font-semibold">{calle}</div>

								</div>
								<div class="flex flex-col ml-auto">
									<span class="text-sm">Numero</span>
									<div class="font-semibold">{numero}</div>

								</div>
							</div>
							<div class="flex items-center mb-4 px-5">
								<div class="flex flex-col text-sm">
									<span class="">Colonia</span>
									<div class="font-semibold">{colonia}</div>

								</div>
								<div class="flex flex-col mx-auto text-sm">
									<span class="">Código Postal</span>
									<div class="font-semibold">{cp}</div>

								</div>
								<div class="flex flex-col text-sm">
									<span class="">Ciudad</span>
									<div class="font-semibold">{ciudad}</div>

								</div>
							</div>
							<div class="border-b border-dashed border-b-2 my-5 pt-5">
								<div class="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
								<div class="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
							</div>
							<div class="flex items-center px-5 pt-3 text-sm">
								<div class="flex flex-col">
									<span class="">Tarjeta</span>
									<div class="font-semibold">MasterCard</div>

								</div>
								<div class="flex flex-col mx-auto">
									<span class=""> </span>
									<div class="font-semibold"></div>

								</div>
								<div class="flex flex-col">
									<span class="">Numero de tarjeta</span>
									<div class="font-semibold">{numero_c}</div>

								</div>
							</div>
							<div class="flex flex-col py-5  justify-center text-sm ">
								<h6 class="font-bold text-center">Comprobante original</h6>
<center>
                                	<div class="barcode h-14 w-0 inline-block mt-4 relative left-auto "></div>
                                    </center>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
 ))}
 </div>
 ))}
 </div>
 ))}



        </Authenticated>
    );
}
