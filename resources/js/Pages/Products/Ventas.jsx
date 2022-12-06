import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, useForm, usePage, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const { product} = usePage().props
    const { cards } =usePage().props
    const { direcciones } =usePage().props
    const { data, setData, errors, put } = useForm({
        usuario: props.auth.user.id,
        estado: "Adquirido",
        tarjeta:"",
        address:"",
        eventa:"Vendido",
    });
    function handleSubmit(e) {
        e.preventDefault();
        {product.map(({ id }) => (
        put(route("products.update", id))
        ))}
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products</h2>}
        >
            <Head title="Products" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={ route("products.index") }
                                >
                                    Volver
                                </Link>
                            </div>
                            {product.map(({ nombre,descripcion,precio,imagen }) => (
                            <div class="flex font-sans">
  <div class="flex-none w-48 relative">
    <img src={'/uploads/'+imagen} alt=""  style={{height:"300px",width:"500px"}} />
  </div>
  <form class="flex-auto p-6">

    <div class="flex flex-wrap">
      <h1 class="flex-auto text-lg font-semibold text-slate-900">
        {nombre}
      </h1>
      <div class="text-lg font-semibold text-neutral-900 text-3xl " >
        ${precio}
      </div>
      <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        {descripcion}
      </div>
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">

    </div>
    <div class="flex space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">

      </button>
    </div>
  </form>
</div>
 ))}

<form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-0">
                                        <input
                                            type="hidden"
                                            className="w-full rounded"
                                            label="usuario"
                                            name="usuario"
                                            errors={errors.usuario}
                                            value={props.auth.user.id}
                                            onChange={(e) =>
                                                setData("usuario", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.usuario}
                                        </span>
                                    </div>
                                    <div className="mb-0">

                                        <input
                                            type="hidden"
                                            className="w-full rounded"
                                            label="estado"
                                            name="estado"
                                            errors={errors.estado}
                                            value={"Adquirido"}
                                            onChange={(e) =>
                                                setData("estado", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.estado}
                                        </span>
                                    </div>
                                    <h1 class="negritas">Tarjetas Registradas</h1>
                                    <br/>
                                    <br/>
                                    <div className="mb-0">
                                    <div class="grid grid-cols-2 gap-4">
                            {cards.map(({ id, nombre_c, numero_c, vencimiento_c, cvv_c, usuario_c }) => (

            <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">

                <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png"/>
                <div class="w-full px-8 absolute top-8">
                <label><input type="radio"

                                            label="tarjeta"
                                            name="tarjeta"
                                            errors={errors.tarjeta}
                                            value={id}
                                            onChange={(e) =>
                                                setData("tarjeta", e.target.value)
                                            }/>
                    <div class="flex justify-between">
                        <div class="">
                            <p class="font-light">
                                Nombre
                            </p>
                            <p class="font-medium tracking-widest">
                                {nombre_c}
                            </p>
                        </div>
                        <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png"/>
                    </div>
                    <div class="pt-1">
                        <p class="font-light">
                        Numero de tarjeta
                        </p>
                        <p class="font-medium tracking-more-wider">
                            {numero_c}
                        </p>
                    </div>
                    <div class="pt-6 pr-6">
                        <div class="flex justify-between">

                            <div class="">
                                <p class="font-light text-xs text-xs">
                                    Expira en
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                    {vencimiento_c}
                                </p>
                            </div>

                            <div class="">
                                <p class="font-light text-xs">
                                    CVV
                                </p>
                                <p class="font-bold tracking-more-wider text-sm">
                                    {cvv_c}
                                </p>
                            </div>
                        </div>
                    </div>
                    </label>
                </div>

            </div>

            ))}
                            <center>
                              {cards.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                               <h1> No se han encontrado tarjetas.
                                               ¡Registra una nueva!  <br/>
                                                    </h1>



                                                <br/>
                                                <br/>
                                                <center>
                                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none center"
                                    href={ route("cards.create") }
                                >
                                    Registrar nueva tarjeta
                                </Link>
                                </center>
                                            </td>
                                        </tr>
                                    )}
                                    </center>
            </div>
                                    </div>
                                    <div className="mb-0">

                                        <input
                                            type="hidden"
                                            className="w-full rounded"
                                            label="tarjeta"
                                            name="tarjeta"
                                            errors={errors.tarjeta}
                                            value={data.tarjeta}
                                            onChange={(e) =>
                                                setData("tarjeta", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.tarjeta}
                                        </span>
                                    </div>
                                    <br/><br/><br/>
<h1 class="negritas">Dirección de envío</h1>
<div className="mb-0">
                                    <div class="grid grid-cols-3 gap-3 border-stone-700">
                            {direcciones.map(({ id,calle,numero,colonia,ciudad,estado,cp,usuario_d }) => (


                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                        &nbsp; &nbsp;         <label><input type="radio"

                                            label="address"
                                            name="address"
                                            errors={errors.address}
                                            value={id}
                                            onChange={(e) =>
                                                setData("address", e.target.value)
                                            }/>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">{calle+'  '+numero}</div>
                                <p class="text-gray-700 text-base">
                               {colonia}
                                </p>
                                <p class="text-red-700 text-base">{ciudad}</p>
                            </div>
                          <center>  <div class="px-6 pt-4 pb-2">
                            </div>
                            </center>
                            <br></br>
                            </label>
                            </div>

                            ))}
                            <center>
                              {direcciones.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                               <h1> No se han encontrado direcciones.
                                               ¡Registra una nueva!  <br/>
                                                    </h1>



                                                <br/>
                                                <br/>
                                                <center>
                                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none center"
                                    href={ route("direcciones.create") }
                                >
                                    Registrar nueva dirección
                                </Link>
                                </center>
                                            </td>
                                        </tr>
                                    )}
                                    </center>
                                    </div>
                                    </div>
                                    <div className="mb-0">

                                        <input
                                            type="hidden"
                                            className="w-full rounded"
                                            label="address"
                                            name="address"
                                            errors={errors.address}
                                            value={data.address}
                                            onChange={(e) =>
                                                setData("address", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.address}
                                        </span>
                                    </div>
                                    <div className="mb-0">

                                        <input
                                            type="hidden"
                                            className="w-full rounded"
                                            label="eventa"
                                            name="eventa"
                                            errors={errors.eventa}
                                            value={"Vendido"}
                                            onChange={(e) =>
                                                setData("eventa", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.eventa}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded w-full"
                                    >
                                        Comprar producto
                                    </button>
                                </div>
                            </form>
                                    {product.length === 0 && (
<p>NO HAY PRODUCTOS REGISTRADOS</p>
                                    )}
<div class="flex mx-auto items-center justify-center shadow-lg mt-56 mx-8 mb-4 w-full">
   <form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
      <div class="flex flex-wrap -mx-3 mb-6">
         <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
         <div class="w-full md:w-full px-3 mb-2 mt-2">
            <textarea class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
         </div>
         <div class="w-full md:w-full flex items-start md:w-full px-3">
            <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
               <svg fill="none" class="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
               </svg>
               <p class="text-xs md:text-sm pt-px">Some HTML is okay.</p>
            </div>
            <div class="-mr-1">
               <input type='submit' class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment'/>
            </div>
         </div>
         </div>
      </form>
   </div>
</div>
                        </div>
                    </div>
                </div>

        </Authenticated>
    );
}
