import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const { cards } = usePage().props

    function destroy(e) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("cards.destroy", e.currentTarget.id));
        }
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cards</h2>}
        >
            <Head title="Cards" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={ route("cards.create") }
                                >
                                    Registrar una nueva tarjeta
                                </Link>
                            </div>

                            <div class="grid grid-cols-2 gap-4">
                            {cards.map(({ id, nombre_c, numero_c, vencimiento_c, cvv_c, usuario_c }) => (

            <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">

                <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png"/>
                <div class="w-full px-8 absolute top-8">
                <label><input type="radio" name="empleoactual" value="tiempocompleto"/>
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
        </div><br/><br/><br/>
        {cards.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No se encontraron tarjetas.
                                            </td>
                                        </tr>
                                    )}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
