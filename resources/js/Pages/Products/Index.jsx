import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const { products } = usePage().props

    function destroy(e) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("products.destroy", e.currentTarget.id));
        }
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
                                    href={ route("products.create") }
                                >
                                    Vender producto
                                </Link>
                            </div>
                            <div class="grid grid-cols-4 gap-4 border-stone-700">
                            {products.map(({ id,nombre,descripcion,imagen,precio }) => (


                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                <img class="imagen"
                                height={"300px"}
                                src={'/uploads/'+imagen}
                                alt={imagen}
                                />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">{nombre}</div>
                                <p class="text-gray-700 text-base">
                               {descripcion}
                                </p>
                                <p class="text-red-700 text-base">${precio}</p>
                            </div>
                          <center>  <div class="px-6 pt-4 pb-2">
                            <Link
                                    className="bg-cyan-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    href={ 'http://localhost:8000/products/buy/'+(id)+'/'+(props.auth.user.id) }
                                >
                                    Comprar
                                </Link>

                            </div>
                            </center>
                            <br></br>
                            </div>

                            ))}
                            </div>

                                    {products.length === 0 && (
<p>NO HAY PRODUCTOS REGISTRADOS</p>
                                    )}

                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
