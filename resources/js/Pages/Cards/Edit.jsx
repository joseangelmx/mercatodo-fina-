import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {

    const { card } = usePage().props;
    const { data, setData, put, errors } = useForm({
        nombre_c: card.nombre_c || "",
        numero_c: card.numero_c || "",
        vencimiento_c: card.vencimiento_c || "",
        cvv_c: card.cvv_c || "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("cards.update", card.id));
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Post</h2>}
        >
            <Head title="Cards" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("cards.index") }
                                >
                                    Back
                                </Link>
                            </div>

                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Nombre del Titular</label>
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
                                    <div className="mb-0">
                                        <label className="">Numero de tarjeta</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="numero_c"
                                            name="numero_c"
                                            errors={errors.numero_c}
                                            value={data.numero_c}
                                            onChange={(e) =>
                                                setData("numero_c", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.numero_c}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Vencimiento</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="vencimiento_c"
                                            name="vencimiento_c"
                                            errors={errors.vencimiento_c}
                                            value={data.vencimiento_c}
                                            onChange={(e) =>
                                                setData("vencimiento_c", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.vencimiento_c}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">CVV</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="cvv_c"
                                            name="cvv_c"
                                            errors={errors.cvv_c}
                                            value={data.cvv_c}
                                            onChange={(e) =>
                                                setData("cvv_c", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.cvv_c}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
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
