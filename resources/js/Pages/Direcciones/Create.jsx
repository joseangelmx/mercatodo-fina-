import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {

    const { data, setData, errors, post } = useForm({
        calle:"",
        numero: "",
        colonia: "",
        cp: "",
        ciudad: "",
        estado: "",
        usuario_d: props.auth.user.id,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("direcciones.store"));
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Direcciones</h2>}
        >
            <Head title="Direcciones" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("direcciones.index") }
                                >
                                    Volver
                                </Link>
                            </div>

                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Calle</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="calle"
                                            name="calle"
                                            value={data.calle}
                                            onChange={(e) =>
                                                setData("calle", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.usuario_p}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Numero</label>
                                        <input
                                            type="text"
                                            className="w-full rounded"
                                            label="numero"
                                            name="numero"
                                            errors={errors.numero}
                                            value={data.numero}
                                            onChange={(e) =>
                                                setData("numero", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.numero}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Colonia</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="colonia"
                                            name="colonia"
                                            errors={errors.colonia}
                                            value={data.colonia}
                                            onChange={(e) =>
                                                setData("colonia", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.colonia}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">CP</label>
                                        <input
                                            type="text"
                                            className="w-full rounded"
                                            label="cp"
                                            name="cp"
                                            errors={errors.cp}
                                            value={data.cp}
                                            onChange={(e) =>
                                                setData("cp", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.cp}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Ciudad</label>
                                        <input
                                            type="text"
                                            className="w-full rounded"
                                            label="ciudad"
                                            name="ciudad"
                                            errors={errors.ciudad}
                                            value={data.ciudad}
                                            onChange={(e) =>
                                                setData("ciudad", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.ciudad}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Estado</label>
                                        <input
                                            type="text"
                                            className="w-full rounded"
                                            label="estado"
                                            name="estado"
                                            errors={errors.estado}
                                            value={data.estado}
                                            onChange={(e) =>
                                                setData("estado", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.estado}
                                        </span>
                                    </div>
                                    <div className="mb-0">

                                        <input
                                            type="hidden"
                                            className="w-full rounded"
                                            label="usuario_d"
                                            name="usuario_d"
                                            errors={errors.usuario_d}
                                            value={props.auth.user.id}
                                            onChange={(e) =>
                                                setData("usuario_d", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.usuario_d}
                                        </span>
                                    </div>

                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Guardar dirección
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
