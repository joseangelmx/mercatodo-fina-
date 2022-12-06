import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const { data, setData, errors, post, progress } = useForm({
        nombre: "",
        descripcion: "",
        precio: "",
        usuario: 0,
        estado: "En venta",
        tarjeta:0,
        address:0,
        reporte: 0,
        eventa:"En venta",
        usuariov: props.auth.user.id,
        file: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("products.store"));

    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Vender Producto</h2>}
        >
            <Head title="Products" />

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
                                        <label className="">Nombre</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Nombre"
                                            name="nombre"
                                            value={data.nombre}
                                            onChange={(e) =>
                                                setData("nombre", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.nombre}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Descripcion</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="descripcion"
                                            name="descripcion"
                                            errors={errors.descripcion}
                                            value={data.descripcion}
                                            onChange={(e) =>
                                                setData("descripcion", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.descripcion}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Precio</label>
                                        <input
                                            type="number"
                                            className="w-full rounded"
                                            label="precio"
                                            name="precio"
                                            errors={errors.precio}
                                            value={data.precio}
                                            onChange={(e) =>
                                                setData("precio", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.precio}
                                        </span>
                                    </div>
                                    <div className="mb-0">

                                        <input
                                            type="hidden"
                                            className="w-full rounded"
                                            label="usuario"
                                            name="usuario"
                                            errors={errors.usuario}
                                            value={0}
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
                                            value={"En venta"}
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
                                            label="tarjeta"
                                            name="tarjeta"
                                            errors={errors.tarjeta}
                                            value={0}
                                            onChange={(e) =>
                                                setData("tarjeta", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.tarjeta}
                                        </span>
                                    </div>
                                    <div className="mb-0">

                                        <input
                                            type="hidden"
                                            className="w-full rounded"
                                            label="address"
                                            name="address"
                                            errors={errors.address}
                                            value={0}
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
                                            label="reporte"
                                            name="reporte"
                                            errors={errors.reporte}
                                            value={0}
                                            onChange={(e) =>
                                                setData("reporte", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.reporte}
                                        </span>
                                    </div>
                                    <div className="mb-0">

                                        <input
                                            type="hidden"
                                            className="w-full rounded"
                                            label="eventa"
                                            name="eventa"
                                            errors={errors.eventa}
                                            value={"En venta"}
                                            onChange={(e) =>
                                                setData("eventa", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.eventa}
                                        </span>
                                    </div>
                                    <div className="mb-0">

                                        <input
                                            type="hidden"
                                            className="w-full rounded"
                                            label="usuariov"
                                            name="usuariov"
                                            errors={errors.usuariov}
                                            value={props.auth.user.id}
                                            onChange={(e) =>
                                                setData("usuariov", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.usuariov}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Imagen del producto</label>
                                        <input
                                            type="file"
                                            className="w-full px-4 py-2"
                                            label="File"
                                            name="file"

                                            onChange={(e) =>
                                                setData("file", e.target.files[0])
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.file}
                                        </span>
                                    </div>
                                    {progress && (
                                  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" width={progress.percentage}> {progress.percentage}%</div>
                                  </div>
                                )}
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Vender producto
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
