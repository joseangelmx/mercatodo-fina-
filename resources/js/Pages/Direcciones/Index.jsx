import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const { direcciones } = usePage().props

    function destroy(e) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("direcciones.destroy", e.currentTarget.id));
        }
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Direcciones</h2>}
        >
            <Head title="Direcciones" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={ route("direcciones.create") }
                                >
                                    Crear Direcciones
                                </Link>
                            </div>

                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">

                                        <th className="px-4 py-2">Calle</th>
                                        <th className="px-4 py-2">Numero</th>
                                        <th className="px-4 py-2">Colonia</th>
                                        <th className="px-4 py-2">CP</th>
                                        <th className="px-4 py-2">Ciudad</th>
                                        <th className="px-4 py-2">Estado</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {direcciones.map(({ id, calle, numero, colonia, cp, ciudad,estado,usuario_d }) => (
                                        <tr>

                                            <td className="border px-4 py-2">{ calle }</td>
                                            <td className="border px-4 py-2">{ numero }</td>
                                            <td className="border px-4 py-2">{ colonia }</td>
                                            <td className="border px-4 py-2">{ cp }</td>
                                            <td className="border px-4 py-2">{ ciudad }</td>
                                            <td className="border px-4 py-2">{ estado }</td>

                                            <td className="border px-4 py-2">
                                                <Link
                                                    tabIndex="1"
                                                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                    href={route("direcciones.edit", id)}
                                                >
                                                    Editar
                                                </Link>
                                                <button
                                                    onClick={destroy}
                                                    id={id}
                                                    tabIndex="-1"
                                                    type="button"
                                                    className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                >
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}

                                    {direcciones.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No se han registrado direcciones.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
