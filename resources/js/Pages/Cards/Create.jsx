import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {

    const { data, setData, errors, post } = useForm({
        nombre_c: "",
        numero_c: "",
        vencimiento_c: "",
        cvv_c: "",
        usuario_c: props.auth.user.id,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("cards.store"));
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Registrar nueva tarjeta</h2>}
        >
            <Head title="Cards" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("products.index") }
                                >
                                    Volver
                                </Link>
                            </div>



                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                <div className="mb-4">
                                <span class="font-bold mb-3">Nombre del titular</span>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Nombre"
                                            name="nombre_c"
                                            value={data.nombre_c}
                                            onChange={(e) =>
                                                setData("nombre_c", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.nombre_c}
                                        </span>
                                    </div>
                                <label class="relative w-full flex flex-col">
    <span class="font-bold mb-3">Numero de tarjeta</span>
    <input class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                                                type="text"

                                                name="numero_c"
                                                errors={errors.numero_c}
                                                value={data.numero_c}
                                                onChange={(e) =>
                                                    setData("numero_c", e.target.value)
                                                }
    placeholder="0000 0000 0000 0000"
    pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"/>

    <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  </label>
  <small>Formato: xxxx xxxx xxxx xxxx</small>
  <label class="relative flex-1 flex flex-col">
    <span class="font-bold mb-3">Fecha de vencimiento</span>
    <input class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"

                                                name="vencimiento_c"
                                                errors={errors.vencimiento_c}
                                                value={data.vencimiento_c}
                                                onChange={(e) =>
                                                    setData("vencimiento_c", e.target.value)
                                                }
    placeholder="MM/YY"
    pattern="[0-9]{2}/[0-9]{2}" />
    <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  </label>
  <small>Formato: MM/YY</small>
  <label class="relative flex-1 flex flex-col">
    <span class="font-bold flex items-center gap-3 mb-3">
      CVC/CVV
      <span class="relative group">
        <span class="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white"> Hey ceci est une infobulle !</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
    </span>
    <input class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
    type="text" name="cvv_c"
    placeholder="&bull;&bull;&bull;"
    pattern="[0-9]{3}"
    errors={errors.cvv_c}
    onChange={(e) =>
        setData("cvv_c", e.target.value)
    }
/>
<span className="text-red-600">
    {errors.usuario_c}
</span>




    <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>

  </label>
  <small>Formato: xxx</small>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Guardar tarjeta
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
